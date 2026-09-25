import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  HardDrive, 
  Terminal, 
  ShieldCheck, 
  Monitor, 
  Wifi, 
  CheckCircle2, 
  ExternalLink,
  Search,
  Eye,
  Server,
  Zap,
  Clock,
  Compass,
  FileCode,
  Box
} from 'lucide-react';
import { 
  CORE_ENGINES, 
  HARDWARE_DRIVERS, 
  NATIVE_SLL_LIBRARIES, 
  STABILITY_MATRIX 
} from '../data/osData';

export default function SubsystemsSection({ onOpenScreenshot }) {
  const [activeView, setActiveView] = useState('engines'); // 'engines', 'drivers', 'sll', 'matrix'
  const [searchQuery, setSearchQuery] = useState('');
  const [matrixFilter, setMatrixFilter] = useState('ALL');

  // Filter core engines
  const filteredEngines = CORE_ENGINES.filter((engine) => {
    return engine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           engine.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
           engine.authority.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Filter hardware drivers
  const filteredDrivers = HARDWARE_DRIVERS.filter((drv) => {
    return drv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           drv.hardwareTarget.toLowerCase().includes(searchQuery.toLowerCase()) ||
           drv.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
           drv.capabilities.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Filter native .sll libraries
  const filteredSll = NATIVE_SLL_LIBRARIES.filter((lib) => {
    return lib.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           lib.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
           lib.apis.toLowerCase().includes(searchQuery.toLowerCase()) ||
           lib.location.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Filter stability matrix
  const filteredMatrix = STABILITY_MATRIX.filter((item) => {
    const matchesSearch = item.subsystem.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tier.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.path.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;
    if (matrixFilter === 'ALL') return true;
    return item.status.includes(matrixFilter);
  });

  return (
    <section style={{ padding: '40px 0 80px 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ maxWidth: '840px', marginBottom: '32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Cpu size={18} style={{ color: 'var(--accent-cyan)' }} />
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
              COMPREHENSIVE CODEBASE ARCHITECTURE // 8 TIERS
            </span>
          </div>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '12px' }}>
            Architectural Catalog: Engines, Drivers & Runtimes
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            ATOMS OS is engineered entirely in C and x86_64 assembly directly interfacing with physical silicon.
            Explore all verified subsystems below: from Ring 0 Type-1 hypervisor and 14 hardware drivers, to the Phase 10
            Shared Link Library (<span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>.sll</span>) engine and the 
            enterprise 16-phase NTFS suite.
          </p>
        </div>

        {/* View Switcher Dock */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: '16px', 
          flexWrap: 'wrap', 
          marginBottom: '28px',
          background: 'var(--bg-secondary)',
          padding: '12px 16px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)'
        }}>
          {/* Main Tier Tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveView('engines')}
              className={`btn ${activeView === 'engines' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '8px 14px', fontSize: '0.82rem' }}
            >
              <Cpu size={14} style={{ marginRight: '6px' }} />
              Core Engines ({CORE_ENGINES.length})
            </button>
            <button
              onClick={() => setActiveView('drivers')}
              className={`btn ${activeView === 'drivers' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '8px 14px', fontSize: '0.82rem' }}
            >
              <Server size={14} style={{ marginRight: '6px' }} />
              Hardware Drivers ({HARDWARE_DRIVERS.length})
            </button>
            <button
              onClick={() => setActiveView('sll')}
              className={`btn ${activeView === 'sll' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '8px 14px', fontSize: '0.82rem' }}
            >
              <Box size={14} style={{ marginRight: '6px' }} />
              Native .sll Runtimes ({NATIVE_SLL_LIBRARIES.length})
            </button>
            <button
              onClick={() => setActiveView('matrix')}
              className={`btn ${activeView === 'matrix' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '8px 14px', fontSize: '0.82rem' }}
            >
              <Compass size={14} style={{ marginRight: '6px' }} />
              Roadmap & Stability Matrix ({STABILITY_MATRIX.length})
            </button>
          </div>

          {/* Search box */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--bg-code)', padding: '6px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-medium)', minWidth: '240px' }}>
            <Search size={14} style={{ color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search components, APIs, files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '0.82rem',
                outline: 'none',
                width: '100%',
                fontFamily: 'var(--font-mono)'
              }}
            />
          </div>
        </div>

        {/* 1. CORE ENGINES VIEW */}
        {activeView === 'engines' && (
          <div className="grid-2">
            {filteredEngines.map((engine) => (
              <div 
                key={engine.id} 
                className="card"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>
                      {engine.tag}
                    </span>
                    <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
                      {engine.status}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '4px', color: '#fff' }}>
                    {engine.name}
                  </h3>
                  
                  <div style={{ 
                    fontSize: '0.75rem', 
                    fontFamily: 'var(--font-mono)', 
                    color: 'var(--text-muted)', 
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <span>Authority:</span>
                    <code style={{ color: 'var(--accent-purple)' }}>{engine.authority}</code>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '16px' }}>
                    {engine.description}
                  </p>

                  <div style={{ 
                    background: 'var(--bg-code)', 
                    padding: '12px', 
                    borderRadius: 'var(--radius-sm)', 
                    border: '1px solid var(--border-subtle)',
                    marginBottom: '16px'
                  }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Verified Technical Highlights
                    </div>
                    <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {engine.highlights.map((h, i) => (
                        <li key={i} style={{ lineHeight: 1.4 }}>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {engine.proofImage && (
                  <button
                    onClick={() => onOpenScreenshot(engine.proofImage, engine.name, engine.description)}
                    className="btn btn-secondary"
                    style={{ width: '100%', justifyContent: 'center', gap: '8px', fontSize: '0.8rem' }}
                  >
                    <Eye size={14} style={{ color: 'var(--accent-cyan)' }} />
                    Inspect Hardware Telemetry Proof
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {/* 2. HARDWARE DRIVERS VIEW */}
        {activeView === 'drivers' && (
          <div>
            <div style={{ 
              background: 'rgba(0, 240, 255, 0.04)', 
              border: '1px solid rgba(0, 240, 255, 0.15)', 
              borderRadius: 'var(--radius-md)', 
              padding: '14px 18px', 
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <Server size={18} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                <strong style={{ color: '#fff' }}>Unified Hardware Driver Catalog:</strong> 14 distinct driver classes programmed to bare-metal hardware specifications (PCIe, MMIO, xHCI, NVMe, AHCI, Realtek 2.5G). Zero user-mode virtualization wrappers.
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {filteredDrivers.map((drv, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    background: 'var(--bg-card)', 
                    border: '1px solid var(--border-subtle)', 
                    borderRadius: 'var(--radius-md)', 
                    padding: '16px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                        DRV_{String(idx + 1).padStart(2, '0')}
                      </span>
                      <span style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>
                        {drv.name}
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <span className="badge badge-purple" style={{ fontSize: '0.68rem' }}>
                        {drv.spec}
                      </span>
                      <span className={`badge ${drv.status === 'STABLE' ? 'badge-emerald' : drv.status.includes('ACTIVE') ? 'badge-cyan' : 'badge-amber'}`} style={{ fontSize: '0.68rem' }}>
                        {drv.status}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px', marginTop: '4px' }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Source Authority:</div>
                      <code style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)' }}>{drv.location}</code>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Target Silicon:</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{drv.hardwareTarget}</div>
                    </div>
                  </div>

                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', background: 'var(--bg-code)', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', marginTop: '4px' }}>
                    <strong style={{ color: '#fff' }}>Capabilities: </strong>
                    {drv.capabilities}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. NATIVE .sll RUNTIMES VIEW */}
        {activeView === 'sll' && (
          <div>
            {/* Disclaimer & Explanation Banner */}
            <div style={{ 
              background: 'rgba(16, 185, 129, 0.05)', 
              border: '1px solid rgba(16, 185, 129, 0.25)', 
              borderRadius: 'var(--radius-md)', 
              padding: '16px 20px', 
              marginBottom: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <ShieldCheck size={18} style={{ color: 'var(--accent-emerald)' }} />
                <span style={{ fontWeight: 800, color: '#fff', fontSize: '0.95rem', letterSpacing: '0.02em' }}>
                  ATOMS OS IS NOT WINDOWS & DOES NOT USE WINDOWS .dll FILES
                </span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                ATOMS OS utilizes its own custom native binary format: <strong>.sll (Shared Link Library)</strong>, 
                managed by the kernel’s Phase 10 SLL Engine (<code style={{ color: 'var(--accent-cyan)' }}>kernel/core/sll/sll_manager.c</code>). 
                To allow desktop software, tools, and games to run on bare-metal without Microsoft Windows, 
                Saumya Chaudhari created a clean-room Ring 3 API compatibility layer in pure C that maps directly to ATOMS kernel syscalls.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {filteredSll.map((lib, idx) => (
                <div 
                  key={idx}
                  style={{ 
                    background: 'var(--bg-card)', 
                    border: '1px solid var(--border-subtle)', 
                    borderRadius: 'var(--radius-md)', 
                    padding: '16px 20px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '0.9rem', 
                        color: 'var(--accent-cyan)', 
                        fontWeight: 800,
                        background: 'rgba(0, 240, 255, 0.08)',
                        padding: '4px 8px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(0, 240, 255, 0.2)'
                      }}>
                        {lib.name}
                      </span>
                      <span style={{ color: '#fff', fontSize: '0.92rem', fontWeight: 600 }}>
                        {lib.role}
                      </span>
                    </div>
                    <span className="badge badge-emerald" style={{ fontSize: '0.68rem' }}>
                      {lib.status}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    Source Authority: <code style={{ color: 'var(--accent-purple)' }}>{lib.location}</code>
                  </div>

                  <div style={{ background: 'var(--bg-code)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.05em' }}>
                      Core Native Function Signatures Implemented:
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-cyan)', lineHeight: 1.5 }}>
                      {lib.apis}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. ROADMAP & STABILITY MATRIX VIEW */}
        {activeView === 'matrix' && (
          <div>
            {/* Status Filter Badges */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
              {['ALL', 'STABLE', 'ACTIVE', 'EXPERIMENTAL', 'BLUEPRINT'].map((status) => (
                <button
                  key={status}
                  onClick={() => setMatrixFilter(status)}
                  className={`btn ${matrixFilter === status ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ padding: '6px 12px', fontSize: '0.75rem' }}
                >
                  {status} ({status === 'ALL' ? STABILITY_MATRIX.length : STABILITY_MATRIX.filter(s => s.status.includes(status)).length})
                </button>
              ))}
            </div>

            <div style={{ overflowX: 'auto', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.82rem' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-medium)' }}>
                    <th style={{ padding: '12px 16px', color: '#fff', fontWeight: 700 }}>Subsystem & Engine</th>
                    <th style={{ padding: '12px 16px', color: '#fff', fontWeight: 700 }}>Tier Classification</th>
                    <th style={{ padding: '12px 16px', color: '#fff', fontWeight: 700 }}>Repository Source Path</th>
                    <th style={{ padding: '12px 16px', color: '#fff', fontWeight: 700, textAlign: 'right' }}>Engineering Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMatrix.map((item, idx) => (
                    <tr 
                      key={idx} 
                      style={{ 
                        borderBottom: '1px solid var(--border-subtle)',
                        background: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.01)'
                      }}
                    >
                      <td style={{ padding: '12px 16px', fontWeight: 600, color: '#fff' }}>
                        {item.subsystem}
                      </td>
                      <td style={{ padding: '12px 16px', color: 'var(--text-secondary)' }}>
                        {item.tier}
                      </td>
                      <td style={{ padding: '12px 16px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                        {item.path}
                      </td>
                      <td style={{ padding: '12px 16px', textAlign: 'right' }}>
                        <span className={`badge ${
                          item.status === 'STABLE' ? 'badge-emerald' :
                          item.status === 'ACTIVE' ? 'badge-cyan' :
                          item.status === 'EXPERIMENTAL' ? 'badge-amber' :
                          'badge-purple'
                        }`} style={{ fontSize: '0.68rem' }}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
