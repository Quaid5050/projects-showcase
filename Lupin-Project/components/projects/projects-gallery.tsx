"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"

const categories = ["All", "Home Renovation", "Construction", "Commercial", "Custom"]

const projects = [
  {
    title: "Modern Kitchen Renovation",
    category: "Home Renovation",
    description: "Complete kitchen remodel with custom cabinetry and premium finishes",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Scarborough, ON",
  },
  {
    title: "Commercial Office Build",
    category: "Commercial",
    description: "Full office fit-out for a growing tech company",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Toronto, ON",
  },
  {
    title: "Luxury Bathroom Remodel",
    category: "Home Renovation",
    description: "Spa-inspired bathroom transformation with custom tilework",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Markham, ON",
  },
  {
    title: "Retail Space Fit-Out",
    category: "Commercial",
    description: "Modern retail space design and construction",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Scarborough, ON",
  },
  {
    title: "Home Addition Project",
    category: "Construction",
    description: "Two-story addition including new master suite",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Pickering, ON",
  },
  {
    title: "Basement Finishing",
    category: "Home Renovation",
    description: "Complete basement transformation with home theater",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Scarborough, ON",
  },
  {
    title: "Custom Deck Construction",
    category: "Construction",
    description: "Multi-level composite deck with built-in seating",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Ajax, ON",
  },
  {
    title: "Restaurant Renovation",
    category: "Commercial",
    description: "Complete interior renovation for upscale dining",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Toronto, ON",
  },
  {
    title: "Custom Built-In Shelving",
    category: "Custom",
    description: "Floor-to-ceiling custom library shelving",
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Scarborough, ON",
  },
  {
    title: "Garage Conversion",
    category: "Construction",
    description: "Garage to living space conversion with full bathroom",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Whitby, ON",
  },
  {
    title: "Medical Office Build-Out",
    category: "Commercial",
    description: "Specialized medical clinic construction",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Scarborough, ON",
  },
  {
    title: "Custom Home Bar",
    category: "Custom",
    description: "Bespoke home bar with wine storage",
    image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    location: "Markham, ON",
  },
]

export function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "gradient-primary text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              layout
              className="group relative rounded-2xl overflow-hidden cursor-pointer card-glow"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 gradient-primary text-white text-xs font-medium rounded-lg mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-white/70 text-sm mt-1">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 lg:h-96 object-cover"
              />
              <div className="p-6 lg:p-8">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-lg mb-3">
                  {selectedProject.category}
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4">{selectedProject.location}</p>
                <p className="text-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
