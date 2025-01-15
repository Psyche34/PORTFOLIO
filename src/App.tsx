import React, { useState } from 'react';
import { Menu, X, Camera, Pen, Code, Github, Twitter, Linkedin, Mail } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Urban Shadows",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80&w=1200&h=800"
    },
    {
      title: "Digital Renaissance",
      category: "Design",
      image: "https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?auto=format&fit=crop&q=80&w=1200&h=800"
    },
    {
      title: "Concrete Poetry",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&q=80&w=1200&h=800"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-2xl font-bold tracking-wider">PORTFOLIO</span>
            <div className="hidden md:flex space-x-8">
              <a href="#work" className="hover:text-gray-300 transition-colors">Work</a>
              <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
              <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black pt-16">
          <div className="flex flex-col items-center space-y-8 pt-8">
            <a href="#work" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Work</a>
            <a href="#about" className="text-2xl" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" className="text-2xl" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}

      {/* Hero Section with Animated Background */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden animated-gradient">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>

        {/* 3D Animated Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-element absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="floating-element-delayed absolute bottom-1/4 right-1/4 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>
          <div className="floating-element absolute top-1/2 right-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Creative Vision</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Photography • Design • Development
          </p>
        </div>
      </div>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 animated-gradient">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden transform hover:scale-105 transition-transform duration-500"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110 grayscale"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-gray-300">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white text-black relative overflow-hidden">
        <div className="floating-element absolute -top-20 -right-20 w-40 h-40 bg-black/5 rounded-full blur-xl"></div>
        <div className="floating-element-delayed absolute -bottom-20 -left-20 w-40 h-40 bg-black/5 rounded-full blur-xl"></div>
        <div className="max-w-4xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-600 mb-4">
                I'm a multidisciplinary creative professional specializing in photography, design, and development. 
                My work focuses on finding beauty in simplicity and creating meaningful digital experiences.
              </p>
              <div className="flex space-x-6 mt-8">
                <Camera size={24} className="transform hover:scale-110 transition-transform" />
                <Pen size={24} className="transform hover:scale-110 transition-transform" />
                <Code size={24} className="transform hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-100 transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800&h=800" 
                  alt="Portrait"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 animated-gradient relative overflow-hidden">
        <div className="floating-element absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="floating-element-delayed absolute bottom-1/4 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-12">Let's Connect</h2>
          <div className="flex justify-center space-x-8">
            <a href="#" className="transform hover:scale-110 hover:text-gray-300 transition-all"><Github size={24} /></a>
            <a href="#" className="transform hover:scale-110 hover:text-gray-300 transition-all"><Twitter size={24} /></a>
            <a href="#" className="transform hover:scale-110 hover:text-gray-300 transition-all"><Linkedin size={24} /></a>
            <a href="#" className="transform hover:scale-110 hover:text-gray-300 transition-all"><Mail size={24} /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;