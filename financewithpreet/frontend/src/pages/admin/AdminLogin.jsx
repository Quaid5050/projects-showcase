import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import API from '../../utils/api'
import toast from 'react-hot-toast'

export default function AdminLogin() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const { data } = await API.post('/admin/login', form)
      localStorage.setItem('adminToken', data.token)
      navigate('/admin/dashboard')
    } catch {
      toast.error('Invalid email or password.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold-500/6 blur-[120px] rounded-full pointer-events-none" />
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(245,158,11,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-navy-800/80 backdrop-blur-xl border border-navy-600/50 rounded-2xl shadow-navy-lg p-8">
          {/* Top gold accent */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-gold">
              <span className="text-navy-900 font-bold text-2xl font-serif">FP</span>
            </div>
            <h1 className="font-serif text-2xl font-bold text-white">Admin Portal</h1>
            <p className="text-gray-500 text-sm mt-1">Finance With Preet</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Email Address</label>
              <input type="email" value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required className="input-dark" placeholder="admin@financewithpreet.com" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Password</label>
              <input type="password" value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                required className="input-dark" placeholder="••••••••" />
            </div>
            <button type="submit" disabled={loading} className="w-full btn-primary py-4 text-base disabled:opacity-60 mt-2">
              {loading ? 'Logging in...' : 'Login to Admin'}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}
