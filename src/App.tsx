import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  ExternalLink,
  Code2,
  Database,
  Smartphone,
  Palette,
  Server,
  Globe,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

function App() {
  const projects = [
    {
      title: "ShaqApp Platform",
      description:
        "Full-stack e-commerce solution with payment integration. Features include user authentication, shopping cart, and order tracking.",
      techStack: [
        "Next Js",
        "Typescript",
        "Zustand",
        "Paystack",
        "Tailwind CSS",
      ],
      github: "https://github.com/Dekin0Linux",
      live: "https://shaqapp.com",
    },
    {
      title: "Eganow website",
      description:
        "Collaborative project management tool with real-time updates, team collaboration features, and progress tracking. Built with modern React patterns and responsive design.",
      techStack: [
        "Next.js",
        "PostgreSQL",
        "Prisma",
        "WebSocket",
        "React Native",
      ],
      github: "https://github.com/Dekin0Linux",
      live: "https://eganow-website-test.vercel.app/",
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather application with geolocation, 7-day forecasts, and beautiful data visualizations. Integrates multiple weather APIs for accurate predictions.",
      techStack: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
      github: "https://github.com/Dekin0Linux",
      live: "#",
    },
    {
      title: "Social Media Analytics",
      description:
        "Comprehensive analytics dashboard for social media performance tracking. Features include engagement metrics, audience insights, and automated reporting.",
      techStack: ["React", "Node.js", "PostgreSQL", "D3.js", "Express"],
      github: "https://github.com/Dekin0Linux",
      live: "#",
    },
    {
      title: "Restaurant POS System",
      description:
        "Point-of-sale system for restaurants with order management, inventory tracking, and sales analytics. Includes both web and mobile applications.",
      techStack: [
        "React Native",
        "Node.js",
        "MongoDB",
        "Socket.io",
        "Tailwind CSS",
      ],
      github: "https://github.com/Dekin0Linux",
      live: "#",
    },
    {
      title: "Learning Management System",
      description:
        "Educational platform with course creation, student progress tracking, and interactive learning modules. Features video streaming and assignment management.",
      techStack: ["Next.js", "PostgreSQL", "Prisma", "AWS S3", "Tailwind CSS"],
      github: "https://github.com/Dekin0Linux",
      live: "#",
    },
  ];

  const skills = [
    {
      name: "Frontend Development",
      icon: Code2,
      description: "React, Next.js, TypeScript, Tailwind CSS , Webflow",
    },
    {
      name: "Backend Development",
      icon: Server,
      description: "Node.js, Express, RESTful APIs, Firebase, Solidity",
    },
    {
      name: "Database Management",
      icon: Database,
      description: "MongoDB, PostgreSQL, SQL",
    },
    {
      name: "Mobile Development",
      icon: Smartphone,
      description: "React Native, Cross-platform apps",
    },
    {
      name: "Graphics Design",
      icon: Palette,
      description: "UI Design, Photoshop",
    },
    {
      name: "DevOps & Deployment",
      icon: Globe,
      description: "Linux, VPS , Docker, CI/CD",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-sky-600">Faisal</div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-sky-600 transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-sky-600 transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-sky-600 transition-colors duration-200"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-sky-600 transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section  */}
      <section
        id="home"
        className="pt-20 pb-16 size-auto rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% "
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-white">F</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-sky-600">Faisal</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              <Typewriter
                words={["Full-Stack Developer & Designer"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={30}
                deleteSpeed={50}
                delaySpeed={1000}
              />
              
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
              <Typewriter
                words={["Passionate about creating exceptional digital experiences through clean code, innovative solutions and thoughtful design. I specialize in building scalable web and mobile applications that make a difference."]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={10}
                delaySpeed={10000}
              />
              
              {/* Passionate about creating exceptional digital experiences through
              clean code innovative solutions and thoughtful design I
              specialize in building scalable web and mobile applications that
              make a difference. */}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-sky-600 text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-400 hover:text-white transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A dedicated full-stack developer with expertise in modern web
              technologies and a passion for creating impactful digital
              solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                My Journey
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With several years of experience in full-stack development, I've
                had the privilege of working on diverse projects ranging from
                e-commerce platforms,Fintech platforms, Dashboards, to mobile
                applications. My approach combines technical expertise with
                creative problem-solving to deliver solutions that not only
                function flawlessly but also provide exceptional user
                experiences.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I believe in continuous learning and staying updated with the
                latest technologies. My experience spans across frontend and
                backend development, database design, mobile app development,
                and graphics design, making me a versatile developer capable of
                handling end-to-end project development.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-sky-50 backdrop-blur-sm p-6 rounded-xl hover:bg-sky-100 transition-colors duration-200 border border-sky-100"
                >
                  <skill.icon className="w-8 h-8 text-sky-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {skill.name}
                  </h4>
                  <p className="text-sm text-gray-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "PostgreSQL",
                "React Native",
                "Tailwind CSS",
                "TypeScript",
                "Express",
                "Linux",
                "VPS",
                "Express",
                "Firebase",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-sky-100 hover:text-sky-700 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-right">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent work, featuring full-stack applications,
              mobile apps, and innovative web solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-sky-400 to-sky-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className="w-16 h-16 text-white/80" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-sky-50 text-sky-700 text-xs px-3 py-1 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 hover:text-sky-600 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-2 text-gray-600 hover:text-sky-600 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities and
              interesting projects. Let's connect and discuss how we can bring
              your ideas to life.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://github.com/Dekin0Linux"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 p-6 rounded-xl text-center hover:bg-sky-50 hover:shadow-lg transition-all duration-300 group"
            >
              <Github className="w-8 h-8 mx-auto mb-4 text-gray-600 group-hover:text-sky-600" />
              <h3 className="font-semibold text-gray-900 mb-2">GitHub</h3>
              <p className="text-sm text-gray-600">View my repositories</p>
            </a>

            <a
              href="https://www.linkedin.com/in/faisal-salif-89b02379/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 p-6 rounded-xl text-center hover:bg-sky-50 hover:shadow-lg transition-all duration-300 group"
            >
              <Linkedin className="w-8 h-8 mx-auto mb-4 text-gray-600 group-hover:text-sky-600" />
              <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-600">Professional network</p>
            </a>

            <a
              href="mailto:phaisalsalif@gmail.com"
              className="bg-gray-50 p-6 rounded-xl text-center hover:bg-sky-50 hover:shadow-lg transition-all duration-300 group"
            >
              <Mail className="w-8 h-8 mx-auto mb-4 text-gray-600 group-hover:text-sky-600" />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-sm text-gray-600">Send me a message</p>
            </a>

            <a
              href="https://wa.me/+233261965074"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 p-6 rounded-xl text-center hover:bg-sky-50 hover:shadow-lg transition-all duration-300 group"
            >
              <MessageCircle className="w-8 h-8 mx-auto mb-4 text-gray-600 group-hover:text-sky-600" />
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600">Quick chat</p>
            </a>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Prefer to reach out directly?</p>
            <a
              href="mailto:phaisalsalif@gmail.com"
              className="bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-sky-400 mb-4">Faisal</div>
            <p className="text-gray-400 mb-6">
              Full-Stack Developer & Designer
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/Dekin0Linux"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/faisal-salif-89b02379/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:phaisalsalif@gmail.com"
                className="text-gray-400 hover:text-sky-400 transition-colors duration-200"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/0261965074"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 transition-colors duration-200"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2022 Faisal. All rights reserved. Built with React & Tailwind
              CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
