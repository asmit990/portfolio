import React, { useState } from 'react';
import { 
  Github, 
  Mail, 
  ExternalLink, 
  Code2, 
  Server, 
  GitBranch, 
  Layers,
  ChevronDown,
  MapPin,
  Calendar,
  GraduationCap,
  Clock
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const skills = [
    { name: 'Full-Stack Development', icon: Code2, color: 'text-blue-500' },
    { name: 'DevOps', icon: Server, color: 'text-green-500' },
    { name: 'System Design', icon: Layers, color: 'text-purple-500' },
    { name: 'Open Source', icon: GitBranch, color: 'text-orange-500' }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack web application with React, Node.js, and MongoDB',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      status: 'In Progress'
    },
    {
      title: 'DevOps Pipeline',
      description: 'CI/CD pipeline automation with Docker and Kubernetes',
      tech: ['Docker', 'Kubernetes', 'Jenkins', 'AWS'],
      status: 'Completed'
    },
    {
      title: 'System Monitor',
      description: 'Real-time system monitoring dashboard',
      tech: ['Python', 'React', 'WebSocket', 'PostgreSQL'],
      status: 'Planning'
    },
    {
      title: 'Blockchain',
      description: 'P2P blockchain prototype',
      tech: ['Golang'],
      status: 'Completed',
      details: 'https://github.com/asmit990/blockchain',
    },
    {
      title: 'TRANSchanger',
      description: 'A currency converter web app with real-time exchange rates and intuitive interface',
      tech: ['React', 'TransformationJS', 'JavaScript', 'CSS'],
      status: 'Completed',
      details: 'https://asmit990.github.io/TRANSchanger/',
    },
    {
      title: 'Frames Web',
      description: 'Photography club website with stunning animations and interactive galleries',
      tech: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      status: 'Completed',
      details: 'https://asmit990.github.io/frames-web/',
    },
    {
      title: 'Expense Tracker',
      description: 'React-based expense tracking app built in 9 hours with budget management features',
      tech: ['React', 'JavaScript', 'CSS'],
      status: 'Completed',
      details: 'https://asmit990.github.io/expenstracker/',
    },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectDetails = (project: typeof projects[0]) => {
    if (project.details) {
      window.open(project.details, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-opacity-50 backdrop-blur-sm  z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-blue-500 ">Asmit</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-100 ${
                    activeSection === item.toLowerCase() ? 'text-blue-900' : 'text-blue-500'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-700 via-blue-800 to-teal-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-teal-200">Asmit</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              A 20-year-old IT undergrad passionate about building, breaking, and learning things in tech.
            </p>
            <p className="text-lg mb-8 text-blue-200 max-w-2xl mx-auto leading-relaxed">
              From crafting full-stack web apps to exploring DevOps, I love turning ideas into working solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
              <a
                href="https://github.com/asmit990"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Github className="w-5 h-5 mr-2" />
                View My GitHub
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-all duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </button>
            </div>
            <div className="animate-bounce">
              <ChevronDown className="w-6 h-6 mx-auto text-blue-200" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Currently diving deeper into system design, open-source contributions, and real-world projects that challenge me to grow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Education</h3>
                  <p className="text-gray-600">3rd Year B.Tech in Information Technology</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Age</h3>
                  <p className="text-gray-600">20 years old</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Code2 className="w-6 h-6 text-purple-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Focus Areas</h3>
                  <p className="text-gray-600">Full-Stack Development, DevOps, System Design</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Always Learning. Always Building.</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I believe in the power of continuous learning and hands-on experience. Every project is an opportunity to grow, every challenge a chance to innovate.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My journey in tech is driven by curiosity and the desire to create solutions that make a difference. Whether it's building scalable web applications or contributing to open-source projects, I'm always excited about the next challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Interests</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Exploring diverse areas of technology to build comprehensive solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <skill.icon className={`w-12 h-12 ${skill.color} mb-4`} />
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Docker', 'Kubernetes', 'AWS', 'MongoDB', 'PostgreSQL', 'Git', 'Linux'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full text-sm font-medium hover:shadow-md transition-shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real-world projects that challenge me to grow and learn new technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    project.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.details ? (
                  <button 
                    onClick={() => handleProjectDetails(project)}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors hover:underline"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                ) : (
                  <div className="inline-flex items-center text-gray-400 font-medium cursor-not-allowed">
                    <Clock className="w-4 h-4 mr-1" />
                    Coming Soon
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-teal-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Always open to discussing new opportunities, collaborations, or just having a chat about tech!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="https://github.com/asmit990"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Github className="w-5 h-5 mr-3" />
              GitHub Profile
            </a>
            <a
              href="mailto:asmit@example.com"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-all duration-200"
            >
              <Mail className="w-5 h-5 mr-3" />
              Send Email
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-blue-600">
            <p className="text-blue-200">
              © 2025 Asmit. Always learning. Always building.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;