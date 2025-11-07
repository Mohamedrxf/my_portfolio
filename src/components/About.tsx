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
              I'm a passionate Full Stack Developer and AI Enthusiast currently pursuing my B.E. in Computer Science and Engineering 
              at SRM Easwari Engineering College with a CGPA of 9.32. With a strong foundation in both frontend and backend technologies, 
              I specialize in creating innovative solutions that blend cutting-edge AI capabilities with user-centric design.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              My journey in technology has been driven by a relentless curiosity to solve real-world problems. From developing healthcare 
              platforms that improve patient care to building AI-powered applications, I'm committed to creating digital solutions that 
              make a meaningful impact. With over 500 problems solved on LeetCode and experience across multiple internships, I bring 
              both theoretical knowledge and practical expertise to every project I undertake.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
