# 📖 A&P Active Learning Mini-Apps Handbook

Welcome to the **Anatomy & Physiology Active Learning Mini-Apps** development handbook. This guide outlines the project's architecture, design philosophy, deployment workflows, and current list of active modules.

---

## 🎨 Design Philosophy & Theme
All apps adhere to a **Riso-zine "notebook" aesthetic** designed to look like a physical student laboratory workbook. Key style tokens include:
- **Paper & Ink Base:** Soft cream paper background (`#FAF9F5` or `#F4F1E8`) and deep off-black ink (`#0F172A` or `#16150F`).
- **Accent Palettes:** High-contrast, curated colors for each chapter (e.g., `#0f766e` for joints, `#1d4ed8` for muscles) to help students mentally separate topics.
- **Double Borders & Shadows:** Strong dark borders (`2px solid #0f172a`) paired with offset flat shadows (e.g., `box-shadow: 4px 4px 0 #0f172a`) on buttons and panels.
- **Paper Textures:** Subtle radial gradients and noise masks representing textured paper grain.
- **ELI5 Toggle:** A hallmark user experience feature allowing students to dynamically switch between textbook-grade **Professional** terminology and simple, everyday **ELI5 (Explain Like I'm 5)** analogies.

---

## ⚙️ Core Architecture & Engine
The applications are built as lightweight static HTML pages running directly in the browser. They rely on a central engine:

1. **[aptools.css](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/assets/aptools.css):** Standardizes typography (Bricolage Grotesque and Hanken Grotesk from Google Fonts), utility components, progress bars, and quiz layouts.
2. **[aptools.js](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/assets/aptools.js):** The JavaScript core of the project. It:
   - Tracks student activity, total XP, and correct answer counts.
   - Calculates real-time **Mastery Levels** for each module.
   - Persists all progress locally in the browser's `localStorage` (so progress is saved across sessions without needing a database/login).
   - Exposes `APTools.init()`, `APTools.mountHUD()`, and `APTools.mountQuiz()` to easily build quizzes and track progress.

---

## 🗺️ Current Module Registry (32 Apps)

The mini-apps are organized sequentially, corresponding to the A&P I course curriculum. Here is the list of apps built so far:

### Chapter 1: Introduction to Anatomy & Physiology
- **App 1.1:** [Anatomical Regions, Planes & Terms](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/1.%20Anatomical%20Regions%20Interactive.html) (`1. Anatomical Regions Interactive.html`)
- **App 1.2:** [Homeostasis & Feedback Loops](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/2.%20homeostasis-feedback-dashboard.html) (`2. homeostasis-feedback-dashboard.html`)

### Chapter 2: Chemistry
- **App 2.1:** [Atomic Structure Lab](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/9.%20atomic-structure-lab.html) (`9. atomic-structure-lab.html`)
- **App 2.2:** [Chemical Bonding Lab](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/10.%20chemical-bonding-lab.html) (`10. chemical-bonding-lab.html`)
- **App 2.3:** [Solutions, Acids & Bases](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/11.%20inorganic-solutions-ph.html) (`11. inorganic-solutions-ph.html`)

### Chapter 3: Cells
- **App 3.1:** [Membrane Transport](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/3.%20membrane-transport-dashboard.html) (`3. membrane-transport-dashboard.html`)
- **App 3.2:** [Resting Membrane Potential](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/4.%20resting-membrane-potential.html) (`4. resting-membrane-potential.html`)
- **App 3.3:** [Tonicity & Osmosis](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/5.%20tonicity-osmosis-dashboard.html) (`5. tonicity-osmosis-dashboard.html`)
- **App 3.4:** [Cell Division & Signaling Dashboard](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/6.1.2%20cell_division_signaling_dashboard.html) (`6.1.2 cell_division_signaling_dashboard.html`)
- **App 3.5:** [Cell Division Command (Game)](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/6.1.%20cell_division_command.html) (`6.1. cell_division_command.html`)

### Chapter 4: Metabolism
- **App 4.1:** [Organic Compounds & Energy](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/16.%20organic-compounds-dashboard.html) (`16. organic-compounds-dashboard.html`)

### Chapter 5: Tissues
- **App 5.1:** [Epithelial Tissue Explorer](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/7.%20interactive_epithelial_tissue_dashboard.html) (`7. interactive_epithelial_tissue_dashboard.html`)
- **App 5.2:** [The Tissue Architect (Build)](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/7.1.%20the_tissue_architect.html) (`7.1. the_tissue_architect.html`)
- **App 5.3:** [Virtual Microscope — Tissue Diagnostic](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/7.2.1%20virtual-microscope-tissue-diagnostic.html) (`7.2.1 virtual-microscope-tissue-diagnostic.html`)

### Chapter 6: Integumentary System
- **App 6.1:** [Wound Healing Dashboard](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/8.%20wound-healing-dashboard.html) (`8. wound-healing-dashboard.html`)

### Chapter 7: Skeletal System — Bones
- **App 7.1:** [The Micro-Matrix (Histology)](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/12.%20micro-matrix-bone-histology.html) (`12. micro-matrix-bone-histology.html`)
- **App 7.2:** [The Long Bone Architect](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/13.%20long-bone-architect.html) (`13. long-bone-architect.html`)
- **App 7.3:** [The Remodeling Lab (Calcium)](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/14.%20remodeling-lab-calcium.html) (`14. remodeling-lab-calcium.html`)
- **App 7.4:** [The Skeletal Assembler](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/15.%20skeletal-assembler.html) (`15. skeletal-assembler.html`)

### Chapter 8: Skeletal System — Joints
- **App 8.1:** [The Skeletal Joints Explorer](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/17.%20skeletal-joints-explorer.html) (`17. skeletal-joints-explorer.html`)

### Chapter 9: Muscular System *(In Progress)*
- **App 9.1:** [Skeletal Muscle Structure Explorer](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/18.%20muscle-structure-explorer.html) (`18. muscle-structure-explorer.html`) *(Active)*
- **App 9.2:** [Muscle Contraction Lab](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/19.%20contraction-coupling-lab.html) (`19. contraction-coupling-lab.html`) *(Active)*
- **App 9.3:** [Muscular Responses Lab](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/20.%20muscular-responses-lab.html) (`20. muscular-responses-lab.html`) *(Active)*
- **App 9.4:** [Smooth & Cardiac Muscle Lab](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/21.%20smooth-cardiac-muscle-lab.html) (`21. smooth-cardiac-muscle-lab.html`) *(Active)*
- **App 9.5:** [Muscle Mechanics & Actions Lab](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/22.%20muscle-mechanics-actions-lab.html) (`22. muscle-mechanics-actions-lab.html`) *(Active)*

### Chapter 10: Nervous System — Part I *(In Progress)*
- **App 10.1:** [CNS vs. PNS: Organization & Function](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/23.%20cns-pns-organization-lab.html) (`23. cns-pns-organization-lab.html`) *(Active)*
- **App 10.2:** [Protective Structures: Bone, Meninges & CSF](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/24.%20protective-structures-lab.html) (`24. protective-structures-lab.html`) *(Active)*
- **App 10.3:** [Neuron Structure & Classification](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/25.%20neuron-structure-classification-lab.html) (`25. neuron-structure-classification-lab.html`) *(Active)*
- **App 10.4:** [Neuroglial Cells](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/26.%20neuroglia-lab.html) (`26. neuroglia-lab.html`) *(Active)*
- **App 10.5:** [The Nerve Impulse: Membrane & Action Potentials](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/27.%20nerve-impulse-lab.html) (`27. nerve-impulse-lab.html`) *(Active)*

### Chapter 11: Nervous System — Part II *(In Progress)*
- **App 11.1:** [The Brain: Structure & Function](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/28.%20brain-organization-lab.html) (`28. brain-organization-lab.html`) *(Active)*
- **App 11.2:** [Cranial Nerves](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/29.%20cranial-nerves-lab.html) (`29. cranial-nerves-lab.html`) *(Active)*

---

## 🛠️ Step-by-Step: Adding a New Mini-App

When starting a new module (e.g., App 9.2), follow this sequence:

### 1. Register the Module
Add the project details inside the `MODULES` array in [index.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/index.html):
```javascript
{ 
  chapter: 9, 
  num: "9.2", 
  id: "muscle-contraction", 
  accent: "blue",
  title: "Muscle Contraction Lab", 
  desc: "Interactive sliding filament and T-tubule excitation.", 
  file: "19. contraction-coupling-lab.html", 
  engine: true 
}
```

### 2. Scaffold the HTML File
Create a new HTML file (e.g. `19. contraction-coupling-lab.html`) containing:
- Links to [aptools.css](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/assets/aptools.css) and Google Fonts.
- The standard **topbar** with the branding, Hub button, and the **Professional/ELI5** switch:
  ```html
  <header class="topbar">
    <div class="brand">
      <h1>Muscle Contraction Lab</h1>
      <p>Excitation-Contraction Coupling · Ch 9</p>
    </div>
    <div class="topbar-right">
      <label class="switch">
        <input type="checkbox" id="eli5Toggle" />
        <span class="track"></span>
        <span id="modeLabel">Professional</span>
      </label>
      <a class="btn-link" href="index.html">⌂ Hub</a>
    </div>
  </header>
  ```

### 3. Initialize APTools and mount HUD/Quiz
Mount the tracking heads-up display (`#apHud`) and the diagnostic quiz (`#apQuiz`) in scripts at the bottom:
```html
<script src="assets/aptools.js?v=1"></script>
<script>
  APTools.init({ 
    id: "muscle-contraction", 
    title: "Muscle Contraction Lab", 
    unit: "Ch 9 · Muscular System" 
  });
  APTools.mountHUD("#apHud", "muscle-contraction");
  
  var BANK = [
    { 
      id: "mc1", 
      bloom: "Remember", 
      outcome: "NMJ Transmitter",
      q: "Which neurotransmitter is released at the neuromuscular junction?",
      choices: ["Acetylcholine (ACh)", "Norepinephrine", "Dopamine", "GABA"],
      answer: 0, 
      why: "Acetylcholine (ACh) is the neurotransmitter released into the synaptic cleft to stimulate muscle cells." 
    }
  ];
  APTools.mountQuiz({ 
    container: "#apQuiz", 
    moduleId: "muscle-contraction", 
    bank: BANK, 
    length: 8 
  });
</script>
```

---

## 🚀 Version Control & Vercel Deployments

This project is deployed on **Vercel** with local settings configured inside [vercel.json](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/vercel.json).

### Deployment Workflow
1. **Commit your modifications:**
   ```bash
   git add -A
   git commit -m "Commit message summarizing changes"
   ```
2. **Deploy to production:**
   ```bash
   npx vercel --prod --yes
   ```
The deployment will automatically map routes, configure caching policies, and make updates instant on the [https://mini-ap1-apps.vercel.app](https://mini-ap1-apps.vercel.app) domain.
