import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  GraduationCap,
  Mail,
  Lock,
  User,
  BookOpen,
  ArrowRight,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  ShieldCheck,
  Eye,
  EyeOff
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const departments = [
  'School of Computing & Artificial Intelligence',
  'Faculty of Medicine & Clinical Health',
  'Department of Aerospace & Space Systems',
  'Imperial Graduate Business & Finance School',
  'Department of Biomedical & Genetic Engineering',
  'Faculty of Sustainable Energy & Green Tech',
  'School of International Law & Public Policy'
];

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [department, setDepartment] = useState(departments[0]);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const { register } = useAuth();
  const navigate = useNavigate();

  // Simple password strength calculation
  const getPasswordStrength = () => {
    if (!password) return { score: 0, label: '', color: '#64748b' };
    let score = 0;
    if (password.length >= 6) score += 1;
    if (password.length >= 10) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password)) score += 1;

    switch (score) {
      case 1:
        return { score: 25, label: 'Weak', color: '#ef4444' };
      case 2:
        return { score: 50, label: 'Fair', color: '#f59e0b' };
      case 3:
        return { score: 75, label: 'Good', color: '#38bdf8' };
      case 4:
        return { score: 100, label: 'Strong', color: '#10b981' };
      default:
        return { score: 0, label: '', color: '#64748b' };
    }
  };

  const strength = getPasswordStrength();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!name || !email || !password) {
      setErrorMsg('Please fill in all required registration fields.');
      return;
    }

    if (password.length < 6) {
      setErrorMsg('Password must contain at least 6 characters.');
      return;
    }

    if (!agreeTerms) {
      setErrorMsg('Please review and agree to the Academic Honor Code.');
      return;
    }

    setIsSubmitting(true);
    const result = await register({
      name,
      email,
      password,
      role,
      department
    });
    setIsSubmitting(false);

    if (result.success) {
      setSuccessMsg('Account created successfully! Redirecting to your student portal...');
      setTimeout(() => {
        navigate('/dashboard');
      }, 1200);
    } else {
      setErrorMsg(result.error || 'Failed to register account.');
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
          maxWidth: '1060px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
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
                  JNU Admissions & Portal
                </div>
              </div>
            </Link>

            <div className="badge-pill" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={14} />
              <span>Fall 2026 Registration</span>
            </div>

            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.25 }}>
              Begin Your Journey to <span className="gradient-text">Excellence</span>
            </h2>

            <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '2rem' }}>
              Create your official student ID, gain access to lecture portals, reserve campus laboratory sessions, and join our global alumni community.
            </p>

            {/* Feature Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Instant University Student ID generation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Access to 180+ accredited course materials</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.88rem', color: '#e2e8f0' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Direct faculty advisement & career incubation</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: '#64748b' }}>
            Official University Member System. <Link to="/" style={{ color: '#f59e0b', textDecoration: 'underline' }}>Return to Homepage</Link>
          </div>
        </div>

        {/* Right Side: Signup Form */}
        <div style={{ padding: '2.5rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.4rem' }}>
              Create University Account
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8' }}>
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#f59e0b', fontWeight: 600 }}>
                Sign In here
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
                padding: '0.8rem 1rem',
                background: 'rgba(239, 68, 68, 0.12)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: 'var(--radius-sm)',
                color: '#fca5a5',
                fontSize: '0.85rem',
                marginBottom: '1rem'
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
                padding: '0.8rem 1rem',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: 'var(--radius-sm)',
                color: '#6ee7b7',
                fontSize: '0.85rem',
                marginBottom: '1rem'
              }}
            >
              <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
              <span>{successMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Role selection radio pills */}
            <div style={{ marginBottom: '1rem' }}>
              <label className="form-label">Registering As</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.4rem' }}>
                {['student', 'faculty', 'staff', 'alumni'].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    style={{
                      padding: '0.45rem 0.2rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.78rem',
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

            {/* Full Name */}
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label className="form-label" htmlFor="signup-name">
                Full Name
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="signup-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field"
                  style={{ paddingLeft: '2.5rem' }}
                />
                <User
                  size={18}
                  color="#64748b"
                  style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)' }}
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label className="form-label" htmlFor="signup-email">
                Academic or Personal Email
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="signup-email"
                  type="email"
                  required
                  placeholder="e.g. alex.morgan@jnu.ac.in"
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

            {/* Department Selection */}
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label className="form-label" htmlFor="signup-dept">
                Faculty / Department of Study
              </label>
              <div style={{ position: 'relative' }}>
                <select
                  id="signup-dept"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="input-field"
                  style={{ paddingLeft: '2.5rem' }}
                >
                  {departments.map((dept, i) => (
                    <option key={i} value={dept} style={{ background: '#0a1426', color: '#f8fafc' }}>
                      {dept}
                    </option>
                  ))}
                </select>
                <BookOpen
                  size={18}
                  color="#64748b"
                  style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)' }}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-group" style={{ marginBottom: '0.75rem' }}>
              <label className="form-label" htmlFor="signup-password">
                Create Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="signup-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="At least 6 characters"
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

              {/* Password strength indicator */}
              {password && (
                <div style={{ marginTop: '0.4rem' }}>
                  <div style={{ height: '4px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div
                      style={{
                        height: '100%',
                        width: `${strength.score}%`,
                        background: strength.color,
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: strength.color, marginTop: '0.2rem', fontWeight: 600 }}>
                    <span>Security: {strength.label}</span>
                    <span>Min 6 characters</span>
                  </div>
                </div>
              )}
            </div>

            {/* Terms checkbox */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1.25rem', fontSize: '0.8rem', color: '#94a3b8' }}>
              <input
                type="checkbox"
                id="agree-terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                style={{ accentColor: '#f59e0b', marginTop: '3px' }}
              />
              <label htmlFor="agree-terms" style={{ cursor: 'pointer', lineHeight: 1.4 }}>
                I agree to the <strong style={{ color: '#cbd5e1' }}>Jawaharlal Nehru University (JNU) Honor Code</strong> and Terms of Enrollment.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
              id="signup-submit-btn"
              style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem', fontWeight: 700 }}
            >
              {isSubmitting ? (
                <span>Registering University Profile...</span>
              ) : (
                <>
                  <Sparkles size={18} />
                  <span>Complete Enrollment & Sign Up</span>
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
