import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate Full-stack Developer dedicated to building scalable, end-to-end solutions integrated with AI and ML models. 
              I specialize in designing systems that blend intelligent automation with seamless user experiences, creating impactful 
              software that solves real-world challenges.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              Currently pursuing my B.E. in Computer Science and Engineering at SRM Easwari Engineering College with a CGPA of 8.5, 
              I'm driven by innovation and technical excellence. From developing telemedicine platforms for rural healthcare to building 
              AI-powered disease prediction systems, I bring both theoretical knowledge and hands-on expertise to every project.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
