import { motion } from "framer-motion";
import { User, MapPin, GraduationCap, Briefcase } from "lucide-react";

const AboutSection = () => {
  const details = [
    { icon: User, label: "Name", value: "Aman Prajapat" },
    { icon: MapPin, label: "Location", value: "Indore, India" },
    { icon: GraduationCap, label: "Degree", value: "B.Tech in Computer Science" },
    { icon: Briefcase, label: "Status", value: "Open to Opportunities" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a recent Computer Science final year student with a strong foundation in web development, data structures, and algorithms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
             I am a Full Stack Web Developer with hands-on experience in building projects using MongoDB, Express, React, and Node.js. I focus on writing clean, maintainable code and developing responsive web applications. I enjoy problem-solving and continuously improving my development skills by working on real-world projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {details.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-card border border-border rounded-lg p-4 flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                  <p className="text-sm font-medium text-foreground">{value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
