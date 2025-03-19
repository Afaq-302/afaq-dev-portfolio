"use client"

import { motion } from "framer-motion"
import { BriefcaseIcon } from "lucide-react"

const EXPERIENCES = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "TechInnovate Solutions",
    duration: "2021 - Present",
    description:
      "Lead developer for multiple client projects, utilizing Next.js, React, Node.js, and MongoDB. Implemented CI/CD pipelines and mentored junior developers.",
    highlights: [
      "Developed a real-time dashboard for monitoring IoT devices, resulting in a 30% increase in operational efficiency",
      "Redesigned and optimized database architecture reducing query times by 40%",
      "Implemented SSR for improved SEO and page load times",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "WebCraft Agency",
    duration: "2018 - 2021",
    description:
      "Developed responsive web applications for clients across various industries. Worked with React, Express, and SQL databases.",
    highlights: [
      "Created custom e-commerce solutions for 15+ clients using React and Node.js",
      "Integrated payment gateways and shipping APIs",
      "Optimized frontend performance increasing page load speed by 25%",
    ],
  },
  {
    id: 3,
    role: "WordPress Developer",
    company: "Digital Creations",
    duration: "2016 - 2018",
    description: "Designed and developed custom WordPress themes and plugins for small to medium-sized businesses.",
    highlights: [
      "Built custom WordPress plugins for enhanced functionality",
      "Implemented WooCommerce solutions for e-commerce clients",
      "Optimized site performance and security",
    ],
  },
  {
    id: 4,
    role: "Frontend Intern",
    company: "StartupHub",
    duration: "2015 - 2016",
    description: "Assisted in the development of web interfaces using HTML, CSS, and JavaScript.",
    highlights: [
      "Learned fundamental web development practices",
      "Contributed to UI improvements for multiple startup products",
      "Gained experience with responsive design principles",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            My professional journey and career milestones in web development.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800"></div>
          
          {/* Experience Items */}
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className={`mb-12 md:mb-0 flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="md:w-1/2 pb-12">
                <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-8 md:text-right" : "md:ml-8"}`}>
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-lg hover:shadow-primary/20 transition-all duration-300 relative">
                    <div className={`absolute top-6 -left-14 md:left-auto md:top-auto -mt-1 md:mt-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-md ${index % 2 === 0 ? "md:right-5 md:top-1/2 md:-translate-y-1/2" : "md:-left-5 md:top-1/2 md:-translate-y-1/2"}`}>
                      <BriefcaseIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="text-primary font-medium">{exp.company}</span>
                      <span className="text-gray-400 text-sm">• {exp.duration}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-primary pt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}