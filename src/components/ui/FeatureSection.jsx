import React from 'react'
import { FaLaptopCode, FaBrain, FaProjectDiagram } from 'react-icons/fa'

const features = [
  {
    icon: <FaLaptopCode className="text-indigo-600 w-12 h-12" />,
    title: "Interactive Coding",
    description: "Hands-on coding exercises that help you understand AI concepts through real-world projects."
  },
  {
    icon: <FaBrain className="text-indigo-600 w-12 h-12" />,
    title: "Concept Mastery",
    description: "Deep dives into AI principles, ensuring you grasp both the theory and its practical applications."
  },
  {
    icon: <FaProjectDiagram className="text-indigo-600 w-12 h-12" />,
    title: "Innovative Projects",
    description: "Work on innovative projects that challenge you to apply what you learn in creative ways."
  }
]

const FeatureSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Course?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transition duration-300 text-center">
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
