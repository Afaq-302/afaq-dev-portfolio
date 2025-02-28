"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'Connextar',
    position: 'Senior Frontend Developer',
    period: 'Jan 2022 - Present',
    description: 'Led the frontend development team in creating responsive and accessible web applications. Implemented modern UI/UX practices and optimized performance across multiple projects.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 2,
    company: 'Animmza',
    position: 'Frontend Developer',
    period: 'Mar 2020 - Dec 2021',
    description: 'Developed and maintained client websites and web applications. Collaborated with designers to implement pixel-perfect interfaces and ensure cross-browser compatibility.',
    skills: ['JavaScript', 'React', 'SCSS', 'WordPress'],
  },
  {
    id: 3,
    company: 'Leading Edge',
    position: 'Web Developer',
    period: 'Jun 2018 - Feb 2020',
    description: 'Created responsive websites for various clients. Worked on e-commerce solutions and content management systems. Provided technical support and maintenance.',
    skills: ['HTML/CSS', 'JavaScript', 'PHP', 'Shopify'],
  },
];

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="text-xl font-bold font-playfair">{experience.position}</h3>
              <div className="flex items-center text-primary">
                <Briefcase className="mr-2 h-4 w-4" />
                <span>{experience.company}</span>
              </div>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{experience.period}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{experience.description}</p>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="bg-primary/5">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-playfair">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;