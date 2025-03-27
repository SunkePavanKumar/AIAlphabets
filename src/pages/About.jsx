import React from 'react'
import { motion } from 'framer-motion'
import student from "/student.jpg"
import { FaRobot, FaGraduationCap, FaChartLine, FaCode } from 'react-icons/fa'

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="md:w-1/2 relative group">
            <img 
              src={student}
              alt="Students learning AI"
              className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 border-2 border-purple-400/30 rounded-2xl pointer-events-none" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
              Empowering Students with AI Knowledge
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Artificial Intelligence (AI) is reshaping the world, and students who learn AI skills today will become the leaders of tomorrow. Our course, <span className="text-blue-400">AI & Prompt Engineering for Students (Ages 13-17)</span>, is designed to equip young minds with the tools to understand, create, and innovate using AI.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
            Why Choose This Course?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaRobot className="text-4xl"/>, title: "Future-Ready Skills", content: "Prepare for AI-driven careers in transforming industries" },
              { icon: <FaGraduationCap className="text-4xl"/>, title: "Boosts Academics", content: "Enhance studying, research, and organization with AI" },
              { icon: <FaCode className="text-4xl"/>, title: "Hands-On Learning", content: "Interactive projects & real-world applications" },
              { icon: <FaChartLine className="text-4xl"/>, title: "Tech Confidence", content: "Understand and use AI responsibly" }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 p-8 rounded-2xl border border-white/10 text-center"
              >
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.content}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Course Overview */}
        <div className="bg-gray-800/30 rounded-2xl p-8 md:p-12 mb-24">
          <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
            Course Highlights
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "AI & Machine Learning Fundamentals",
              "Mastering ChatGPT, DeepSeek & AI Tools",
              "Effective Prompt Engineering Techniques",
              "AI for Academics & Problem-Solving",
              "Ethical AI Practices & Responsibility",
              "Real-World AI Project Development"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-green-400 mt-1">✅</div>
                <p className="text-gray-300 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Opportunities */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
            AI Career Opportunities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "$15.7T", label: "Global Economic Impact by 2030" },
              { value: "97M", label: "New AI Jobs by 2025" },
              { value: "$200K+", label: "AI Specialist Salaries" },
              { value: "$20B", label: "AI Education Market by 2027" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-900/50 to-purple-900/30 p-6 rounded-2xl text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission & Contact */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
            Our Mission
          </h3>
          <div className="space-y-6 mb-16">
            <p className="text-gray-300 text-lg">🔹 Make AI education accessible and engaging</p>
            <p className="text-gray-300 text-lg">🔹 Encourage responsible AI usage</p>
            <p className="text-gray-300 text-lg">🔹 Prepare future AI leaders</p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-2xl">
            <h4 className="text-2xl font-semibold mb-6 text-white">Contact AI Alphabets</h4>
            <div className="space-y-3 text-gray-300">
              <p>📞 +91 9347979195</p>
              <p>📧 aialphbts@gmail.com</p>
              <p>🌍 reallygreatsite.com</p>
              <p>📍 Tejashree Apartment, Gachibowli, Hyderabad</p>
            </div>
            <div className="mt-6 text-blue-400 italic">
              "AI is the number one job of the future" - World Economic Forum
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About