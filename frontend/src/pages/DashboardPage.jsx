import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  GraduationCap,
  LogOut,
  Home,
  User,
  BookOpen,
  Calendar,
  Award,
  Clock,
  ShieldCheck,
  Download,
  Bell,
  Sparkles,
  ChevronRight,
  QrCode
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function DashboardPage() {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const sampleCourses = [
    { code: 'CS-401', name: 'Advanced Neural Networks & Generative Models', credits: 4, grade: 'A', instructor: 'Dr. Katherine Bell' },
    { code: 'ENG-320', name: 'Autonomous Robotics & Sensor Integration', credits: 3, grade: 'A-', instructor: 'Prof. David Lee' },
    { code: 'MATH-380', name: 'Quantum Information & Applied Cryptography', credits: 4, grade: 'A', instructor: 'Dr. Michael Chen' },
    { code: 'RES-490', name: 'Undergraduate Senior Capstone & Defense', credits: 3, grade: 'In Progress', instructor: 'Dean Alistair Vance' }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#070d18', color: '#f8fafc', paddingBottom: '60px' }}>
      {/* Top Portal Header */}
      <header
        style={{
          background: 'rgba(15, 26, 48, 0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'sticky',
          top: 0,
          zIndex: 50
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#070d18'
                }}
              >
                <GraduationCap size={22} strokeWidth={2.4} />
              </div>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>
                  JNU <span style={{ color: '#f59e0b' }}>PORTAL</span>
                </div>
              </div>
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link to="/" className="btn btn-secondary btn-sm">
              <Home size={16} />
              <span>University Homepage</span>
            </Link>
            <button onClick={handleLogout} className="btn btn-outline btn-sm" id="dashboard-logout-btn">
              <LogOut size={16} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Dashboard Container */}
      <div className="container" style={{ marginTop: '2.5rem' }}>
        {/* Welcome Banner */}
        <div
          className="glass-card"
          style={{
            padding: '2rem 2.5rem',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(37, 99, 235, 0.08) 100%)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          <div>
            <div className="badge-pill" style={{ marginBottom: '0.75rem' }}>
              <Sparkles size={14} />
              <span>Academic Year 2026-2027</span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', marginBottom: '0.5rem' }}>
              Welcome back, <span className="gradient-text">{user?.name || 'Distinguished Scholar'}</span>
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
              {user?.department || 'School of Advanced Computing'} • Status: <span style={{ color: '#10b981', fontWeight: 600 }}>Active Good Standing</span>
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={() => alert('Official Academic Transcript PDF downloaded!')}
              className="btn btn-secondary btn-sm"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Download size={16} />
              <span>Download Transcript</span>
            </button>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          {/* Left: Digital University ID Card */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={20} color="#f59e0b" />
              <span>Digital University ID Card</span>
            </h3>

            {/* Smart Holographic ID Card */}
            <div
              style={{
                background: 'linear-gradient(135deg, #0f2444 0%, #1e3a8a 50%, #081224 100%)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(245, 158, 11, 0.15)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle metallic crest watermark */}
              <div
                style={{
                  position: 'absolute',
                  right: '-20px',
                  bottom: '-20px',
                  opacity: 0.08,
                  pointerEvents: 'none'
                }}
              >
                <GraduationCap size={220} />
              </div>

              {/* ID Card Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <GraduationCap size={24} color="#f59e0b" />
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.05em', color: '#ffffff' }}>
                      JAWAHARLAL NEHRU UNIVERSITY
                    </div>
                    <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase' }}>
                      Official Member Credentials (JNU)
                    </div>
                  </div>
                </div>

                <span
                  style={{
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    background: '#f59e0b',
                    color: '#070d18'
                  }}
                >
                  {user?.role || 'STUDENT'}
                </span>
              </div>

              {/* User Avatar & Info */}
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    color: '#070d18',
                    border: '2px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>

                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                    {user?.name || 'Alex Morgan'}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                    {user?.email || 'alex.morgan@jnu.ac.in'}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#f59e0b', fontWeight: 600, marginTop: '0.2rem' }}>
                    ID: {user?.studentId || 'JNU-849201'}
                  </div>
                </div>
              </div>

              {/* Card Footer Details */}
              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.35)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase' }}>Faculty Division</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f8fafc' }}>{user?.department || 'Computer Science & AI'}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase' }}>Validity</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#10b981' }}>2026 - 2030</div>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid-2" style={{ marginTop: '1.5rem' }}>
              <div className="glass-card" style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase' }}>Cumulative GPA</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10b981', marginTop: '0.25rem' }}>3.94</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b' }}>Top 5% in class</div>
              </div>
              <div className="glass-card" style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase' }}>Completed Credits</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#38bdf8', marginTop: '0.25rem' }}>84 / 120</div>
                <div style={{ fontSize: '0.72rem', color: '#64748b' }}>Junior Standing</div>
              </div>
            </div>
          </div>

          {/* Right: Enrolled Classes & Announcements */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Courses Table Card */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <BookOpen size={18} color="#f59e0b" />
                  <span>Current Enrolled Curriculum</span>
                </h3>
                <span style={{ fontSize: '0.8rem', color: '#f59e0b', fontWeight: 600 }}>14 Total Credits</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {sampleCourses.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.15rem 0.45rem', borderRadius: '4px', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b' }}>
                          {c.code}
                        </span>
                        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc' }}>
                          {c.name}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                        Instructor: {c.instructor} • {c.credits} Credits
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#10b981' }}>{c.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* University Alerts / Schedule */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Bell size={18} color="#f59e0b" />
                <span>Academic Notices & Exam Schedule</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                <div style={{ padding: '0.75rem 1rem', background: 'rgba(245, 158, 11, 0.08)', borderLeft: '3px solid #f59e0b', borderRadius: '4px' }}>
                  <div style={{ fontWeight: 600, color: '#f8fafc' }}>Mid-Term Research Project Submissions</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.78rem' }}>Portal uploads close on Friday at 11:59 PM EST.</div>
                </div>

                <div style={{ padding: '0.75rem 1rem', background: 'rgba(56, 189, 248, 0.08)', borderLeft: '3px solid #38bdf8', borderRadius: '4px' }}>
                  <div style={{ fontWeight: 600, color: '#f8fafc' }}>Quantum Computing Guest Seminar</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.78rem' }}>Thursday 3:00 PM in Imperial Main Auditorium Hall B.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
