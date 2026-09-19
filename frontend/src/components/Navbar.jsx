import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  GraduationCap,
  Menu,
  X,
  User,
  LogOut,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  LayoutDashboard
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/#programs' },
    { name: 'Campus Life', path: '/#campus-life' },
    { name: 'Research', path: '/#research' },
    { name: 'Admissions', path: '/#admissions' }
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(7, 13, 24, 0.92)'
          : 'rgba(7, 13, 24, 0.4)',
        backdropFilter: 'blur(16px)',
        borderBottom: isScrolled
          ? '1px solid rgba(255, 255, 255, 0.08)'
          : '1px solid rgba(255, 255, 255, 0.03)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        {/* University Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#070d18',
              boxShadow: '0 4px 16px rgba(245, 158, 11, 0.35)'
            }}
          >
            <GraduationCap size={28} strokeWidth={2.4} />
          </div>
          <div>
            <div style={{ fontSize: '1.2rem', fontWeight: '800', letterSpacing: '-0.02em', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              JAWAHARLAL <span style={{ color: '#f59e0b' }}>NEHRU UNIVERSITY</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
              JNU • Center of Academic Excellence
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              style={{
                fontSize: '0.95rem',
                fontWeight: 500,
                color: location.pathname === link.path ? '#f59e0b' : '#cbd5e1',
                transition: 'color 0.2s ease',
                position: 'relative',
                padding: '0.25rem 0'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f59e0b')}
              onMouseLeave={(e) => (e.currentTarget.style.color = location.pathname === link.path ? '#f59e0b' : '#cbd5e1')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Auth CTA / User Profile */}
        <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="desktop-auth">
          {isAuthenticated && user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
              <Link
                to="/dashboard"
                className="btn btn-secondary btn-sm"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '9999px',
                  background: 'rgba(245, 158, 11, 0.1)',
                  borderColor: 'rgba(245, 158, 11, 0.3)'
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: '#f59e0b',
                    color: '#070d18',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.8rem'
                  }}
                >
                  {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <div style={{ textAlign: 'left', lineHeight: 1.1 }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc' }}>
                    {user.name?.split(' ')[0]}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#f59e0b', textTransform: 'capitalize' }}>
                    {user.role || 'Student'}
                  </div>
                </div>
              </Link>
              <Link to="/dashboard" className="btn btn-outline btn-sm">
                <LayoutDashboard size={15} />
                Portal
              </Link>
              <button
                onClick={handleLogout}
                className="btn btn-secondary btn-sm"
                title="Logout"
                style={{ padding: '0.5rem', borderRadius: '8px' }}
              >
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Link
                to="/login"
                className="btn btn-secondary btn-sm"
                id="nav-login-btn"
                style={{
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  padding: '0.55rem 1.25rem'
                }}
              >
                <User size={16} />
                Sign In
              </Link>
              <Link
                to="/signup"
                className="btn btn-primary btn-sm"
                id="nav-signup-btn"
                style={{
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  padding: '0.55rem 1.4rem'
                }}
              >
                <Sparkles size={16} />
                Apply / Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'block',
            background: 'transparent',
            border: 'none',
            color: '#f8fafc',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="mobile-toggle"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(7, 13, 24, 0.98)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            backdropFilter: 'blur(20px)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#e2e8f0',
                  padding: '0.5rem 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                {link.name}
                <ChevronRight size={16} color="#64748b" />
              </a>
            ))}

            <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.1)', margin: '0.5rem 0' }} />

            {isAuthenticated && user ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link
                  to="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <LayoutDashboard size={18} />
                  My Student Portal
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="btn btn-secondary"
                  style={{ width: '100%' }}
                >
                  <LogOut size={18} />
                  Sign Out ({user.name})
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn btn-secondary"
                  style={{ width: '100%' }}
                >
                  <User size={18} />
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <Sparkles size={18} />
                  Apply / Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Media query overrides in inline style element */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-auth { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
