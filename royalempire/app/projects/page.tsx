'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import CTASection from '@/components/CTASection';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-14 md:pt-28">
      <Hero
        title="Our Portfolio of Excellence"
        subtitle="Completed Projects"
        description="Explore our collection of successful renovation projects and see the quality and craftsmanship that sets us apart."
        backgroundImage="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920"
        showCTA={false}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Browse Our Work
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
              Each project represents our commitment to quality, attention to detail, and customer satisfaction.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Your Project Could Be Next
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
              Every successful project starts with a conversation. Let&apos;s discuss how we can transform your space into something extraordinary.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-red-600 mb-4">1000+</div>
                <h3 className="text-xl font-bold mb-2 text-black">Projects Completed</h3>
                <p className="text-gray-600">Successfully delivered across all service categories</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-red-600 mb-4">98%</div>
                <h3 className="text-xl font-bold mb-2 text-black">Client Satisfaction</h3>
                <p className="text-gray-600">Our clients love the results and recommend us</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-red-600 mb-4">15+</div>
                <h3 className="text-xl font-bold mb-2 text-black">Years of Excellence</h3>
                <p className="text-gray-600">Proven track record in the renovation industry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Start Your Renovation Journey Today"
        description="Contact us for a free consultation and let's discuss how we can bring your vision to life."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
      />
    </div>
  );
}
