"use client";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
} from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Ozone Fitness Platform",
      description:
        "A project focused on developing a workout system, a nutrition program, AI-powered tracking, a community platform, and various other services.",
      tech: ["Next", "shadcn/ui", "Node.js", "MongoDB"],
      icon: <Smartphone className="w-6 h-6" />,
      live: "https://ozone-blush.vercel.app/",
    },
    {
      title: "Fox Travel Agency",
      description:
        "A travel agency website showcasing various destinations and services.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      icon: <Palette className="w-6 h-6" />,
      live: "https://fox-travel-agency.com",
    },
    {
      title: "Code Wars Website",
      description: "A platform for coding challenges and competitions.",
      tech: ["HTML/CSS", "JavaScript", "Bootstrap"],
      icon: <Code className="w-6 h-6" />,
      live: "https://reyad2002.github.io/Code-Wars-Website/",
    },
    
    {
      title: "shop/Admin",
      description: "A platform for coding challenges and competitions.",
      tech: ["HTML/CSS", "JavaScript", "Bootstrap"],
      icon: <Smartphone className="w-6 h-6" />,
      live: "https://reyad2002.github.io/shop/",
    },
    {
      title: "Creative CRUD",
      description: "A platform for coding challenges and competitions.",
      tech: ["HTML/CSS", "JavaScript", "Bootstrap"],
      icon: <Code className="w-6 h-6" />,
      live: "https://reyad2002.github.io/Creative-CRUD-/",
    },
  

  ];

  const skills = [
    "HTML/CSS",
    "JavaScript",
    "Tailwind CSS",
    "Postman",
    "MUI",
    "Framer Motion",
    "Github",
    "Responsive Design",
  ];

  const handleContactClick = () => {
    window.location.href = "mailto:reyadmohamed631@gmail.com";
  };

  const handleProjectClick = (projectTitle) => {
    console.log(`Clicked on ${projectTitle}`);
    // Add your project link logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-slate-800 mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <span className="text-blue-600">REYAD</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Frontend Developer
            </motion.p>

            <motion.div
              className="flex gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={handleContactClick}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </button>
              <button className="px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg font-medium flex items-center gap-2 transition-colors">
                <Github className="w-4 h-4" />
                <a
                  href="https://github.com/reyad2002"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Work
                </a>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { Icon: Github, href: "https://github.com/reyad2002" },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/reyad-mohamed-46a46424b/",
              },
              { Icon: Mail, href: "mailto:reyadmohamed631@gmail.com" },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-6 h-6 text-slate-600" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-slate-600 mb-6">
                  I'm a passionate frontend developer with year of experience
                  creating beautiful and functional web applications. I love
                  turning complex problems into simple, elegant solutions.
                </p>
                <p className="text-lg text-slate-600 mb-8">
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open source projects, or
                  enjoying a good cup of coffee.
                </p>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-80 h-80 rounded-2xl mx-auto"> <img className="w-full h-full object-cover rounded-2xl" src="/reyad.jpg" alt="reyad" /></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center text-slate-800 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleProjectClick(project.title)}
                      className="px-3 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded text-sm flex items-center gap-1 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </button>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm flex items-center gap-1 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              I'm always interested in new opportunities and exciting projects.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={handleContactClick}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2 mx-auto transition-colors"
              >
                <Mail className="w-5 h-5" />
                Say Hello
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 REYAD Portfolio. Built with React, Tailwind CSS & Framer
            Motion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
