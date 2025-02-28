"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Code, 
  FileJson, 
  Database, 
  Globe, 
  ShoppingBag, 
  Layers, 
  Cpu, 
  PenTool
} from 'lucide-react';

const skills = [
  { name: 'HTML & CSS', icon: <Globe className="h-8 w-8" />, color: 'from-orange-500 to-red-500' },
  { name: 'JavaScript', icon: <FileJson className="h-8 w-8" />, color: 'from-yellow-400 to-yellow-600' },
  { name: 'React', icon: <Code className="h-8 w-8" />, color: 'from-blue-400 to-blue-600' },
  { name: 'Next.js', icon: <Layers className="h-8 w-8" />, color: 'from-gray-600 to-gray-800' },
  { name: 'MongoDB', icon: <Database className="h-8 w-8" />, color: 'from-green-500 to-green-700' },
  { name: 'TypeScript', icon: <FileJson className="h-8 w-8" />, color: 'from-blue-500 to-blue-700' },
  { name: 'Node.js', icon: <Cpu className="h-8 w-8" />, color: 'from-green-400 to-green-600' },
  { name: 'WordPress', icon: <PenTool className="h-8 w-8" />, color: 'from-blue-500 to-blue-700' },
  { name: 'Shopify', icon: <ShoppingBag className="h-8 w-8" />, color: 'from-green-400 to-green-600' },
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 h-full">
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className={`p-4 rounded-full bg-gradient-to-br ${skill.color} bg-opacity-10`}>
              {skill.icon}
            </div>
            <h3 className="text-lg font-medium">{skill.name}</h3>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-playfair">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills I've mastered to create exceptional web experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;