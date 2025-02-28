"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1064&auto=format&fit=crop',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Stripe'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Portfolio Dashboard',
    description: 'An interactive dashboard for tracking investments and portfolio performance with real-time data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop',
    technologies: ['React', 'Chart.js', 'Node.js', 'MongoDB'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'Travel Blog',
    description: 'A content-focused travel blog with rich media support, interactive maps, and social sharing capabilities.',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1170&auto=format&fit=crop',
    technologies: ['Next.js', 'WordPress API', 'Mapbox', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 4,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1172&auto=format&fit=crop',
    technologies: ['React', 'Firebase', 'Material UI', 'React DnD'],
    liveLink: '#',
    githubLink: '#',
  },
];

const ProjectCard = ({ project }) => {
  return (
    <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm h-full flex flex-col group">
      <div className="relative overflow-hidden aspect-video">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="flex-grow p-6 space-y-4">
        <h3 className="text-xl font-bold font-playfair">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-primary/10">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </a>
        </Button>
        <Button size="sm" asChild>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleProjects = projects.slice(
    activeIndex * itemsPerPage,
    (activeIndex + 1) * itemsPerPage
  );

  return (
    <section id="projects" className="py-20">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-playfair">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore a selection of my recent work showcasing my skills and expertise in frontend development.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
              aria-label="Previous projects"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "rounded-full w-3 h-3 p-0 flex items-center justify-center",
                  activeIndex === index ? "bg-primary" : "bg-transparent"
                )}
                aria-label={`Go to page ${index + 1}`}
              >
                <span className="sr-only">Page {index + 1}</span>
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
              aria-label="Next projects"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;