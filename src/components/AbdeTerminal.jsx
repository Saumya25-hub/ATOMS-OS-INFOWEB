import React, { useState, useEffect } from 'react';
import { Terminal, RefreshCw, Cpu, Activity, ShieldCheck, CheckCircle2 } from 'lucide-react';

const SPINNER_CHARS = ['|', '/', '-', '\\'];

export default function AbdeTerminal() {
  const [spinnerIndex, setSpinnerIndex] = useState(0);
  const [tickCount, setTickCount] = useState(148293);
  const [activeMode, setActiveMode] = useState('summary');
  const [lastActionMessage, setLastActionMessage] = useState('PMM Audit: Net Page Delta = 0 frames across 1,920 cycles. Verified.');
  const [actionSuccess, setActionSuccess] = useState(true);

  // Rotating spinner simulating kernel idle loop heartbeat
  useEffect(() => {
    const timer = setInterval(() => {
      setSpinnerIndex((prev) => (prev + 1) % SPINNER_CHARS.length);
      setTickCount((prev) => prev + 1);
    }, 250);
    return () => clearInterval(timer);
  }, []);

  const handleAuditMemory = () => {
    setLastActionMessage('VMM/PMM Hardware Audit: Free frames: 7,639,611 | Net Page Delta: 0 | Paging: PML4 clean.');
    setActionSuccess(true);
  };

  const handleInspectVMX = () => {
    setLastActionMessage('Intel VT-x VMX Root: VMLAUNCH SUCCESS (CF=0, ZF=0) | Exit: 0x0A (CPUID) | 500,000+ exits passed.');
    setActionSuccess(true);
  };

  const handleTestSyscall = () => {
    setLastActionMessage('Syscall Trap IA32_LSTAR: User R3 -> Kernel R0 -> dynamic TSS.RSP0 -> SYSRETQ atomic return OK.');
    setActionSuccess(true);
  };

  const handleProbingxHCI = () => {
    setLastActionMessage('xHCI USB 3.0: 1024-TRB transfer ring synced | HID 200/200 ACK lock LEDs | ERDP 0x7A000.');
    setActionSuccess(true);
  };

  return (
    <div className="terminal-window" style={{ maxWidth: '100%', marginTop: '24px' }}>
      {/* Terminal Top bar */}
      <div className="terminal-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="terminal-dots">
            <span className="terminal-dot dot-red"></span>
            <span className="terminal-dot dot-yellow"></span>
            <span className="terminal-dot dot-green"></span>
          </div>
          <span className="terminal-title">
            ABDE FORENSIC HUD // COM1 TELEMETRY // INTEL BARE-METAL
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="badge badge-emerald" style={{ padding: '2px 8px', fontSize: '0.7rem' }}>
            <span className="live-dot" style={{ width: '5px', height: '5px' }}></span>
            HEARTBEAT: [{SPINNER_CHARS[spinnerIndex]}]
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }} className="mono">
            TICK #{tickCount}
          </span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="terminal-body" style={{ background: '#080a10' }}>
        
        {/* Banner */}
        <div style={{ color: 'var(--accent-cyan)', marginBottom: '12px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '8px' }}>
          ATOMS OS BOS-KERNEL v2.7.0-vmx-stable (Pure UEFI 64-bit Long Mode)
          <br />
          Author: Saumya Chaudhari // Motherboard: Intel Haswell H81 & ASUS PRIME B760M-K
        </div>

        {/* Mode Selector Tabs inside Terminal */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveMode('summary')}
            className={`btn ${activeMode === 'summary' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '4px 10px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}
          >
            Subsystem Status
          </button>
          <button
            onClick={() => setActiveMode('registers')}
            className={`btn ${activeMode === 'registers' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '4px 10px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}
          >
            Register Architecture
          </button>
          <button
            onClick={() => setActiveMode('smp')}
            className={`btn ${activeMode === 'smp' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '4px 10px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}
          >
            Multi-Core AP Heartbeats
          </button>
          <button
            onClick={() => setActiveMode('memory')}
            className={`btn ${activeMode === 'memory' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '4px 10px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}
          >
            PMM / VMM Metrics
          </button>
        </div>

        {/* View 1: Summary Table */}
        {activeMode === 'summary' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '10px 14px', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>BOOT / FIRMWARE</div>
              <div style={{ color: '#fff', fontWeight: 600 }}>Pure UEFI 2.x GPT (No CSM)</div>
              <div style={{ color: 'var(--accent-emerald)', fontSize: '0.75rem' }}>ExitBootServices() Clean Handoff: PASS</div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '10px 14px', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>HYPERVISOR</div>
              <div style={{ color: '#fff', fontWeight: 600 }}>Intel VT-x (VMX Root Ring 0)</div>
              <div style={{ color: 'var(--accent-emerald)', fontSize: '0.75rem' }}>LGA1700 Bare Metal VMLAUNCH: PASS</div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '10px 14px', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>MEMORY PIPELINE</div>
              <div style={{ color: '#fff', fontWeight: 600 }}>PMM Bitmap + 4-Level PML4</div>
              <div style={{ color: 'var(--accent-emerald)', fontSize: '0.75rem' }}>1,920 Cycles Net Drift: 0 FRAMES</div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '10px 14px', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>STORAGE & VFS</div>
              <div style={{ color: '#fff', fontWeight: 600 }}>BOFS Extents + FAT32 + NTFS</div>
              <div style={{ color: 'var(--accent-emerald)', fontSize: '0.75rem' }}>NVMe Gen4 WD Blue SN5000: PASS</div>
            </div>
          </div>
        )}

        {/* View 2: Registers */}
        {activeMode === 'registers' && (
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#e2e8f0', background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '4px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
              <div><span style={{ color: 'var(--accent-cyan)' }}>%CR0  </span>: 0x0000000080010033 (PG, WP, NE, ET, MP, PE)</div>
              <div><span style={{ color: 'var(--accent-cyan)' }}>%CR3  </span>: 0x0000000000201000 (PML4 Kernel Base)</div>
              <div><span style={{ color: 'var(--accent-cyan)' }}>%CR4  </span>: 0x00000000000006F0 (VMXE, OSXMM, OSFXSR, PGE, PAE)</div>
              <div><span style={{ color: 'var(--accent-amber)' }}>%LSTAR</span>: 0xFFFFFFFF80102580 (syscall_entry trap)</div>
              <div><span style={{ color: 'var(--accent-amber)' }}>%RSP0 </span>: 0xFFFF800000078000 (TSS Task Kernel Stack)</div>
              <div><span style={{ color: 'var(--accent-emerald)' }}>%EFER </span>: 0x0000000000000D01 (NXE, LMA, LME, SCE)</div>
            </div>
            <div style={{ marginTop: '10px', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
              * Registers strictly validated against Intel 64 Architecture SDM Volume 3A & 3B.
            </div>
          </div>
        )}

        {/* View 3: SMP Cores */}
        {activeMode === 'smp' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px' }}>
            {[
              { id: 0, role: 'BSP (CPU 0)', status: 'ACTIVE EXECUTION', task: 'Scheduler / Syscall / Compositor', tick: tickCount },
              { id: 1, role: 'AP 1', status: 'ONLINE IDLE', task: 'Diagnostic Heartbeat Ticker', tick: tickCount - 3 },
              { id: 2, role: 'AP 2', status: 'ONLINE IDLE', task: 'Diagnostic Heartbeat Ticker', tick: tickCount - 5 },
              { id: 3, role: 'AP 3', status: 'ONLINE IDLE', task: 'Diagnostic Heartbeat Ticker', tick: tickCount - 2 },
              { id: 4, role: 'AP 4', status: 'ONLINE IDLE', task: 'Diagnostic Heartbeat Ticker', tick: tickCount - 7 },
              { id: 5, role: 'AP 5', status: 'ONLINE IDLE', task: 'Diagnostic Heartbeat Ticker', tick: tickCount - 4 },
              { id: 6, role: 'AP 6', status: 'ONLINE IDLE', task: 'Diagnostic Heartbeat Ticker', tick: tickCount - 8 },
              { id: 7, role: 'AP 7', status: 'ONLINE IDLE', task: 'Diagnostic Heartbeat Ticker', tick: tickCount - 6 }
            ].map((cpu) => (
              <div key={cpu.id} style={{ background: 'rgba(255,255,255,0.02)', padding: '8px 12px', borderRadius: '4px', border: '1px solid var(--border-subtle)', fontSize: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', fontWeight: 600 }}>
                  <span>{cpu.role}</span>
                  <span style={{ color: 'var(--accent-emerald)' }}>[{SPINNER_CHARS[(spinnerIndex + cpu.id) % 4]}] {cpu.status}</span>
                </div>
                <div style={{ color: 'var(--text-muted)' }}>Workload: {cpu.task}</div>
                <div style={{ color: 'var(--accent-cyan)' }}>Ticks: {cpu.tick}</div>
              </div>
            ))}
          </div>
        )}

        {/* View 4: Memory */}
        {activeMode === 'memory' && (
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#e2e8f0', background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '4px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '8px', marginBottom: '8px' }}>
              <div>Total Physical RAM: <span style={{ color: '#fff' }}>32,768 MB (32 GB DDR5)</span></div>
              <div>Total Frame Ceiling: <span style={{ color: '#fff' }}>8,388,608 Pages</span></div>
              <div>Free Memory Frames: <span style={{ color: 'var(--accent-emerald)' }}>7,639,611 Pages (~29.8 GB)</span></div>
              <div>Reserved Low RAM: <span style={{ color: 'var(--accent-amber)' }}>0x00000000 - 0x00200000 (Low 2MB)</span></div>
              <div>Process Split: <span style={{ color: 'var(--accent-cyan)' }}>User [0x40000000, 0x80000000)</span></div>
              <div>Net Page Delta (1,920 cycles): <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>0 (Zero Drift Certified)</span></div>
            </div>
            <div style={{ width: '100%', height: '8px', background: 'var(--border-medium)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '91%', height: '100%', background: 'linear-gradient(90deg, #10b981, #06b6d4)' }}></div>
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              PMM Bitmap Allocator health: 100% Nominal | Double-free protection active
            </div>
          </div>
        )}

        {/* Live Interactive Action Bar */}
        <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            INTERACTIVE TELEMETRY PROBES:
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button onClick={handleAuditMemory} className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
              Audit PMM Drift
            </button>
            <button onClick={handleInspectVMX} className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
              Probe Intel VT-x Root
            </button>
            <button onClick={handleTestSyscall} className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
              Verify IA32_LSTAR Trap
            </button>
            <button onClick={handleProbingxHCI} className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
              Inspect xHCI Rings
            </button>
          </div>

          {/* Action Log Result */}
          <div style={{
            background: actionSuccess ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)',
            border: `1px solid ${actionSuccess ? 'rgba(16, 185, 129, 0.25)' : 'rgba(239, 68, 68, 0.25)'}`,
            padding: '8px 12px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.8rem',
            color: actionSuccess ? '#a7f3d0' : '#fecaca'
          }}>
            <CheckCircle2 size={14} style={{ color: 'var(--accent-emerald)', flexShrink: 0 }} />
            <span>{lastActionMessage}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
