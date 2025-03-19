"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const SKILLS = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "RESTful APIs", level: 85 },
      { name: "GraphQL", level: 70 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    category: "CMS & E-commerce",
    skills: [
      { name: "WordPress", level: 85 },
      { name: "Shopify", level: 80 },
      { name: "WooCommerce", level: 75 },
      { name: "Contentful", level: 70 },
      { name: "Sanity", level: 65 },
    ],
  },
  {
    category: "Other",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "CI/CD", level: 75 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 70 },
    ],
  },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend")

  return (
    <section id="skills" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            As a full stack developer, I have expertise in a variety of technologies, frameworks, and tools.
          </p>
        </motion.div>

        <div className="bg-gray-900/50 rounded-xl p-6 md:p-10 max-w-5xl mx-auto shadow-lg border border-gray-800">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {SKILLS.map((categoryData) => (
              <button
                key={categoryData.category}
                onClick={() => setActiveTab(categoryData.category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === categoryData.category
                    ? "bg-primary text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {categoryData.category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SKILLS.find((cat) => cat.category === activeTab)?.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-white group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </span>
                  <span className="text-gray-400 text-sm">{skill.level}%</span>
                </div>
                <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-600 to-primary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 * index }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Technology Icons Grid */}
          <div className="p-4 bg-gray-800/50 rounded-lg flex items-center justify-center group hover:bg-gray-800 transition-all duration-300 h-24">
            <span className="text-3xl font-bold text-gray-400 group-hover:text-primary transition-colors duration-300">
              HTML5
            </span>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg flex items-center justify-center group hover:bg-gray-800 transition-all duration-300 h-24">
            <span className="text-3xl font-bold text-gray-400 group-hover:text-primary transition-colors duration-300">
              CSS3
            </span>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg flex items-center justify-center group hover:bg-gray-800 transition-all duration-300 h-24">
            <span className="text-3xl font-bold text-gray-400 group-hover:text-primary transition-colors duration-300">
              JS
            </span>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg flex items-center justify-center group hover:bg-gray-800 transition-all duration-300 h-24">
            <span className="text-3xl font-bold text-gray-400 group-hover:text-primary transition-colors duration-300">
              React
            </span>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg flex items-center justify-center group hover:bg-gray-800 transition-all duration-300 h-24">
            <span className="text-3xl font-bold text-gray-400 group-hover:text-primary transition-colors duration-300">
              Next.js
            </span>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg flex items-center justify-center group hover:bg-gray-800 transition-all duration-300 h-24">
            <span className="text-3xl font-bold text-gray-400 group-hover:text-primary transition-colors duration-300">
              Node
            </span>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg flex items-center justify-center group hover:bg-gray-800 transition-all duration-300 h-24">
            <span className="text-3xl font-bold text-gray-400 group-hover:text-primary transition-colors duration-300">
              MongoDB
            </span>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg flex items-center justify-center group hover:bg-gray-800 transition-all duration-300 h-24">
            <span className="text-3xl font-bold text-gray-400 group-hover:text-primary transition-colors duration-300">
              Tailwind
            </span>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg flex items-center justify-center group hover:bg-gray-800 transition-all duration-300 h-24">
            <span className="text-3xl font-bold text-gray-400 group-hover:text-primary transition-colors duration-300">
              TypeScript
            </span>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg flex items-center justify-center group hover:bg-gray-800 transition-all duration-300 h-24">
            <span className="text-3xl font-bold text-gray-400 group-hover:text-primary transition-colors duration-300">
              WordPress
            </span>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg flex items-center justify-center group hover:bg-gray-800 transition-all duration-300 h-24">
            <span className="text-3xl font-bold text-gray-400 group-hover:text-primary transition-colors duration-300">
              Shopify
            </span>
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg flex items-center justify-center group hover:bg-gray-800 transition-all duration-300 h-24">
            <span className="text-3xl font-bold text-gray-400 group-hover:text-primary transition-colors duration-300">
              Git
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

