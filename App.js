import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StatusBar,
  Dimensions
} from 'react-native';

// Imported data model (mocked here based on content.json for single-file deployment)
const JOINT_DATA = {
  taxonomy: {
    fibrous: [
      { name: 'Suture', structure: 'Short fibrous CT fibers', function: 'Synarthrotic', movement: 'None', example: 'Skull bones' },
      { name: 'Syndesmosis', structure: 'Fibrous cord / ligament', function: 'Amphiarthrotic', movement: 'Give / slight movement', example: 'Distal tibiofibular joint' },
      { name: 'Gomphosis', structure: 'Short periodontal ligament', function: 'Synarthrotic', movement: 'None', example: 'Teeth in sockets' }
    ],
    cartilaginous: [
      { name: 'Synchondrosis', structure: 'Plate of hyaline cartilage', function: 'Synarthrotic', movement: 'None (ossifies)', example: '1st rib and manubrium; epiphyseal plate' },
      { name: 'Symphysis', structure: 'Pad of fibrocartilage', function: 'Amphiarthrotic', movement: 'Limited movement', example: 'Intervertebral discs; pubic symphysis' }
    ],
    synovial: [
      { type: 'Ball-and-socket', description: 'Globular head fits into cup socket', movement: 'Multiaxial', examples: 'Shoulder, Hip', actions: ['Flexion', 'Extension', 'Abduction', 'Adduction', 'Circumduction', 'Rotation'] },
      { type: 'Condyloid', description: 'Ovoid condyle fits in elliptical cavity', movement: 'Biaxial', examples: 'Wrists, Knuckles', actions: ['Flexion', 'Extension', 'Abduction', 'Adduction', 'Circumduction'] },
      { type: 'Plane', description: 'Flat or slightly curved surfaces sliding', movement: 'Nonaxial', examples: 'Intercarpals, Patellofemur', actions: ['Gliding'] },
      { type: 'Hinge', description: 'Convex surface fits in concave recess', movement: 'Uniaxial', examples: 'Elbow, Knee (functional)', actions: ['Flexion', 'Extension'] },
      { type: 'Pivot', description: 'Cylindrical surface rotates inside ring', movement: 'Uniaxial', examples: 'Atlantoaxial joint (neck)', actions: ['Rotation'] },
      { type: 'Saddle', description: 'Interlocking concavo-convex surfaces', movement: 'Biaxial', examples: 'Thumb carpometacarpal', actions: ['Flexion', 'Extension', 'Abduction', 'Adduction', 'Circumduction', 'Opposition'] }
    ]
  },
  movements: [
    { term: 'Flexion', desc: 'Decreasing the angle between 2 bones' },
    { term: 'Extension', desc: 'Increasing the angle between 2 bones' },
    { term: 'Hyperextension', desc: 'Increasing the angle greater than anatomical position' },
    { term: 'Abduction', desc: 'Moving a limb away from the midline' },
    { term: 'Adduction', desc: 'Moving a limb toward the midline' },
    { term: 'Rotation', desc: 'Turning a bone along its long axis' },
    { term: 'Circumduction', desc: 'Moving a limb in a circular, cone-shaped path' },
    { term: 'Opposition', desc: 'Specialized movement of the thumb touching other fingers' }
  ]
};

