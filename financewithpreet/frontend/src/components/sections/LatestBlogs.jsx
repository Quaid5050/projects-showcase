import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import API from '../../utils/api'

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    API.get('/blogs')
      .then(r => setBlogs((r.data || []).slice(0, 3)))
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex justify-center">
        <div className="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" />
      </div>
    </section>
  )

  if (blogs.length === 0) return null

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4"
        >
          <div>
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3 inline-block">Education Hub</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-0">Learn Before<br />You Decide</h2>
          </div>
          <Link to="/blog"
            className="text-gold-600 font-semibold flex items-center gap-2 hover:text-gold-700 transition-colors whitespace-nowrap text-sm group">
            Visit Learning Centre
            <span className="group-hover:translate-x-1 transition-transform duration-200"><ArrowRight /></span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Link to={`/blog/${blog.slug}`}
                className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gold-500/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-400">
                <div className="relative h-52 overflow-hidden">
                  <img src={blog.image} alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />
                  {blog.category && (
                    <span className="absolute top-4 left-4 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-gold">
                      {blog.category}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  {blog.date && (
                    <p className="text-gray-400 text-xs mb-3">
                      {new Date(blog.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  )}
                  <h3 className="font-serif font-bold text-navy-900 text-lg mb-3 group-hover:text-gold-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4">{blog.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-gold-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    Read More <ArrowRight />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
