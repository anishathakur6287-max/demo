import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  Shield,
  ArrowRight
} from 'lucide-react';

export default function Footer() {
  const [emailSub, setEmailSub] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailSub) {
      setSubscribed(true);
      setEmailSub('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer
      id="admissions"
      style={{
        background: '#050912',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '80px 0 30px 0',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Brand & About */}
          <div style={{ maxWidth: '320px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#070d18'
                }}
              >
                <GraduationCap size={24} strokeWidth={2.4} />
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#ffffff' }}>
                JAWAHARLAL <span style={{ color: '#f59e0b' }}>NEHRU UNIVERSITY</span>
              </div>
            </Link>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Jawaharlal Nehru University (JNU) is India's premier public research university, globally renowned for excellence in higher education, frontier research, social sciences, and scientific innovation.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontSize: '0.85rem', fontWeight: 600 }}>
              <Shield size={16} />
              <span>NAAC A++ Accredited • NIRF Top Ranked University</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '1.25rem' }}>
              Portals & Access
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link to="/login" style={{ color: '#94a3b8', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ArrowRight size={14} color="#f59e0b" /> Student & Faculty Sign In
                </Link>
              </li>
              <li>
                <Link to="/signup" style={{ color: '#94a3b8', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ArrowRight size={14} color="#f59e0b" /> Admissions Application / Register
                </Link>
              </li>
              <li>
                <Link to="/dashboard" style={{ color: '#94a3b8', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ArrowRight size={14} color="#f59e0b" /> University ID Dashboard
                </Link>
              </li>
              <li>
                <a href="#programs" style={{ color: '#94a3b8', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ArrowRight size={14} color="#f59e0b" /> Degree Curriculum & Catalog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Campus Info */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '1.25rem' }}>
              Campus Headquarters
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.9rem', color: '#94a3b8' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>New Mehrauli Road, JNU Ring Rd, New Delhi, Delhi 110067, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={18} color="#f59e0b" style={{ flexShrink: 0 }} />
                <span>+91-11-26742676 / +91-11-26704090</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={18} color="#f59e0b" style={{ flexShrink: 0 }} />
                <span>admissions@jnu.ac.in</span>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '1.25rem' }}>
              Stay Informed
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '1rem' }}>
              Subscribe to university bulletins, research highlights, and scholarship deadlines.
            </p>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontSize: '0.9rem', padding: '0.75rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: 'var(--radius-sm)' }}>
                <CheckCircle2 size={18} />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ position: 'relative' }}>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={emailSub}
                    onChange={(e) => setEmailSub(e.target.value)}
                    className="input-field"
                    style={{ paddingRight: '2.5rem', fontSize: '0.9rem' }}
                  />
                  <button
                    type="submit"
                    style={{
                      position: 'absolute',
                      right: '6px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: '#f59e0b',
                      border: 'none',
                      color: '#070d18',
                      padding: '0.4rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    title="Subscribe"
                  >
                    <Send size={15} />
                  </button>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                  Zero spam. Unsubscribe anytime.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Copyright bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#64748b'
          }}
        >
          <div>
            © {new Date().getFullYear()} Jawaharlal Nehru University (JNU). All rights reserved. MERN Stack Web Portal.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: '#64748b' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#64748b' }}>Terms of Service</a>
            <a href="#" style={{ color: '#64748b' }}>Campus Safety</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
