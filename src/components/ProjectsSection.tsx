import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Food-Ordering Web App",
    description: "A full-stack food ordering app where users can browse items, add to cart, and place orders easily. It provides a smooth and responsive user experience for online food ordering.",
    tags: ["React.Js", "TailwindCSS", "Express.js","MongoDB"],
    github: "https://github.com/Aman1122r/Tomato-web-app",
    live: "",
  },
  {
    title: "Menuscape",
    description: "A restaurant automation system that reduces waiter dependency by allowing customers to view menus and place orders digitally. It improves order management and enhances dining efficiency.",
    tags: ["React.js", "TailwindCSS","Express.js","MongoDB"],
    github: "https://github.com/Aman1122r/menuscape",
    live: "",
  },
  {
    title: "E-Commerece Web App",
    description: "A full-stack e-commerce platform where users can browse products, add to cart, and simulate shopping. It focuses on clean UI and basic online shopping functionality.",
    tags: ["Node.js", "MongoDB", "React.js","TailwindCSS"],
    github: "https://github.com/Aman1122r/stylesphere-e-commerce",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio showcasing my skills, projects, and experience. It is designed with a modern UI to present my professional profile effectively.",
    tags: ["React","Framer Motion"],
    github: "https://github.com/Aman1122r/fresh-portfolio-hub",

  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all hover:glow-primary"
            >
              <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 text-sm">
                  <Code2 size={15} /> Code
                </a>
                <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 text-sm">
                  <ExternalLink size={15} /> Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
