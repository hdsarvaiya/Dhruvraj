import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
    
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="section-subheading">Our Work</p>
          <h2 className="section-heading">Recent Projects</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap gap-2">
            <button 
              className={`px-6 py-2 rounded-sm hover:bg-opacity-90 transition ${activeFilter === 'all' ? 'bg-primary text-white' : 'bg-white text-primary hover:bg-gray-100'}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button 
              className={`px-6 py-2 rounded-sm hover:bg-opacity-90 transition ${activeFilter === 'construction' ? 'bg-primary text-white' : 'bg-white text-primary hover:bg-gray-100'}`}
              onClick={() => setActiveFilter('construction')}
            >
              Construction
            </button>
            <button 
              className={`px-6 py-2 rounded-sm hover:bg-opacity-90 transition ${activeFilter === 'roads' ? 'bg-primary text-white' : 'bg-white text-primary hover:bg-gray-100'}`}
              onClick={() => setActiveFilter('roads')}
            >
              Roads
            </button>
            <button 
              className={`px-6 py-2 rounded-sm hover:bg-opacity-90 transition ${activeFilter === 'solar' ? 'bg-primary text-white' : 'bg-white text-primary hover:bg-gray-100'}`}
              onClick={() => setActiveFilter('solar')}
            >
              Solar
            </button>
            <button 
              className={`px-6 py-2 rounded-sm hover:bg-opacity-90 transition ${activeFilter === 'government' ? 'bg-primary text-white' : 'bg-white text-primary hover:bg-gray-100'}`}
              onClick={() => setActiveFilter('government')}
            >
              Government
            </button>
            <button 
              className={`px-6 py-2 rounded-sm hover:bg-opacity-90 transition ${activeFilter === 'hospitality' ? 'bg-primary text-white' : 'bg-white text-primary hover:bg-gray-100'}`}
              onClick={() => setActiveFilter('hospitality')}
            >
              Hospitality
            </button>
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index}
              className="overflow-hidden shadow-lg rounded-sm group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="px-6 py-3 bg-white text-primary font-bold rounded-sm hover:bg-secondary transition">
                    View Project
                  </a>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-heading font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center text-sm text-primary">
                  <span className="font-bold">Category:</span>
                  <span className="ml-2">{project.categoryName}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors">
            View All Projects 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
