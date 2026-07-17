'use client'

import { useEffect, useState } from 'react'

export type ToastType = 'success' | 'error' | 'info'

interface ToastState {
  message: string
  type: ToastType
  visible: boolean
}

let toastCallback: ((msg: string, type: ToastType) => void) | null = null

export function showToast(message: string, type: ToastType = 'success') {
  if (toastCallback) toastCallback(message, type)
}

export default function Toast() {
  const [toast, setToast] = useState<ToastState>({ message: '', type: 'success', visible: false })
  const [show, setShow] = useState(false)

  useEffect(() => {
    toastCallback = (message, type) => {
      setToast({ message, type, visible: true })
      setShow(true)
      setTimeout(() => {
        setShow(false)
        setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 400)
      }, 4500)
    }
    return () => { toastCallback = null }
  }, [])

  if (!toast.visible) return null

  const icons = {
    success: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5"/>
      </svg>
    ),
    error: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="m15 9-6 6M9 9l6 6"/>
      </svg>
    ),
    info: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4M12 8h.01"/>
      </svg>
    ),
  }

  const borderColors = {
    success: 'border-green-500/50',
    error: 'border-red-500/50',
    info: 'border-[#d4af37]/50',
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-[9999] min-w-[300px] max-w-sm bg-[#1a1a1a] border ${borderColors[toast.type]} rounded-sm p-4 flex items-start gap-3 shadow-2xl transition-all duration-400 ${
        show ? 'translate-x-0 opacity-100' : 'translate-x-[110%] opacity-0'
      }`}
    >
      <div className="flex-shrink-0 mt-0.5">{icons[toast.type]}</div>
      <div className="flex-1">
        <p className="text-white text-sm leading-relaxed">{toast.message}</p>
      </div>
      <button
        onClick={() => { setShow(false); setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 400) }}
        className="flex-shrink-0 text-white/40 hover:text-white transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
  )
}
