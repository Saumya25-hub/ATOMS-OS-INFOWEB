import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Terminal, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  Flame,
  Award
} from 'lucide-react';
import AbdeTerminal from './AbdeTerminal';
import { CREATOR_INFO } from '../data/osData';

export default function Hero({ onNavigate }) {
  return (
    <section style={{ paddingTop: '48px', paddingBottom: '64px' }}>
      <div className="container">
        
        {/* Top Badges */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px' }}>
          <span className="badge badge-emerald">
            <span className="live-dot"></span>
            PURE 64-BIT UEFI BARE-METAL
          </span>
          <span className="badge badge-cyan">
            INTEL VT-x TYPE-1 HYPERVISOR CERTIFIED
          </span>
          <span className="badge badge-amber">
            HASWELL H81 & ASUS B760M-K SILICON
          </span>
          <span className="badge badge-neutral">
            MIT LICENSE • OPEN SOURCE
          </span>
        </div>

        {/* Hero Title & Identity Affirmation */}
        <div style={{ maxWidth: '960px' }}>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', lineHeight: 1.1, fontWeight: 800, marginBottom: '20px' }}>
            ATOMS OS — Independent Bare-Metal Operating System
          </h1>

          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
            A standalone 64-bit operating system engineered entirely from scratch in C and x86_64 Assembly by solo systems developer{' '}
            <strong style={{ color: '#ffffff', textDecoration: 'underline', textDecorationColor: 'var(--accent-cyan)' }}>
              Saumya Chaudhari
            </strong>.
          </p>

          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '32px' }}>
            <strong style={{ color: '#ef4444' }}>Not</strong> Linux. <strong style={{ color: '#ef4444' }}>Not</strong> Unix.{' '}
            <strong style={{ color: '#ef4444' }}>Not</strong> a BSD fork. ATOMS OS features its own native monolithic{' '}
            <strong>BOS Kernel</strong>, transactional <strong>BOFS</strong> filesystem, 4-level PML4 paging, native xHCI USB 3.0 stack,{' '}
            and bare-metal Intel VT-x hardware virtualization verified on physical motherboards.
          </p>
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
          <button 
            onClick={() => onNavigate('proofs')}
            className="btn btn-primary"
            style={{ padding: '12px 24px', fontSize: '1rem' }}
          >
            <ShieldCheck size={18} />
            <span>Examine Hardware Proofs</span>
            <ArrowRight size={16} />
          </button>

          <button 
            onClick={() => onNavigate('engines')}
            className="btn btn-secondary"
            style={{ padding: '12px 24px', fontSize: '1rem' }}
          >
            <Cpu size={18} style={{ color: 'var(--accent-cyan)' }} />
            <span>Subsystems & Engines</span>
          </button>

          <button 
            onClick={() => onNavigate('genesis')}
            className="btn btn-secondary"
            style={{ padding: '12px 24px', fontSize: '1rem' }}
          >
            <Terminal size={18} style={{ color: 'var(--accent-amber)' }} />
            <span>First Commit & History</span>
          </button>
        </div>

        {/* Verified Forensic Stats Grid */}
        <div className="grid-4" style={{ marginBottom: '40px' }}>
          <div className="dev-card" style={{ borderLeft: '3px solid var(--accent-emerald)' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
              PHYSICAL MEMORY DRIFT
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-emerald)', margin: '4px 0' }}>
              0 LEAKS
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              1,920 PMM stress cycles tested on 32GB DDR5 with exact Net Page Delta = 0.
            </div>
          </div>

          <div className="dev-card" style={{ borderLeft: '3px solid var(--accent-cyan)' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
              INTEL VT-x VM-EXITS
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-cyan)', margin: '4px 0' }}>
              500,000+
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Physical bare-metal VMCS lifecycle executions on Intel Core i3-14100F.
            </div>
          </div>

          <div className="dev-card" style={{ borderLeft: '3px solid var(--accent-amber)' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
              SMP CORE ENUMERATION
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-amber)', margin: '4px 0' }}>
              8 CORES
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              ACPI MADT parsed; AP SIPI vector handoff; 8 execution units in Long Mode.
            </div>
          </div>

          <div className="dev-card" style={{ borderLeft: '3px solid var(--accent-purple)' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
              NATIVE UEFI RESOLUTION
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-purple)', margin: '4px 0' }}>
              2560×1600
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              32-bit linear GOP framebuffer with BCM double-buffered hardware compositor.
            </div>
          </div>
        </div>

        {/* Live ABDE Terminal Simulation */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Terminal size={18} style={{ color: 'var(--accent-cyan)' }} />
              <h2 style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                Live Forensic Telemetry Stream (ABDE)
              </h2>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              Simulating Physical COM1 Serial Telemetry
            </span>
          </div>

          <AbdeTerminal />
        </div>

      </div>
    </section>
  );
}
