import { useEffect, useRef } from 'react';
import LeadForm from './LeadForm';

export default function EstimateModal({ service, onClose }) {
  const overlayRef = useRef(null);

  // Lock body scroll & handle ESC
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  // Close on backdrop click
  const handleBackdrop = e => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      className="modal-overlay"
      onClick={handleBackdrop}
      role="dialog"
      aria-modal="true"
      aria-label={`Request estimate for ${service}`}
    >
      <div className="modal-box">
        {/* Header */}
        <div className="modal-header">
          <div>
            <p className="modal-label">Free Estimate</p>
            <h2 className="modal-title">{service}</h2>
          </div>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="modal-body">
          <LeadForm preselected={service} />
        </div>
      </div>
    </div>
  );
}
