import React from 'react'

export const AboutSection = () => {
  return (
    <section id="about" className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Content Column */}
          <div className="col-span-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
              Who I Am
            </h2>

            <div className="space-y-4">
              <p className="text-gray-600 text-lg leading-relaxed">
              I’m a Full Stack Developer with a passion for modern web technologies. 
              My journey into software development began with a simple curiosity about how interactive web experiences are built. 
              Over time, that curiosity has turned into a deep commitment to creating scalable, reliable applications that make a real impact.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
              With a strong background in both frontend and backend development, 
              I love taking on challenging problems and turning ideas into clean, functional solutions. 
              I’m always learning and staying up-to-date with new technologies, 
              while keeping a focus on writing quality code and creating great user experiences.
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square overflow-hidden rounded-xl shadow-xl">
                <img
                  src="https://c4.wallpaperflare.com/wallpaper/648/716/840/iron-man-dark-background-superhero-grid-wallpaper-preview.jpg"
                  alt="Profile"
                  className="object-cover w-full h-full transform transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
