'use client'

import React from 'react'

export type PickupType = 'ASAP' | 'SCHEDULED'

interface OrderTypeSelectorProps {
  pickupType: PickupType
  onPickupTypeChange: (type: PickupType) => void
  pickupTime: string
  onPickupTimeChange: (time: string) => void
  pickupTimeError?: string
}

// Returns the minimum selectable datetime (30 min from now, rounded to next 15 min)
function getMinDateTime(): string {
  const now = new Date(Date.now() + 30 * 60 * 1000)
  const mins = now.getMinutes()
  const rounded = Math.ceil(mins / 15) * 15
  now.setMinutes(rounded, 0, 0)
  // Format as "YYYY-MM-DDTHH:MM" for datetime-local input
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`
}

// Max: 7 days from now
function getMaxDateTime(): string {
  const d = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T21:30`
}

export function OrderTypeSelector({
  pickupType,
  onPickupTypeChange,
  pickupTime,
  onPickupTimeChange,
  pickupTimeError,
}: OrderTypeSelectorProps) {
  return (
    <div>
      <h3 className="font-semibold text-restaurant-text mb-1">Pickup time</h3>
      <p className="text-sm text-restaurant-muted mb-4">Choose when you&apos;d like to pick up your order.</p>

      {/* ASAP / SCHEDULED cards */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {/* ASAP */}
        <button
          type="button"
          onClick={() => onPickupTypeChange('ASAP')}
          className={[
            'flex flex-col items-center gap-2 py-5 px-4 rounded-2xl border-2 transition-all focus:outline-none',
            pickupType === 'ASAP'
              ? 'border-brand-red bg-transparent text-restaurant-text'
              : 'border-restaurant-border bg-transparent text-restaurant-muted hover:border-brand-red/50',
          ].join(' ')}
        >
          <span className="text-3xl leading-none">⚡</span>
          <span className="font-bold text-sm tracking-widest uppercase text-restaurant-text">Pick Up ASAP</span>
          <span className="text-xs text-restaurant-muted">Ready as soon as possible</span>
        </button>

        {/* SCHEDULED */}
        <button
          type="button"
          onClick={() => onPickupTypeChange('SCHEDULED')}
          className={[
            'flex flex-col items-center gap-2 py-5 px-4 rounded-2xl border-2 transition-all focus:outline-none',
            pickupType === 'SCHEDULED'
              ? 'border-brand-red bg-transparent text-restaurant-text'
              : 'border-restaurant-border bg-transparent text-restaurant-muted hover:border-brand-red/50',
          ].join(' ')}
        >
          <span className="text-3xl leading-none">🕐</span>
          <span className="font-bold text-sm tracking-widest uppercase text-restaurant-text">
            Select Time (Later)
          </span>
          <span className="text-xs text-restaurant-muted">Schedule for later</span>
        </button>
      </div>

      {/* Datetime picker — only when SCHEDULED */}
      {pickupType === 'SCHEDULED' && (
        <div>
          <label
            htmlFor="pickup-datetime"
            className="block text-xs font-bold text-restaurant-text uppercase tracking-widest mb-2"
          >
            Pickup Date &amp; Time
          </label>
          <input
            id="pickup-datetime"
            type="datetime-local"
            value={pickupTime}
            min={getMinDateTime()}
            max={getMaxDateTime()}
            onChange={(e) => onPickupTimeChange(e.target.value)}
            className={[
              'w-full px-4 py-3 rounded-xl border bg-white text-restaurant-text',
              'focus:outline-none focus:ring-2 focus:ring-brand-red transition text-sm',
              pickupTimeError ? 'border-red-400' : 'border-restaurant-border',
            ].join(' ')}
          />
          {pickupTimeError && (
            <p className="mt-1.5 text-xs text-red-500">{pickupTimeError}</p>
          )}
        </div>
      )}
    </div>
  )
}
