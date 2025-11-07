import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Code } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Geonova Hackathon Winner",
    description: "1st Prize in HealthTech Category",
    highlight: "🏆 Champion",
  },
  {
    icon: Award,
    title: "HackRx Qualifier",
    description: "Qualified till Round 3",
    highlight: "Top Performer",
  },
  {
    icon: Code,
    title: "CodeMini 2.0",
    description: "Tamil Nadu level selection",
    highlight: "State Level",
  },
];

const stats = [
  {
    number: "500+",
    label: "LeetCode Problems",
  },
  {
    number: "50+",
    label: "HackerRank Problems",
  },
  {
    number: "9.32",
    label: "College CGPA",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>

          {/* Hackathon Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-gradient-to-br from-primary to-secondary mb-4">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-primary mb-2">
                    {achievement.highlight}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Problem Solving Stats */}
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Problem-Solving Statistics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <p className="text-white/80 text-center mt-6 text-sm">
              Active on CodeChef, GeeksforGeeks, LeetCode, and HackerRank
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
