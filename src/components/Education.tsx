import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "SRM Easwari Engineering College",
    year: "2023 - 2027",
    grade: "CGPA: 9.32",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Secondary Education",
    year: "2023",
    grade: "92%",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Secondary Education",
    year: "2021",
    grade: "90%",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="gradient-text">Education</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <span className="text-sm text-muted-foreground">{edu.year}</span>
                    </div>
                    <p className="text-muted-foreground mb-1">{edu.institution}</p>
                    <p className="text-primary font-semibold">{edu.grade}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