// 1. Module Taxonomy Screen
const TaxonomyScreen = () => {
  const [activeTab, setActiveTab] = useState('structure');
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>The Taxonomy of Joints</Text>
      <View style={styles.tabHeader}>
        <TouchableOpacity 
          style={[styles.miniTab, activeTab === 'structure' && styles.miniTabActive]} 
          onPress={() => setActiveTab('structure')}
        >
          <Text style={[styles.miniTabText, activeTab === 'structure' && styles.miniTabActiveText]}>Structural Class</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.miniTab, activeTab === 'function' && styles.miniTabActive]} 
          onPress={() => setActiveTab('function')}
        >
          <Text style={[styles.miniTabText, activeTab === 'function' && styles.miniTabActiveText]}>Functional Class</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        {activeTab === 'structure' ? (
          <View>
            <Text style={styles.subtext}>Classified by the type of tissue binding the bones together:</Text>
            
            <View style={styles.card}>
              <Text style={styles.cardHeader}>Fibrous Joints</Text>
              <Text style={styles.cardSub}>No joint cavity; held by dense connective tissue.</Text>
              {JOINT_DATA.taxonomy.fibrous.map((item, idx) => (
                <View key={idx} style={styles.itemRow}>
                  <Text style={styles.itemLabel}>{item.name}:</Text>
                  <Text style={styles.itemVal}>{item.example} ({item.function})</Text>
                </View>
              ))}
            </View>

            <View style={styles.card}>
              <Text style={styles.cardHeader}>Cartilaginous Joints</Text>
              <Text style={styles.cardSub}>No joint cavity; bound by hyaline cartilage or fibrocartilage.</Text>
              {JOINT_DATA.taxonomy.cartilaginous.map((item, idx) => (
                <View key={idx} style={styles.itemRow}>
                  <Text style={styles.itemLabel}>{item.name}:</Text>
                  <Text style={styles.itemVal}>{item.example} ({item.function})</Text>
                </View>
              ))}
            </View>
          </View>
        ) : (
          <View>
            <Text style={styles.subtext}>Classified by the degree of movement possible at the junction:</Text>
            
            <View style={styles.card}>
              <Text style={styles.cardHeader}>Synarthroses (Immovable)</Text>
              <Text style={styles.cardSub}>Examples: Sutures, Gomphosis, and Synchondrosis once ossified.</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardHeader}>Amphiarthroses (Slightly Movable)</Text>
              <Text style={styles.cardSub}>Examples: Symphysis (Pubic symphysis, vertebrae) and Syndesmosis.</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardHeader}>Diarthroses (Freely Movable)</Text>
              <Text style={styles.cardSub}>Examples: All Synovial joints (Ball-and-socket, hinge, saddle, etc.)</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

// 2. Module Synovial Anatomy Screen
const SynovialAnatomyScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.sectionTitle}>Synovial Joint Deep Dive</Text>
      <Text style={styles.subtext}>Typical anatomical structures that constitute a freely movable synovial joint:</Text>
      
      <View style={styles.anatomyModelContainer}>
        {/* Placeholder for the schematic SVG / Diagram */}
        <Text style={styles.anatomyModelText}>[ Synovial Joint Cross-Section Diagram ]</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardHeader}>General Anatomical Features</Text>
        
        <View style={styles.featureBlock}>
          <Text style={styles.featureName}>Articular Cartilage</Text>
          <Text style={styles.featureDesc}>Hyaline cartilage covering bone ends to absorb shock and reduce friction.</Text>
        </View>

        <View style={styles.featureBlock}>
          <Text style={styles.featureName}>Joint Capsule</Text>
          <Text style={styles.featureDesc}>Outer fibrous layer continuous with periosteum + inner synovial membrane.</Text>
        </View>

        <View style={styles.featureBlock}>
          <Text style={styles.featureName}>Synovial Membrane & Fluid</Text>
          <Text style={styles.featureDesc}>Secretes clear, viscous fluid that lubricates and nourishes cartilage.</Text>
        </View>

        <View style={styles.featureBlock}>
          <Text style={styles.featureName}>Reinforcing Ligaments</Text>
          <Text style={styles.featureDesc}>Fibrous bands joining bone to bone to reinforce the articular capsule.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

// 3. Module Motion Lab Screen
const MotionLabScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Synovial Joint Motion Lab</Text>
      <Text style={styles.subtext}>Dictionary of range of motion and synovial joint mechanical structures:</Text>
      
      <FlatList 
        data={JOINT_DATA.taxonomy.synovial}
        keyExtractor={(item) => item.type}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardTitleRow}>
              <Text style={styles.cardHeader}>{item.type}</Text>
              <Text style={styles.badge}>{item.movement}</Text>
            </View>
            <Text style={styles.cardSub}>{item.description}</Text>
            <Text style={styles.cardText}><b>Examples:</b> {item.examples}</Text>
            <View style={styles.actionsContainer}>
              {item.actions.map((act, i) => (
                <Text key={i} style={styles.actionChip}>{act}</Text>
              ))}
            </View>
          </View>
        )}
      />
    </View>
  );
};

