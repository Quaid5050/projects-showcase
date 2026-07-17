'use client';

import { useState, useEffect } from 'react';
import { BellIcon } from './Icons';

const STORAGE_KEY = 'bp_admin_alerts_enabled';

interface OrderAlertToggleProps {
  onChange?: (enabled: boolean) => void;
}

export default function OrderAlertToggle({ onChange }: OrderAlertToggleProps) {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const val = stored !== null ? stored === 'true' : true;
    setEnabled(val);
    onChange?.(val);
  }, [onChange]);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    localStorage.setItem(STORAGE_KEY, String(next));
    onChange?.(next);
  };

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
        enabled
          ? 'bg-[#FFD700]/10 border-[#FFD700]/30 text-[#FFD700]'
          : 'bg-gray-800 border-gray-700 text-gray-500'
      }`}
      title={enabled ? 'Order alerts are ON — click to disable' : 'Order alerts are OFF — click to enable'}
    >
      <BellIcon className="w-3.5 h-3.5" />
      {enabled ? 'Alerts ON' : 'Alerts OFF'}
    </button>
  );
}
