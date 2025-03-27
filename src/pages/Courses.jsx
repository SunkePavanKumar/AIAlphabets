// pages/Courses.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaCode, FaBrain, FaProjectDiagram, FaComments } from 'react-icons/fa';

const SkillPathCard = ({ title, description, features, duration, icon }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800/50 rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="text-purple-400 text-3xl">{icon}</div>
        <span className="text-sm text-gray-400 bg-gray-900/50 px-3 py-1 rounded-full">
          {duration}
        </span>
      </div>
      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent mb-4">
        {title}
      </h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="text-green-400">▹</div>
            <span className="text-gray-300">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Courses = () => {
  const learningPaths = [
    {
      title: "AI Foundations",
      description: "Master core concepts of artificial intelligence and machine learning",
      duration: "6 Weeks",
      icon: <FaBrain />,
      features: [
        "History of AI Evolution",
        "Neural Networks Basics",
        "Ethical AI Principles",
        "ML Algorithms Overview"
      ]
    },
    {
      title: "Prompt Engineering",
      description: "Craft effective prompts for AI systems like ChatGPT and DeepSeek",
      duration: "4 Weeks",
      icon: <FaCode />,
      features: [
        "Natural Language Processing",
        "Contextual Prompt Design",
        "Multi-modal Prompts",
        "Optimization Techniques"
      ]
    },
    {
      title: "AI Project Lab",
      description: "Build real-world AI applications from concept to deployment",
      duration: "8 Weeks",
      icon: <FaProjectDiagram />,
      features: [
        "End-to-End Project Development",
        "API Integration",
        "Model Training & Tuning",
        "Presentation & Documentation"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
            AI Learning Journeys
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Structured pathways to master artificial intelligence through project-based learning and expert mentorship
          </p>
        </motion.div>

        {/* Learning Paths */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {learningPaths.map((path, index) => (
            <SkillPathCard
              key={index}
              title={path.title}
              description={path.description}
              duration={path.duration}
              icon={path.icon}
              features={path.features}
            />
          ))}
        </div>

        {/* Tools Section */}
        <div className="bg-gray-800/30 rounded-2xl p-8 md:p-12 mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
            Master Industry Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['ChatGPT', 'DeepSeek', 'TensorFlow', 'HuggingFace'].map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-6 bg-gray-900/50 rounded-xl"
              >
                <FaRobot className="text-4xl text-purple-400 mb-4" />
                <h4 className="text-xl font-semibold text-gray-100">{tool}</h4>
                <p className="text-gray-400 text-sm mt-2">AI Platform</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Program Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: <FaCode />, title: "300+", subtitle: "Coding Hours" },
            { icon: <FaProjectDiagram />, title: "15+", subtitle: "Projects" },
            { icon: <FaComments />, title: "1:1", subtitle: "Mentorship" },
            { icon: <FaRobot />, title: "24/7", subtitle: "AI Lab Access" }
          ].map((highlight, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gray-800/50 rounded-2xl text-center"
            >
              <div className="text-purple-400 text-4xl mb-4">{highlight.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{highlight.title}</div>
              <div className="text-gray-400">{highlight.subtitle}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
            Start Your AI Journey
          </h3>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Join our next cohort of future AI leaders and get access to exclusive resources and mentorship
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-full shadow-2xl"
          >
            Enroll Now
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Courses;