import React, { useState, useEffect } from 'react';

export default function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [bootLogIndex, setBootLogIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const bootLogs = [
    "UEFI 2.x GOP Linear Framebuffer (2560x1600) Locked",
    "Physical Memory Ingestion: 8,388,608 frames mapped",
    "CR3 / PML4 4-Level Paging Initialized",
    "IA32_LSTAR Hardware Trap & TSS.RSP0 Bound",
    "BOS Kernel v2.7.0 Handoff Complete"
  ];

  useEffect(() => {
    // Fast, crisp 1.4s boot sequence
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFading(true);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 450);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 18) + 12;
        return next > 100 ? 100 : next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onFinish]);

  useEffect(() => {
    const logInterval = setInterval(() => {
      setBootLogIndex((prev) => (prev < bootLogs.length - 1 ? prev + 1 : prev));
    }, 240);
    return () => clearInterval(logInterval);
  }, [bootLogs.length]);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      background: '#040508',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s ease',
      opacity: fading ? 0 : 1,
      pointerEvents: fading ? 'none' : 'auto',
      userSelect: 'none',
      overflow: 'hidden'
    }}>
      
      {/* Real Milky Way Galaxy Background */}
      <div style={{
        position: 'absolute',
        inset: '-10px',
        backgroundImage: 'url(/assets/milky_way_galaxy.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.4,
        filter: 'contrast(1.2) brightness(0.9) saturate(1.1)',
        pointerEvents: 'none',
        transform: 'scale(1.05)',
        animation: 'subtleDrift 20s infinite alternate ease-in-out'
      }}></div>

      {/* Deep Vignette Mask to blend galaxy into void */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, rgba(6, 8, 14, 0.4) 0%, rgba(4, 5, 8, 0.85) 70%, #040508 100%)',
        pointerEvents: 'none'
      }}></div>

      {/* Central Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        position: 'relative',
        zIndex: 2,
        maxWidth: '380px',
        width: '90%'
      }}>
        
        {/* Glowing Container with Pure White Spinning Atom Logo */}
        <div style={{
          width: '74px',
          height: '74px',
          borderRadius: '20px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 35px rgba(56, 189, 248, 0.35), inset 0 0 15px rgba(255, 255, 255, 0.1)',
          position: 'relative'
        }}>
          {/* Pure White Glowing Spinning Logo */}
          <img 
            src="/proofs/atom_logo.png" 
            alt="ATOMS OS" 
            style={{
              width: '46px',
              height: '46px',
              objectFit: 'contain',
              filter: 'brightness(0) invert(1) drop-shadow(0 0 8px #ffffff) drop-shadow(0 0 16px rgba(56, 189, 248, 0.8))',
              animation: 'atomSpin 8s linear infinite'
            }} 
          />
        </div>

        {/* Title */}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontSize: '1.75rem',
            fontWeight: 800,
            letterSpacing: '0.06em',
            color: '#ffffff',
            margin: 0,
            fontFamily: 'var(--font-sans)',
            textShadow: '0 2px 20px rgba(0, 0, 0, 0.8)'
          }}>
            ATOMS<span style={{ color: 'var(--accent-cyan)' }}>OS</span>
          </h1>
          <div style={{
            fontSize: '0.75rem',
            color: '#94a3b8',
            fontFamily: 'var(--font-mono)',
            marginTop: '4px',
            letterSpacing: '0.06em'
          }}>
            BARE-METAL 64-BIT LONG MODE
          </div>
        </div>

        {/* Minimalist Progress Line */}
        <div style={{
          width: '100%',
          height: '3px',
          background: 'rgba(255, 255, 255, 0.12)',
          borderRadius: '2px',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 1px 4px rgba(0, 0, 0, 0.5)'
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #0284c7, #38bdf8, #10b981)',
            transition: 'width 0.12s linear',
            boxShadow: '0 0 12px rgba(56, 189, 248, 0.8)'
          }}></div>
        </div>

        {/* Telemetry boot status text */}
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.74rem',
          fontFamily: 'var(--font-mono)',
          color: '#cbd5e1'
        }}>
          <span style={{
            color: '#e0f2fe',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '260px'
          }}>
            &gt; {bootLogs[bootLogIndex]}
          </span>
          <span style={{ color: '#38bdf8', fontWeight: 700 }}>
            {progress}%
          </span>
        </div>
      </div>

      <style>{`
        @keyframes atomSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes subtleDrift {
          0% {
            transform: scale(1.05) translate(0px, 0px);
          }
          100% {
            transform: scale(1.08) translate(-15px, -8px);
          }
        }
      `}</style>
    </div>
  );
}
