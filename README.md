# 🧬 Anatomy & Physiology Active Learning Mini-Apps

An interactive, responsive suite of **29 active learning web applications** designed for **BIOL 2401 (Anatomy & Physiology I)** students at Lone Star College–North Harris. Created by **Dr. Victor Garcia M**, MSN, FNP-C, RN.

📱 **Live Production URL:** [https://mini-ap1-apps.vercel.app](https://mini-ap1-apps.vercel.app)

---

## 🎨 Creative Theme: Riso-Zine Notebook
The design adopts a vintage **Riso-zine notebook aesthetic** mimicking a physical laboratory workbook:
* **Organic Textures & HSL Palettes:** Cream paper backgrounds, textured noise, and custom chapter colors.
- **Tension & Depth:** Thick borders (`2px solid #0f172a`) paired with offset flat shadows to produce a tactile, zine-like interface.
- **ELI5 (Explain Like I'm 5) Toggle:** Allows students to dynamically switch between textbook descriptions and simple visual analogies at any point.

---

## ⚙️ Core Components
- **[index.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/index.html):** The master study hub containing module listings, XP counts, and cumulative mastery levels.
- **[aptools.css](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/assets/aptools.css):** Shared styling standardizing typography (Bricolage Grotesque & Hanken Grotesk) and core Riso components.
- **[aptools.js](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/assets/aptools.js):** The JavaScript engine that:
  - Tracks correct answers, active streaks, and XP points.
  - Automatically calculates and persists individual **Mastery Levels** to the browser's `localStorage` (no database required).
  - Renders scored, interactive spaced-repetition quizzes.

---

## 🗺️ Module Overview

| Chapter | Module # | Module Title | Primary File Path | Core Concepts |
| :--- | :--- | :--- | :--- | :--- |
| **Ch 1** | **1.1** | Anatomical Regions & Terms | [1. Anatomical Regions Interactive.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/1.%20Anatomical%20Regions%20Interactive.html) | Planes, directional terms, body regions & quadrants |
| **Ch 1** | **1.2** | Homeostasis & Feedback Loops | [2. homeostasis-feedback-dashboard.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/2.%20homeostasis-feedback-dashboard.html) | Negative vs. positive loops, receptors, effectors |
| **Ch 2** | **2.1** | Atomic Structure Lab | [9. atomic-structure-lab.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/9.%20atomic-structure-lab.html) | Atomic builder: protons, neutrons, electrons, isotopes |
| **Ch 2** | **2.2** | Chemical Bonding Lab | [10. chemical-bonding-lab.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/10.%20chemical-bonding-lab.html) | Electronegativity, ionic, covalent & H-bonds |
| **Ch 2** | **2.3** | Solutions, Acids & Bases | [11. inorganic-solutions-ph.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/11.%20inorganic-solutions-ph.html) | pH scale, buffering equations, mixtures |
| **Ch 3** | **3.1** | Membrane Transport | [3. membrane-transport-dashboard.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/3.%20membrane-transport-dashboard.html) | Passive diffusion vs. active transport pumps |
| **Ch 3** | **3.2** | Resting Membrane Potential | [4. resting-membrane-potential.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/4.%20resting-membrane-potential.html) | Nernst equilibrium, ion leakage, Na+/K+ ATPase |
| **Ch 3** | **3.3** | Tonicity & Osmosis | [5. tonicity-osmosis-dashboard.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/5.%20tonicity-osmosis-dashboard.html) | Hypo/hyper/isotonic environment effects on RBCs |
| **Ch 3** | **3.4** | Cell Division & Signaling | [6.1.2 cell_division_signaling_dashboard.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/6.1.2%20cell_division_signaling_dashboard.html) | Mitosis, checkpoint cycles & MPF signaling |
| **Ch 3** | **3.5** | Cell Division Command (Game) | [6.1. cell_division_command.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/6.1.%20cell_division_command.html) | Active cell cycle defense simulator |
| **Ch 4** | **4.1** | Organic Compounds & Energy | [16. organic-compounds-dashboard.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/16.%20organic-compounds-dashboard.html) | Macromolecules, dehydration synthesis & ATP |
| **Ch 5** | **5.1** | Epithelial Tissue Explorer | [7. interactive_epithelial_tissue_dashboard.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/7.%20interactive_epithelial_tissue_dashboard.html) | Simple/stratified classifications, tissue layers |
| **Ch 5** | **5.2** | The Tissue Architect (Build) | [7.1. the_tissue_architect.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/7.1.%20the_tissue_architect.html) | Interactive epithelial structure builder |
| **Ch 5** | **5.3** | Microscope Tissue Diagnostic | [7.2.1 virtual-microscope-tissue-diagnostic.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/7.2.1%20virtual-microscope-tissue-diagnostic.html) | Practical preparations, virtual slide viewer |
| **Ch 6** | **6.1** | Wound Healing Dashboard | [8. wound-healing-dashboard.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/8.%20wound-healing-dashboard.html) | Hemostasis, inflammation, proliferation & remodeling |
| **Ch 7** | **7.1** | Bone Tissue: The Micro-Matrix | [12. micro-matrix-bone-histology.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/12.%20micro-matrix-bone-histology.html) | Osteon structures: lamellae, lacunae & spongy bone |
| **Ch 7** | **7.2** | The Long Bone Architect | [13. long-bone-architect.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/13.%20long-bone-architect.html) | Anatomy cross-section of growing femur |
| **Ch 7** | **7.3** | The Remodeling Lab (Calcium) | [14. remodeling-lab-calcium.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/14.%20remodeling-lab-calcium.html) | PTH vs. calcitonin, osteoblast vs. osteoclast |
| **Ch 7** | **7.4** | The Skeletal Assembler | [15. skeletal-assembler.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/15.%20skeletal-assembler.html) | Axial/appendicular bones, male/female pelvis |
| **Ch 8** | **8.1** | The Skeletal Joints Explorer | [17. skeletal-joints-explorer.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/17.%20skeletal-joints-explorer.html) | Joint classes, synovial details & motion range |
| **Ch 9** | **9.1** | Skeletal Muscle Structure | [18. muscle-structure-explorer.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/18.%20muscle-structure-explorer.html) | Sheaths (epimysium etc.), fibers & sarcomere bands |
| **Ch 9** | **9.2** | Muscle Contraction Lab | [19. contraction-coupling-lab.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/19.%20contraction-coupling-lab.html) | NMJ, E-C coupling, cross-bridge cycle & sliding filament |
| **Ch 9** | **9.3** | Muscular Responses Lab | [20. muscular-responses-lab.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/20.%20muscular-responses-lab.html) | Twitch/myogram, summation & tetanus, motor unit recruitment, isotonic/isometric, fast vs. slow-twitch fibers |
| **Ch 9** | **9.4** | Smooth & Cardiac Muscle Lab | [21. smooth-cardiac-muscle-lab.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/21.%20smooth-cardiac-muscle-lab.html) | Multiunit/visceral smooth muscle, peristalsis, calmodulin mechanism, intercalated discs, 3-way muscle comparison |
| **Ch 9** | **9.5** | Muscle Mechanics & Actions Lab | [22. muscle-mechanics-actions-lab.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/22.%20muscle-mechanics-actions-lab.html) | Origin/insertion, three classes of levers, agonist/antagonist/synergist/fixator roles |
| **Ch 10** | **10.1** | CNS vs. PNS: Organization & Function | [23. cns-pns-organization-lab.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/23.%20cns-pns-organization-lab.html) | Nervous tissue composition, CNS vs. PNS, sensory-integrative-motor loop, somatic/autonomic organizational chart |
| **Ch 10** | **10.2** | Protective Structures: Bone, Meninges & CSF | [24. protective-structures-lab.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/24.%20protective-structures-lab.html) | Cranial & vertebral bone, the three meninges and their spaces, CSF formation/circulation/reabsorption and function |
| **Ch 10** | **10.3** | Neuron Structure & Classification | [25. neuron-structure-classification-lab.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/25.%20neuron-structure-classification-lab.html) | Parts of a neuron, myelin/neurilemma/nodes of Ranvier, white vs. gray matter, structural (bipolar/unipolar/multipolar) and functional (sensory/inter/motor) classes |
| **Ch 10** | **10.4** | Neuroglial Cells | [26. neuroglia-lab.html](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/26.%20neuroglia-lab.html) | Four CNS glia (astrocyte, oligodendrocyte, microglia, ependyma), two PNS glia (Schwann, satellite), their functions, and axon vs. cell-body injury |

---

## 🛠️ Local Development & Deployment

### Run Locally
Start a local static server inside the project root:
```bash
python -m http.server 8080
```
Open `http://localhost:8080` in your web browser.

### Deploy to Production
To push code changes live to Vercel:
```bash
git add -A
git commit -m "Your commit description"
npx vercel --prod --yes
```

For more detailed technical guidelines on creating new apps, check the [HANDBOOK.md](file:///c:/Users/skint/Desktop/Mini%20apps%20active%20learning/HANDBOOK.md).
