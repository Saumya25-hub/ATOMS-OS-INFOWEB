import React, { useEffect, useRef } from 'react';

export default function CosmicBackground() {
  const canvasRef = useRef(null);
  const galaxyLayerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const galaxyLayer = galaxyLayerRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle settings for stardust & atomic nodes
    const PARTICLE_COUNT = Math.min(Math.floor((width * height) / 14000), 90);
    const particles = [];

    // Directional control via mouse and scroll momentum
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    let targetVx = 0;
    let targetVy = 0;
    let currentVx = 0;
    let currentVy = 0;

    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let currentScrollShift = 0;

    // Handle mouse movement
    const handleMouseMove = (e) => {
      const centerX = width / 2;
      const centerY = height / 2;
      targetMouseX = (e.clientX - centerX) / centerX;
      targetMouseY = (e.clientY - centerY) / centerY;

      // Directional impulse
      targetVx = targetMouseX * 0.4;
      targetVy = targetMouseY * 0.4;
    };

    // Handle scroll
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
      scrollVelocity = delta * 0.06;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // Initialize cosmic particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const depth = Math.random() * 0.8 + 0.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseVx: (Math.random() - 0.5) * 0.2 * depth,
        baseVy: (Math.random() - 0.5) * 0.2 * depth,
        radius: (Math.random() * 1.3 + 0.5) * depth,
        depth: depth,
        alpha: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseVal: Math.random() * Math.PI
      });
    }

    // Animation loop
    const render = () => {
      // Smooth lerp for mouse coordinates & velocity
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      currentVx += (targetVx - currentVx) * 0.04;
      currentVy += (targetVy - currentVy) * 0.04;

      scrollVelocity *= 0.92;
      currentScrollShift += (window.scrollY * 0.08 - currentScrollShift) * 0.06;

      // Update Milky Way Galaxy background parallax transform
      if (galaxyLayer) {
        const panX = -mouseX * 25;
        const panY = -mouseY * 20 - currentScrollShift * 0.4;
        galaxyLayer.style.transform = `translate3d(${panX}px, ${panY}px, 0) scale(1.08)`;
      }

      ctx.clearRect(0, 0, width, height);

      // Render interactive particles on top of the galaxy
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.pulseVal += p.pulseSpeed;
        const currentAlpha = p.alpha * (0.8 + Math.sin(p.pulseVal) * 0.2);

        // Move with base velocity + mouse direction + scroll impulse
        p.x += p.baseVx + currentVx * p.depth * 1.1;
        p.y += p.baseVy + currentVy * p.depth * 1.1 - scrollVelocity * p.depth;

        // Wrap around boundaries
        if (p.x < -10) p.x = width + 10;
        else if (p.x > width + 10) p.x = -10;

        if (p.y < -10) p.y = height + 10;
        else if (p.y > height + 10) p.y = -10;

        // Draw star node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        if (p.depth > 0.7) {
          ctx.fillStyle = `rgba(224, 242, 254, ${currentAlpha})`;
          ctx.shadowBlur = 5;
          ctx.shadowColor = 'rgba(56, 189, 248, 0.4)';
        } else {
          ctx.fillStyle = `rgba(241, 245, 249, ${currentAlpha * 0.75})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        // Constellation / atomic linkage
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 6400) { // 80px
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / 80) * 0.08 * (p.depth * p2.depth);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(224, 242, 254, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      pointerEvents: 'none',
      overflow: 'hidden',
      background: '#040508'
    }}>
      
      {/* Real High-Resolution Milky Way Galaxy Parallax Layer */}
      <div
        ref={galaxyLayerRef}
        style={{
          position: 'absolute',
          inset: '-50px',
          backgroundImage: 'url(/assets/milky_way_galaxy.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.45,
          filter: 'contrast(1.2) brightness(0.9) saturate(1.15)',
          willChange: 'transform',
          transition: 'opacity 0.5s ease'
        }}
      />

      {/* Atmospheric depth vignette to ensure cards and text pop */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 30%, rgba(6, 8, 14, 0.35) 0%, rgba(4, 5, 8, 0.75) 65%, #040508 100%)'
      }} />

      {/* Canvas for dynamic physics-driven stardust */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
}
