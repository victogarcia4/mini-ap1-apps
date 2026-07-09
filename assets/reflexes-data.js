"use strict";

window.REFLEX_BANK = [
  { id:"ref1", bloom:"Remember", outcome:"Reflex Arc Sequence",
    q:"What is the correct anatomical sequence of components in a reflex arc?",
    choices:[
      "Sensory receptor → Sensory neuron → Integration center → Motor neuron → Effector",
      "Sensory neuron → Sensory receptor → Integration center → Effector → Motor neuron",
      "Integration center → Sensory receptor → Sensory neuron → Motor neuron → Effector",
      "Effector → Motor neuron → Integration center → Sensory neuron → Sensory receptor"
    ],
    answer:0, why:"The reflex pathway starts at the sensory receptor, travels along the afferent sensory neuron into the spinal cord (integration center), and leaves via the efferent motor neuron to stimulate the effector muscle." },
  { id:"ref2", bloom:"Understand", outcome:"Monosynaptic Synapse count",
    q:"A monosynaptic reflex arc is characterized by:",
    choices:[
      "Only two neurons and a single synapse in the CNS",
      "Multiple interneurons linking the sensory and motor neurons",
      "An impulse that travels up to the brain before producing a response",
      "Autonomic nervous system components controlling smooth muscle glands"
    ],
    answer:0, why:"Monosynaptic means 'one synapse'. These paths consist of only two neurons (one sensory and one motor) directly synapsing with each other." },
  { id:"ref3", bloom:"Remember", outcome:"Patellar Receptor Type",
    q:"In the patellar (knee-jerk) tendon stretch reflex, the specialized sensory receptor is the:",
    choices:["Muscle spindle","Golgi tendon organ","Tactile corpuscle","Nociceptor"],
    answer:0, why:"Muscle spindles are stretch receptors located within skeletal muscles that detect changes in muscle length. Striking the tendon stretches the quad, stimulating the spindles." },
  { id:"ref4", bloom:"Understand", outcome:"Patellar Reflex Classification",
    q:"The knee-jerk (patellar) reflex is classified as a:",
    choices:[
      "Monosynaptic somatic stretch reflex",
      "Polysynaptic visceral autonomic reflex",
      "Polysynaptic somatic withdrawal reflex",
      "Monosynaptic contralateral extensor reflex"
    ],
    answer:0, why:"The patellar reflex is somatic (involves skeletal muscle), spinal (integrated in the cord), monosynaptic (no interneurons), and a stretch reflex (helps maintain muscle length)." },
  { id:"ref5", bloom:"Understand", outcome:"Withdrawal Reflex Complexity",
    q:"The flexor withdrawal reflex (e.g., pulling a hand away from a hot surface) is polysynaptic because it:",
    choices:[
      "Involves one or more interneurons in the spinal cord gray matter",
      "Directly synapses a sensory neuron with a motor neuron without any gap",
      "Requires conscious decision-making in the cerebral cortex",
      "Relies entirely on the autonomic sympathetic chain ganglia"
    ],
    answer:0, why:"Polysynaptic reflexes contain interneurons situated between the sensory and motor neurons, creating multiple synaptic connections." },
  { id:"ref6", bloom:"Analyze", outcome:"Interneuron Function",
    q:"What is the primary role of the interneuron in a polysynaptic reflex arc?",
    choices:[
      "To process and relay impulses between sensory and motor neurons within the CNS",
      "To detect the physical stimulus at the skin surface",
      "To myelinate the axons of peripheral somatic nerves",
      "To act as the effector causing muscle fibers to contract"
    ],
    answer:0, why:"Interneurons are located entirely within the CNS (spinal cord gray matter) and process and transmit signals between afferent and efferent neurons." },
  { id:"ref7", bloom:"Remember", outcome:"Ipsilateral Definition",
    q:"If a reflex response occurs on the same side of the body as the stimulus, it is called:",
    choices:["Ipsilateral","Contralateral","Visceral","Autonomic"],
    answer:0, why:"'Ipsi' means same. An ipsilateral reflex is one where the incoming sensory input and outgoing motor command occur on the same side." },
  { id:"ref8", bloom:"Apply", outcome:"Crossed-Extensor Mechanism",
    q:"When stepping on a tack, the injured leg pulls away (flexes) while the opposite leg extends to support body weight. This contralateral response is the:",
    choices:["Crossed-extensor reflex","Patellar tendon reflex","Visceral autonomic reflex","Stretch receptor reflex"],
    answer:0, why:"The crossed-extensor reflex is a contralateral reflex arc that helps maintain balance by extending the opposite limb while the damaged limb withdraws." },
  { id:"ref9", bloom:"Apply", outcome:"Hyporeflexia localization",
    q:"A patient exhibits hyporeflexia (diminished/absent reflexes) in the lower limbs. This clinical indicator pointing to damage in the L2-L4 levels represents lesion in:",
    choices:[
      "Lower Motor Neurons (LMN) / peripheral spinal nerves",
      "Upper Motor Neurons (UMN) / brain stem tracts",
      "The cerebral motor cortex of the precentral gyrus",
      "The dorsal column ascending sensory pathways"
    ],
    answer:0, why:"Hyporeflexia is typical of Lower Motor Neuron (LMN) lesions, which block impulses from reaching the effector muscles (e.g. from herniated discs, nerve entrapment)." },
  { id:"ref10", bloom:"Apply", outcome:"Hyperreflexia localization",
    q:"Hyperreflexia (exaggerated reflexes with clonus flutters) in a stroke patient indicates damage to:",
    choices:[
      "Upper Motor Neurons (UMN) in the brain or spinal descending tracts",
      "Lower Motor Neurons in the ventral horn",
      "Specialized proprioceptors like Golgi tendon organs",
      "Afferent sensory root pathways"
    ],
    answer:0, why:"Upper Motor Neuron (UMN) lesions remove the descending inhibitory damping signals from the brain, leaving the local spinal reflex arcs overactive." },
  { id:"ref11", bloom:"Understand", outcome:"Brain Involvement in Spinal Reflexes",
    q:"Which statement accurately describes the brain's involvement in a somatic spinal reflex?",
    choices:[
      "The reflex occurs without the brain, but sensory signals are sent up ascending tracts to inform the brain afterward",
      "The brain must approve the motor command before the effector muscle can contract",
      "The brain is completely unaware that a spinal reflex has occurred",
      "Descending motor tracts must block all reflexes from reaching the effector"
    ],
    answer:0, why:"Spinal reflexes occur automatically in the cord. However, the sensory signal also ascends the cord to notify the brain, allowing you to feel the tap or pain after the movement has already completed." },
  { id:"ref12", bloom:"Remember", outcome:"Proprioceptor Class",
    q:"Muscle spindles and Golgi tendon organs are classified as which type of sensory receptors?",
    choices:["Proprioceptors","Nociceptor pain receptors","Thermoreceptors","Photoreceptors"],
    answer:0, why:"Proprioceptors are internal sensors that track body position, muscle length, and tendon tension to help maintain posture and balance." }
];
