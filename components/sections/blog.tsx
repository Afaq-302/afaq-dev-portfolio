"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const BLOG_POSTS = [
  {
    id: 1,
    title: "10 Best Practices for React Development in 2023",
    excerpt:
      "Explore the latest best practices and patterns for building efficient, maintainable React applications in 2023.",
    image: "/placeholder.svg",
    category: "React",
    date: "Mar 15, 2023",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Understanding the Power of Server Components in Next.js",
    excerpt: "Dive into Next.js 13's Server Components and learn how they can transform your application architecture.",
    image: "/placeholder.svg",
    category: "Next.js",
    date: "Apr 22, 2023",
    readTime: "10 min read",
  },
  {
    id: 3,
    title: "Building a Scalable E-commerce Backend with Node.js",
    excerpt: "Learn how to design and implement a scalable, performant backend system for e-commerce applications.",
    image: "/placeholder.svg",
    category: "Backend",
    date: "May 10, 2023",
    readTime: "12 min read",
  },
  {
    id: 4,
    title: "Optimizing MongoDB Performance for High-Traffic Applications",
    excerpt: "Strategies and techniques for optimizing MongoDB databases to handle high traffic and large datasets.",
    image: "/placeholder.svg",
    category: "Database",
    date: "Jun 05, 2023",
    readTime: "9 min read",
  },
  {
    id: 5,
    title: "Implementing Dark Mode with Tailwind CSS and Next.js",
    excerpt: "A step-by-step guide to adding dark mode support to your Next.js application using Tailwind CSS.",
    image: "/placeholder.svg",
    category: "CSS",
    date: "Jul 18, 2023",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "Advanced TypeScript Patterns for Frontend Developers",
    excerpt: "Explore advanced TypeScript patterns and techniques to improve your frontend codebase.",
    image: "/placeholder.svg",
    category: "TypeScript",
    date: "Aug 03, 2023",
    readTime: "11 min read",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Insights and tutorials on web development, best practices, and emerging technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 shadow-lg group hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors duration-300"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors duration-300"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

