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
        <div style={{ marginBottom: '48px' }}>
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

        {/* ================================================================= */}
        {/* LATEST BARE-METAL HARDWARE MILESTONE: FREEBSD 14.1 LIVE ON VMX   */}
        {/* ================================================================= */}
        <div style={{ 
          background: 'linear-gradient(180deg, rgba(20, 24, 38, 0.95) 0%, rgba(12, 14, 24, 0.98) 100%)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(20px, 4vw, 36px)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(56, 189, 248, 0.1)'
        }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span className="badge badge-emerald" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
                  <span className="live-dot"></span>
                  OCTOBER 21, 2026 BARE-METAL VICTORY
                </span>
                <span className="badge badge-cyan" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
                  INTEL HASWELL H81 SILICON
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>
                The Road to FreeBSD 14.1 on Bare-Metal Intel VT-x
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginTop: '8px', maxWidth: '820px', lineHeight: 1.6 }}>
                No Linux host. No KVM. No third-party hypervisor. Just our custom ATOMS OS kernel running in Intel VMX root mode on real physical hardware, booting an authentic, unmodified FreeBSD 14.1-RELEASE kernel all the way to an interactive single-user root shell (<code style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}># </code>).
              </p>
            </div>
            
            <button 
              onClick={() => onNavigate('proofs')}
              className="btn btn-primary"
              style={{ padding: '10px 18px', fontSize: '0.85rem' }}
            >
              <span>View Full Resolution Photos</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Two Real Photos Grid */}
          <div className="grid-2" style={{ gap: '20px', marginBottom: '32px' }}>
            {/* Photo 1: The Freeze */}
            <div style={{ 
              background: 'rgba(15, 17, 26, 0.8)', 
              border: '1px solid rgba(239, 68, 68, 0.3)', 
              borderRadius: 'var(--radius-md)', 
              overflow: 'hidden' 
            }}>
              <div style={{ position: 'relative', height: '260px', background: '#000' }}>
                <img 
                  src="/proofs/hardware_monitor_vtblk_stuck.png" 
                  alt="Physical monitor showing FreeBSD hung at vtblk0: 16MB"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{ 
                  position: 'absolute', 
                  top: '12px', 
                  left: '12px', 
                  background: 'rgba(239, 68, 68, 0.9)', 
                  color: '#fff', 
                  fontSize: '0.7rem', 
                  fontWeight: 700, 
                  padding: '3px 8px', 
                  borderRadius: '4px',
                  fontFamily: 'var(--font-mono)' 
                }}>
                  THE OBSTACLE // FROZEN AT VTBLK0: 16MB
                </span>
              </div>
              <div style={{ padding: '16px' }}>
                <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '6px' }}>
                  The Timer Starvation Wall
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                  The disk was detected, but the guest went completely silent. FreeBSD was waiting on scheduler timeouts, but our hypervisor hadn't yet emulated Intel's TSC-Deadline timer (MSR 0x6E0). Without injected timer ticks, time was literally standing still for the guest kernel.
                </p>
              </div>
            </div>

            {/* Photo 2: The Victory */}
            <div style={{ 
              background: 'rgba(15, 17, 26, 0.8)', 
              border: '1px solid rgba(16, 185, 129, 0.4)', 
              borderRadius: 'var(--radius-md)', 
              overflow: 'hidden' 
            }}>
              <div style={{ position: 'relative', height: '260px', background: '#000' }}>
                <img 
                  src="/proofs/hardware_monitor_freebsd_shell.png" 
                  alt="Physical monitor showing FreeBSD live shell prompt"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{ 
                  position: 'absolute', 
                  top: '12px', 
                  left: '12px', 
                  background: 'rgba(16, 185, 129, 0.9)', 
                  color: '#000', 
                  fontSize: '0.7rem', 
                  fontWeight: 800, 
                  padding: '3px 8px', 
                  borderRadius: '4px',
                  fontFamily: 'var(--font-mono)' 
                }}>
                  THE VICTORY // LIVE USERSPACE SHELL (# )
                </span>
              </div>
              <div style={{ padding: '16px' }}>
                <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '6px' }}>
                  Live Root Shell (# ) on Haswell H81
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                  The actual photograph from our physical monitor: VirtIO-Blk mounted root from <code style={{ color: 'var(--accent-cyan)' }}>/dev/vtbd0</code>, <code style={{ color: 'var(--accent-emerald)' }}>/sbin/init</code> launched, dropped cleanly to Ring 3 userspace, and gave us the live single-user root shell prompt!
                </p>
              </div>
            </div>
          </div>

          {/* The 3 Real Technical Obstacles (Human Voice) */}
          <div style={{ 
            background: 'rgba(10, 12, 20, 0.6)', 
            border: '1px solid rgba(255, 255, 255, 0.08)', 
            borderRadius: 'var(--radius-md)', 
            padding: '24px' 
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
              The 3 Real Problems We Had to Solve:
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Problem 1 */}
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span style={{ 
                  background: 'rgba(56, 189, 248, 0.15)', 
                  color: 'var(--accent-cyan)', 
                  fontWeight: 800, 
                  borderRadius: '50%', 
                  width: '28px', 
                  height: '28px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0,
                  fontSize: '0.85rem'
                }}>1</span>
                <div>
                  <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>
                    The Early Locore Trap (Higher-Half Paging)
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5, marginTop: '4px' }}>
                    FreeBSD’s 64-bit kernel entry (<code style={{ color: 'var(--accent-cyan)' }}>locore.S</code>) demands both identity-mapped low memory and higher-half direct physical mapping (<code style={{ color: 'var(--accent-cyan)' }}>DMAP</code> at <code style={{ color: 'var(--accent-cyan)' }}>0xFFFF800000000000</code>). A standard loader handoff caused instant triple-faults. We engineered <code style={{ color: '#fff' }}>freebsd_loader.c</code> to parse 64-bit ELF headers, construct authentic 4-level PML4 page tables, and inject FreeBSD <code style={{ color: '#fff' }}>bootinfo</code> metadata directly into guest RAM.
                  </div>
                </div>
              </div>

              {/* Problem 2 */}
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span style={{ 
                  background: 'rgba(234, 179, 8, 0.15)', 
                  color: 'var(--accent-amber)', 
                  fontWeight: 800, 
                  borderRadius: '50%', 
                  width: '28px', 
                  height: '28px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0,
                  fontSize: '0.85rem'
                }}>2</span>
                <div>
                  <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>
                    The Silent Freeze at 'vtblk0: 16MB' (Timer Starvation)
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5, marginTop: '4px' }}>
                    VirtIO-Blk probed, recognized our 16MB disk, and then froze dead in its tracks. The kernel wasn't crashing—it was waiting for timer interrupts that were never coming. We implemented Intel TSC-Deadline timer emulation (<code style={{ color: 'var(--accent-amber)' }}>MSR 0x6E0</code>), hooked x2APIC EOI, and ensured timer ticks were evaluated and injected on every VM-exit. The second that landed, disk tasting and root mount fired immediately!
                  </div>
                </div>
              </div>

              {/* Problem 3 */}
              <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span style={{ 
                  background: 'rgba(16, 185, 129, 0.15)', 
                  color: 'var(--accent-emerald)', 
                  fontWeight: 800, 
                  borderRadius: '50%', 
                  width: '28px', 
                  height: '28px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0,
                  fontSize: '0.85rem'
                }}>3</span>
                <div>
                  <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>
                    The 'start_init' Instant Reboot (The 4KB vs 32KB UFS2 Bug)
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5, marginTop: '4px' }}>
                    Root mounted, and the screen announced <code style={{ color: 'var(--accent-emerald)' }}>start_init: trying /sbin/init</code>—only to immediately reboot! Deep forensic audit of our UFS2 rootfs builder revealed we were stepping block pointers by 4KB fragments instead of full 32KB filesystem blocks. Every block of <code style={{ color: '#fff' }}>/sbin/init</code> after the first 4KB was shifted and scrambled in RAM, causing an instant panic when executed. Once we fixed the 32KB block alignment and indirect block tables, <code style={{ color: '#fff' }}>init</code> ran, dropped cleanly to Ring 3 userspace, and gave us the live interactive shell!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
