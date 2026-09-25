import React from 'react';
import { 
  FileCode2, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Layers, 
  Lock, 
  Terminal, 
  ExternalLink 
} from 'lucide-react';
import { OPEN_SOURCE_ATTRIBUTIONS } from '../data/osData';

export default function PhilosophySection() {
  return (
    <section style={{ padding: '40px 0 80px 0' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <FileCode2 size={18} style={{ color: 'var(--accent-purple)' }} />
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
              ENGINEERING INTEGRITY & TRANSPARENCY
            </span>
          </div>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '12px' }}>
            Engineering Protocol & Open-Source Integrity
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            ATOMS OS operates with total factual honesty. We do not promote vaporware, hype, or unverified claims. 
            Below is our engineering manifesto explaining why operating systems cannot be faked, our strict development protocols, 
            and our explicit attribution of all external open-source tools and industry specifications.
          </p>
        </div>

        {/* Technical Rebuttal: Why OS Dev Cannot Be "Vibe-Coded" */}
        <div className="dev-card" style={{ marginBottom: '40px', borderLeft: '4px solid var(--accent-amber)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <AlertTriangle size={20} style={{ color: 'var(--accent-amber)' }} />
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>
              Why Operating Systems Cannot Be "Vibe-Coded"
            </h3>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '16px' }}>
            In modern web or high-level application development, loose specifications and hallucinated code can often be masked 
            by forgiving runtimes, dynamic types, or browser layout engines. In systems programming on raw x86_64 silicon, 
            <strong> "vibe coding" is mathematically and physically impossible</strong>.
          </p>

          <div className="grid-2" style={{ gap: '16px' }}>
            <div style={{ background: 'var(--bg-code)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '6px' }}>
                1. Bit-Level Paging Alignment
              </div>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.5 }}>
                A single bit error in a PML4, PDPT, PD, or PT table (such as Present, R/W, or alignment offset) does not throw an error message; it causes an immediate CPU triple-fault, instantly rebooting the hardware.
              </p>
            </div>

            <div style={{ background: 'var(--bg-code)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '6px' }}>
                2. TSS & RSP0 Stack Pointer Swaps
              </div>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.5 }}>
                If the 64-bit TSS descriptor in the GDT or the dynamic RSP0 pointer inside the TSS is misaligned by even 1 byte, the first Ring 3 to Ring 0 interrupt or syscall causes an instant unrecoverable machine freeze.
              </p>
            </div>

            <div style={{ background: 'var(--bg-code)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '6px' }}>
                3. Hardware PCI BARs & MMIO Offsets
              </div>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.5 }}>
                You cannot guess MMIO register offsets. If an xHCI command ring doorbell or NVMe queue doorbell is written at offset 0x1000 instead of 0x1008, the hardware controller halts with HSE=1 (Host System Error) and locks the PCIe bus.
              </p>
            </div>

            <div style={{ background: 'var(--bg-code)', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <div style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '6px' }}>
                4. IA32_LSTAR Hardware Gateway
              </div>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.5 }}>
                Setting up fast syscalls requires exact MSR values in IA32_STAR, IA32_LSTAR, and IA32_FMASK. If the SWAPGS or stack reload sequence is out of order by one instruction, user memory corrupts kernel registers, causing fatal #GP.
              </p>
            </div>
          </div>
        </div>

        {/* Rule 0 Protocol Card */}
        <div className="dev-card" style={{ marginBottom: '48px', borderLeft: '4px solid var(--accent-emerald)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <Lock size={20} style={{ color: 'var(--accent-emerald)' }} />
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>
              Rule 0: Mandatory Phase Isolation Protocol
            </h3>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '20px' }}>
            To prevent codebase rot, accidental regressions, and unverified code changes, all engineering in ATOMS OS follows strict phase isolation:
          </p>

          <div className="grid-4" style={{ gap: '12px' }}>
            <div style={{ background: 'var(--bg-code)', padding: '12px', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '0.8rem', marginBottom: '4px' }}>PHASE 1</div>
              <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem', marginBottom: '4px' }}>Forensic Audit</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Read-only investigation of serial logs, memory dumps, and register state. NO CODE ALLOWED.</div>
            </div>

            <div style={{ background: 'var(--bg-code)', padding: '12px', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ color: 'var(--accent-amber)', fontWeight: 700, fontSize: '0.8rem', marginBottom: '4px' }}>PHASE 2</div>
              <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem', marginBottom: '4px' }}>Architect Plan</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Formulate explicit modification plan, expected output, and rollback strategy. NO CODE ALLOWED.</div>
            </div>

            <div style={{ background: 'var(--bg-code)', padding: '12px', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ color: 'var(--accent-emerald)', fontWeight: 700, fontSize: '0.8rem', marginBottom: '4px' }}>PHASE 3</div>
              <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem', marginBottom: '4px' }}>Surgical Patch</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Modify ONLY files listed in the approved plan. Zero random refactoring or API renames allowed.</div>
            </div>

            <div style={{ background: 'var(--bg-code)', padding: '12px', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ color: 'var(--accent-purple)', fontWeight: 700, fontSize: '0.8rem', marginBottom: '4px' }}>PHASE 4</div>
              <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem', marginBottom: '4px' }}>Hardware Cert</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Execute automated QEMU pre-flight and bare-metal motherboard flash. Produce binary PASS / FAIL.</div>
            </div>
          </div>
        </div>

        {/* Transparent Open Source Attribution Table */}
        <div>
          <div style={{ maxWidth: '800px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
              Transparent Open-Source & Specification Attribution
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              ATOMS OS creator <strong>Saumya Chaudhari</strong> maintains an uncompromising stance on attribution: 
              we never claim credit for existing industry standards, specifications, or community tools. 
              The table below lists all external specifications, compilers, and test references utilized across the project.
            </p>
          </div>

          <div style={{ 
            background: 'var(--bg-secondary)', 
            border: '1px solid var(--border-medium)', 
            borderRadius: 'var(--radius-lg)', 
            overflowX: 'auto' 
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border-medium)' }}>
                  <th style={{ padding: '12px 16px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>COMPONENT / STANDARD</th>
                  <th style={{ padding: '12px 16px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>AUTHORITY / CREATOR</th>
                  <th style={{ padding: '12px 16px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>PROJECT USAGE</th>
                  <th style={{ padding: '12px 16px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>ATTRIBUTION CATEGORY</th>
                </tr>
              </thead>
              <tbody>
                {OPEN_SOURCE_ATTRIBUTIONS.map((item, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border-subtle)', background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: '#fff' }}>{item.component}</td>
                    <td style={{ padding: '12px 16px', color: 'var(--text-secondary)' }}>{item.source}</td>
                    <td style={{ padding: '12px 16px', color: '#cbd5e1', fontSize: '0.8rem' }}>{item.role}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <span className="badge badge-neutral" style={{ fontSize: '0.7rem' }}>
                        {item.attributionType}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
