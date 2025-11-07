import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certifications = [
  "Infosys Springboard - AI & ML Fundamentals",
  "Udemy - Full Stack Web Development",
  "LearnTube - Python Programming",
  "Power BI - Data Visualization",
  "Cloud Computing Essentials",
  "Cybersecurity Fundamentals",
  "Git & GitHub Workshop",
  "UI/UX Design Principles",
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Certifications & <span className="gradient-text">Workshops</span>
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex items-center gap-3"
              >
                <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
