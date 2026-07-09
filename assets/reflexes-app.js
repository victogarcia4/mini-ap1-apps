"use strict";

(function() {
  let eli5Mode = false;
  let currentTab = "arc";
  let simMode = "patellar"; // patellar vs withdrawal
  let activeCompIdx = 0;
  let selectedPatientIdx = 0;
  let patientStates = [
    { tested: false, diagnosed: false, userDiag: null },
    { tested: false, diagnosed: false, userDiag: null },
    { tested: false, diagnosed: false, userDiag: null }
  ];

  const infoBox = document.getElementById("infoBox");
  const eli5Toggle = document.getElementById("eli5Toggle");
  const modeLabel = document.getElementById("modeLabel");

  const SIDEBAR_TEXTS = {
    arc: "<b>The Reflex Arc Pathway:</b> The biological wiring of a reflex. It routes sensory warning information into the central nervous system and shoots command signals right back out to cause a quick movement — all in milliseconds, keeping tissue safe.",
    sim: "<b>Reflex Simulator:</b> See signals travel in real-time. The Patellar reflex is <i>monosynaptic</i> (one sensory-motor synapse, no interneuron), causing the quadriceps to contract. The Withdrawal reflex is <i>polysynaptic</i> (involves interneurons), pulling a limb away from danger.",
    exam: "<b>Clinical Diagnostics:</b> Doctors strike tendons with a rubber hammer to test if reflexes are healthy. Abnormal kicks reveal whether damage is in the spinal nerves (lower motor neurons) or the brain/spinal cord tracts (upper motor neurons)."
  };

  const REFLEX_COMPONENTS = [
    {
      title: "1 · Sensory Receptor",
      prof: "Anatomical structure that detects a physical stimulus (like stretch in muscle spindles, or heat/pain in nociceptors) and converts it into a graded electrical signal.",
      eli5: "The Warning Detector. A sensor in your knee muscle (tension tracker) or skin (heat detector) that feels a tap or pain and sets off the alarm."
    },
    {
      title: "2 · Sensory Neuron",
      prof: "Afferent nerve fiber that transmits the action potential impulse from the receptor, through the dorsal root and its ganglion, into the posterior horn of the spinal cord.",
      eli5: "The Inbound Wire. A nerve path that carries the warning message from the knee or skin straight into the back of your spinal cord."
    },
    {
      title: "3 · Integration Center",
      prof: "Synapses in the spinal cord gray matter. Can be direct (sensory-to-motor monosynaptic) or indirect (involving interneurons polysynaptic) where the signal is processed.",
      eli5: "The Quick Switchboard. The middle of your spinal cord where a split-second decision is made instantly, without waiting to ask the brain."
    },
    {
      title: "4 · Motor Neuron",
      prof: "Efferent nerve fiber that conducts motor command impulses from the anterior horn of the spinal cord, out through the ventral root, to the effector muscle.",
      eli5: "The Outbound Wire. A nerve path that shoots the 'MOVE NOW!' command out of the front of the spinal cord down to the muscle."
    },
    {
      title: "5 · Effector",
      prof: "The target muscle or gland (e.g. quadriceps femoris or hamstring muscles) that contracts in response to the motor nerve impulse to carry out the response.",
      eli5: "The Muscle Worker. The muscle that contracts immediately, causing your leg to kick out or your hand to pull back to keep you safe."
    }
  ];

  const PATIENTS = [
    {
      name: "Carlos R.",
      age: "24",
      history: "Routine physical exam. Competes in college athletics. No neurological complaints.",
      profHist: "Carlos is healthy and active. Testing patellar reflex to establish baseline reflex status.",
      eli5Hist: "Carlos is a healthy 24-year-old athlete. Testing his knee to check his normal baseline response.",
      type: "normal",
      correctDiag: "normal",
      reflexLabel: "Normal (Brisk kick, 2+ rating)",
      options: [
        { id: "hypo", label: "Hyporeflexia (LMN damage)", profF: "Incorrect. The femoral nerve and L2-L4 cord levels are fully functional, producing a brisk, healthy kick.", eli5F: "Nope! His knee reacts perfectly, meaning his spinal nerves are in great shape." },
        { id: "normal", label: "Normal Reflex (Healthy)", profF: "Correct! Carlos displays a normal patellar reflex (2+), indicating a healthy monosynaptic reflex arc across femoral nerve pathways.", eli5F: "Perfect! His leg kicks out normally. His reflex wiring is working great." },
        { id: "hyper", label: "Hyperreflexia (UMN damage)", profF: "Incorrect. The kick is healthy and controlled, without spasticity or repetitive clonus movements.", eli5F: "Incorrect. His leg kicks once cleanly, not an over-reactive spastic flutter." }
      ]
    },
    {
      name: "Maria L.",
      age: "52",
      history: "Recent severe lower back pain radiating down the left leg. Diminished skin sensation on left shin.",
      profHist: "Suspected herniated disc compressing the L4 spinal nerve root. Examining patellar tendon reflex.",
      eli5Hist: "Maria has lower back pain radiating down her leg. We suspect a pinched nerve near her L4 vertebra.",
      type: "hyporeflexia",
      correctDiag: "hypo",
      reflexLabel: "Hyporeflexia (Absent or sluggish kick, 0-1+ rating)",
      options: [
        { id: "hypo", label: "Hyporeflexia (LMN damage)", profF: "Correct! The compressed L4 root represents a Lower Motor Neuron (LMN) lesion, blocking sensory-motor transmission and abolishing the reflex.", eli5F: "Spot on! The pinched nerve in her back is blocking the signal from getting through, leading to no kick at all." },
        { id: "normal", label: "Normal Reflex (Healthy)", profF: "Incorrect. The leg barely moves or remains completely still during the test, representing abnormal hyporeflexia.", eli5F: "No, her leg didn't move. A healthy knee should kick out when tapped." },
        { id: "hyper", label: "Hyperreflexia (UMN damage)", profF: "Incorrect. Hyperreflexia would cause a spastic, exaggerated kick, not a diminished or absent response.", eli5F: "Nope, hyperreflexia makes the leg kick too much; Maria's leg doesn't kick at all." }
      ]
    },
    {
      name: "Samuel T.",
      age: "37",
      history: "Recovering from a traumatic thoracic spine injury sustained in a motor vehicle accident 6 months ago.",
      profHist: "Spinal cord contusion at T8 level. Lower limbs display signs of spasticity and increased muscle tone.",
      eli5Hist: "Samuel had a severe back injury that damaged his spinal cord at the chest level. His legs feel stiff.",
      type: "hyperreflexia",
      correctDiag: "hyper",
      reflexLabel: "Hyperreflexia (Exaggerated spastic kick with clonus, 4+ rating)",
      options: [
        { id: "hypo", label: "Hyporeflexia (LMN damage)", profF: "Incorrect. Lower motor neuron damage causes weak/absent reflexes. Samuel has an overactive spastic response.", eli5F: "Incorrect. Weak reflexes don't kick, but Samuel's leg kicks multiple times like a spring." },
        { id: "normal", label: "Normal Reflex (Healthy)", profF: "Incorrect. A healthy response is a single moderate kick. Samuel's response is highly exaggerated and repetitive.", eli5F: "No, that's way too much movement for a normal reflex tap." },
        { id: "hyper", label: "Hyperreflexia (UMN damage)", profF: "Correct! Damage to Upper Motor Neurons in the spinal cord removes the brain's inhibitory damping signals, resulting in exaggerated reflexes.", eli5F: "Exactly! Because the spinal cord is damaged above his lower back, the brain can't send 'calm down' signals, leaving the knee reflex hyperactive." }
      ]
    }
  ];

  /* ------------------- INTERACTION & NAVIGATION ------------------- */
  if (eli5Toggle) {
    eli5Toggle.addEventListener("change", () => {
      eli5Mode = eli5Toggle.checked;
      modeLabel.textContent = eli5Mode ? "ELI5 (Simple)" : "Professional";
      updateTexts();
    });
  }

  window.switchTab = function(tabId, btn) {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    
    btn.classList.add("active");
    document.getElementById(tabId).classList.add("active");
    currentTab = tabId;

    if (infoBox) infoBox.innerHTML = SIDEBAR_TEXTS[tabId];

    if (tabId === "arc") {
      document.getElementById("aside-components").style.display = "block";
      selectComponent(activeCompIdx);
    } else {
      document.getElementById("aside-components").style.display = "none";
    }

    if (tabId === "sim") {
      resetSimAnimation();
    }

    if (tabId === "exam") {
      selectPatient(selectedPatientIdx);
    }
  };

  function updateTexts() {
    if (infoBox) infoBox.innerHTML = SIDEBAR_TEXTS[currentTab];
    renderComponentList();
    selectComponent(activeCompIdx);
    updateSimDescription();
    renderPatientData();
  }

  /* ------------------- TAB 1: REFLEX ARC COMPONENTS ------------------- */
  function renderComponentList() {
    const container = document.getElementById("components-list");
    if (!container) return;
    container.innerHTML = "";
    REFLEX_COMPONENTS.forEach((comp, idx) => {
      const item = document.createElement("div");
      item.className = `component-item ${idx === activeCompIdx ? 'active' : ''}`;
      item.onclick = () => selectComponent(idx);
      item.innerHTML = `
        <div class="comp-badge">${idx + 1}</div>
        <div class="comp-details">
          <h4>${comp.title}</h4>
          <p>${eli5Mode ? comp.eli5 : comp.prof}</p>
        </div>
      `;
      container.appendChild(item);
    });
  }

  function selectComponent(idx) {
    activeCompIdx = idx;
    const items = document.querySelectorAll(".component-item");
    items.forEach((item, i) => {
      if (i === idx) item.classList.add("active");
      else item.classList.remove("active");
    });

    const comp = REFLEX_COMPONENTS[idx];
    const titleEl = document.getElementById("arcTitle");
    const descEl = document.getElementById("arcDesc");
    if (titleEl) titleEl.textContent = comp.title;
    if (descEl) descEl.textContent = eli5Mode ? comp.eli5 : comp.prof;

    const refCap = document.getElementById("arcRefCaption");
    if (!refCap) return;

    if (idx === 0) {
      refCap.innerHTML = eli5Mode 
        ? "<b>Receptor:</b> The nerve endpoints that feel the hit or the pain first." 
        : "<b>Sensory Receptor:</b> Detects stimulus (stretch in muscle spindles or pain in cutaneous nociceptors).";
    } else if (idx === 1) {
      refCap.innerHTML = eli5Mode 
        ? "<b>Sensory Neuron:</b> Carries the warning message along the blue nerve pathway into the dorsal horn." 
        : "<b>Sensory Neuron:</b> Afferent pathway carrying action potentials via dorsal root ganglion into the dorsal horn.";
    } else if (idx === 2) {
      refCap.innerHTML = eli5Mode 
        ? "<b>Integration Center:</b> The local decision maker in the spine gray matter butterfly." 
        : "<b>Integration Center:</b> Monosynaptic junction (patellar) or interneuron synapse (withdrawal) in spinal gray matter.";
    } else if (idx === 3) {
      refCap.innerHTML = eli5Mode 
        ? "<b>Motor Neuron:</b> Shoots the action command out along the red pathway to the muscle." 
        : "<b>Motor Neuron:</b> Efferent pathway carrying contractions commands out of the ventral root to muscles.";
    } else if (idx === 4) {
      refCap.innerHTML = eli5Mode 
        ? "<b>Effector:</b> The muscle (quads or arm flexors) that contracts to kick the leg or pull the arm back." 
        : "<b>Effector:</b> Muscle or gland (skeletal muscle) executing the reflex movement.";
    }
  }

  /* ------------------- TAB 2: REFLEX SIMULATOR ------------------- */
  window.setSimMode = function(mode) {
    simMode = mode;
    document.getElementById("simMode-patellar").classList.toggle("active", mode === "patellar");
    document.getElementById("simMode-withdrawal").classList.toggle("active", mode === "withdrawal");
    
    document.getElementById("legCanvas").style.display = mode === "patellar" ? "flex" : "none";
    document.getElementById("withdrawalCanvas").style.display = mode === "withdrawal" ? "flex" : "none";

    resetSimAnimation();
    updateSimDescription();
  };

  function updateSimDescription() {
    const status = document.getElementById("simStatus");
    const desc = document.getElementById("simDesc");
    if (!status || !desc) return;

    if (simMode === "patellar") {
      status.textContent = "Knee Tap Reflex (Stretch Reflex)";
      desc.textContent = eli5Mode
        ? "Tap the red tendon spot on the knee. The signal travels up the inbound blue line, connects directly to the outbound red line in the spine, and causes a quick muscle kick."
        : "Strike the patellar tendon. The sensory signal travels via the femoral nerve to the spinal cord, synapses monosynaptically with the motor neuron, and stimulates quadriceps contraction.";
    } else {
      status.textContent = "Withdrawal Reflex (Flexor Reflex)";
      desc.textContent = eli5Mode
        ? "Tap the red fingertip spot to touch the hot flame. The warning signal travels up the blue line, crosses a green connector node in the spine, and triggers a quick arm retraction."
        : "Touch the hot candle flame. Cutaneous pain nociceptors send impulses via afferent fibers, cross a polysynaptic interneuron, and exit to trigger flexor muscle contraction.";
    }
  }

  function resetSimAnimation() {
    const dot = document.getElementById("impulseDot");
    if (dot) dot.style.opacity = "0";
    
    const hammer = document.getElementById("reflexHammer");
    if (hammer) {
      hammer.style.opacity = "0";
      hammer.style.transform = "translate(0, 0) rotate(0deg)";
    }

    const leg = document.getElementById("lowerLeg");
    if (leg) leg.style.transform = "rotate(0deg)";

    const arm = document.getElementById("handArm");
    if (arm) arm.style.transform = "translateX(0px)";
  }

  window.triggerReflexAnimation = function() {
    resetSimAnimation();
    
    if (simMode === "patellar") {
      const hammer = document.getElementById("reflexHammer");
      if (hammer) {
        hammer.style.opacity = "1";
        hammer.style.transform = "translate(55px, 20px) rotate(-45deg)";
      }

      setTimeout(() => {
        if (hammer) hammer.style.transform = "translate(55px, 20px) rotate(-20deg)";
        
        const sensoryPath = document.getElementById("p-sensory");
        const motorPath = document.getElementById("p-motor");
        
        animateImpulse(sensoryPath, motorPath, () => {
          const leg = document.getElementById("lowerLeg");
          if (leg) {
            leg.style.transform = "rotate(30deg)";
            setTimeout(() => {
              leg.style.transform = "rotate(0deg)";
            }, 300);
          }
        });
      }, 300);

    } else {
      const arm = document.getElementById("handArm");
      if (arm) arm.style.transform = "translateX(40px)";

      setTimeout(() => {
        const sensoryPath = document.getElementById("w-sensory");
        const motorPath = document.getElementById("w-motor");
        
        animateImpulse(sensoryPath, motorPath, () => {
          if (arm) {
            arm.style.transform = "translateX(-40px)";
            setTimeout(() => {
              arm.style.transform = "translateX(0px)";
            }, 600);
          }
        });
      }, 450);
    }
  };

  function animateImpulse(sensoryPath, motorPath, callback) {
    const dot = document.getElementById("impulseDot");
    if (!dot) { callback(); return; }
    dot.style.opacity = "1";

    const totalLength1 = sensoryPath.getTotalLength();
    const totalLength2 = motorPath.getTotalLength();
    
    let start = null;
    const duration = 500; // ms

    function step1(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const ratio = Math.min(progress / duration, 1);
      const point = sensoryPath.getPointAtLength(ratio * totalLength1);
      dot.setAttribute("cx", point.x);
      dot.setAttribute("cy", point.y);

      if (ratio < 1) {
        requestAnimationFrame(step1);
      } else {
        setTimeout(() => {
          start = null;
          requestAnimationFrame(step2);
        }, 100);
      }
    }

    function step2(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const ratio = Math.min(progress / duration, 1);
      const point = motorPath.getPointAtLength(ratio * totalLength2);
      dot.setAttribute("cx", point.x);
      dot.setAttribute("cy", point.y);

      if (ratio < 1) {
        requestAnimationFrame(step2);
      } else {
        dot.style.opacity = "0";
        callback();
      }
    }

    requestAnimationFrame(step1);
  }

  /* ------------------- TAB 3: CLINICAL EXAM ------------------- */
  window.selectPatient = function(idx) {
    selectedPatientIdx = idx;
    for (let i = 0; i < 3; i++) {
      const tab = document.getElementById(`ptab-${i}`);
      if (tab) tab.classList.toggle("active", i === idx);
    }
    
    const pLeg = document.getElementById("patientLeg");
    if (pLeg) pLeg.style.transform = "rotate(0deg)";
    
    const fb = document.getElementById("examFeedback");
    if (fb) fb.style.display = "none";

    renderPatientData();
  };

  function renderPatientData() {
    const patient = PATIENTS[selectedPatientIdx];
    const state = patientStates[selectedPatientIdx];

    const info = document.getElementById("patientInfo");
    if (info) {
      info.innerHTML = `
        <div class="patient-header">
          <span class="patient-name">${patient.name}</span>
          <span class="patient-vitals">Age: ${patient.age} · Reflex Exam: Patellar Tendon</span>
        </div>
        <p style="font-size: 0.8rem; margin: 0 0 8px;"><b>History:</b> ${patient.history}</p>
        <p style="font-size: 0.8rem; margin: 0; color: var(--slate-600);">
          <b>Presentation:</b> ${eli5Mode ? patient.eli5Hist : patient.profHist}
        </p>
      `;
    }

    const optionsContainer = document.getElementById("diagOptions");
    if (optionsContainer) {
      optionsContainer.innerHTML = "";
      patient.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "diag-option";
        if (state.diagnosed && state.userDiag === opt.id) {
          btn.className += opt.id === patient.correctDiag ? " correct-choice" : " wrong-choice";
        }
        btn.textContent = opt.label;
        btn.onclick = () => diagnosePatient(opt.id, btn);
        optionsContainer.appendChild(btn);
      });
    }
  }

  window.tapPatientKnee = function() {
    const patient = PATIENTS[selectedPatientIdx];
    const leg = document.getElementById("patientLeg");
    if (!leg) return;
    patientStates[selectedPatientIdx].tested = true;

    if (patient.type === "normal") {
      leg.style.transform = "rotate(30deg)";
      setTimeout(() => leg.style.transform = "rotate(0deg)", 250);
    } else if (patient.type === "hyporeflexia") {
      leg.style.transform = "rotate(4deg)";
      setTimeout(() => leg.style.transform = "rotate(0deg)", 250);
    } else if (patient.type === "hyperreflexia") {
      leg.style.transform = "rotate(45deg)";
      setTimeout(() => {
        leg.style.transform = "rotate(15deg)";
        setTimeout(() => {
          leg.style.transform = "rotate(35deg)";
          setTimeout(() => {
            leg.style.transform = "rotate(10deg)";
            setTimeout(() => {
              leg.style.transform = "rotate(0deg)";
            }, 150);
          }, 150);
        }, 150);
      }, 150);
    }
  };

  function diagnosePatient(choiceId, btnEl) {
    const patient = PATIENTS[selectedPatientIdx];
    const state = patientStates[selectedPatientIdx];

    if (!state.tested) {
      alert("Please tap the patient's knee with the hammer first!");
      return;
    }
    if (state.diagnosed) return;

    state.diagnosed = true;
    state.userDiag = choiceId;

    const isCorrect = choiceId === patient.correctDiag;
    const optData = patient.options.find(o => o.id === choiceId);

    const feedback = document.getElementById("examFeedback");
    if (feedback) {
      feedback.style.display = "block";
      feedback.className = `info-box ${isCorrect ? 'ok' : 'no'}`;
      feedback.style.background = isCorrect ? "var(--green-100)" : "var(--red-100)";
      feedback.style.borderColor = isCorrect ? "var(--green-600)" : "var(--red-600)";
      feedback.innerHTML = `
        <b>${isCorrect ? "✓ Correct Diagnosis" : "✗ Incorrect Diagnosis"}</b><br>
        ${optData ? (eli5Mode ? optData.eli5F : optData.profF) : ""}
      `;
    }

    if (window.APTools) {
      APTools.recordAnswer("reflexes", isCorrect, { xp: isCorrect ? 25 : 5, questionId: `exam-${patient.name}` });
    }
    
    renderPatientData();
  }

  // Init
  updateTexts();
  setSimMode("patellar");
})();
