import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Chameli Devi Group Of Institutions",
    year: "2022 - 2026",
    grade: "CGPA: 7 / 10",
    details: "Relevant coursework: Data Structures, Algorithms, DBMS, Web Development, OS, Computer Networks",
  },
  {
    degree: "Higher Secondary (XII)",
    institution: "Cambridge Higher Secondary School",
    year: "2022",
    grade: "Percentage: 80%",
    details: " Mathematics, Physics, Science",
  },
  {
    degree: "Secondary (X)",
    institution: "Cambridge Higher Secondary School",
    year: "2020",
    grade: "Percentage: 81%",
    details: "Distinction in Mathematics and Science",
  },
];

const certifications = [
  "React - The Complete Guide (Udemy)",
  "JavaScript Algorithms & Data Structures",
  "AWS Cloud Practitioner Essentials",
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap size={18} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-1">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground mb-2">{edu.institution}</p>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                <Calendar size={12} /> {edu.year}
              </div>
              <p className="text-sm text-primary font-medium mb-2">{edu.grade}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{edu.details}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading font-semibold text-lg mb-4">Certifications</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-3 px-4 py-3 bg-secondary border border-border rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                <span className="text-sm text-secondary-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
