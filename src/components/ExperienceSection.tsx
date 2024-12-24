import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  company?: string;
  duration?: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  liveUrl,
  githubUrl,
  company,
  duration
}) => (
  <div className="relative group">
    <div className="relative flex flex-col h-full rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <div className="relative flex-1 p-6 bg-white group-hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] transition-all duration-300">
        <div className="space-y-4">
          {/* Title and Company */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-white">
              {title}
            </h3>
            {company && (
              <p className="text-[#5651e5] group-hover:text-white/90">
                {company} • {duration}
              </p>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 group-hover:text-white/90">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700 
                         group-hover:bg-white/10 group-hover:text-white 
                         transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 group-hover:text-white 
                         hover:underline transition-colors duration-300"
              >
                <FaLink size={20} />
                <span>Live Demo</span>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 group-hover:text-white 
                         hover:underline transition-colors duration-300"
              >
                <FaGithub size={20} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      company: "Tech Solutions Inc",
      duration: "2023 - Present",
      description: "Developed a full-stack e-commerce platform with features including user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      image: "/api/placeholder/800/400",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      title: "Social Media Analytics Dashboard",
      company: "Data Insights Co",
      duration: "2022 - 2023",
      description: "Built a real-time analytics dashboard for social media metrics using modern web technologies.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      image: "/api/placeholder/800/400",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      title: "AI-Powered Content Manager",
      company: "AI Innovations Ltd",
      duration: "2021 - 2022",
      description: "Created an AI-powered content management system with automated content generation and optimization features.",
      technologies: ["Python", "React", "FastAPI", "Docker", "AWS"],
      image: "/api/placeholder/800/400",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      title: "Healthcare Management System",
      company: "HealthTech Solutions",
      duration: "2020 - 2021",
      description: "Developed a comprehensive healthcare management system for patient records and appointment scheduling.",
      technologies: ["React", "Node.js", "MySQL", "Socket.io"],
      image: "/api/placeholder/800/400",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    }
  ];

  return (
    <section id="experience" className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <p className="text-xl tracking-widest uppercase text-[#5651e5] font-medium">
              Experience
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
              Previous Jobs and Projects
            </h2>
            <p className="text-gray-600 max-w-2xl text-lg">
              Here are some of the key projects I've worked on throughout journey.
              Each project has helped me grow as a developer and solve real-world problems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;