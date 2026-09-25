import React, { useEffect } from 'react';
import { X, ExternalLink, ShieldCheck, Download, ZoomIn } from 'lucide-react';

export default function ScreenshotModal({ isOpen, onClose, data }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div style={{
          padding: '14px 20px',
          borderBottom: '1px solid var(--border-medium)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'var(--bg-secondary)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={18} style={{ color: 'var(--accent-emerald)' }} />
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>
                {data.title || 'Forensic Proof Telemetry'}
              </h3>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                {data.details || 'Bare-Metal Silicon Screen Capture'}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a
              href={data.image}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.75rem' }}
              title="Open raw image in new tab"
            >
              <ExternalLink size={14} />
              <span>Full Screen</span>
            </a>
            <button
              onClick={onClose}
              className="btn btn-secondary"
              style={{ padding: '6px 10px', fontSize: '0.75rem' }}
              title="Close modal (Esc)"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Modal Image Viewer */}
        <div style={{
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#040508',
          overflowY: 'auto',
          flexGrow: 1
        }}>
          <img
            src={data.image}
            alt={data.title}
            style={{
              maxWidth: '100%',
              maxHeight: '70vh',
              objectFit: 'contain',
              borderRadius: '6px',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 0 30px rgba(0,0,0,0.8)'
            }}
          />
        </div>

        {/* Modal Footer */}
        <div style={{
          padding: '12px 20px',
          borderTop: '1px solid var(--border-medium)',
          background: 'var(--bg-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.75rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            Verified Source: <code style={{ color: 'var(--accent-cyan)' }}>d:\Signatures_OS</code> (BOS Kernel Baseline)
          </div>
          <div>
            Creator: <strong style={{ color: '#fff' }}>Saumya Chaudhari</strong> (Saumya25-hub)
          </div>
        </div>

      </div>
    </div>
  );
}
