import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Telemedicine Access Platform",
    description: "SIH 2025 project - A comprehensive platform connecting patients with healthcare providers through virtual consultations",
    technologies: ["ReactJS", "Node.js", "AI Integration", "Healthcare APIs"],
  },
  {
    title: "MediCare",
    description: "Healthcare platform streamlining patient management and appointment scheduling",
    technologies: ["ReactJS", "Flask", "SQL", "Healthcare Tech"],
  },
  {
    title: "Symptom-based Disease Prediction",
    description: "AI-powered system using machine learning to predict diseases based on symptoms",
    technologies: ["Python", "Scikit-learn", "Flask", "AI/ML"],
  },
  {
    title: "AgriCare Platform",
    description: "Agricultural technology platform helping farmers with crop management and disease detection",
    technologies: ["ReactJS", "Python", "Computer Vision", "AgriTech"],
  },
  {
    title: "Lamborghini Website",
    description: "Full-stack luxury automotive website with immersive user experience",
    technologies: ["ReactJS", "Node.js", "JavaScript", "Responsive Design"],
  },
  {
    title: "Student Portfolio Website",
    description: "Professional portfolio platform for students to showcase their work and achievements",
    technologies: ["ReactJS", "Tailwind CSS", "Responsive Design"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardDescription className="mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
