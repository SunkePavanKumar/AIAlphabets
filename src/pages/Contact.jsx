import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarker } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const serviceID = "service_827m77k"
    const templateID = "template_8995u3j"
    const publicKey = "dvA8XbSuGM0hdw1da"

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    }

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey)
      toast.success("Thank you! Your message has been sent.")
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      alert('Oops! Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                  Connect With Us
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <FaPhone className="text-purple-400 text-xl" />
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-gray-100">+91 9347979195</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-purple-400 text-xl" />
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-gray-100">aialphbts@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <FaGlobe className="text-purple-400 text-xl" />
                    <div>
                      <p className="text-gray-400 text-sm">Website</p>
                      <p className="text-gray-100">www.aialphabets.in</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <FaMapMarker className="text-purple-400 text-xl" />
                    <div>
                      <p className="text-gray-400 text-sm">Address</p>
                      <p className="text-gray-100">Prem Chander Nilayam, DLF Road, Gachibowli,Hyderabad</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-gray-400 text-sm italic">
                    "AI is the number one job of the future" - World Economic Forum
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full bg-gray-900/30 border border-white/10 rounded-lg p-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full bg-gray-900/30 border border-white/10 rounded-lg p-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="w-full bg-gray-900/30 border border-white/10 rounded-lg p-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-lg transition-all"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
