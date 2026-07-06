/* =============================================================================
   APTools — shared learning engine for the A&P I interactive apps
   Zero dependencies. Works from file:// (double-click) or a web server.

   What it provides to every module:
     - APTools.progress          persistent per-module mastery (localStorage)
     - APTools.mountQuiz(...)     a scored, spaced-repetition quiz with feedback
     - APTools.mountHUD(...)      a small score/streak/mastery header widget
     - APTools.exportSummary()    a screenshot-friendly results card (for credit)

   A module registers itself once:
     APTools.init({ id:"homeostasis", title:"Homeostasis & Feedback", unit:"Unit 2" });
   ========================================================================== */
(function (global) {
  "use strict";

  var STORE_KEY = "apstudio.v1";
  var registry = {};      // id -> {id,title,unit}
  var current = null;     // id of the module that called init()

  /* ---------- persistence ---------------------------------------------- */
  function loadAll() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveAll(obj) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(obj)); } catch (e) {}
  }
  function blankRecord() {
    return {
      seen: 0, correct: 0, streakBest: 0,
      mastery: 0,               // 0..100, smoothed
      xp: 0,
      box: {},                  // questionId -> Leitner box (1..5)
      lastVisit: null
    };
  }
  function record(id) {
    var all = loadAll();
    if (!all[id]) all[id] = blankRecord();
    return all[id];
  }
  function commit(id, rec) {
    var all = loadAll();
    rec.lastVisit = Date.now();
    all[id] = rec;
    saveAll(all);
    fire("progress", { id: id, record: rec });
  }

  /* ---------- tiny event bus ------------------------------------------- */
  var listeners = {};
  function on(evt, fn) { (listeners[evt] = listeners[evt] || []).push(fn); }
  function fire(evt, data) { (listeners[evt] || []).forEach(function (fn) { fn(data); }); }

  /* ---------- public: init & progress ---------------------------------- */
  function init(meta) {
    if (!meta || !meta.id) throw new Error("APTools.init needs an id");
    registry[meta.id] = meta;
    current = meta.id;
    var rec = record(meta.id);
    commit(meta.id, rec);       // stamp lastVisit
    return rec;
  }

  var progress = {
    get: function (id) { return record(id || current); },
    all: loadAll,
    reset: function (id) {
      var all = loadAll();
      if (id) delete all[id]; else all = {};
      saveAll(all);
      fire("progress", { id: id, record: null });
    }
  };

  /* ---------- spaced repetition (Leitner) ------------------------------ */
  // Lower box = seen less / missed more -> higher priority. New questions first.
  function orderQuestions(bank, rec) {
    return bank.slice().sort(function (a, b) {
      var ba = rec.box[a.id] || 0, bb = rec.box[b.id] || 0;
      return ba - bb;
    });
  }

  /* ---------- helpers --------------------------------------------------- */
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* ---------- public: mountQuiz ---------------------------------------- */
  /* options: { container, moduleId, bank:[{id,q,choices:[],answer:index,why,outcome,bloom}],
               length (default 8) }                                         */
  function mountQuiz(opts) {
    var host = typeof opts.container === "string"
      ? document.querySelector(opts.container) : opts.container;
    if (!host) return;
    var moduleId = opts.moduleId || current;
    var rec = record(moduleId);
    var wantLen = opts.length || Math.min(8, opts.bank.length);

    var session = { i: 0, score: 0, streak: 0, streakBest: 0, answered: false, queue: [] };
    session.queue = orderQuestions(opts.bank, rec).slice(0, wantLen);

    host.classList.add("ap-quiz");
    render();

    function render() {
      host.innerHTML = "";
      if (session.i >= session.queue.length) return finish();

      var qObj = session.queue[session.i];
      var progressPct = Math.round((session.i / session.queue.length) * 100);

      var top = el("div", "ap-quiz-top");
      top.appendChild(el("div", "ap-quiz-count",
        "Question " + (session.i + 1) + " / " + session.queue.length));
      var meter = el("div", "ap-quiz-meter");
      var fill = el("div", "ap-quiz-meter-fill"); fill.style.width = progressPct + "%";
      meter.appendChild(fill);
      top.appendChild(meter);
      var badges = el("div", "ap-quiz-badges",
        (qObj.bloom ? '<span class="ap-tag">' + qObj.bloom + "</span>" : "") +
        '<span class="ap-tag streak">🔥 ' + session.streak + "</span>");
      top.appendChild(badges);
      host.appendChild(top);

      host.appendChild(el("div", "ap-quiz-q", qObj.q));

      var choices = el("div", "ap-quiz-choices");
      var order = qObj.shuffle === false
        ? qObj.choices.map(function (c, i) { return i; })
        : shuffle(qObj.choices.map(function (c, i) { return i; }));
      order.forEach(function (origIdx) {
        var b = el("button", "ap-choice", qObj.choices[origIdx]);
        b.type = "button";
        b.dataset.idx = origIdx;
        b.addEventListener("click", function () { choose(qObj, origIdx, b, choices); });
        choices.appendChild(b);
      });
      host.appendChild(choices);

      var fb = el("div", "ap-quiz-feedback"); fb.style.display = "none";
      host.appendChild(fb);
    }

    function choose(qObj, idx, btn, choicesEl) {
      if (session.answered) return;
      session.answered = true;
      var correct = idx === qObj.answer;

      Array.prototype.forEach.call(choicesEl.children, function (c) {
        c.disabled = true;
        if (+c.dataset.idx === qObj.answer) c.classList.add("correct");
      });
      if (!correct) btn.classList.add("wrong");

      // update Leitner box + tallies
      var box = rec.box[qObj.id] || 1;
      rec.box[qObj.id] = correct ? Math.min(5, box + 1) : 1;
      rec.seen++;
      if (correct) {
        rec.correct++; rec.xp += 10 + session.streak * 2;
        session.score++; session.streak++;
        session.streakBest = Math.max(session.streakBest, session.streak);
      } else {
        session.streak = 0;
      }
      // smoothed mastery: exponential moving average of correctness
      rec.mastery = Math.round(rec.mastery * 0.75 + (correct ? 100 : 0) * 0.25);
      rec.streakBest = Math.max(rec.streakBest, session.streakBest);
      commit(moduleId, rec);

      var fb = host.querySelector(".ap-quiz-feedback");
      fb.style.display = "";
      fb.className = "ap-quiz-feedback " + (correct ? "ok" : "no");
      fb.innerHTML =
        '<div class="ap-fb-head">' + (correct ? "✓ Correct" : "✗ Not quite") + "</div>" +
        '<div class="ap-fb-why">' + (qObj.why || "") + "</div>" +
        (qObj.outcome ? '<div class="ap-fb-outcome">Outcome: ' + qObj.outcome + "</div>" : "") +
        '<button type="button" class="ap-next">' +
        (session.i + 1 >= session.queue.length ? "See results →" : "Next question →") +
        "</button>";
      fb.querySelector(".ap-next").addEventListener("click", function () {
        session.i++; session.answered = false; render();
      });
      fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    function finish() {
      var pct = Math.round((session.score / session.queue.length) * 100);
      var msg = pct >= 90 ? "Outstanding — you own this concept."
        : pct >= 70 ? "Solid. Review the misses and run it again."
        : pct >= 50 ? "Getting there. Missed items will resurface first next time."
        : "Keep going — repetition is doing its job.";
      host.innerHTML =
        '<div class="ap-result">' +
        '<div class="ap-result-score">' + session.score + " / " + session.queue.length + "</div>" +
        '<div class="ap-result-pct">' + pct + "%</div>" +
        '<div class="ap-result-msg">' + msg + "</div>" +
        '<div class="ap-result-sub">Best streak this round: ' + session.streakBest +
        " · Module mastery now " + rec.mastery + "%</div>" +
        '<div class="ap-result-btns">' +
        '<button type="button" class="ap-again">↺ Play again</button>' +
        '<button type="button" class="ap-export">⤓ Save results card</button>' +
        "</div></div>";
      host.querySelector(".ap-again").addEventListener("click", function () {
        session.i = 0; session.score = 0; session.streak = 0; session.streakBest = 0;
        session.answered = false;
        rec = record(moduleId);
        session.queue = orderQuestions(opts.bank, rec).slice(0, wantLen);
        render();
      });
      host.querySelector(".ap-export").addEventListener("click", function () {
        exportSummary(moduleId);
      });
      fire("quizComplete", { id: moduleId, score: session.score, total: session.queue.length });
    }

    return { restart: function () { session.i = 0; render(); } };
  }

  /* ---------- public: recordAnswer -------------------------------------
     For apps that run their OWN scoring (games, simulators) and just want
     to feed correct/incorrect events into the shared progress store so the
     hub mastery bars + HUD update. opts: { xp, streak, questionId }.       */
  function recordAnswer(moduleId, correct, opts) {
    moduleId = moduleId || current;
    opts = opts || {};
    var rec = record(moduleId);
    rec.seen++;
    if (correct) { rec.correct++; rec.xp += (opts.xp != null ? opts.xp : 10); }
    rec.mastery = Math.round(rec.mastery * 0.75 + (correct ? 100 : 0) * 0.25);
    if (typeof opts.streak === "number") rec.streakBest = Math.max(rec.streakBest, opts.streak);
    if (opts.questionId) {
      var box = rec.box[opts.questionId] || 1;
      rec.box[opts.questionId] = correct ? Math.min(5, box + 1) : 1;
    }
    commit(moduleId, rec);
    return rec;
  }

  /* ---------- public: mountHUD ----------------------------------------- */
  function mountHUD(container, moduleId) {
    var host = typeof container === "string" ? document.querySelector(container) : container;
    if (!host) return;
    moduleId = moduleId || current;
    function paint() {
      var r = record(moduleId);
      host.innerHTML =
        '<span class="ap-hud-item"><b>' + r.mastery + '%</b> mastery</span>' +
        '<span class="ap-hud-item"><b>' + r.xp + '</b> XP</span>' +
        '<span class="ap-hud-item"><b>' + r.correct + '/' + r.seen + '</b> correct</span>' +
        '<span class="ap-hud-item"><b>🔥 ' + r.streakBest + '</b> best</span>';
    }
    host.classList.add("ap-hud");
    paint();
    on("progress", function (d) { if (!d.id || d.id === moduleId) paint(); });
  }

  /* ---------- public: exportSummary (results card as PNG-ish) ---------- */
  function exportSummary(moduleId) {
    moduleId = moduleId || current;
    var meta = registry[moduleId] || { title: moduleId, unit: "" };
    var r = record(moduleId);
    var W = 900, H = 500;
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '">' +
      '<rect width="' + W + '" height="' + H + '" fill="#1B2A4A"/>' +
      '<rect x="30" y="30" width="' + (W - 60) + '" height="' + (H - 60) + '" rx="20" fill="#ffffff"/>' +
      '<text x="70" y="110" font-family="Segoe UI,sans-serif" font-size="20" fill="#5b6b86">' +
      esc(meta.unit) + ' · A&amp;P I Interactive</text>' +
      '<text x="70" y="160" font-family="Segoe UI,sans-serif" font-size="40" font-weight="700" fill="#1B2A4A">' +
      esc(meta.title) + '</text>' +
      metric(70, 260, r.mastery + "%", "Mastery") +
      metric(300, 260, r.correct + "/" + r.seen, "Correct answers") +
      metric(530, 260, r.xp + "", "XP earned") +
      metric(700, 260, r.streakBest + "", "Best streak") +
      '<text x="70" y="430" font-family="Segoe UI,sans-serif" font-size="16" fill="#5b6b86">' +
      'Generated ' + new Date().toLocaleDateString() + ' · ' + esc(userTag()) + '</text>' +
      '</svg>';
    var blob = new Blob([svg], { type: "image/svg+xml" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "AP-" + moduleId + "-results.svg";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);

    function metric(x, y, big, small) {
      return '<text x="' + x + '" y="' + y + '" font-family="Segoe UI,sans-serif" font-size="46" font-weight="800" fill="#1B7D46">' + esc(big) + '</text>' +
        '<text x="' + x + '" y="' + (y + 30) + '" font-family="Segoe UI,sans-serif" font-size="15" fill="#5b6b86">' + esc(small) + '</text>';
    }
  }
  function userTag() {
    try { return localStorage.getItem("apstudio.name") || "Student"; } catch (e) { return "Student"; }
  }
  function esc(s) {
    return String(s).replace(/[&<>]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c];
    });
  }

  /* ---------- export API ----------------------------------------------- */
  global.APTools = {
    init: init,
    progress: progress,
    mountQuiz: mountQuiz,
    recordAnswer: recordAnswer,
    mountHUD: mountHUD,
    exportSummary: exportSummary,
    on: on,
    registry: registry
  };
})(window);
