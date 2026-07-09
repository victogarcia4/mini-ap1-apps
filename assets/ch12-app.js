"use strict";

(function () {
  var APPS = {
    "sensory-receptors": {
      title: "Sensory Receptors Lab",
      subtitle: "General and special sensory function",
      image: "assets/ch12-receptors-classification.png",
      imageAlt: "Classification of sensory receptors",
      intro: "Sensory receptors detect environmental or internal change and start impulses toward the CNS.",
      tabs: [
        { title: "Sense Groups", body: "General senses use receptors in skin, muscles, joints, and viscera. Special senses use complex organs in the head: vision, hearing, equilibrium, taste, and smell.", eli5: "General senses are body-wide sensors. Special senses are head-based sensor organs." },
        { title: "Stimulus Types", body: "Chemoreceptors detect chemicals, nociceptors detect harmful extremes, thermoreceptors detect temperature, mechanoreceptors detect touch/pressure/stretch, and photoreceptors detect light.", eli5: "Each receptor is tuned for a kind of change: chemicals, danger, temperature, pressure/stretch, or light." },
        { title: "Sensation vs Perception", body: "Sensation is awareness of a stimulus. Perception is conscious interpretation. Projection makes the brain interpret the sensation as coming from the stimulated receptor region.", eli5: "Sensation is the signal. Perception is the brain deciding what it means and where it came from." },
        { title: "Adaptation", body: "Sensory adaptation means a receptor becomes less stimulated during continuous stimuli. All sensory receptors except nociceptors adapt to continuous stimuli.", eli5: "Most sensors stop shouting when a stimulus stays the same. Pain sensors keep warning you." }
      ],
      cards: [
        ["Chemoreceptors", "Chemical concentrations; smell, taste, and internal chemistry."],
        ["Nociceptors", "Extreme or harmful stimuli that produce pain."],
        ["Thermoreceptors", "Temperature changes."],
        ["Mechanoreceptors", "Pressure, touch, vibration, stretch."],
        ["Photoreceptors", "Light energy in the retina."]
      ],
      cases: [
        ["An odorant dissolves and stimulates nasal receptors.", "chemo", "Chemoreceptors detect chemicals."],
        ["Bright light stimulates retinal rods and cones.", "photo", "Photoreceptors detect light."],
        ["A hot surface begins to burn skin.", "noci", "Nociceptors detect harmful extremes."]
      ],
      quiz: [
        ["Which receptors respond to chemical concentrations?", ["Chemoreceptors", "Photoreceptors", "Thermoreceptors", "Mechanoreceptors"], 0, "Chemoreceptors detect chemical changes."],
        ["Which receptors respond to light energy?", ["Photoreceptors", "Nociceptors", "Chemoreceptors", "Proprioceptors"], 0, "Photoreceptors in the retina respond to light."],
        ["Which receptor type generally does not adapt to continuous stimuli?", ["Nociceptors", "Thermoreceptors", "Tactile corpuscles", "Olfactory receptors"], 0, "Pain receptors protect against ongoing damage."],
        ["Perception means:", ["Conscious interpretation of sensation", "Only unconscious awareness", "Receptor replacement", "Pain inhibition"], 0, "Perception is conscious interpretation."],
        ["Projection allows a person to:", ["Pinpoint the apparent source of stimulation", "Stop all pain signals", "Hear sound waves", "Focus a lens"], 0, "Projection localizes sensation."],
        ["Mechanoreceptors respond to:", ["Touch, pressure, vibration, or stretch", "Light only", "Odor only", "Taste only"], 0, "Mechanoreceptors detect mechanical change."],
        ["Special senses include:", ["Vision, hearing, equilibrium, taste, smell", "Only pain and pressure", "Only muscle stretch", "Only temperature"], 0, "These five are special senses."],
        ["General senses are associated with:", ["Skin, muscles, joints, and viscera", "Only the retina", "Only the cochlea", "Only taste buds"], 0, "General/somatic senses are body-wide."]
      ]
    },
    "tactile-receptors": {
      title: "Tactile Receptors Lab",
      subtitle: "Touch, pressure, pain, temperature, and proprioception",
      image: "assets/ch12-tactile-receptors.png",
      imageAlt: "Tactile receptors in skin",
      intro: "General senses include exteroceptive, visceroceptive, and proprioceptive signals.",
      tabs: [
        { title: "Three Groups", body: "Exteroceptive senses detect body-surface changes. Visceroceptive senses detect visceral changes. Proprioceptive senses detect muscles, tendons, and body position.", eli5: "Surface sensors, organ sensors, and body-position sensors work together." },
        { title: "Touch & Pressure", body: "Free nerve endings are naked dendrites. Tactile corpuscles detect light touch in hairless skin. Lamellated corpuscles detect heavy pressure in deep tissues.", eli5: "Light touch is a gentle skin sensor; heavy pressure is a deep onion-like sensor." },
        { title: "Pain & Temperature", body: "Warm and cold receptors adapt rapidly. Nociceptors are free nerve endings, protect against damage, and generally do not adapt.", eli5: "Temperature sensors get used to steady temperatures. Pain sensors stay alert." },
        { title: "Proprioception", body: "Muscle spindles respond to stretch and help maintain limb position. Golgi tendon organs respond to tension and help prevent tendon tearing.", eli5: "Spindles track muscle length; tendon organs track pull force." }
      ],
      cards: [
        ["Tactile corpuscles", "Light touch; abundant in lips, fingertips, palms, soles, nipples, external genitalia."],
        ["Lamellated corpuscles", "Heavy pressure; deep subcutaneous tissues."],
        ["Acute pain", "Fast, sharp, pricking pain on myelinated fibers."],
        ["Chronic pain", "Slow, dull, aching, burning pain on unmyelinated fibers."],
        ["Referred pain", "Visceral pain perceived as coming from another body area."]
      ],
      cases: [
        ["A fingertip detects a feather-light touch.", "tactile", "Tactile corpuscles detect light touch."],
        ["Deep pressure in the palm is detected.", "lamellated", "Lamellated corpuscles detect heavy pressure."],
        ["A tendon is under high tension.", "golgi", "Golgi tendon organs detect tendon tension."]
      ],
      quiz: [
        ["Tactile corpuscles detect:", ["Light touch", "Deep pressure", "Light energy", "Sound frequency"], 0, "Tactile corpuscles are light-touch mechanoreceptors."],
        ["Lamellated corpuscles detect:", ["Heavy pressure", "Taste", "Smell", "Color"], 0, "Lamellated/Pacinian corpuscles detect deep pressure."],
        ["Pain receptors are usually:", ["Free nerve endings", "Taste buds", "Hair cells", "Photoreceptors"], 0, "Nociceptors are free nerve endings."],
        ["Acute pain fibers are typically:", ["Myelinated", "Unmyelinated only", "Located only in viscera", "Photoreceptive"], 0, "Acute pain is fast and myelinated."],
        ["Chronic pain is often:", ["Dull, aching, burning, or throbbing", "Only sharp and pricking", "Only visual", "Always gone immediately"], 0, "Chronic pain is slow and lingering."],
        ["Muscle spindles are stimulated when:", ["Muscle relaxes and the spindle is stretched", "The retina sees light", "Taste hairs touch saliva", "The tympanic membrane vibrates"], 0, "Muscle spindles monitor stretch."],
        ["Golgi tendon organs help:", ["Prevent tearing of tendons", "Detect smell", "Focus light", "Amplify sound"], 0, "They respond to high tendon tension."],
        ["Referred pain may derive from:", ["Common nerve pathways", "Ossicle movement", "Visual pigments", "Taste pores"], 0, "Shared pathways can mislocalize visceral pain."]
      ]
    },
    "visual-pathways": {
      title: "Visual Pathways Lab",
      subtitle: "Photoreceptors to occipital cortex",
      image: "assets/ch12-visual-pathways.png",
      imageAlt: "Visual pathways from retina to brain",
      intro: "Visual impulses travel from retinal photoreceptors through CN II and brain relays to the occipital cortex.",
      tabs: [
        { title: "Start Point", body: "The organ of vision is the retina. Rods and cones are photoreceptors that trigger impulses when stimulated to threshold.", eli5: "The retina is the camera sensor. Rods and cones start the message." },
        { title: "Pathway", body: "Impulse route: optic nerve (CN II), optic chiasma, optic tracts, thalamus/lateral geniculate body, primary visual cortex in the occipital lobe.", eli5: "Eye cable, crossing point, brain cable, relay station, visual cortex." },
        { title: "Crossing", body: "The optic chiasma is the crossing point that helps organize visual field information before signals continue as optic tracts.", eli5: "Some visual wires swap sides at the chiasma." },
        { title: "Interpretation", body: "The primary visual cortex in the occipital lobe interprets visual information after thalamic direction.", eli5: "The occipital lobe turns signals into what you see." }
      ],
      cards: [["Rods", "Night vision and silhouette-like images."], ["Cones", "Color vision and sharp images."], ["Optic chiasma", "Crossing point."], ["Thalamus", "Lateral geniculate relay."], ["Occipital cortex", "Primary visual interpretation."]],
      cases: [
        ["Photoreceptors fire and the signal enters CN II.", "optic", "The optic nerve is CN II."],
        ["Signals cross before becoming optic tracts.", "chiasma", "The optic chiasma is the crossing point."],
        ["Final conscious visual interpretation occurs.", "occipital", "The occipital cortex interprets vision."]
      ],
      quiz: [
        ["The optic nerve is cranial nerve:", ["II", "I", "VIII", "X"], 0, "Vision travels in CN II."],
        ["Visual signals cross at the:", ["Optic chiasma", "Medulla", "Cochlea", "Taste pore"], 0, "The chiasma is the crossing point."],
        ["The thalamic relay for vision is the:", ["Lateral geniculate body", "Olfactory bulb", "Spiral organ", "Macula"], 0, "Visual impulses relay in the lateral geniculate body."],
        ["The primary visual cortex is in the:", ["Occipital lobe", "Temporal lobe", "Parietal lobe", "Medulla"], 0, "Vision is interpreted in occipital cortex."],
        ["Rods specialize in:", ["Night vision", "Color sharpness", "Taste", "Equilibrium"], 0, "Rods support night vision."],
        ["Cones specialize in:", ["Color and sharp images", "Pain", "Sound amplification", "Smell"], 0, "Cones support color and acuity."],
        ["The organ of vision is the:", ["Retina", "Auricle", "Taste bud", "Vestibule"], 0, "Photoreceptors are in the retina."],
        ["After optic chiasma, fibers continue as:", ["Optic tracts", "Auditory ossicles", "Semicircular canals", "Olfactory cilia"], 0, "Optic tracts carry visual impulses onward."]
      ]
    },
    "olfaction": {
      title: "Olfaction Lab",
      subtitle: "Smell receptors and CN I pathway",
      image: "assets/ch12-olfaction-nasal-cavity.png",
      imageAlt: "Olfactory region of nasal cavity",
      intro: "Olfactory receptors are chemoreceptors in the upper nasal cavity that adapt rapidly.",
      tabs: [
        { title: "Receptors", body: "Olfactory receptors are bipolar neurons with cilia-like dendrites in olfactory epithelium on the superior nasal conchae.", eli5: "Smell sensors sit high in the nose." },
        { title: "Dissolved Chemicals", body: "Odorant chemicals must dissolve in solution to stimulate olfactory receptors; sniffing helps bring odorants to the epithelium.", eli5: "Smell molecules need to dissolve before the sensor can read them." },
        { title: "Pathway", body: "Primary olfactory receptor axons pass through the cribriform plate, synapse in the olfactory bulb, then secondary neurons reach cortex through CN I pathways.", eli5: "Nose sensor to skull holes to smell bulb to cortex." },
        { title: "Special Rule", body: "Olfactory impulses do not pass through the thalamus before reaching cortex. Receptors adapt rapidly and are replaced by stem cells.", eli5: "Smell has a shortcut and its sensors renew themselves." }
      ],
      cards: [["Olfactory epithelium", "Upper nasal cavity."], ["Cribriform plate", "Ethmoid openings for olfactory axons."], ["Olfactory bulb", "First synapse."], ["CN I", "Olfactory nerve."], ["Adaptation", "Rapidly fades during continuous odor."]],
      cases: [["A smell fades after a few minutes.", "adapt", "Olfactory receptors adapt rapidly."], ["Axons pass through ethmoid openings.", "cribriform", "They pass through the cribriform plate."], ["Smell reaches cortex without the usual relay.", "no-thalamus", "Olfaction does not pass through the thalamus first."]],
      quiz: [
        ["Olfactory receptors are:", ["Chemoreceptors", "Photoreceptors", "Thermoreceptors", "Hair cells"], 0, "Smell detects chemicals."],
        ["Olfactory receptors are located in the:", ["Upper nasal cavity", "Cochlea", "Retina", "Tongue tip only"], 0, "They sit high in the nasal cavity."],
        ["Odorant chemicals must be:", ["Dissolved in solution", "Amplified by ossicles", "Focused by a lens", "Attached to otoliths"], 0, "Dissolution is required."],
        ["Olfactory axons pass through the:", ["Cribriform plate", "Oval window", "Optic chiasma", "Basilar membrane"], 0, "They pass through the ethmoid cribriform plate."],
        ["The first olfactory synapse occurs in the:", ["Olfactory bulb", "Thalamus", "Cochlear duct", "Medulla only"], 0, "Primary neurons synapse in the bulb."],
        ["Olfactory pathway is unusual because it:", ["Does not pass through thalamus first", "Uses CN VIII", "Uses taste pores", "Requires ossicles"], 0, "Smell bypasses thalamus initially."],
        ["Olfactory receptors:", ["Are continually replaced by stem cells", "Never adapt", "Are rods and cones", "Are in the vestibule"], 0, "They can be replaced."],
        ["Sniffing helps by:", ["Bringing odorants to olfactory epithelium", "Moving ossicles", "Bending otoliths", "Crossing optic fibers"], 0, "Sniffing moves odorants upward."]
      ]
    },
    "gustation": {
      title: "Gustation Lab",
      subtitle: "Taste buds and taste pathways",
      image: "assets/ch12-gustation-taste.png",
      imageAlt: "Taste pathway and tongue regions",
      intro: "Taste receptors are chemoreceptors in taste buds and require chemicals dissolved in saliva.",
      tabs: [
        { title: "Taste Buds", body: "Taste hairs project through taste pores from taste cells in taste buds.", eli5: "Taste hairs poke through tiny openings to sample dissolved food chemicals." },
        { title: "Five Tastes", body: "Sweet is strongest at the tip, sour laterally, salt around the perimeter, bitter posteriorly, and umami throughout.", eli5: "Taste maps are rough zones, with umami spread broadly." },
        { title: "Cranial Nerves", body: "CN VII carries anterior two-thirds of tongue, CN IX carries posterior one-third, and CN X carries walls of oral cavity and pharynx.", eli5: "Three nerves carry taste from different mouth regions." },
        { title: "Brain Route", body: "Gustatory impulses pass to medulla, then thalamus, then gustatory cortex in the parietal lobe.", eli5: "Taste goes brainstem, relay station, taste cortex." }
      ],
      cards: [["Taste hair", "Sensitive projection."], ["Taste pore", "Opening for chemicals."], ["CN VII", "Anterior 2/3 tongue."], ["CN IX", "Posterior 1/3 tongue."], ["CN X", "Oral cavity and pharynx walls."]],
      cases: [["Anterior tongue taste is lost.", "VII", "CN VII carries anterior two-thirds."], ["Posterior tongue taste is lost.", "IX", "CN IX carries posterior one-third."], ["Taste needs saliva.", "dissolve", "Chemicals must dissolve in saliva."]],
      quiz: [
        ["Taste receptors are:", ["Chemoreceptors", "Photoreceptors", "Thermoreceptors", "Otoliths"], 0, "Taste detects chemicals."],
        ["Taste chemicals must dissolve in:", ["Saliva", "Perilymph", "Vitreous humor", "Aqueous humor"], 0, "Saliva dissolves tastants."],
        ["CN VII carries taste from:", ["Anterior two-thirds of tongue", "Posterior one-third only", "Pharynx walls only", "Retina"], 0, "Facial nerve carries anterior tongue taste."],
        ["CN IX carries taste from:", ["Posterior one-third of tongue", "Anterior two-thirds", "Retina", "Cochlea"], 0, "Glossopharyngeal serves posterior tongue."],
        ["CN X carries taste from:", ["Walls of oral cavity and pharynx", "Tongue tip only", "Retina", "Semicircular canals"], 0, "Vagus contributes oral/pharyngeal taste."],
        ["Gustatory impulses pass through:", ["Medulla and thalamus", "Optic chiasma", "Olfactory bulb only", "Oval window"], 0, "Taste relays through medulla and thalamus."],
        ["The gustatory cortex is in the:", ["Parietal lobe", "Occipital lobe", "Temporal auditory cortex", "Cerebellum"], 0, "Taste interpretation is in parietal cortex."],
        ["Bitter taste is strongest:", ["Posterior tongue", "Retina", "Cochlea", "Fingertips"], 0, "Bitter is posterior in the course map."]
      ]
    },
    "ear-anatomy": {
      title: "Ear Anatomy Lab",
      subtitle: "Outer, middle, and inner ear structures",
      image: "assets/ch12-ear-hearing.png",
      imageAlt: "Gross and microscopic anatomy of the ear",
      secondaryImage: "assets/ch12-hearing-reflex-ossicles.png",
      intro: "The ear collects, amplifies, and transduces sound while also housing equilibrium organs.",
      tabs: [
        { title: "Outer Ear", body: "The auricle collects sound waves. The external acoustic meatus directs vibrations toward the tympanic membrane.", eli5: "The outer ear catches sound and funnels it to the eardrum." },
        { title: "Middle Ear", body: "The tympanic membrane, tympanic cavity, malleus, incus, and stapes amplify and concentrate sound waves. The auditory tube equalizes pressure.", eli5: "The eardrum and three tiny bones boost vibrations." },
        { title: "Inner Ear", body: "The labyrinth includes cochlea for hearing, vestibule for static equilibrium, and semicircular canals for dynamic equilibrium.", eli5: "The inner ear has hearing hardware and balance hardware." },
        { title: "Cochlear Details", body: "Scala vestibuli and scala tympani contain perilymph. The cochlear duct contains endolymph. Hair cells in the Spiral Organ sit on the basilar membrane under the tectorial membrane.", eli5: "Fluid waves bend tiny hair cells inside the cochlea." }
      ],
      cards: [["Auricle", "Collects sound waves."], ["Auditory ossicles", "Malleus, incus, stapes."], ["Auditory tube", "Equalizes pressure."], ["Cochlea", "Hearing."], ["Spiral Organ", "Hearing receptor hair cells."]],
      cases: [["Pressure cannot equalize across the eardrum.", "tube", "The auditory tube equalizes pressure."], ["The stapes pushes into the inner ear.", "oval", "Stapes connects to the oval window."], ["Hair cells sit on this membrane.", "basilar", "Spiral Organ hair cells sit on basilar membrane."]],
      quiz: [
        ["The auricle functions to:", ["Collect sound waves", "Interpret sound", "Detect taste", "Focus light"], 0, "The auricle collects sound."],
        ["The three auditory ossicles are:", ["Malleus, incus, stapes", "Utricle, saccule, cochlea", "Rods, cones, macula", "CN VII, IX, X"], 0, "These are the middle ear bones."],
        ["The auditory tube:", ["Equalizes pressure", "Detects color", "Carries taste", "Crosses visual fibers"], 0, "It equalizes pressure across the tympanic membrane."],
        ["The cochlea is responsible for:", ["Hearing", "Static equilibrium", "Dynamic equilibrium", "Smell"], 0, "Cochlea is hearing."],
        ["The vestibule functions in:", ["Static equilibrium", "Color vision", "Smell", "Taste"], 0, "Vestibule supports static equilibrium."],
        ["Semicircular canals function in:", ["Dynamic equilibrium", "Hearing only", "Taste", "Vision"], 0, "They detect rapid head/body movement."],
        ["Perilymph fills:", ["Space between osseous and membranous labyrinth", "Taste pores", "Retina", "Olfactory bulb"], 0, "Perilymph surrounds membranous labyrinth."],
        ["Hair cells for hearing are in the:", ["Spiral Organ", "Optic chiasma", "Taste bud", "Macula lutea"], 0, "Organ of Corti contains hearing hair cells."]
      ]
    },
    "auditory-pathways": {
      title: "Auditory Pathways Lab",
      subtitle: "Sound waves to auditory cortex",
      image: "assets/ch12-auditory-pathway.png",
      imageAlt: "Auditory pathway",
      tabImages: [
        { src: "assets/ch12-auditory-pathway.png", alt: "Auditory pathway" },
        { src: "assets/ch12-auditory-pathway.png", alt: "Auditory pathway" },
        { src: "assets/ch12-auditory-signal-interpretation.png", alt: "Auditory signal interpretation from cochlea to temporal cortex" },
        null
      ],
      intro: "Sound waves become mechanical vibration, then fluid waves, then hair-cell signals, then cortical perception.",
      tabs: [
        { title: "Mechanical Route", body: "Sound travels auricle, external acoustic meatus, tympanic membrane, malleus, incus, stapes, and oval window.", eli5: "Sound is passed from ear flap to canal to eardrum to three bones to the inner ear door." },
        { title: "Fluid Route", body: "Vibration moves perilymph of scala vestibuli, endolymph of cochlear duct, and hair cells in the Spiral Organ.", eli5: "The inner ear turns vibration into moving fluid that bends hair cells." },
        { title: "Neural Route", body: "After hair cells reach threshold, impulses travel on the cochlear branch of CN VIII to thalamus and primary auditory cortex in temporal lobes.", eli5: "Hair cells start the nerve message to the hearing cortex." },
        { title: "Frequency Map", body: "Different regions of the cochlear duct sense different frequencies of vibration.", eli5: "Different cochlea spots listen for different pitches." }
      ],
      interactiveTabs: { 3: "corti-transduction" },
      cards: [["1", "Auricle"], ["2", "External acoustic meatus"], ["3", "Tympanic membrane"], ["4-6", "Malleus, incus, stapes"], ["7", "Oval window"], ["8-10", "Fluids and hair cells"], ["11-13", "CN VIII, thalamus, auditory cortex"]],
      cases: [["The cochlear branch is damaged.", "VIII", "Auditory signals travel on CN VIII."], ["The final interpretation area is affected.", "temporal", "Primary auditory cortex is temporal."], ["Different pitch regions are involved.", "frequency", "Cochlear duct regions sense different frequencies."]],
      quiz: [
        ["The correct early sound pathway is:", ["Auricle, meatus, tympanic membrane", "Retina, chiasma, thalamus", "Tongue, medulla, thalamus", "Utricle, pons, cerebellum"], 0, "Sound starts outer ear to eardrum."],
        ["The stapes connects to the:", ["Oval window", "Round window directly", "Optic chiasma", "Taste pore"], 0, "Stapes transmits vibration to oval window."],
        ["The Spiral Organ contains:", ["Hair cells", "Rods and cones", "Taste buds", "Olfactory bulbs"], 0, "Hair cells are hearing receptors."],
        ["Auditory impulses travel on:", ["Cochlear branch of CN VIII", "CN II", "CN I", "CN X only"], 0, "Vestibulocochlear CN VIII carries hearing."],
        ["Primary auditory cortex is in the:", ["Temporal lobes", "Occipital lobes", "Parietal lobes", "Cerebellum"], 0, "Auditory cortex is temporal."],
        ["Before auditory cortex, impulses are directed through the:", ["Thalamus", "Optic chiasma", "Cribriform plate", "Taste pore"], 0, "Auditory impulses relay through thalamus."],
        ["Different cochlear duct regions sense different:", ["Frequencies", "Odors", "Visual fields", "Taste regions"], 0, "Frequency coding occurs by cochlear region."],
        ["Endolymph is found in the:", ["Cochlear duct", "External meatus", "Tympanic cavity", "Olfactory bulb"], 0, "The cochlear duct contains endolymph."]
      ]
    },
    "equilibrium": {
      title: "Equilibrium Lab",
      subtitle: "Static and dynamic balance",
      image: "assets/ch12-internal-ear-laberynth.png",
      imageAlt: "Internal ear labyrinth",
      secondaryImage: "assets/ch12-laberynth.png",
      intro: "Equilibrium depends on vestibular hair cells that detect head position and rapid movement.",
      tabs: [
        { title: "Static Equilibrium", body: "Static equilibrium senses head position and helps maintain posture while motionless. The utricle and saccule contain maculae.", eli5: "Static balance tells where your head is when you are still." },
        { title: "Macula", body: "Macula hair cells contact gelatin containing calcium carbonate crystals called otoliths. Gravity makes the gelatin sag and bends hair cells.", eli5: "Tiny crystals pull on jelly and bend balance hairs." },
        { title: "Dynamic Equilibrium", body: "Dynamic equilibrium prevents loss of balance during rapid movement. Semicircular canals contain ampullae with crista ampullaris.", eli5: "Dynamic balance senses turning and quick head movement." },
        { title: "Pathway", body: "Vestibular impulses travel on the vestibular branch of CN VIII to the pons, which directs them to the cerebellum.", eli5: "Balance signals go by CN VIII to pons, then cerebellum." }
      ],
      cards: [["Utricle", "Communicates with semicircular canals."], ["Saccule", "Communicates with cochlear duct."], ["Macula", "Static equilibrium organ."], ["Ampulla", "Enlargement at semicircular canal end."], ["Crista ampullaris", "Dynamic equilibrium organ."]],
      cases: [["Head position while motionless is sensed.", "static", "Static equilibrium uses utricle/saccule maculae."], ["Rapid head rotation is sensed.", "dynamic", "Dynamic equilibrium uses semicircular canals."], ["Balance signal heads to coordination center.", "cerebellum", "Pons directs vestibular input to cerebellum."]],
      quiz: [
        ["Static equilibrium senses:", ["Head position while motionless", "Sound pitch", "Taste", "Light"], 0, "Static equilibrium monitors head position."],
        ["Dynamic equilibrium responds to:", ["Rapid head or body movement", "Still posture only", "Taste chemicals", "Color"], 0, "Dynamic equilibrium detects movement."],
        ["The vestibule contains:", ["Utricle and saccule", "Malleus and incus", "Rods and cones", "Taste buds"], 0, "Utricle and saccule are vestibular chambers."],
        ["The macula is the organ of:", ["Static equilibrium", "Hearing", "Smell", "Vision"], 0, "Maculae detect static equilibrium."],
        ["Otoliths are:", ["Calcium carbonate crystals", "Auditory bones", "Taste hairs", "Visual pigments"], 0, "Otoliths are crystals in gelatin."],
        ["Crista ampullaris is found in:", ["Ampullae of semicircular canals", "Retina", "Tongue", "Olfactory bulb"], 0, "It is the dynamic equilibrium organ."],
        ["Vestibular impulses travel on:", ["Vestibular branch of CN VIII", "CN II", "CN I", "CN VII only"], 0, "Balance uses vestibular branch of CN VIII."],
        ["The pons directs vestibular input to the:", ["Cerebellum", "Occipital cortex", "Taste pore", "Optic chiasma"], 0, "Cerebellum interprets balance coordination."]
      ]
    },
    "sensory-homeostasis": {
      title: "Sensory Homeostasis Lab",
      subtitle: "Receptors as feedback-loop detectors",
      image: "assets/ch12-sensory-homeostasis-feedback-loop.png",
      imageAlt: "Sensory feedback loop for homeostasis",
      tabImages: [
        { src: "assets/ch12-sensory-homeostasis-feedback-loop.png", alt: "Sensory feedback loop for homeostasis" },
        { src: "assets/ch12-sensory-homeostasis-feedback-loop.png", alt: "Sensory adaptation within a sensory feedback loop" },
        { src: "assets/ch12-pain-protection-homeostasis.png", alt: "Pain as a protective homeostatic signal" },
        { src: "assets/ch12-sensory-homeostasis-feedback-loop.png", alt: "Sensory examples that support homeostasis" }
      ],
      intro: "Sensory systems help homeostasis by detecting change, reporting it to the CNS, and supporting corrective responses.",
      tabs: [
        { title: "Feedback Logic", body: "A receptor detects change, an afferent pathway carries input to the CNS, integration interprets the signal, and an efferent response helps restore or protect function.", eli5: "Detect, report, decide, respond." },
        { title: "Adaptation", body: "Adaptation prevents constant unchanged stimuli from dominating attention, while pain receptors resist adaptation to keep tissue damage warnings active.", eli5: "Ignore steady background; keep danger alarms loud." },
        { title: "Pain Protection", body: "Nociceptors protect against further tissue damage. Natural pain relief can inhibit pain pathways in the spinal cord and stop perception.", eli5: "Pain makes you protect the body; the CNS can also turn pain volume down." },
        { title: "Examples", body: "Temperature receptors guide thermoregulatory behavior, proprioceptors maintain posture, vestibular receptors stabilize balance, and sensory feedback guides movement.", eli5: "Sensors keep temperature, posture, balance, and movement on track." }
      ],
      cards: [["Detector", "Sensory receptor."], ["Afferent path", "Sensory neuron to CNS."], ["Integrator", "Brain or spinal cord."], ["Response", "Motor/autonomic/behavioral output."], ["Adaptation", "Reduced response to constant stimulus."]],
      cases: [["You touch a hot pan and withdraw.", "protect", "Nociceptors trigger protective response."], ["You stop noticing a constant shirt tag.", "adapt", "Adaptation reduces constant touch awareness."], ["Stretch receptors help maintain posture.", "posture", "Proprioceptors support posture and position control."]],
      quiz: [
        ["In a sensory feedback loop, the detector is the:", ["Receptor", "Effector only", "Lens", "Ossicle"], 0, "Receptors detect change."],
        ["Afferent pathways carry information:", ["Toward the CNS", "Away from CNS only", "Only to muscles", "Only through ossicles"], 0, "Afferent means toward CNS."],
        ["The CNS role is mainly:", ["Integration and interpretation", "Collecting sound waves only", "Equalizing ear pressure", "Dissolving chemicals"], 0, "CNS integrates sensory input."],
        ["Adaptation helps prevent:", ["Constant unchanged stimuli from dominating attention", "All pain perception", "All hearing", "All vision"], 0, "Adaptation reduces response to steady stimuli."],
        ["Nociceptors generally:", ["Do not adapt to continual harmful stimuli", "Adapt faster than smell only", "Detect light", "Detect sound pitch"], 0, "Pain signals persist to protect tissue."],
        ["Natural pain relief can inhibit pain pathways in the:", ["Spinal cord", "Taste pore", "Oval window", "Lens"], 0, "Neuropeptides can inhibit spinal pain pathways."],
        ["Proprioceptors help maintain:", ["Posture and limb position", "Only smell", "Only taste", "Only visual acuity"], 0, "Proprioception informs position and tension."],
        ["Vestibular sensory feedback supports:", ["Balance", "Taste", "Smell", "Pain only"], 0, "Equilibrium receptors support balance."]
      ]
    },
    "lifespan-hearing-vision": {
      title: "Life-Span Hearing & Vision Lab",
      subtitle: "Age-related sensory changes",
      image: "assets/ch12-healthy-eye-cataract-glaucoma.png",
      imageAlt: "Healthy eye, cataract, and glaucoma comparison",
      tabImages: [
        { src: "assets/ch12-lifespan-sensory-aging-overview.png", alt: "Life-span changes in hearing and vision overview" },
        { src: "assets/ch12-hearing-reflex-ossicles.png", alt: "Human ear anatomy with ossicles, cochlea, basilar membrane, and hair cells" },
        { src: "assets/ch12-healthy-eye-cataract-glaucoma.png", alt: "Healthy eye, cataract, and glaucoma comparison" },
        { src: "assets/ch12-healthy-eye-cataract-glaucoma.png", alt: "Healthy eye, cataract, and glaucoma comparison" }
      ],
      intro: "Diminished senses are often among the first noticeable signs of aging, especially hearing and vision changes.",
      tabs: [
        { title: "Big Picture", body: "With age, smell and taste may diminish, hearing can decline from cumulative damage, and visual problems become more common.", eli5: "Aging can make the body's sensors less sharp, especially ears and eyes." },
        { title: "Hearing Changes", body: "Hearing loss can be attributed to decades of cumulative damage to the Spiral Organ. Hearing loss may also involve degeneration of pathways to the brain and tinnitus.", eli5: "Years of wear can damage the hearing organ and the pathways that carry sound messages." },
        { title: "Vision Changes", body: "Visual problems include dry eyes, itching, burning, diminished vision, floaters, light flashes, presbyopia, glaucoma, cataracts, retinal detachment, and macular degeneration.", eli5: "Aging eyes may dry out, blur, see floaters, lose close focus, or develop pressure/clouding/retina problems." },
        { title: "Key Disorders", body: "Presbyopia is inability to read small print due to loss of lens elasticity. Glaucoma involves increased pressure. Cataracts make the lens cloudy and opaque. Retinal detachment and macular degeneration threaten retinal function.", eli5: "Close focus weakens, pressure can rise, the lens can cloud, and the retina can pull or wear down." }
      ],
      cards: [["Spiral Organ", "Cumulative damage can contribute to hearing loss."], ["Tinnitus", "Hearing symptom linked with age-related changes."], ["Presbyopia", "Inability to read small print from loss of lens elasticity."], ["Glaucoma", "Aqueous humor formation exceeds removal, increasing pressure."], ["Cataract", "Lens becomes cloudy and opaque."], ["Macular degeneration", "Age-related retinal problem affecting vision."]],
      cases: [["A 68-year-old cannot read small print because the lens has lost elasticity.", "presbyopia", "Presbyopia is age-related loss of close focusing ability."], ["A patient has increased eye pressure because aqueous humor formation exceeds removal.", "glaucoma", "Glaucoma involves increased intraocular pressure."], ["A cloudy, opaque lens creates a yellow tint.", "cataract", "Cataracts cloud the lens."]],
      quiz: [
        ["Diminished senses are often:", ["One of the first noticeable signs of aging", "Only found in newborns", "Unrelated to age", "Limited to taste only"], 0, "The notes identify diminished senses as an early noticeable aging sign."],
        ["Age-related hearing loss can involve cumulative damage to the:", ["Spiral Organ", "Optic chiasma", "Taste pore", "Macula lutea only"], 0, "The Spiral Organ contains hearing receptor cells."],
        ["By age 60, approximately what population proportion has hearing loss in the notes?", ["25%", "5%", "75%", "100%"], 0, "The notes state 25% by age 60."],
        ["Presbyopia is:", ["Inability to read small print", "Clouding of the lens", "Increased eye pressure", "Ringing in the ears"], 0, "Presbyopia is loss of close reading focus."],
        ["Presbyopia is linked to loss of elasticity of the:", ["Lens", "Auricle", "Taste bud", "Tympanic membrane"], 0, "Loss of lens elasticity diminishes accommodation."],
        ["Glaucoma involves:", ["Increased pressure from aqueous humor imbalance", "Cloudy lens only", "Damage to taste buds", "Otolith movement"], 0, "Glaucoma occurs when formation exceeds removal."],
        ["Cataracts are caused by:", ["Accumulation on the lens making it cloudy and opaque", "Olfactory receptor replacement", "Ossicle amplification", "Taste adaptation"], 0, "Cataracts cloud the lens."],
        ["Floaters and light flashes are linked in the notes to:", ["Vitreous humor clumping and pulling away from retina", "Cribriform plate damage", "Taste pore closure", "Auditory tube pressure"], 0, "The notes connect these symptoms to vitreous changes."]
      ]
    }
  };

  var app = APPS[window.CH12_APP_ID];
  if (!app) {
    document.body.innerHTML = "<p>Chapter 12 app configuration not found.</p>";
    return;
  }

  var style = document.createElement("style");
  style.textContent = `
    :root{--teal:#0f766e;--teal2:#ccfbf1;--ink:#0f172a;--muted:#64748b;--paper:#FAF9F5;--card:#fff;--soft:#f1f5f9;--shadow:4px 4px 0 #0f172a;--red:#dc2626;--green:#16a34a;--amber:#f59e0b}
    *{box-sizing:border-box}body{margin:0;font-family:"Hanken Grotesk",sans-serif;color:var(--ink);background:radial-gradient(900px 500px at 80% -10%,rgba(15,118,110,.08),transparent),var(--paper);line-height:1.5}.topbar{position:sticky;top:0;z-index:20;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;padding:14px 24px;background:rgba(255,255,255,.92);border-bottom:2px solid var(--ink);backdrop-filter:blur(8px)}h1,h2,h3{font-family:"Bricolage Grotesque",sans-serif}.brand h1{font-size:1.25rem;margin:0;color:var(--teal);font-weight:900;letter-spacing:0}.brand p{margin:2px 0 0;color:var(--muted);font-size:.78rem}.topbar-right{display:flex;align-items:center;gap:12px}.switch{display:flex;align-items:center;gap:8px;font-size:.8rem;font-weight:800;cursor:pointer}.switch input{display:none}.track{width:44px;height:24px;border-radius:12px;background:#cbd5e1;border:1.5px solid var(--ink);position:relative}.track:after{content:"";position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:var(--ink);transition:.2s}.switch input:checked+.track{background:var(--teal2)}.switch input:checked+.track:after{transform:translateX(20px)}.btn-link,.tab-btn,.card-btn,.choice-btn{border:1.5px solid var(--ink);border-radius:8px;padding:9px 13px;background:#fff;box-shadow:2px 2px 0 var(--ink);font-family:inherit;font-weight:900;color:var(--ink);text-decoration:none;cursor:pointer}.layout{max-width:1400px;margin:0 auto;padding:20px 24px 40px;display:grid;grid-template-columns:340px 1fr;gap:20px}.panel{background:var(--card);border:2px solid var(--ink);border-radius:10px;box-shadow:var(--shadow);margin-bottom:20px}.panel h2{font-size:.9rem;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin:0;padding:14px 16px 0}.body{padding:16px}.info-box{background:var(--soft);border:1.5px solid var(--ink);border-radius:8px;padding:14px;font-size:.84rem}.info-box b{color:var(--teal)}.tab-bar{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;border-bottom:2px solid var(--ink);padding-bottom:8px}.tab-btn.active,.card-btn.active{background:var(--teal2);color:var(--teal);box-shadow:none;transform:translate(2px,2px)}.stage{border:2px solid var(--ink);border-radius:10px;background:#fff;padding:18px;min-height:480px}.stage-title{text-align:center;color:var(--teal);font-size:1rem;font-weight:900;margin:0 0 12px}.tab-content{display:none}.tab-content.active{display:block}.image-frame{border:2px solid var(--ink);border-radius:10px;overflow:hidden;background:#fff;margin-top:14px}.image-frame img{display:block;width:100%;height:auto}.caption{border-top:1.5px solid var(--ink);padding:10px 12px;color:var(--muted);font-size:.78rem}.card-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px}.concept-card{border:1.5px solid var(--ink);border-radius:8px;background:#fff;padding:12px;box-shadow:2px 2px 0 var(--ink)}.concept-card b{display:block;color:var(--teal);margin-bottom:5px}.flow{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px}.flow-step{border:1.5px solid var(--ink);border-radius:8px;padding:12px;background:#fff;text-align:center;font-weight:900;min-height:70px;display:flex;align-items:center;justify-content:center}.choice-row{display:flex;gap:10px;flex-wrap:wrap}.feedback{display:none;margin-top:14px}.feedback.ok{display:block;background:#dcfce7;border-color:var(--green)}.feedback.no{display:block;background:#fee2e2;border-color:var(--red)}.corti-widget{margin:14px auto 0;background:#1e293b;color:#f1f5f9;border:1px solid #334155;border-radius:12px;width:100%;max-width:1000px;padding:2rem;box-shadow:0 10px 25px rgba(0,0,0,.5);font-family:"Instrument Sans","Hanken Grotesk",sans-serif}.corti-widget h4{margin:0;color:#f1f5f9;font-size:1.75rem;font-weight:700;letter-spacing:0;line-height:1.1}.corti-widget p{margin:.5rem 0 0;color:#94a3b8;font-size:.95rem}.corti-header{margin-bottom:2rem;border-bottom:1px solid #334155;padding-bottom:1rem}.corti-controls{display:grid;grid-template-columns:1fr 1fr;gap:2rem;margin-bottom:2rem}.corti-control{display:flex;flex-direction:column;gap:.5rem}.corti-control label{font-weight:600;font-size:.9rem;color:#38bdf8;text-transform:uppercase;letter-spacing:.05em}.corti-control input[type=range]{-webkit-appearance:none;width:100%;background:#0f172a;height:6px;border-radius:3px;outline:none}.corti-control input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:18px;height:18px;border-radius:50%;background:#38bdf8;cursor:pointer;box-shadow:0 0 10px rgba(56,189,248,.5)}.corti-readout{display:flex;justify-content:space-between;font-size:.85rem;color:#94a3b8}.corti-readout b{color:#f1f5f9;font-weight:600}.corti-canvas-wrap{position:relative;width:100%;height:400px;background:#0f172a;border:1px solid #334155;border-radius:8px;overflow:hidden}.corti-canvas{display:block;width:100%;height:100%}.corti-legend{display:flex;gap:1.5rem;margin-top:1.5rem;font-size:.9rem;justify-content:center;flex-wrap:wrap}.corti-legend span{display:flex;align-items:center;gap:.5rem}.corti-dot{width:12px;height:12px;border-radius:50%;display:inline-block}.corti-dot.fluid{background:#38bdf8;box-shadow:0 0 8px #38bdf8}.corti-dot.nerve{background:#f59e0b;box-shadow:0 0 8px #f59e0b}.ap-study-section{max-width:1400px;margin:8px auto 40px;padding:0 24px}.ap-study-card{background:#fff;border:2px solid var(--ink);border-radius:10px;box-shadow:var(--shadow);padding:22px 24px}.ap-study-head{display:flex;align-items:center;gap:14px;flex-wrap:wrap}.ap-study-head h2{font-size:1.15rem;color:var(--teal);margin:0}.ap-hub-link{margin-left:auto}.footer-note{max-width:1400px;margin:0 auto;padding:10px 24px 30px;color:var(--muted);font-size:.74rem}@media(max-width:900px){.layout{grid-template-columns:1fr}.corti-controls{grid-template-columns:1fr}.corti-widget{padding:1.25rem}.corti-widget h4{font-size:1.35rem}}`;
  document.head.appendChild(style);

  document.title = app.title + " | Chapter 12 Study Guide";
  document.body.innerHTML = `
    <header class="topbar"><div class="brand"><h1>${app.title}</h1><p>${app.subtitle} · Ch 12</p></div><div class="topbar-right"><label class="switch"><input type="checkbox" id="eli5Toggle"><span class="track"></span><span id="modeLabel">Professional</span></label><a class="btn-link" href="index.html">Hub</a></div></header>
    <div class="layout"><aside><section class="panel"><h2>Learning Guide</h2><div class="body"><p style="font-size:.8rem;color:var(--muted);margin:0 0 10px">${app.intro}</p><div class="info-box" id="infoBox"></div></div></section><section class="panel"><h2>Core Concepts</h2><div class="body"><div class="card-grid" id="cardGrid"></div></div></section></aside><main><div class="tab-bar" id="tabBar"></div><section class="panel"><h2>Interactive Notes</h2><div class="body"><div class="stage"><h3 class="stage-title" id="tabTitle"></h3><div class="info-box" id="tabBody"></div><div id="flowHost"></div><div id="imageHost"></div><div id="interactiveHost"></div></div></div></section><section class="panel"><h2>Quick Case Check</h2><div class="body"><div class="stage" style="min-height:220px"><h3 class="stage-title" id="caseTitle"></h3><p id="caseText"></p><div class="choice-row"><button class="choice-btn" onclick="CH12.answerCase('a')">Choice A</button><button class="choice-btn" onclick="CH12.answerCase('b')">Choice B</button><button class="choice-btn" onclick="CH12.answerCase('c')">Choice C</button><button class="choice-btn" onclick="CH12.nextCase()">Next Case</button></div><div class="info-box feedback" id="caseFeedback"></div></div></div></section></main></div>
    <section class="ap-study-section"><div class="ap-study-card"><div class="ap-study-head"><h2>Test Yourself - ${app.title}</h2><div id="apHud"></div><a class="btn-link ap-hub-link" href="index.html">Hub</a></div><p style="color:var(--muted);font-size:.86rem">Scored review based on BIOL 2401 Chapter 12 notes.</p><div id="apQuiz"></div></div></section><div class="footer-note">* Interactive study aid for BIOL 2401 Chapter 12. Verify against lecture notes and textbook figures.</div>`;

  var eli5 = false;
  var tab = 0;
  var caseIndex = 0;
  var cortiAnimation = null;

  function showTab(i) {
    tab = i;
    var t = app.tabs[i];
    Array.from(document.querySelectorAll(".tab-btn")).forEach(function (b, idx) { b.classList.toggle("active", idx === i); });
    document.getElementById("modeLabel").textContent = eli5 ? "ELI5 (Simple)" : "Professional";
    document.getElementById("infoBox").innerHTML = "<b>" + t.title + ":</b> " + (eli5 ? t.eli5 : t.body);
    document.getElementById("tabTitle").textContent = t.title;
    document.getElementById("tabBody").textContent = eli5 ? t.eli5 : t.body;
    var flow = document.getElementById("flowHost");
    flow.innerHTML = "";
    if (i === 0 && app.cards.length) {
      flow.innerHTML = '<div class="flow" style="margin-top:14px">' + app.cards.slice(0, 5).map(function (c) { return '<div class="flow-step">' + c[0] + '</div>'; }).join("") + "</div>";
    }
    renderImage();
    renderInteractive();
  }

  function renderInteractive() {
    var host = document.getElementById("interactiveHost");
    if (cortiAnimation) {
      cancelAnimationFrame(cortiAnimation);
      cortiAnimation = null;
    }
    host.innerHTML = "";
    if (!app.interactiveTabs || app.interactiveTabs[tab] !== "corti-transduction") return;
    host.innerHTML = `
      <div class="corti-widget">
        <div class="corti-header">
          <h4>Organ of Corti: Vibration to Nerve Signal</h4>
          <p>Adjust sound parameters to observe basilar membrane mechanics and neural transduction.</p>
        </div>
        <div class="corti-controls">
          <div class="corti-control"><label for="cortiFrequency">Sound Frequency (Hz)</label><input type="range" id="cortiFrequency" min="200" max="20000" value="2000"><div class="corti-readout"><span>Apex (low)</span><b id="cortiFreqVal">2000 Hz</b><span>Base (high)</span></div></div>
          <div class="corti-control"><label for="cortiAmplitude">Amplitude (Volume)</label><input type="range" id="cortiAmplitude" min="0" max="100" value="50"><div class="corti-readout"><span>Quiet</span><b id="cortiAmpVal">50%</b><span>Loud</span></div></div>
        </div>
        <div class="corti-canvas-wrap"><canvas class="corti-canvas" id="cortiCanvas"></canvas></div>
        <div class="corti-legend"><span><i class="corti-dot fluid"></i>Fluid wave (perilymph)</span><span><i class="corti-dot nerve"></i>Neural action potential</span></div>
      </div>`;
    initCortiSimulation();
  }

  function initCortiSimulation() {
    var canvas = document.getElementById("cortiCanvas");
    var freqSlider = document.getElementById("cortiFrequency");
    var ampSlider = document.getElementById("cortiAmplitude");
    var freqVal = document.getElementById("cortiFreqVal");
    var ampVal = document.getElementById("cortiAmpVal");
    if (!canvas || !freqSlider || !ampSlider) return;
    var ctx = canvas.getContext("2d");
    var time = 0;

    function resizeCanvas() {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    }
    resizeCanvas();

    function draw() {
      if (!document.body.contains(canvas)) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var width = canvas.width;
      var height = canvas.height;
      var centerY = height / 2;
      var freqRaw = parseFloat(freqSlider.value);
      var amplitudeRaw = parseFloat(ampSlider.value);
      freqVal.textContent = freqRaw + " Hz";
      ampVal.textContent = amplitudeRaw + "%";
      var normalizedFreq = (Math.log10(freqRaw) - Math.log10(200)) / (Math.log10(20000) - Math.log10(200));
      var peakX = width * (1 - normalizedFreq);
      var amp = (amplitudeRaw / 100) * 40;
      time += 0.05 + (normalizedFreq * 0.1);

      ctx.fillStyle = "rgba(148, 163, 184, 0.2)";
      ctx.beginPath();
      ctx.moveTo(0, centerY - 60);
      ctx.lineTo(width, centerY - 50);
      ctx.lineTo(width, centerY - 30);
      ctx.lineTo(0, centerY - 30);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0, centerY);
      var points = [];
      for (var x = 0; x <= width; x += 5) {
        var distanceToPeak = Math.abs(x - peakX);
        var envelope = Math.max(0, 1 - (distanceToPeak / (width * 0.3)));
        var wave = Math.sin((x * 0.05) - time) * amp * envelope;
        var y = centerY + wave;
        points.push({ x: x, y: y, wave: wave, envelope: envelope });
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "#38BDF8";
      ctx.lineWidth = 4;
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#38BDF8";
      ctx.stroke();
      ctx.shadowBlur = 0;

      for (var i = 0; i < points.length; i += 8) {
        var pt = points[i];
        if (pt.envelope <= 0.1) continue;
        ctx.fillStyle = "#64748B";
        ctx.fillRect(pt.x - 3, pt.y - 20, 6, 20);
        var bend = amp ? (pt.wave / amp) * 10 : 0;
        ctx.beginPath();
        ctx.moveTo(pt.x, pt.y - 20);
        ctx.quadraticCurveTo(pt.x + bend, pt.y - 30, pt.x + bend, pt.y - 35);
        ctx.strokeStyle = "#CBD5E1";
        ctx.lineWidth = 2;
        ctx.stroke();
        if (pt.wave < -5 && amplitudeRaw > 10) {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y + 15 + Math.random() * 20, 3, 0, Math.PI * 2);
          ctx.fillStyle = "#F59E0B";
          ctx.shadowBlur = 10;
          ctx.shadowColor = "#F59E0B";
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.beginPath();
          ctx.moveTo(pt.x, pt.y);
          ctx.lineTo(pt.x, pt.y + 40);
          ctx.strokeStyle = "rgba(245, 158, 11, 0.3)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      cortiAnimation = requestAnimationFrame(draw);
    }
    window.addEventListener("resize", resizeCanvas, { passive: true });
    draw();
  }

  function renderImage() {
    var host = document.getElementById("imageHost");
    var selectedImage = app.tabImages ? app.tabImages[tab] : null;
    if (selectedImage === null) { host.innerHTML = ""; return; }
    var images = selectedImage ? [selectedImage] : (app.image ? [{ src: app.image, alt: app.imageAlt }] : []);
    if (!selectedImage && app.secondaryImage) images.push({ src: app.secondaryImage, alt: "Secondary reference image" });
    host.innerHTML = images.map(function (img) {
      return '<div class="image-frame"><img src="' + img.src + '" alt="' + img.alt + '"><div class="caption">' + img.alt + '</div></div>';
    }).join("");
  }

  function renderCards() {
    document.getElementById("cardGrid").innerHTML = app.cards.map(function (c) {
      return '<div class="concept-card"><b>' + c[0] + '</b><span>' + c[1] + '</span></div>';
    }).join("");
  }

  function renderTabs() {
    document.getElementById("tabBar").innerHTML = app.tabs.map(function (t, i) {
      return '<button class="tab-btn" onclick="CH12.showTab(' + i + ')">' + (i + 1) + ' · ' + t.title + '</button>';
    }).join("");
  }

  function renderCase() {
    var c = app.cases[caseIndex];
    document.getElementById("caseTitle").textContent = "Case " + (caseIndex + 1);
    document.getElementById("caseText").textContent = c[0];
    var buttons = document.querySelectorAll(".choice-btn");
    buttons[0].textContent = "A · " + c[1];
    buttons[1].textContent = "B · Related but wrong";
    buttons[2].textContent = "C · Not this pathway";
    document.getElementById("caseFeedback").className = "info-box feedback";
    document.getElementById("caseFeedback").innerHTML = "";
  }

  window.CH12 = {
    showTab: showTab,
    nextCase: function () { caseIndex = (caseIndex + 1) % app.cases.length; renderCase(); },
    answerCase: function (choice) {
      var ok = choice === "a";
      var fb = document.getElementById("caseFeedback");
      fb.className = "info-box feedback " + (ok ? "ok" : "no");
      fb.innerHTML = "<b>" + (ok ? "Correct." : "Try again.") + "</b> " + app.cases[caseIndex][2];
      if (window.APTools) APTools.recordAnswer(window.CH12_APP_ID, ok, { xp: ok ? 20 : 5, questionId: "case-" + caseIndex + "-" + choice });
    }
  };

  document.getElementById("eli5Toggle").addEventListener("change", function (e) {
    eli5 = e.target.checked;
    showTab(tab);
  });

  renderTabs();
  renderCards();
  renderCase();
  showTab(0);

  var bank = app.quiz.map(function (q, i) {
    return { id: window.CH12_APP_ID + "-" + i, bloom: i < 3 ? "Remember" : "Apply", outcome: app.title, q: q[0], choices: q[1], answer: q[2], why: q[3] };
  });
  APTools.init({ id: window.CH12_APP_ID, title: app.title, unit: "Ch 12 · General and Special Senses" });
  APTools.mountHUD("#apHud", window.CH12_APP_ID);
  APTools.mountQuiz({ container: "#apQuiz", moduleId: window.CH12_APP_ID, bank: bank, length: 8 });
})();
