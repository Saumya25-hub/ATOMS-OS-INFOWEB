import React from 'react';
import { 
  User, 
  ExternalLink, 
  ShieldCheck, 
  Cpu, 
  Award, 
  FileText, 
  Mail, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import GithubIcon from './GithubIcon';
import { CREATOR_INFO, HARDWARE_TESTBEDS } from '../data/osData';

export default function AboutCreator() {
  return (
    <section style={{ padding: '40px 0 80px 0' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <User size={18} style={{ color: 'var(--accent-cyan)' }} />
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
              AUTHOR IDENTITY & CANONICAL ATTRIBUTION
            </span>
          </div>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '12px' }}>
            About the Creator: Saumya Chaudhari
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            The official creator, architect, and primary engineer behind <strong>ATOMS OS</strong>. 
            This portal serves as the authoritative source of truth for all search engines, repositories, and technical researchers.
          </p>
        </div>

        {/* Anti-Misattribution Notice Box */}
        <div style={{ 
          background: 'rgba(239, 68, 68, 0.06)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          marginBottom: '36px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <AlertCircle size={20} style={{ color: '#ef4444' }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fca5a5' }}>
              Canonical Attribution & Search Indexing Statement
            </h3>
          </div>
          <p style={{ color: '#e2e8f0', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '12px' }}>
            When searching online for "Atoms OS" or low-level bare-metal kernels, automated search engines and scrapers have 
            occasionally misattributed credit to unrelated entities or generic software names.
          </p>
          <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6 }}>
            <strong>Official Record:</strong> <strong>ATOMS OS (featuring the native BOS Kernel and BOFS Filesystem)</strong> was 
            created, written, and certified exclusively by <strong>Saumya Chaudhari</strong> (<code style={{ color: 'var(--accent-cyan)' }}>Saumya25-hub</code> / <code style={{ color: '#ff4500' }}>u/Saumya-25</code>). 
            Every single git commit in the official repository since June 20, 2026 bears his verified digital signature.
          </p>
        </div>

        {/* Creator Identity & Profile Card */}
        <div className="grid-2" style={{ gap: '24px', marginBottom: '48px' }}>
          
          {/* Card Left: Profile */}
          <div className="dev-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0284c7, #10b981)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  color: '#fff',
                  boxShadow: '0 0 20px rgba(2, 132, 199, 0.4)'
                }}>
                  SC
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
                    {CREATOR_INFO.name}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-accent)', fontFamily: 'var(--font-mono)' }}>
                    {CREATOR_INFO.role}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Lead Architect & Solo Maintainer
                  </div>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Saumya Chaudhari specializes in low-level x86_64 systems programming, native UEFI 2.x firmware development, 
                Intel VT-x (VMX) hardware virtualization, memory management architectures, and bare-metal device driver engineering.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald)' }} />
                  <span><strong>First Commit:</strong> June 20, 2026 (Long Mode Transition)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald)' }} />
                  <span><strong>License:</strong> MIT License (Free & Open Source)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald)' }} />
                  <span><strong>Current Release:</strong> v2.7.0-vmx-stable (Intel VT-x Certified)</span>
                </div>
              </div>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
              <a
                href={CREATOR_INFO.osRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '8px 16px', fontSize: '0.8rem' }}
              >
                <GithubIcon size={14} />
                <span>Atoms-OS GitHub</span>
                <ExternalLink size={12} />
              </a>

              <a
                href={CREATOR_INFO.redditUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '8px 16px', fontSize: '0.8rem', color: '#ff4500' }}
              >
                <span>Reddit Profile (u/Saumya-25)</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Card Right: Hardware Rigs Built & Probed */}
          <div className="dev-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <Cpu size={20} style={{ color: 'var(--accent-cyan)' }} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>
                  Physical Hardware Engineering Lab
                </h3>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '16px' }}>
                Every milestone in ATOMS OS is flashed to real physical USB media and booted on actual desktop motherboard testbeds 
                in Saumya Chaudhari’s hardware laboratory:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                <div style={{ background: 'var(--bg-code)', padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.85rem' }}>
                    Rig 1: Intel Haswell LGA1150 Platform
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                    Motherboard: Intel H81 Chipset (2022 UEFI Firmware) • CPU: Intel Core i3 4th Gen • RAM: 8 GB DDR3
                  </div>
                  <div style={{ color: 'var(--accent-emerald)', fontSize: '0.75rem', marginTop: '4px' }}>
                    Certified: UEFI GOP boot, PMM zero drift, VMM PML4 teardown, Stage A Heap.
                  </div>
                </div>

                <div style={{ background: 'var(--bg-code)', padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.85rem' }}>
                    Rig 2: Intel Raptor Lake LGA1700 Platform
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                    Motherboard: ASUS PRIME B760M-K • CPU: Intel Core i3-14100F • RAM: 16 GB DDR5 • NVMe: WD Blue SN5000 Gen4
                  </div>
                  <div style={{ color: 'var(--accent-cyan)', fontSize: '0.75rem', marginTop: '4px' }}>
                    Certified: Intel VT-x hardware hypervisor, SLAT EPT paging, NVMe Gen4, xHCI USB 3.0.
                  </div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '12px' }}>
              Official Contact: <span style={{ color: 'var(--text-accent)', fontFamily: 'var(--font-mono)' }}>{CREATOR_INFO.email}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
