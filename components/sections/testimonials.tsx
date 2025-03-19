"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "/placeholder.svg",
    text: "John's expertise in full-stack development transformed our digital presence. He delivered a high-performance website that exceeded our expectations in both functionality and design. His attention to detail and commitment to quality are unmatched.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director, E-shop Solutions",
    image: "/placeholder.svg",
    text: "Working with John on our e-commerce platform was a fantastic experience. He understood our business needs perfectly and implemented solutions that increased our conversion rate by 35%. His technical skills and business acumen make him a valuable asset to any project.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager, SaaS Platform",
    image: "/placeholder.svg",
    text: "John developed our SaaS platform from the ground up with meticulous attention to detail. His ability to translate complex requirements into elegant, user-friendly interfaces is remarkable. The performance optimizations he implemented significantly improved our user experience.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder, HealthTech Startup",
    image: "/placeholder.svg",
    text: "John's expertise in both frontend and backend technologies was crucial for the success of our healthcare application. He built a secure, compliant, and user-friendly platform that our customers love. His technical versatility and problem-solving skills are outstanding.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            What my clients say about my work and collaboration.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Background decoration */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>

          <div className="relative bg-gray-900/50 border border-gray-800 rounded-xl p-8 md:p-12 shadow-xl">
            <div className="absolute -top-6 left-10 text-primary opacity-20">
              <Quote className="w-16 h-16" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Testimonial Image */}
              <motion.div
                key={`image-${TESTIMONIALS[currentIndex].id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/10 flex-shrink-0"
              >
                <Image
                  src={TESTIMONIALS[currentIndex].image || "/placeholder.svg"}
                  alt={TESTIMONIALS[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Testimonial Content */}
              <div>
                <motion.div
                  key={`content-${TESTIMONIALS[currentIndex].id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-gray-300 text-lg mb-6 italic">"{TESTIMONIALS[currentIndex].text}"</p>
                  <div>
                    <h4 className="text-xl font-bold text-white">{TESTIMONIALS[currentIndex].name}</h4>
                    <p className="text-primary">{TESTIMONIALS[currentIndex].role}</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center md:justify-end gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-primary hover:bg-primary/80 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? "bg-primary" : "bg-gray-700"
                  } transition-colors duration-300`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

