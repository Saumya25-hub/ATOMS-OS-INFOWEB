import React from 'react';
import { 
  Flame, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  FileText, 
  Layers, 
  Terminal,
  Activity,
  Award
} from 'lucide-react';
import { CERTIFICATION_MATRIX } from '../data/osData';

export default function UpdatesPage() {
  const releases = [
    {
      version: "v2.7.0-vmx-stable",
      date: "September 24, 2026",
      tag: "Current Stable Hardware Release",
      title: "Intel VT-x (VMX) Bare-Metal Hypervisor & Native xHCI Subsystem",
      summary: "Major milestone certifying Ring 0 Type-1 hardware virtualization directly on physical Intel Core i3-14100F (LGA1700) silicon without any host OS. Synchronized xHCI 1024-TRB transfer rings with physical USB HID keyboard lock LEDs.",
      bulletPoints: [
        "VMLAUNCH executed with CF=0 and ZF=0 on physical ASUS PRIME B760M-K motherboard.",
        "Over 500,000 physical bare-metal VM-exits handled without CPU triple-fault.",
        "Extended Page Tables (EPT) SLAT paging maps guest physical address space directly.",
        "xHCI USB 3.0 event ring dequeue pointer verified across 200/200 ACK hardware lock LED cycles."
      ]
    },
    {
      version: "v2.5.0-bofs-certified",
      date: "September 05, 2026",
      tag: "Phase 13 Milestone",
      title: "BOFS Transactional Filesystem & NVMe Gen4 Storage Certification",
      summary: "Completed Phase 10 through Phase 13 hardware certifications. Built native transactional extent-based filesystem (BOFS) with Write-Ahead Logging (WAL) and mounted Windows 11 NTFS partitions on physical NVMe Gen4 SSDs.",
      bulletPoints: [
        "Zero memory leak across 2,050 VFS mount/unmount dynamic test cycles.",
        "ASUS PRIME B760M-K WD Blue SN5000 NVMe Gen4 PCIe SSD operational via MMIO BAR.",
        "BOSX execution integration: SYS_EXEC, VFS->BOFS->VMM->Ring 3 pipeline verified at 2560x1600.",
        "Phase 12 and Phase 13 forensic debug HUD validated on real hardware."
      ]
    },
    {
      version: "v2.0.0-uefi-baseline",
      date: "August 15, 2026",
      tag: "Graphics & Memory Milestone",
      title: "Pure UEFI Long Mode GOP Framebuffer & Zero-Drift Memory Reclamation",
      summary: "Eliminated all legacy BIOS/CSM dependencies. The OS now boots exclusively through native UEFI 2.x GOP linear framebuffers and achieves zero memory drift across 1,920 PMM frames.",
      bulletPoints: [
        "Standardized boot_info_t memory map parsing across Haswell H81 and Raptor Lake B760.",
        "PMM bitmap allocator verified across 1,920 allocation cycles with Net Page Delta = 0.",
        "VMM 4-level PML4 ownership-aware teardown verified across 100 process cycles with 0 leaked pages.",
        "Double-buffered hardware compositor (BCM) with dedicated cursor plane rendering at 60 FPS."
      ]
    },
    {
      version: "v0.3.0-foundation",
      date: "June 20, 2026",
      tag: "Initial Kernel Scaffolding",
      title: "BOS Foundation: PIC + IRQ + Timer + Keyboard + PMM + VMM Scaffold",
      summary: "First certified milestone unifying 64-bit Long Mode transitions, 256-descriptor IDT, 8259A PIC remap, PIT 8254 timer calibration, PS/2 keyboard driver, and PMM bitmap scaffolding.",
      bulletPoints: [
        "CR0/CR3/CR4 control register setup and SSE/FXSR instruction support enabled.",
        "Per-CPU GDT arrays and Task State Segment (TSS) initial scaffold loaded.",
        "Stage A kernel heap kmalloc initialized on top of low physical frames.",
        "First user/kernel privilege split scaffold prepared."
      ]
    }
  ];

  return (
    <section style={{ padding: '40px 0 80px 0' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Flame size={18} style={{ color: 'var(--accent-cyan)' }} />
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
              RELEASES & HARDWARE CERTIFICATIONS // LIVE LOG
            </span>
          </div>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '12px' }}>
            Updates, Milestones & Formal Certification Matrix
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            Development in ATOMS OS follows strict phase isolation. No milestone is considered complete 
            until it passes both headless QEMU pre-flight and physical bare-metal hardware testing with an unambiguous binary PASS verdict.
          </p>
        </div>

        {/* Formal Hardware Certification Matrix Table */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <ShieldCheck size={18} style={{ color: 'var(--accent-emerald)' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>
              Subsystem Certification Matrix (14 / 14 Passed)
            </h3>
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
                  <th style={{ padding: '12px 16px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>SUBSYSTEM</th>
                  <th style={{ padding: '12px 16px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>HARDWARE TESTBED</th>
                  <th style={{ padding: '12px 16px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>STATUS</th>
                  <th style={{ padding: '12px 16px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>DOCUMENTED EVIDENCE</th>
                </tr>
              </thead>
              <tbody>
                {CERTIFICATION_MATRIX.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border-subtle)', background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: '#fff' }}>{row.subsystem}</td>
                    <td style={{ padding: '12px 16px', color: 'var(--text-secondary)' }}>{row.target}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
                        <span className="live-dot" style={{ width: '4px', height: '4px' }}></span>
                        {row.status}
                      </span>
                    </td>
                    <td style={{ padding: '12px 16px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                      {row.evidence}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Release History Cards */}
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Award size={20} style={{ color: 'var(--accent-amber)' }} />
          <span>Major Release Changelogs</span>
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {releases.map((rel) => (
            <div key={rel.version} className="dev-card" style={{ borderLeft: '4px solid var(--accent-cyan)' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-mono)' }}>
                      {rel.version}
                    </span>
                    <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>
                      {rel.tag}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {rel.title}
                  </h4>
                </div>

                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {rel.date}
                </span>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '16px' }}>
                {rel.summary}
              </p>

              <div style={{ background: 'var(--bg-code)', padding: '14px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 600 }}>
                  KEY CERTIFIED DELIVERABLES:
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {rel.bulletPoints.map((pt, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8rem', color: '#cbd5e1' }}>
                      <CheckCircle2 size={13} style={{ color: 'var(--accent-emerald)', marginTop: '3px', flexShrink: 0 }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
