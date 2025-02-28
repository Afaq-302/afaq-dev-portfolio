"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const educations = [
  {
    id: 1,
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    institution: 'University Name',
    period: '2014 - 2018',
    description: 'Graduated with honors, focusing on web development and user interface design. Participated in various hackathons and coding competitions.',
  },
];

const certifications = [
  {
    id: 1,
    name: 'IELTS Certification',
    issuer: 'British Council',
    date: 'June 2019',
    score: 'Band 7.5',
  },
  {
    id: 2,
    name: 'Advanced React and Redux',
    issuer: 'Udemy',
    date: 'March 2020',
  },
  {
    id: 3,
    name: 'UI/UX Design Fundamentals',
    issuer: 'Interaction Design Foundation',
    date: 'November 2021',
  },
];

const EducationCard = ({ education, index }) => {
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
              <h3 className="text-xl font-bold font-playfair">{education.degree}</h3>
              <div className="flex items-center text-primary">
                <GraduationCap className="mr-2 h-4 w-4" />
                <span>{education.field}</span>
              </div>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{education.period}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{education.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const CertificationCard = ({ certification, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="font-medium">{certification.name}</h3>
              <div className="flex items-center text-muted-foreground">
                <Award className="mr-2 h-4 w-4" />
                <span>{certification.issuer}</span>
              </div>
            </div>
            <div className="text-muted-foreground text-sm">
              {certification.date}
            </div>
          </div>
          {certification.score && (
            <div className="mt-2 text-sm text-primary">
              Score: {certification.score}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-playfair">Education & Certifications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic background and professional certifications that have shaped my skills.
          </p>
        </motion.div>

        <div className="space-y-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-playfair">Education</h3>
            <div className="space-y-6">
              {educations.map((education, index) => (
                <EducationCard key={education.id} education={education} index={index} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-playfair">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((certification, index) => (
                <CertificationCard key={certification.id} certification={certification} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;