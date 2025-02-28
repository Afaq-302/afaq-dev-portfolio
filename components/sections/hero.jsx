"use client";

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import Afaq from "../../public/Afaq2.png"

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const phrases = [
      'Frontend Developer',
      'UI/UX Enthusiast',
      'React Specialist',
      'Web Designer'
    ];

    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        textElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 1000; // Pause at the end
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Pause before typing next phrase
      }

      setTimeout(type, typingSpeed);
    };

    setTimeout(type, 1000);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-medium text-primary">Hello, I&apos;m</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair">
              Afaq Ahmad
            </h1>
            <div className="h-12 flex items-center">
              <span className="text-xl md:text-2xl text-muted-foreground">I&apos;m a </span>
              <span ref={textRef} className="text-xl md:text-2xl text-primary ml-2"></span>
              <span className="text-primary text-xl md:text-2xl animate-blink">|</span>
            </div>
          </div>

          <p className="text-muted-foreground text-lg max-w-xl">
            Crafting elegant, responsive, and high-performance web experiences with modern technologies and a keen eye for detail.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="group">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="group">
              Download CV
              <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>

          <div className="flex space-x-4 pt-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="overflow-hidden w-3/4 h-3/4 rounded-full bg-gradient-to-br from-background via-background/90 to-background/80 flex items-center justify-center">
                {/* <span className="text-8xl font-playfair font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">AA</span> */}
                <Image src={Afaq} alt='afaq-img' />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;