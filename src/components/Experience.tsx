import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "NoviTech",
    position: "AI Intern",
    duration: "Sept 2024 – Oct 2024",
    description: "Developed AI solutions and machine learning models, contributing to innovative projects in the AI domain.",
  },
  {
    company: "CodeBind",
    position: "Full Stack Developer Intern",
    duration: "Apr 2024 – Jun 2024",
    description: "Built full-stack web applications using modern technologies, collaborating with cross-functional teams to deliver high-quality solutions.",
  },
  {
    company: "Remote Position",
    position: "Student Worker",
    duration: "Chennai",
    description: "Gained practical experience in software development while managing academic commitments.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-border"></div>
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Briefcase className="w-3 h-3 text-primary-foreground" />
                </div>

                <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <span className="text-sm text-muted-foreground">{exp.duration}</span>
                  </div>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
