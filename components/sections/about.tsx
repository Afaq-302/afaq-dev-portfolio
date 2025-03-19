"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Code2, Award, Coffee } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Get to know more about me, my experience, and what drives me to create exceptional web experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10 overflow-hidden rounded-lg border-2 border-primary/30 shadow-xl shadow-primary/10">
              <Image
                src="/placeholder.svg"
                alt="About Me"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl z-0"></div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              I&apos;m Afaq Ahmad, a passionate <span className="text-primary">Full Stack Developer</span>
            </h3>

            <p className="text-gray-300 leading-relaxed">
              I specialize in building modern web applications using the MERN stack (MongoDB, Express.js, React,
              Node.js), along with expertise in Next.js, TypeScript, and various frontend frameworks. With a strong
              foundation in both frontend and backend development, I create seamless, user-friendly experiences.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Additionally, I have extensive experience with e-commerce platforms including Shopify and WordPress,
              enabling me to develop comprehensive solutions for businesses of all sizes. My goal is to combine
              technical expertise with creative problem-solving to deliver exceptional digital experiences.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span className="text-gray-300">Web Development</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span className="text-gray-300">E-commerce Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span className="text-gray-300">UI/UX Design</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span className="text-gray-300">API Development</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span className="text-gray-300">Database Management</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span className="text-gray-300">Cloud Deployment</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="text-2xl font-bold">5+</h4>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <Code2 className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="text-2xl font-bold">100+</h4>
                <p className="text-gray-400 text-sm">Projects</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="text-2xl font-bold">15+</h4>
                <p className="text-gray-400 text-sm">Awards</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <Coffee className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="text-2xl font-bold">1000+</h4>
                <p className="text-gray-400 text-sm">Coffee Cups</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

