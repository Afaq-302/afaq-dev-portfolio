"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, ExternalLink, X } from "lucide-react"

const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/placeholder.svg",
    description:
      "A full-featured e-commerce platform built with Next.js, MongoDB, and Stripe integration. Features include product filtering, user authentication, cart functionality, and an admin dashboard.",
    technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "#",
    liveDemo: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Web Application",
    image: "/placeholder.svg",
    description:
      "A task management application with drag-and-drop functionality, user authentication, and real-time updates. Built with React, Node.js, and Socket.io.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "#",
    liveDemo: "#",
  },
  {
    id: 3,
    title: "Restaurant Website",
    category: "WordPress",
    image: "/placeholder.svg",
    description:
      "A custom WordPress theme for a restaurant, featuring online booking, menu display, and integration with food delivery services.",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS"],
    github: "#",
    liveDemo: "#",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    category: "Mobile App",
    image: "/placeholder.svg",
    description:
      "A fitness tracking application that allows users to create workout plans, track progress, and view statistics. Built with React Native and Firebase.",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    github: "#",
    liveDemo: "#",
  },
  {
    id: 5,
    title: "Portfolio Website",
    category: "Web Development",
    image: "/placeholder.svg",
    description:
      "A modern portfolio website built with Next.js and Tailwind CSS. Features smooth animations, responsive design, and contact form functionality.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "#",
    liveDemo: "#",
  },
  {
    id: 6,
    title: "Music Streaming App",
    category: "Web Application",
    image: "/placeholder.svg",
    description:
      "A music streaming application with user authentication, playlist creation, and audio visualization. Built with React, Node.js, and MongoDB.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Web Audio API"],
    github: "#",
    liveDemo: "#",
  },
]

const CATEGORIES = ["All", "Web Development", "Web Application", "WordPress", "Mobile App"]

export default function Projects() {
  const [category, setCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = category === "All" ? PROJECTS : PROJECTS.filter((project) => project.category === category)

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Explore my recent projects and discover the applications I&apos;ve built.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                category === cat ? "bg-primary text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 shadow-lg group"
            >
              <div className="relative overflow-hidden h-60">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition-colors duration-300"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition-colors duration-300"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-3 bg-white text-gray-900 rounded-full hover:bg-gray-200 transition-colors duration-300"
                    >
                      <span className="block w-5 h-5 flex items-center justify-center font-bold">i</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-primary">{project.category}</span>
                </div>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-800/80 rounded-full text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-800/80 rounded-full text-xs text-gray-300">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-60 sm:h-80">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/80 transition-colors duration-300"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-primary">
                    {selectedProject.category}
                  </span>
                </div>
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-800/80 rounded-full text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 flex items-center gap-2"
                  >
                    <Github className="h-5 w-5" />
                    Github
                  </a>
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors duration-300 flex items-center gap-2"
                  >
                    <ExternalLink className="h-5 w-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

