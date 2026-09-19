import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  GraduationCap,
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  ShieldCheck,
  Eye,
  EyeOff,
  UserCheck
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!email || !password) {
      setErrorMsg('Please enter both your university email and password.');
      return;
    }

    setIsSubmitting(true);
    const result = await login({ email, password });
    setIsSubmitting(false);

    if (result.success) {
      setSuccessMsg('Authentication successful! Redirecting to portal...');
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
    } else {
      setErrorMsg(result.error || 'Failed to sign in. Please check your credentials.');
    }
  };

  const fillDemoAccount = (demoRole) => {
    if (demoRole === 'student') {
      setEmail('alex.student@jnu.ac.in');
      setPassword('JnuStudent2026!');
      setRole('student');
    } else if (demoRole === 'faculty') {
      setEmail('prof.albert@jnu.ac.in');
      setPassword('JnuFaculty2026!');
      setRole('faculty');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
        background: 'radial-gradient(circle at 50% 20%, #112240 0%, #070d18 80%)'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1020px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          background: 'rgba(15, 26, 48, 0.7)',
          border: '1px solid rgba(255, 255, 255, 0.09)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(20px)'
        }}
      >
        {/* Left Side: University Aesthetic Visuals */}
        <div
          style={{
            background: 'linear-gradient(145deg, #0f2444 0%, #081224 100%)',
            padding: '3rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            borderRight: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          {/* Top Brand Link */}
          <div>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', marginBottom: '2.5rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
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
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>
                  JAWAHARLAL <span style={{ color: '#f59e0b' }}>NEHRU UNIVERSITY</span>
                </div>
                <div style={{ fontSize: '0.68rem', color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  JNU Central Authentication Service
                </div>
              </div>
            </Link>

            <div className="badge-pill" style={{ marginBottom: '1.25rem' }}>
              <ShieldCheck size={14} />
              <span>Single Sign-On (SSO) Portal</span>
            </div>

            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.25 }}>
              Access Your Academic <span className="gradient-text">World</span>
            </h2>

            <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '2rem' }}>
              Sign in to manage degree schedules, course registrations, research repositories, and university administrative services.
            </p>

            {/* Quick Demo Preload Buttons */}
            <div
              style={{
                background: 'rgba(7, 13, 24, 0.6)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(245, 158, 11, 0.2)'
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f59e0b', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Sparkles size={14} /> Quick Demo Fill:
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => fillDemoAccount('student')}
                  style={{
                    padding: '0.45rem 0.8rem',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '6px',
                    color: '#e2e8f0',
                    fontSize: '0.8rem',
                    cursor: 'pointer'
                  }}
                >
                  Fill Demo Student
                </button>
                <button
                  type="button"
                  onClick={() => fillDemoAccount('faculty')}
                  style={{
                    padding: '0.45rem 0.8rem',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '6px',
                    color: '#e2e8f0',
                    fontSize: '0.8rem',
                    cursor: 'pointer'
                  }}
                >
                  Fill Demo Faculty
                </button>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#64748b' }}>
            Protected by 256-bit SSL encryption. <Link to="/" style={{ color: '#f59e0b', textDecoration: 'underline' }}>Return to Homepage</Link>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div style={{ padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
              Sign In to Portal
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
              Don't have an account yet?{' '}
              <Link to="/signup" style={{ color: '#f59e0b', fontWeight: 600 }}>
                Register / Sign Up here
              </Link>
            </p>
          </div>

          {/* Feedback Alerts */}
          {errorMsg && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.85rem 1rem',
                background: 'rgba(239, 68, 68, 0.12)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: 'var(--radius-sm)',
                color: '#fca5a5',
                fontSize: '0.88rem',
                marginBottom: '1.25rem'
              }}
            >
              <AlertCircle size={18} style={{ flexShrink: 0 }} />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.85rem 1rem',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: 'var(--radius-sm)',
                color: '#6ee7b7',
                fontSize: '0.88rem',
                marginBottom: '1.25rem'
              }}
            >
              <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
              <span>{successMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Role selection radio pills */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label className="form-label">Sign In As</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                {['student', 'faculty', 'staff'].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    style={{
                      padding: '0.55rem 0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      textTransform: 'capitalize',
                      border: '1px solid',
                      borderColor: role === r ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.1)',
                      background: role === r ? 'rgba(245, 158, 11, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                      color: role === r ? '#f59e0b' : '#94a3b8',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label className="form-label" htmlFor="login-email">
                University Email / ID
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="login-email"
                  type="email"
                  required
                  placeholder="e.g. yourname@jnu.ac.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  style={{ paddingLeft: '2.5rem' }}
                />
                <Mail
                  size={18}
                  color="#64748b"
                  style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)' }}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <label className="form-label" htmlFor="login-password" style={{ marginBottom: 0 }}>
                  Password
                </label>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Password reset link sent to your registered academic email address.');
                  }}
                  style={{ fontSize: '0.8rem', color: '#f59e0b' }}
                >
                  Forgot Password?
                </a>
              </div>
              <div style={{ position: 'relative' }}>
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Enter your secure password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                />
                <Lock
                  size={18}
                  color="#64748b"
                  style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '0.9rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: 'none',
                    color: '#64748b',
                    cursor: 'pointer'
                  }}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Me checkbox */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
              <input type="checkbox" id="remember-me" defaultChecked style={{ accentColor: '#f59e0b' }} />
              <label htmlFor="remember-me" style={{ cursor: 'pointer' }}>
                Keep me signed in on this device
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
              id="login-submit-btn"
              style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', fontWeight: 700 }}
            >
              {isSubmitting ? (
                <span>Authenticating with Portal...</span>
              ) : (
                <>
                  <UserCheck size={18} />
                  <span>Sign In to University Portal</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
