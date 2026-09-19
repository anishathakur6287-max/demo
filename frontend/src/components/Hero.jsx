import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
  Award,
  BookOpen,
  Users,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Hero() {
  const { isAuthenticated, user } = useAuth();

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '140px',
        paddingBottom: '80px',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambient Glows */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '750px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.15) 0%, rgba(37, 99, 235, 0.1) 45%, transparent 75%)',
          filter: 'blur(70px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
          filter: 'blur(50px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          {/* Top Pill Badge */}
          <div style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>
            <div className="badge-pill">
              <span className="badge-dot" />
              <span>Fall 2026 Admissions Open</span>
              <span style={{ opacity: 0.5 }}>|</span>
              <span style={{ color: '#f8fafc', fontWeight: 500 }}>Ranked #1 Global University</span>
            </div>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
              lineHeight: 1.12,
              marginBottom: '1.5rem',
              fontWeight: 800
            }}
          >
            Empowering Next-Gen Leaders Through{' '}
            <span className="gradient-text">World-Class Education</span> & Innovation
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              maxWidth: '750px',
              margin: '0 auto 2.5rem auto',
              color: '#94a3b8',
              lineHeight: 1.7
            }}
          >
            Welcome to Jawaharlal Nehru University (JNU). Join an elite academic ecosystem of visionary researchers, renowned faculty, and critical thinkers transforming science, technology, social sciences, and international studies.
          </p>

          {/* Call to Actions */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '3.5rem'
            }}
          >
            {isAuthenticated ? (
              <Link to="/dashboard" className="btn btn-primary btn-lg" id="hero-portal-btn">
                <span>Go to My Student Portal</span>
                <ArrowRight size={20} />
              </Link>
            ) : (
              <>
                <Link to="/signup" className="btn btn-primary btn-lg" id="hero-signup-btn">
                  <Sparkles size={20} />
                  <span>Apply Now / Register</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/login" className="btn btn-secondary btn-lg" id="hero-login-btn">
                  <Lock size={18} />
                  <span>Student & Faculty Portal</span>
                </Link>
              </>
            )}

            <a href="#programs" className="btn btn-outline btn-lg">
              <Compass size={18} />
              <span>Explore 180+ Programs</span>
            </a>
          </div>

          {/* Trust & Accreditations Micro-Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              padding: '1.25rem 2rem',
              background: 'rgba(15, 26, 48, 0.4)',
              backdropFilter: 'blur(12px)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              maxWidth: '820px',
              margin: '0 auto'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
              <ShieldCheck size={20} color="#f59e0b" />
              <span><strong>QS World Top 10</strong> Accredited</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
              <Award size={20} color="#10b981" />
              <span><strong>98.4%</strong> Career Placement Rate</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
              <Users size={20} color="#38bdf8" />
              <span><strong>450+</strong> Global Tech & Industry Partners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
