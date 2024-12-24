import React from 'react'

export const AboutSection = () => {
  return (
    <section id="about" className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        {/* Content Column */}
        <div className="col-span-2 space-y-6">
          <div className="space-y-2">
            <p className="text-[#5651e5] uppercase tracking-widest font-medium">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
              Who I Am
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600 text-lg leading-relaxed">
              I am a passionate Full Stack Developer with a strong foundation in modern web technologies. 
              My journey in software development began with a curiosity for creating interactive web experiences, 
              which has evolved into a professional dedication to building robust and scalable applications.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              With expertise in both frontend and backend development, I enjoy tackling complex problems 
              and transforming ideas into elegant solutions. I'm constantly learning and adapting to new 
              technologies while maintaining a strong focus on code quality and user experience.
            </p>

            <a 
              href="/#projects" 
              className="inline-block group relative"
            >
              <span className="text-[#5651e5] text-lg hover:text-[#709dff] transition-colors duration-300">
                Check out my latest projects and experience
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#5651e5]"></span>
              </span>
            </a>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#5651e5] to-[#709dff] rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square overflow-hidden rounded-xl shadow-xl">
              <img
                src="/api/placeholder/600/600"
                alt="Profile"
                className="object-cover w-full h-full transform transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -z-10 -top-4 -right-4 w-72 h-72 bg-[#5651e5]/10 rounded-full blur-3xl" />
          <div className="absolute -z-10 -bottom-4 -left-4 w-72 h-72 bg-[#709dff]/10 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  </section>
  )
}
