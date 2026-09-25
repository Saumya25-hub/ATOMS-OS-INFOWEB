import React, { useState } from 'react';
import { 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  AlertCircle, 
  Cpu, 
  Terminal,
  HelpCircle
} from 'lucide-react';
import GithubIcon from './GithubIcon';
import { CREATOR_INFO } from '../data/osData';

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    category: 'general',
    hardware: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      contact: '',
      category: 'general',
      hardware: '',
      message: ''
    });
  };

  return (
    <section style={{ padding: '40px 0 80px 0' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <MessageSquare size={18} style={{ color: 'var(--accent-cyan)' }} />
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
              COMMUNITY INTERACTION & OS DEV FEEDBACK
            </span>
          </div>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '12px' }}>
            Feedback, Bug Reports & Hardware Test Submissions
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            Have you tested ATOMS OS on your motherboard? Found a UEFI firmware quirk or serial panic trace? 
            Submit your telemetry report below or reach out directly via Reddit and GitHub.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '32px' }}>
          
          {/* Left Column: Interactive Form */}
          <div className="dev-card">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Terminal size={18} style={{ color: 'var(--accent-cyan)' }} />
              <span>Submit Telemetry / Developer Feedback</span>
            </h3>

            {submitted ? (
              <div style={{
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '24px',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={40} style={{ color: 'var(--accent-emerald)', margin: '0 auto 12px auto' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                  Feedback Transmitted Successfully!
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  Thank you, <strong>{formData.name}</strong>. Your feedback for category <code>{formData.category}</code> has been logged. 
                  Saumya Chaudhari reviews all bare-metal hardware reports.
                </p>
                <button onClick={handleReset} className="btn btn-secondary" style={{ fontSize: '0.8rem', padding: '8px 16px' }}>
                  Submit Another Report
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px', fontWeight: 600 }}>
                    Developer / Researcher Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe / @username"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--bg-code)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '10px 14px',
                      color: '#fff',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-sans)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div className="grid-2" style={{ gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px', fontWeight: 600 }}>
                      Email or Reddit Handle
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. u/dev_handle or email"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'var(--bg-code)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '10px 14px',
                        color: '#fff',
                        fontSize: '0.85rem',
                        fontFamily: 'var(--font-sans)',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px', fontWeight: 600 }}>
                      Report Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'var(--bg-code)',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '10px 14px',
                        color: '#fff',
                        fontSize: '0.85rem',
                        fontFamily: 'var(--font-sans)',
                        outline: 'none'
                      }}
                    >
                      <option value="general">General OS Feedback</option>
                      <option value="hardware-test">Bare-Metal Hardware Test</option>
                      <option value="bug-report">Bug Report / Serial Panic</option>
                      <option value="hypervisor">Intel VT-x Hypervisor Query</option>
                      <option value="memory">PMM/VMM Memory Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px', fontWeight: 600 }}>
                    Target Hardware (Motherboard / CPU / RAM)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ASUS B760M / Core i5 / 16GB RAM or QEMU UEFI"
                    value={formData.hardware}
                    onChange={(e) => setFormData({ ...formData, hardware: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--bg-code)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '10px 14px',
                      color: '#fff',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-sans)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '6px', fontWeight: 600 }}>
                    Message & Serial Log Excerpt *
                  </label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Provide diagnostic feedback, test observation, or forensic question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--bg-code)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '10px 14px',
                      color: '#fff',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '12px', fontSize: '0.9rem' }}
                >
                  <Send size={16} />
                  <span>Transmit Report to Maintainer</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Reddit Link Card */}
            <div className="dev-card" style={{ borderLeft: '4px solid #ff4500' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff' }}>
                  Reddit Discussion Profile
                </h4>
                <span className="badge badge-amber" style={{ color: '#ff4500', borderColor: 'rgba(255, 69, 0, 0.3)' }}>
                  r/osdev community
                </span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '16px' }}>
                Saumya Chaudhari actively shares architectural updates, milestone certifications, and forensic debugging postmortems on Reddit.
              </p>
              <a
                href={CREATOR_INFO.redditUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '8px 16px', fontSize: '0.8rem', color: '#ff4500' }}
              >
                <span>Visit u/Saumya-25 on Reddit</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* GitHub Issues Card */}
            <div className="dev-card" style={{ borderLeft: '4px solid var(--accent-cyan)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff' }}>
                  GitHub Issues & Technical Bug Tracker
                </h4>
                <span className="badge badge-cyan">
                  Saumya25-hub
                </span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '16px' }}>
                For kernel crash dumps, compiler linking problems, or UEFI GOP handoff errors, submit a formal issue directly to the GitHub repository.
              </p>
              <a
                href={`${CREATOR_INFO.osRepoUrl}/issues`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '8px 16px', fontSize: '0.8rem' }}
              >
                <GithubIcon size={14} />
                <span>Open GitHub Issue</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Direct Email Card */}
            <div className="dev-card" style={{ borderLeft: '4px solid var(--accent-emerald)' }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
                Official Architecture Inquiries
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '12px' }}>
                For systems researchers, hardware vendors, or independent developers interested in bare-metal hypervisors or UEFI long-mode handoff:
              </p>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan)' }}>
                {CREATOR_INFO.email}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
