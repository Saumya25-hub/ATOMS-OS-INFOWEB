import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Eye, 
  Maximize2, 
  Layers, 
  CheckCircle2, 
  Monitor, 
  HardDrive, 
  Cpu, 
  Filter
} from 'lucide-react';
import { PROOF_PHOTOS, HARDWARE_TESTBEDS } from '../data/osData';

export default function ProofGallery({ onOpenScreenshot }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: `All Proofs (${PROOF_PHOTOS.length})` },
    { id: 'Monitor', label: 'Physical Monitors' },
    { id: 'Hypervisor', label: 'Intel VT-x & Hypervisor' },
    { id: 'Network', label: 'RTL8125 2.5G & Network' },
    { id: 'Desktop', label: 'Desktop & Graphics' },
    { id: 'Storage', label: 'NVMe Gen4 & Storage' },
    { id: 'Memory', label: 'Memory & Paging' }
  ];

  const filteredProofs = PROOF_PHOTOS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section style={{ padding: '40px 0 80px 0' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <ShieldCheck size={18} style={{ color: 'var(--accent-emerald)' }} />
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
              FORENSIC EVIDENCE REPOSITORY // ZERO VAPORWARE
            </span>
          </div>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '12px' }}>
            Hardware Proof & Diagnostic Telemetry Gallery
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            Every screenshot and photo below was produced directly by ATOMS OS running on real bare-metal silicon 
            or during pure UEFI pre-flight test suites. Click on any item to view high-resolution framebuffer telemetry, 
            hardware testbed specifications, and verification logs.
          </p>
        </div>

        {/* Hardware Testbed Specs Banner */}
        <div style={{ 
          background: 'var(--bg-secondary)', 
          border: '1px solid var(--border-medium)', 
          borderRadius: 'var(--radius-lg)', 
          padding: '20px 24px', 
          marginBottom: '32px' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <Cpu size={16} style={{ color: 'var(--accent-cyan)' }} />
            <span style={{ fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.02em', color: '#fff' }}>
              PHYSICAL HARDWARE TESTBED TARGETS
            </span>
          </div>

          <div className="grid-2">
            {HARDWARE_TESTBEDS.map((bed) => (
              <div key={bed.id} style={{ background: 'var(--bg-card)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>{bed.name}</div>
                  <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>{bed.status}</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
                  {bed.cpu} • {bed.chipset} • {bed.ram}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Firmware: {bed.bios}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`btn ${activeCategory === cat.id ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '6px 14px', fontSize: '0.8rem' }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Proof Cards Grid */}
        <div className="grid-3">
          {filteredProofs.map((item) => (
            <div 
              key={item.id} 
              className="dev-card"
              style={{ 
                padding: '0', 
                overflow: 'hidden', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between' 
              }}
            >
              {/* Image Preview with overlay on hover */}
              <div 
                style={{ position: 'relative', width: '100%', height: '220px', background: '#000', cursor: 'pointer', overflow: 'hidden' }}
                onClick={() => onOpenScreenshot(item.image, item.title, `${item.hardware} • ${item.forensicData}`)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    background: '#090b12',
                    transition: 'transform 0.3s ease'
                  }}
                  className="proof-img-thumb"
                />
                
                {/* Category Badge Floating */}
                <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
                  <span className="badge badge-cyan" style={{ backdropFilter: 'blur(8px)', background: 'rgba(6, 182, 212, 0.2)' }}>
                    {item.category}
                  </span>
                </div>

                {/* Inspect Overlay Icon */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.2s ease'
                }} className="hover-overlay">
                  <div style={{
                    background: 'rgba(15, 23, 42, 0.85)',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.8rem',
                    border: '1px solid var(--border-medium)'
                  }}>
                    <Maximize2 size={14} />
                    <span>Expand Proof</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                    {item.title}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--text-accent)', fontFamily: 'var(--font-mono)', marginBottom: '10px' }}>
                    <Cpu size={12} />
                    <span>{item.hardware}</span>
                  </div>

                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '12px' }}>
                    {item.description}
                  </p>

                  <div style={{ 
                    background: 'var(--bg-code)', 
                    padding: '8px 10px', 
                    borderRadius: '4px', 
                    fontSize: '0.725rem', 
                    color: '#94a3b8', 
                    fontFamily: 'var(--font-mono)', 
                    border: '1px solid var(--border-subtle)' 
                  }}>
                    <strong>Forensic Verdict:</strong> {item.forensicData}
                  </div>
                </div>

                {/* Button Action */}
                <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    File: {item.filename}
                  </span>
                  <button
                    onClick={() => onOpenScreenshot(item.image, item.title, `${item.hardware} • ${item.forensicData}`)}
                    className="btn btn-secondary"
                    style={{ padding: '5px 10px', fontSize: '0.75rem' }}
                  >
                    <Eye size={12} />
                    <span>View Telemetry</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .dev-card:hover .proof-img-thumb {
          transform: scale(1.03);
        }
        .dev-card:hover .hover-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
