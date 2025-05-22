import React from 'react'
import HeroSection from '../components/ui/HeroSection'
import FeatureSection from '../components/ui/FeatureSection'
import { motion } from 'framer-motion'
import { FaBrain, FaRocket, FaChartLine, FaUsers } from 'react-icons/fa'

const Home = () => {
  const stats = [
    { icon: <FaRocket className="text-4xl"/>, value: "97M+", label: "AI Jobs by 2025" },
    { icon: <FaChartLine className="text-4xl"/>, value: "$15.7T", label: "Economic Impact" },
    { icon: <FaUsers className="text-4xl"/>, value: "13-17", label: "Age Group" },
    { icon: <FaBrain className="text-4xl"/>, value: "200+", label: "AI Projects" }
  ]

  const curriculum = [
    "AI & Machine Learning Fundamentals",
    "Prompt Engineering Mastery",
    "Ethical AI Practices",
    "Real-World Project Development",
    "AI-Powered Problem Solving",
    "Creative Tool Proficiency"
  ]

  return (
    <div className="pt-20">
      <HeroSection />
      
      {/* Feature Section */}
      <FeatureSection />

      {/* AI Impact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900/50 to-blue-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
              Why AI Education Matters
            </h2>
            <p className="text-gray-300 text-lg">
              The World Economic Forum identifies AI skills as crucial for future careers. Our program bridges the gap between academic learning and real-world AI applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 p-6 rounded-2xl border border-white/10 text-center"
              >
                <div className="text-purple-400 mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
              Comprehensive AI Curriculum
            </h2>
            <p className="text-gray-300 text-lg">
              Our 6-month program covers everything from foundational concepts to advanced implementations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((item, index) => (
              <div key={index} className="flex items-start p-6 bg-gray-800/50 rounded-2xl border border-white/10">
                <div className="text-green-400 mt-1 mr-4">▹</div>
                <p className="text-gray-300 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outlook */}
      <section className="py-20 bg-gradient-to-br from-gray-900/50 to-purple-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
            Future-Ready Career Paths
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Graduates gain skills for high-demand roles like AI Specialist ($200k+), Prompt Engineer, and Machine Learning Developer
          </p>
          
          {/* <motion.div 
            whileHover={{ scale: 1.02 }}
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-full shadow-2xl cursor-pointer"
          >
            Explore Career Opportunities →
          </motion.div> */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
            What People Say About AI
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 p-8 rounded-2xl border border-white/10"
            >
              <p className="text-gray-300 mb-4 italic">
                "AI is the defining technology of our time. Those who understand how to use it will shape the future."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-400/20 rounded-full mr-4"></div>
                <div>
                  <h4 className="text-white font-semibold">Satya Nadella</h4>
                  <p className="text-gray-400 text-sm">CEO, Microsoft</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 p-8 rounded-2xl border border-white/10"
            >
              <p className="text-gray-300 mb-4 italic">
                "AI is more profound than electricity or fire. Learning to work with it is not optional—it's essential."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-400/20 rounded-full mr-4"></div>
                <div>
                  <h4 className="text-white font-semibold">Sundar Pichai</h4>
                  <p className="text-gray-400 text-sm">CEO, Google</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 p-8 rounded-2xl border border-white/10"
            >
              <p className="text-gray-300 mb-4 italic">
                "If we want AI to serve humanity, we must first teach humanity how to understand AI."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-400/20 rounded-full mr-4"></div>
                <div>
                  <h4 className="text-white font-semibold">Fei-Fei Li</h4>
                  <p className="text-gray-400 text-sm">AI Pioneer, Stanford Professor</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 p-8 rounded-2xl border border-white/10"
            >
              <p className="text-gray-300 mb-4 italic">
                "Just as the steam engine transformed every industry, so will AI—and those who know how to use it will lead."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-400/20 rounded-full mr-4"></div>
                <div>
                  <h4 className="text-white font-semibold">Andrew Ng</h4>
                  <p className="text-gray-400 text-sm">Founder, DeepLearning.ai</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/50 to-purple-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
            Start Your AI Journey Today
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Limited seats available for our next cohort. Transform your potential into AI expertise.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <motion.a
              href="https://forms.gle/G5SkmGm8QrB6u2H26"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-full shadow-2xl cursor-pointer"
            >
              Enroll Now
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border border-purple-400 text-purple-300 font-semibold py-4 px-8 rounded-full"
            >
              Download Syllabus
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home