// 4. Module Quiz Mode (Predictive Learning Screen)
const QuizScreen = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const quizQuestions = [
    {
      question: "Which type of synovial joint permits all angular movements and rotation (multiaxial)?",
      options: ["Hinge", "Ball-and-socket", "Pivot", "Saddle"],
      answer: "Ball-and-socket",
      rationale: "Ball-and-socket joints, like the shoulder and hip, allow the most freedom of movement in all planes."
    },
    {
      question: "Given a joint made of a flat or slightly curved surface permitting only sliding or back-and-forth movement, what is the movement type?",
      options: ["Biaxial", "Uniaxial", "Nonaxial (Gliding)", "Multiaxial"],
      answer: "Nonaxial (Gliding)",
      rationale: "Plane/gliding joints are nonaxial, allowing flat bones (like carpals) to slide past each other."
    },
    {
      question: "Which of the following describes the joint between the first rib and the manubrium?",
      options: ["Symphysis", "Synchondrosis", "Syndesmosis", "Suture"],
      answer: "Synchondrosis",
      rationale: "A synchondrosis consists of a temporary plate of hyaline cartilage, such as the 1st rib to manubrium articulation."
    }
  ];

  const handleOptionPress = (opt) => {
    if (isAnswered) return;
    setSelectedOpt(opt);
    setIsAnswered(true);
    if (opt === quizQuestions[currentQ].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelectedOpt(null);
    setIsAnswered(false);
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      // Reset quiz
      setCurrentQ(0);
      setScore(0);
    }
  };

  const activeQuestion = quizQuestions[currentQ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Predictive Learning Quiz</Text>
      <Text style={styles.subtext}>Analyze structural mechanics to predict joint movement class.</Text>
      
      <View style={styles.card}>
        <View style={styles.cardTitleRow}>
          <Text style={styles.quizProgress}>Question {currentQ + 1} of {quizQuestions.length}</Text>
          <Text style={styles.quizScore}>Score: {score}</Text>
        </View>
        <Text style={styles.quizQuestionText}>{activeQuestion.question}</Text>

        {activeQuestion.options.map((opt, i) => {
          let btnStyle = styles.optButton;
          let textStyle = styles.optText;
          if (isAnswered) {
            if (opt === activeQuestion.answer) {
              btnStyle = [styles.optButton, styles.optCorrect];
              textStyle = [styles.optText, styles.optTextAnswered];
            } else if (opt === selectedOpt) {
              btnStyle = [styles.optButton, styles.optWrong];
              textStyle = [styles.optText, styles.optTextAnswered];
            } else {
              btnStyle = [styles.optButton, styles.optDisabled];
            }
          }
          return (
            <TouchableOpacity 
              key={i} 
              style={btnStyle}
              onPress={() => handleOptionPress(opt)}
              disabled={isAnswered}
            >
              <Text style={textStyle}>{opt}</Text>
            </TouchableOpacity>
          );
        })}

        {isAnswered && (
          <View style={styles.rationaleBox}>
            <Text style={styles.rationaleHeader}>Rationale:</Text>
            <Text style={styles.rationaleText}>{activeQuestion.rationale}</Text>
            <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
              <Text style={styles.nextBtnText}>
                {currentQ === quizQuestions.length - 1 ? "Restart Quiz" : "Next Question"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

// 5. Main App Nav Container
export default function App() {
  const [currentScreen, setCurrentScreen] = useState('taxonomy');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />
      
      <View style={styles.headerBar}>
        <Text style={styles.appTitle}>JointScribe</Text>
        <Text style={styles.appSubtitle}>BIOL 2401 · Ch 8</Text>
      </View>

      <View style={styles.contentArea}>
        {currentScreen === 'taxonomy' && <TaxonomyScreen />}
        {currentScreen === 'anatomy' && <SynovialAnatomyScreen />}
        {currentScreen === 'motion' && <MotionLabScreen />}
        {currentScreen === 'quiz' && <QuizScreen />}
      </View>

      {/* Main Tab Bar Navigation */}
      <View style={styles.tabBar}>
        <TouchableOpacity 
          style={[styles.tabButton, currentScreen === 'taxonomy' && styles.tabActive]}
          onPress={() => setCurrentScreen('taxonomy')}
        >
          <Text style={[styles.tabLabel, currentScreen === 'taxonomy' && styles.tabLabelActive]}>Taxonomy</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.tabButton, currentScreen === 'anatomy' && styles.tabActive]}
          onPress={() => setCurrentScreen('anatomy')}
        >
          <Text style={[styles.tabLabel, currentScreen === 'anatomy' && styles.tabLabelActive]}>Anatomy</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.tabButton, currentScreen === 'motion' && styles.tabActive]}
          onPress={() => setCurrentScreen('motion')}
        >
          <Text style={[styles.tabLabel, currentScreen === 'motion' && styles.tabLabelActive]}>Motion Lab</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.tabButton, currentScreen === 'quiz' && styles.tabActive]}
          onPress={() => setCurrentScreen('quiz')}
        >
          <Text style={[styles.tabLabel, currentScreen === 'quiz' && styles.tabLabelActive]}>Quiz</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// 6. Stylesheet (Matching notebook/Riso-zine aesthetic: Clean lines, teal accent)
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  headerBar: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1.5,
    borderBottomColor: '#0f172a',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  appTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0f766e',
    fontFamily: 'System',
    letterSpacing: -0.5,
  },
  appSubtitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  contentArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: 6,
  },
  subtext: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 16,
    lineHeight: 18,
  },
  scroll: {
    flex: 1,
  },
  tabHeader: {
    flexDirection: 'row',
    marginBottom: 14,
    backgroundColor: '#e2e8f0',
    borderRadius: 8,
    padding: 3,
  },
  miniTab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 6,
  },
  miniTabActive: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  miniTabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748b',
  },
  miniTabActiveText: {
    color: '#0f766e',
  },
  card: {
    backgroundColor: '#ffffff',
    borderWidth: 1.5,
    borderColor: '#0f172a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#0f172a',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 0,
    elevation: 3,
  },
  cardHeader: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0f766e',
    marginBottom: 4,
  },
  cardSub: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 12,
    lineHeight: 16,
  },
  cardText: {
    fontSize: 13,
    color: '#0f172a',
    marginBottom: 8,
  },
  cardTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  badge: {
    fontSize: 10,
    fontWeight: '700',
    color: '#0f766e',
    backgroundColor: '#ccfbf1',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    textTransform: 'uppercase',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: '#cbd5e1',
  },
  itemLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0f172a',
  },
  itemVal: {
    fontSize: 13,
    color: '#334155',
    flex: 1,
    textAlign: 'right',
    marginLeft: 10,
  },
  anatomyModelContainer: {
    height: 180,
    backgroundColor: '#f1f5f9',
    borderWidth: 1.5,
    borderColor: '#0f172a',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  anatomyModelText: {
    color: '#64748b',
    fontWeight: '700',
    fontSize: 13,
  },
  featureBlock: {
    marginBottom: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#cbd5e1',
    paddingBottom: 8,
  },
  featureName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 2,
  },
  featureDesc: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 16,
  },
  actionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6,
  },
  actionChip: {
    fontSize: 11,
    fontWeight: '600',
    color: '#334155',
    backgroundColor: '#f1f5f9',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    marginRight: 6,
    marginBottom: 6,
  },
  // Quiz Styling
  quizProgress: {
    fontSize: 12,
    fontWeight: '700',
    color: '#64748b',
  },
  quizScore: {
    fontSize: 13,
    fontWeight: '800',
    color: '#d97706',
  },
  quizQuestionText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 16,
    lineHeight: 20,
  },
  optButton: {
    borderWidth: 1.5,
    borderColor: '#0f172a',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
  optText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0f172a',
  },
  optTextAnswered: {
    color: '#ffffff',
  },
  optCorrect: {
    backgroundColor: '#10b981',
    borderColor: '#064e3b',
  },
  optWrong: {
    backgroundColor: '#ef4444',
    borderColor: '#7f1d1d',
  },
  optDisabled: {
    backgroundColor: '#f1f5f9',
    borderColor: '#94a3b8',
    opacity: 0.5,
  },
  rationaleBox: {
    marginTop: 14,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#cbd5e1',
  },
  rationaleHeader: {
    fontSize: 13,
    fontWeight: '800',
    color: '#0f766e',
    marginBottom: 4,
  },
  rationaleText: {
    fontSize: 12,
    color: '#334155',
    lineHeight: 16,
    marginBottom: 16,
  },
  nextBtn: {
    backgroundColor: '#0f766e',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  nextBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#ffffff',
  },
  // Tab Bar Navigation Styling
  tabBar: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1.5,
    borderTopColor: '#0f172a',
    backgroundColor: '#ffffff',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: '#ccfbf1',
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748b',
  },
  tabLabelActive: {
    color: '#0f766e',
  },
});
