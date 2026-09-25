import React from 'react';
import { ExternalLink, ShieldCheck, Heart, Terminal } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { CREATOR_INFO } from '../data/osData';

export default function Footer({ onNavigate }) {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--bg-secondary)',
      padding: '50px 0 30px 0',
      marginTop: '60px'
    }}>
      <div className="container">
        
        <div className="grid-4" style={{ gap: '32px', marginBottom: '40px' }}>
          
          {/* Col 1: Identity */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <img src="/proofs/atom_logo.png" alt="ATOMS OS" style={{ width: '28px', height: '28px' }} />
              <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#fff' }}>ATOMS OS</span>
              <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>v2.7.0-vmx-stable</span>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, maxWidth: '480px', marginBottom: '16px' }}>
              An independent 64-bit bare-metal operating system engineered from scratch in C and x86_64 assembly by 
              solo systems engineer <strong>Saumya Chaudhari</strong>. Featuring the BOS Kernel, BOFS filesystem, 
              native xHCI USB 3.0 stack, and bare-metal Intel VT-x Type-1 virtualization.
            </p>

            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Certified on physical Intel Haswell LGA1150 H81 & Raptor Lake LGA1700 B760M silicon.
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff', marginBottom: '12px', fontFamily: 'var(--font-mono)' }}>
              DOCUMENTATION
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <li><button onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>Overview & Live HUD</button></li>
              <li><button onClick={() => onNavigate('engines')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>The 8 Core Engines</button></li>
              <li><button onClick={() => onNavigate('proofs')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>Hardware Proof Gallery</button></li>
              <li><button onClick={() => onNavigate('genesis')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>Genesis & Day 1 Commit</button></li>
              <li><button onClick={() => onNavigate('updates')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>Certified Milestones</button></li>
              <li><button onClick={() => onNavigate('philosophy')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>Anti-Vibe-Coding Manifesto</button></li>
            </ul>
          </div>

          {/* Col 3: Repositories & Creator */}
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff', marginBottom: '12px', fontFamily: 'var(--font-mono)' }}>
              COMMUNITY & SOURCE
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <li>
                <a href={CREATOR_INFO.osRepoUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <GithubIcon size={14} />
                  <span>Saumya25-hub/Atoms-OS</span>
                  <ExternalLink size={11} />
                </a>
              </li>
              <li>
                <a href={CREATOR_INFO.webRepoUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Terminal size={14} />
                  <span>ATOMS-OS-INFOWEB</span>
                  <ExternalLink size={11} />
                </a>
              </li>
              <li>
                <a href={CREATOR_INFO.redditUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ff4500' }}>
                  <span>Reddit (u/Saumya-25)</span>
                  <ExternalLink size={11} />
                </a>
              </li>
              <li><button onClick={() => onNavigate('creator')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>Creator Profile</button></li>
              <li><button onClick={() => onNavigate('feedback')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>Feedback & Bug Tracker</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © 2026 <strong>Saumya Chaudhari</strong> (Saumya25-hub). Released under the{' '}
            <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)' }}>
              MIT License
            </a>.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Pure Bare-Metal Systems Engineering • Zero Linux • Zero Unix</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
