import { motion } from "framer-motion";
import { ArrowDown, Code2, UserCircle, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-4">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4">
            <span className="text-gradient">Aman Prajapat</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-body font-light mb-8">
            Aspiring Full-Stack Developer & Creative Thinker
          </p>
          <p className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
            Fresh under graduate passionate about building modern web applications.
            Eager to learn, grow, and contribute to impactful projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-gradient-primary text-primary-foreground font-heading font-semibold px-8 py-3 rounded-lg glow-primary hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="border border-border px-8 py-3 rounded-lg font-heading font-medium hover:bg-secondary transition-colors"
          >
            View Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-5 mt-10"
        >
          {[
            { icon: Code2, href: "#", label: "GitHub" },
            { icon: UserCircle, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "mailto:john@example.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
