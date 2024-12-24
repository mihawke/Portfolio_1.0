import React, {  ReactNode } from 'react';

interface SkillCardProps {
  title: string
  icon: ReactNode
}
const SkillCard: React.FC<SkillCardProps> = ({ title, icon }) => (
  <div className="grid grid-cols-2 items-center p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white/80 backdrop-blur-sm group">
    <div className="flex justify-center items-center">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-700 group-hover:text-indigo-500 transition-colors duration-300">
      {title}
    </h3>
  </div>
);

const SkillsSection = () => {
  const skills = [
    // MERN Stack
    { title: 'MongoDB', icon: <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="MongoDB" className="w-16 h-16" /> },
    { title: 'Express.js', icon: <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="Express.js" className="w-16 h-auto" /> },
    { title: 'React', icon: <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="React" className="w-16 h-16" /> },
    { title: 'Node.js', icon: <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="Node.js" className="w-16 h-16" /> },
    { title: 'Redux', icon: <img src="https://www.vectorlogo.zone/logos/js_redux/js_redux-icon.svg" alt="Redux" className="w-16 h-16" /> },

    // Frontend
    { title: 'JavaScript', icon: <img src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" alt="JavaScript" className="w-16 h-16" /> },
    { title: 'TypeScript', icon: <img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="TypeScript" className="w-16 h-16" /> },
    { title: 'Tailwind', icon: <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind" className="w-16 h-16" /> },
    { title: 'HTML', icon: <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg" alt="HTML" className="w-16 h-auto" /> },
    { title: 'CSS', icon: <img src="https://www.vectorlogo.zone/logos/netlifyapp_watercss/netlifyapp_watercss-ar21.svg" alt="CSS" className="w-16 h-16" /> },

    // Backend & Tools
    { title: 'PostgreSQL', icon: <img src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" alt="PostgreSQL" className="w-16 h-16" /> },
    { title: 'Git', icon: <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git" className="w-16 h-16" /> },
  ];

  return (
    <section id="skills" className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center">
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
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;