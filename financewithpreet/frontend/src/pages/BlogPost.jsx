import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from '../components/common/Layout'
import API from '../utils/api'

export default function BlogPost() {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    API.get(`/blogs/${slug}`).then(r => setBlog(r.data)).catch(() => setBlog(null)).finally(() => setLoading(false))
  }, [slug])

  if (loading) return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-navy-950">
        <div className="w-10 h-10 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" />
      </div>
    </Layout>
  )

  if (!blog) return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-navy-950">
        <h1 className="font-serif text-4xl font-bold text-gold-400 mb-4">Article Not Found</h1>
        <Link to="/blog" className="btn-primary">Back to Blog</Link>
      </div>
    </Layout>
  )

  return (
    <Layout>
      <div className="pt-28 pb-16 bg-navy-950 min-h-screen">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

            <Link to="/blog"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium mb-8 transition-colors text-sm">
              ← Back to Blog
            </Link>

            {blog.image && (
              <img src={blog.image} alt={blog.title}
                className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-navy-lg mb-8 border border-navy-700/40" />
            )}

            {blog.category && (
              <span className="bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold px-3 py-1.5 rounded-full mb-5 inline-block">
                {blog.category}
              </span>
            )}

            <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {blog.title}
            </h1>

            {blog.date && (
              <p className="text-gray-500 text-sm mb-10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                {new Date(blog.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            )}

            {/* Article content — dark styled prose */}
            <div
              className="prose-dark text-gray-300 leading-relaxed"
              style={{ lineHeight: '1.85' }}
              dangerouslySetInnerHTML={{ __html: blog.content || `<p>${blog.excerpt}</p>` }}
            />

            {/* CTA block */}
            <div className="mt-14 p-8 bg-navy-800/80 border border-gold-500/20 rounded-2xl text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
              <h3 className="font-serif text-2xl font-bold text-white mb-3">Ready to Take Action?</h3>
              <p className="text-gray-400 mb-6">Book your free consultation and let's build your financial plan together.</p>
              <Link to="/booking" className="btn-primary inline-block">Book Free Call</Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Prose dark styles injected via style tag */}
      <style>{`
        .prose-dark h1, .prose-dark h2, .prose-dark h3 {
          color: #ffffff;
          font-family: 'Playfair Display', serif;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .prose-dark h2 { font-size: 1.5rem; font-weight: 700; }
        .prose-dark h3 { font-size: 1.2rem; font-weight: 600; color: #fbbf24; }
        .prose-dark p { margin-bottom: 1.25rem; color: #d1d5db; }
        .prose-dark ul, .prose-dark ol { padding-left: 1.5rem; margin-bottom: 1.25rem; }
        .prose-dark li { margin-bottom: 0.5rem; color: #d1d5db; }
        .prose-dark strong { color: #fbbf24; font-weight: 600; }
        .prose-dark a { color: #f59e0b; text-decoration: underline; }
        .prose-dark a:hover { color: #fbbf24; }
        .prose-dark blockquote {
          border-left: 3px solid #f59e0b;
          padding-left: 1rem;
          margin: 1.5rem 0;
          color: #9ca3af;
          font-style: italic;
        }
      `}</style>
    </Layout>
  )
}
