"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Trophy, Coffee, Briefcase, Users } from "lucide-react"

// CountUp component for animated counters
function CountUp({ end, duration = 2000 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    const animationId = window.requestAnimationFrame(step)
    return () => window.cancelAnimationFrame(animationId)
  }, [end, duration])

  return <span>{count}+</span>
}

// Stats data
const STATS = [
  {
    id: 1,
    icon: <Trophy className="h-10 w-10 text-primary" />,
    value: 25,
    label: "Awards Received",
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: 2,
    icon: <Coffee className="h-10 w-10 text-primary" />,
    value: 1042,
    label: "Cups of Coffee",
    color: "from-purple-600 to-pink-600",
  },
  {
    id: 3,
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    value: 120,
    label: "Projects Completed",
    color: "from-green-600 to-emerald-600",
  },
  {
    id: 4,
    icon: <Users className="h-10 w-10 text-primary" />,
    value: 86,
    label: "Happy Clients",
    color: "from-amber-600 to-orange-600",
  },
]

export default function FunFacts() {
  // State to track if counters should animate
  const [animate, setAnimate] = useState(false)

  return (
    <section id="fun-facts" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg')] opacity-5 bg-cover bg-center"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fun Facts</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Some interesting stats and numbers from my development journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 shadow-lg flex flex-col items-center text-center hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              onViewportEnter={() => setAnimate(true)}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-gradient-to-r ${stat.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2 text-white">{animate ? <CountUp end={stat.value} /> : "0+"}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
