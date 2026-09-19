import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  HeartPulse,
  Wrench,
  TrendingUp,
  Scale,
  Palette,
  ArrowRight,
  Clock,
  Award,
  Sparkles
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Disciplines' },
  { id: 'tech', label: 'Computer Science & AI' },
  { id: 'health', label: 'Medicine & Health' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'business', label: 'Business & Finance' }
];

const programsData = [
  {
    id: 1,
    category: 'tech',
    title: 'B.S. in Artificial Intelligence & Robotics',
    faculty: 'School of Advanced Computing',
    duration: '4 Years (Full-Time)',
    degree: 'Bachelor of Science (Honors)',
    description: 'Master neural networks, autonomous robotics, generative AI architectures, and quantum computing frameworks in our cutting-edge labs.',
    icon: Cpu,
    color: '#06b6d4',
    badge: 'High Demand'
  },
  {
    id: 2,
    category: 'health',
    title: 'Doctor of Medicine (M.D.) & Biomedical Tech',
    faculty: 'Faculty of Health & Clinical Sciences',
    duration: '5 Years + Residency',
    degree: 'Professional Doctorate',
    description: 'Integrate clinical surgical rotations with CRISPR gene-editing and AI diagnostics at our university research teaching hospital.',
    icon: HeartPulse,
    color: '#ef4444',
    badge: 'QS Top 5'
  },
  {
    id: 3,
    category: 'tech',
    title: 'M.S. in Cybersecurity & Cloud Infrastructure',
    faculty: 'School of Advanced Computing',
    duration: '2 Years',
    degree: 'Master of Science',
    description: 'Specialize in zero-trust architecture, cryptographic protocols, defense forensics, and secure distributed cloud systems.',
    icon: Cpu,
    color: '#38bdf8',
    badge: 'Govt. Accredited'
  },
  {
    id: 4,
    category: 'engineering',
    title: 'B.Eng. in Aerospace & Space Systems',
    faculty: 'Department of Aerospace Engineering',
    duration: '4 Years',
    degree: 'Bachelor of Engineering',
    description: 'Design orbital satellite systems, propulsion aerodynamics, and deep-space telemetry alongside defense & commercial aerospace partners.',
    icon: Wrench,
    color: '#f59e0b',
    badge: 'NASA Partner'
  },
  {
    id: 5,
    category: 'business',
    title: 'Global MBA & Fintech Leadership',
    faculty: 'Imperial Graduate Business School',
    duration: '2 Years (Hybrid Available)',
    degree: 'Master of Business Admin',
    description: 'Accelerate executive leadership, venture capital structuring, global market strategy, and decentralized financial instruments.',
    icon: TrendingUp,
    color: '#10b981',
    badge: 'Top 1% Worldwide'
  },
  {
    id: 6,
    category: 'engineering',
    title: 'B.S. in Renewable Energy & Green Engineering',
    faculty: 'Faculty of Sustainable Technologies',
    duration: '4 Years',
    degree: 'Bachelor of Science',
    description: 'Pioneer next-generation solar perovskites, grid-scale energy storage, hydrogen fuel cells, and decarbonization infrastructures.',
    icon: Wrench,
    color: '#84cc16',
    badge: 'Eco Excellence'
  }
];

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPrograms =
    activeCategory === 'all'
      ? programsData
      : programsData.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>Academic Excellence</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>
            Explore Our World-Renowned <span className="gradient-text">Degree Programs</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94a3b8' }}>
            Choose from over 180 globally accredited undergraduate, graduate, and doctoral programs built in collaboration with world industry leaders.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: 600,
                border: '1px solid',
                borderColor:
                  activeCategory === cat.id
                    ? 'var(--color-primary)'
                    : 'rgba(255, 255, 255, 0.1)',
                background:
                  activeCategory === cat.id
                    ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.25), rgba(245, 158, 11, 0.1))'
                    : 'rgba(15, 26, 48, 0.5)',
                color: activeCategory === cat.id ? '#fbbf24' : '#94a3b8',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(8px)'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid-3">
          {filteredPrograms.map((program) => {
            const IconComponent = program.icon;
            return (
              <div
                key={program.id}
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.5rem',
                  position: 'relative'
                }}
              >
                {/* Program Header */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: `${program.color}18`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: program.color
                      }}
                    >
                      <IconComponent size={24} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '0.3rem 0.75rem',
                        borderRadius: '9999px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        color: '#cbd5e1',
                        border: '1px solid rgba(255, 255, 255, 0.12)'
                      }}
                    >
                      {program.badge}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#f59e0b', fontWeight: 600, marginBottom: '0.4rem' }}>
                    {program.faculty}
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.75rem' }}>
                    {program.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {program.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Clock size={16} color="#64748b" />
                      <span><strong>Duration:</strong> {program.duration}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Award size={16} color="#64748b" />
                      <span><strong>Degree:</strong> {program.degree}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.07)' }}>
                  <Link
                    to="/signup"
                    className="btn btn-secondary"
                    style={{
                      width: '100%',
                      justifyContent: 'space-between',
                      fontSize: '0.9rem',
                      padding: '0.65rem 1.1rem'
                    }}
                  >
                    <span>Apply for this Program</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
