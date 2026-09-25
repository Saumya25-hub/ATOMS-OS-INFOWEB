import React, { useState } from 'react';
import { 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  History, 
  Flame, 
  FileCode2, 
  User, 
  MessageSquare, 
  Menu, 
  X,
  ExternalLink,
  GitBranch,
  Sparkles
} from 'lucide-react';
import GithubIcon from './GithubIcon';
import { CREATOR_INFO } from '../data/osData';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Streamlined, punchy labels with zero text wrapping
  const navItems = [
    { id: 'home', label: 'Home', icon: Terminal },
    { id: 'engines', label: 'Engines', icon: Cpu },
    { id: 'proofs', label: 'Proofs', icon: ShieldCheck },
    { id: 'genesis', label: 'History', icon: History },
    { id: 'updates', label: 'Milestones', icon: Flame },
    { id: 'philosophy', label: 'Transparency', icon: FileCode2 },
    { id: 'creator', label: 'Creator', icon: User },
    { id: 'feedback', label: 'Feedback', icon: MessageSquare }
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="navbar" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      background: 'rgba(8, 10, 16, 0.88)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
        paddingLeft: '20px',
        paddingRight: '20px'
      }}>
        
        {/* Left: Brand Identity */}
        <div 
          onClick={() => handleNavClick('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
            userSelect: 'none',
            flexShrink: 0
          }}
        >
          <div style={{
            position: 'relative',
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(16, 185, 129, 0.15))',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(6, 182, 212, 0.2)'
          }}>
            <img 
              src="/proofs/atom_logo.png" 
              alt="ATOMS OS" 
              style={{ 
                width: '24px', 
                height: '24px', 
                objectFit: 'contain',
                filter: 'brightness(0) invert(1) drop-shadow(0 0 4px #ffffff) drop-shadow(0 0 8px rgba(56, 189, 248, 0.8))',
                animation: 'atomSpin 10s linear infinite'
              }} 
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                fontWeight: 800,
                fontSize: '1.15rem',
                letterSpacing: '-0.03em',
                color: '#ffffff',
                fontFamily: 'var(--font-sans)'
              }}>
                ATOMS<span style={{ color: 'var(--accent-cyan)' }}>OS</span>
              </span>

              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '2px 7px',
                borderRadius: '9999px',
                fontSize: '0.65rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                background: 'rgba(16, 185, 129, 0.12)',
                color: '#34d399',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                letterSpacing: '0.02em'
              }}>
                <span className="live-dot" style={{ width: '5px', height: '5px' }}></span>
                v2.7.0
              </span>
            </div>

            <span style={{
              fontSize: '0.68rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.01em'
            }}>
              by <strong style={{ color: '#cbd5e1' }}>Saumya Chaudhari</strong>
            </span>
          </div>
        </div>

        {/* Center: Clean Modern Navigation Pill Bar */}
        <nav className="desktop-nav" style={{
          display: 'none',
          alignItems: 'center',
          gap: '2px',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          padding: '4px',
          borderRadius: '9999px',
          backdropFilter: 'blur(10px)'
        }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.825rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: isActive ? 600 : 500,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
                  background: isActive ? 'rgba(56, 189, 248, 0.12)' : 'transparent',
                  color: isActive ? '#38bdf8' : '#94a3b8',
                  border: isActive ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid transparent',
                  boxShadow: isActive ? '0 0 14px rgba(56, 189, 248, 0.2)' : 'none'
                }}
                className="nav-btn-hover"
              >
                <Icon size={14} style={{ color: isActive ? '#38bdf8' : '#64748b' }} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right: Social & Profile Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          
          {/* GitHub Repo Pill */}
          <a
            href={CREATOR_INFO.osRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#f1f5f9',
              transition: 'all 0.2s ease',
              textDecoration: 'none'
            }}
            className="social-btn-hover"
            title="Official GitHub Repository: Saumya25-hub/Atoms-OS"
          >
            <GithubIcon size={14} />
            <span className="repo-label">Atoms-OS</span>
          </a>

          {/* Reddit Pill */}
          <a
            href={CREATOR_INFO.redditUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '6px 12px',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              background: 'rgba(255, 69, 0, 0.1)',
              border: '1px solid rgba(255, 69, 0, 0.3)',
              color: '#ff6433',
              transition: 'all 0.2s ease',
              textDecoration: 'none'
            }}
            className="reddit-btn-hover"
            title="Creator on Reddit: u/Saumya-25"
          >
            <span>u/Saumya-25</span>
            <ExternalLink size={11} />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff',
              cursor: 'pointer'
            }}
            className="mobile-toggle-btn"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(10, 13, 22, 0.98)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          backdropFilter: 'blur(20px)'
        }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#38bdf8' : '#cbd5e1',
                  background: isActive ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                  border: isActive ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid transparent',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <Icon size={16} style={{ color: isActive ? '#38bdf8' : '#64748b' }} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Embedded CSS for seamless responsiveness */}
      <style>{`
        @keyframes atomSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .nav-btn-hover:hover {
          color: #ffffff !important;
          background: rgba(255, 255, 255, 0.08) !important;
        }
        .social-btn-hover:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.25) !important;
          transform: translateY(-1px);
        }
        .reddit-btn-hover:hover {
          background: rgba(255, 69, 0, 0.18) !important;
          border-color: rgba(255, 69, 0, 0.5) !important;
          transform: translateY(-1px);
        }

        @media (min-width: 990px) {
          .desktop-nav {
            display: flex !important;
          }
        }
        @media (max-width: 989px) {
          .mobile-toggle-btn {
            display: inline-flex !important;
          }
          .repo-label {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
