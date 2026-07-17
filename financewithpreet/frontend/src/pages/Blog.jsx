import { useState, useEffect } from 'react'
import Layout from '../components/common/Layout'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import API from '../utils/api'

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

export default function Blog() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    API.get('/blogs')
      .then(r => setBlogs(r.data || []))
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false))
  }, [])

  const filtered = blogs.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    (b.category || '').toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Layout>
      {/* Hero — overflow-hidden prevents absolute elements from causing horizontal scroll on mobile */}
      <section className="relative bg-navy-950 text-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-gold-500/5 blur-[80px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="relative z-10 max-w-7xl mx-auto px-4 text-center"
        >
          <span className="gold-label">Blog & Resources</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            Financial <span className="text-gold-400">Insights</span>
          </h1>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
            Free tips, guides and strategies to help Canadian families make smarter financial decisions.
          </p>
          {blogs.length > 0 && (
            <input
              type="text" value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full max-w-md mx-auto block bg-navy-800/80 border border-navy-600/60 px-5 py-3 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500/50 transition-all"
            />
          )}
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading && (
            <div className="flex justify-center py-20">
              <div className="w-10 h-10 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {!loading && blogs.length === 0 && (
            <div className="text-center py-24">
              <h3 className="font-serif text-2xl font-bold text-gray-300 mb-3">No Articles Yet</h3>
              <p className="text-gray-500 mb-8">Blog posts will appear here once they are published.</p>
              <Link to="/booking" className="btn-primary inline-block">Book a Free Consultation Instead</Link>
            </div>
          )}

          {!loading && blogs.length > 0 && filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No articles match "<strong className="text-gold-400">{search}</strong>"</p>
              <button onClick={() => setSearch('')} className="mt-4 text-gold-400 hover:text-gold-300 text-sm underline underline-offset-4">Clear search</button>
            </div>
          )}

          {!loading && filtered.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((blog, i) => (
                <motion.div
                  key={blog._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link to={`/blog/${blog.slug}`}
                    className="group block bg-navy-800/60 border border-navy-600/40 rounded-2xl overflow-hidden hover:border-gold-500/30 hover:-translate-y-1 hover:shadow-gold transition-all duration-400">
                    <div className="relative h-52 overflow-hidden">
                      <img src={blog.image} alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                      {blog.category && (
                        <span className="absolute top-4 left-4 bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full">
                          {blog.category}
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      {blog.date && (
                        <p className="text-gray-500 text-xs mb-3">
                          {new Date(blog.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                      )}
                      <h2 className="font-serif font-bold text-white mb-3 line-clamp-2 group-hover:text-gold-300 transition-colors">
                        {blog.title}
                      </h2>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">{blog.excerpt}</p>
                      <span className="inline-flex items-center gap-2 text-gold-400 font-semibold text-sm group-hover:gap-3 transition-all">
                        Read More <ArrowRight />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}