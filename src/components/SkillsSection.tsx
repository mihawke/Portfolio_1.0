import React, { ReactInstance, ReactNode } from 'react';

interface SkillCardProps {
  title: string
  icon: ReactNode
}
const SkillCard: React.FC<SkillCardProps> = ({ title, icon }) => (
  <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white/80 backdrop-blur-sm group">
    <div className="grid grid-cols-2 gap-4 justify-center items-center">
      <div className="flex justify-center items-center">
        {icon}
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-lg font-semibold text-gray-700 group-hover:text-[#5651e5] transition-colors duration-300">
          {title}
        </h3>
      </div>
    </div>
  </div>
);

const SkillsSection = () => {
  const skills = [
    // MERN Stack
    { title: 'MongoDB', icon: <img src="/api/placeholder/64/64" alt="MongoDB" className="w-16 h-16" /> },
    { title: 'Express.js', icon: <img src="/api/placeholder/64/64" alt="Express.js" className="w-16 h-16" /> },
    { title: 'React', icon: <img src="/api/placeholder/64/64" alt="React" className="w-16 h-16" /> },
    { title: 'Node.js', icon: <img src="/api/placeholder/64/64" alt="Node.js" className="w-16 h-16" /> },

    // Frontend
    { title: 'JavaScript', icon: <img src="/api/placeholder/64/64" alt="JavaScript" className="w-16 h-16" /> },
    { title: 'TypeScript', icon: <img src="/api/placeholder/64/64" alt="TypeScript" className="w-16 h-16" /> },
    { title: 'Tailwind', icon: <img src="/api/placeholder/64/64" alt="Tailwind" className="w-16 h-16" /> },
    { title: 'Next.js', icon: <img src="/api/placeholder/64/64" alt="Next.js" className="w-16 h-16" /> },

    // Backend & Tools
    { title: 'Python', icon: <img src="/api/placeholder/64/64" alt="Python" className="w-16 h-16" /> },
    { title: 'PostgreSQL', icon: <img src="/api/placeholder/64/64" alt="PostgreSQL" className="w-16 h-16" /> },
    { title: 'Git', icon: <img src="/api/placeholder/64/64" alt="Git" className="w-16 h-16" /> },
    { title: 'Docker', icon: <img src="/api/placeholder/64/64" alt="Docker" className="w-16 h-16" /> }
  ];

  return (
    <section id="skills" className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center">
            <p className="text-xl tracking-widest uppercase text-[#5651e5] font-medium">
              Skills
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
              My Tech Stack
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Here are the technologies I work with to bring ideas to life.
              I'm constantly learning and adding new skills to my repertoire.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                icon={skill.icon}
              />
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center">
            <p className="text-gray-600">
              And many more technologies I work with to create modern web applications.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -z-10 right-0 w-72 h-72 bg-[#5651e5]/5 rounded-full blur-3xl" />
      <div className="absolute -z-10 left-0 w-72 h-72 bg-[#709dff]/5 rounded-full blur-3xl" />
    </section>
  );
};

export default SkillsSection;