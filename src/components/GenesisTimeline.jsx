import React from 'react';
import { 
  History, 
  GitCommit, 
  CheckCircle2, 
  User, 
  Calendar, 
  ShieldCheck, 
  Terminal, 
  Code2, 
  ExternalLink 
} from 'lucide-react';
import { GENESIS_HISTORY, CREATOR_INFO } from '../data/osData';

export default function GenesisTimeline() {
  return (
    <section style={{ padding: '40px 0 80px 0' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <History size={18} style={{ color: 'var(--accent-amber)' }} />
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-amber)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
              ORIGINS & GIT ARCHIVE // FIRST COMMIT VERIFICATION
            </span>
          </div>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '12px' }}>
            The Genesis of ATOMS OS: Day 1 to Silicon Milestone
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            ATOMS OS was not created overnight, nor was it imported from existing Linux or BSD templates. 
            Below is the authenticated Git commit audit documenting how solo developer <strong>Saumya Chaudhari</strong> built 
            the entire operating system step-by-step from the initial transition into 64-bit Long Mode.
          </p>
        </div>

        {/* First Commit Highlight Box */}
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
          border: '1px solid var(--accent-cyan)',
          borderRadius: 'var(--radius-lg)',
          padding: '28px',
          marginBottom: '48px',
          boxShadow: 'var(--shadow-blue-glow)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
            <div>
              <span className="badge badge-cyan" style={{ marginBottom: '8px' }}>
                FOUNDATIONAL COMMIT #1 // DAY 1
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>
                feat: Boot sequence successfully transitions through Long Mode
              </h3>
            </div>
            <span className="badge badge-emerald" style={{ fontSize: '0.8rem' }}>
              Commit: 77edbab
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
              <User size={16} style={{ color: 'var(--accent-cyan)' }} />
              <span><strong>Author:</strong> Saumya Chaudhari (Saumya25-hub)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
              <Calendar size={16} style={{ color: 'var(--accent-cyan)' }} />
              <span><strong>Date:</strong> 2026-06-20 14:26:00 UTC</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
              <ShieldCheck size={16} style={{ color: 'var(--accent-emerald)' }} />
              <span><strong>Architecture:</strong> x86_64 Long Mode (64-bit)</span>
            </div>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '20px' }}>
            The historical starting point of the entire codebase. Saumya Chaudhari constructed the primary assembly bootloader, 
            configured identity page tables, set up CR0/CR3/CR4 control registers, loaded the 64-bit Global Descriptor Table (GDT), 
            and executed the far jump into Long Mode — establishing independent execution on bare metal.
          </p>

          {/* Verbatim Git log command snippet */}
          <div className="terminal-window" style={{ background: '#090a10', border: '1px solid var(--border-medium)' }}>
            <div className="terminal-header" style={{ padding: '6px 12px' }}>
              <span className="terminal-title">VERBATIM GIT LOG AUDIT (Signatures_OS)</span>
            </div>
            <div className="terminal-body" style={{ padding: '12px', fontSize: '0.8rem', color: '#a5f3fc' }}>
              $ git log --reverse --format="%h %ad %an &lt;%ae&gt; %s"<br />
              <span style={{ color: '#22c55e', fontWeight: 600 }}>77edbab 2026-06-20 Saumya25-hub &lt;saumyachaudhari25@outlook.com&gt; feat: Boot sequence successfully transitions through Long Mode</span><br />
              28649c4 2026-06-20 Saumya25-hub &lt;saumyachaudhari25@outlook.com&gt; Phase 5.1: V1 Architecture Transition (Raw HDD, LBA, Strict Errors)<br />
              8af84f9 2026-06-20 Saumya25-hub &lt;saumyachaudhari25@outlook.com&gt; Phase 6: Sprint 1 - Port IO implementation<br />
              2ee9d93 2026-06-20 Saumya25-hub &lt;saumyachaudhari25@outlook.com&gt; Phase 7: Sprint 1 - IDT Manager implementation<br />
              651b5db 2026-06-20 Saumya25-hub &lt;saumyachaudhari25@outlook.com&gt; Phase 10: Physical Memory Manager implementation
            </div>
          </div>
        </div>

        {/* Milestone Progression Steps */}
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>Chronological Engineering Milestones</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>(Authored by Saumya Chaudhari)</span>
        </h3>

        <div style={{ position: 'relative', borderLeft: '2px solid var(--border-medium)', marginLeft: '12px', paddingLeft: '24px' }}>
          {GENESIS_HISTORY.map((item, index) => (
            <div key={item.commit} style={{ marginBottom: '36px', position: 'relative' }}>
              
              {/* Timeline circle */}
              <div style={{
                position: 'absolute',
                left: '-32px',
                top: '4px',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: index === 0 ? 'var(--accent-emerald)' : 'var(--accent-cyan)',
                border: '3px solid var(--bg-primary)',
                boxShadow: index === 0 ? '0 0 10px var(--accent-emerald)' : 'none'
              }}></div>

              {/* Card */}
              <div className="dev-card" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="badge badge-amber" style={{ fontSize: '0.7rem' }}>
                      {item.phase}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-accent)' }}>
                      commit {item.commit}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {item.date}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                  {item.title}
                </h4>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '12px' }}>
                  {item.description}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                  <CheckCircle2 size={13} />
                  <span>Verified Commit Author: {item.verifiedAuthor}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
