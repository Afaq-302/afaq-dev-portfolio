"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Server, ShoppingBag } from "lucide-react";

import pic from "../../public/pic.png";

export default function Hero() {
  const [text, setText] = useState("");
  const [fullText] = useState("Full Stack Developer");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100);
    } else {
      setTimeout(() => {
        setText("");
        setIndex(0);
      }, 2000);
    }
  }, [index, text, fullText]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 overflow-hidden relative"
    >
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 md:left-20 w-24 h-24 rounded-full bg-blue-500/10 animate-float" />
      <div
        className="absolute bottom-20 right-10 md:right-20 w-32 h-32 rounded-full bg-purple-500/10 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-teal-500/10 animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
        <motion.div
          className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-3">
            Hello, I&apos;m
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow">
            Afaq Ahmad
          </h1>
          <div className="h-8 md:h-12">
            <h3 className="text-xl md:text-3xl font-medium mb-6 text-gray-300 min-h-[2rem]">
              <span>I&apos;m a </span>
              <span className="text-primary">{text}</span>
              <span className="animate-blink">|</span>
            </h3>
          </div>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8">
            Crafting exceptional digital experiences with modern technologies
            and creative problem-solving.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              href="#contact"
              className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Hire Me
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#projects"
              className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-full font-medium transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-20 animate-pulse" />
            <div className="relative group">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary/50 overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                <Image
                  src={pic}
                  alt="Developer Profile"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Tech icons floating around the profile image */}
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 p-3 bg-gray-900/80 rounded-full shadow-lg backdrop-blur-md border border-gray-800 animate-float">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div
                className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 p-3 bg-gray-900/80 rounded-full shadow-lg backdrop-blur-md border border-gray-800 animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <Server className="h-6 w-6 text-primary" />
              </div>
              <div
                className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 p-3 bg-gray-900/80 rounded-full shadow-lg backdrop-blur-md border border-gray-800 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
