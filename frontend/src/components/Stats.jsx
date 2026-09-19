import React from 'react';
import {
  GraduationCap,
  Briefcase,
  FlaskConical,
  Globe2,
  Building2,
  Trophy
} from 'lucide-react';

const statsData = [
  {
    icon: GraduationCap,
    value: '28,500+',
    label: 'Enrolled Scholars',
    subtext: 'From over 115 countries worldwide',
    color: '#f59e0b'
  },
  {
    icon: Trophy,
    value: '98.4%',
    label: 'Career Placement',
    subtext: 'Within 6 months of graduation',
    color: '#10b981'
  },
  {
    icon: FlaskConical,
    value: '$140M+',
    label: 'Annual Research Grants',
    subtext: 'Funded AI, Quantum & Biotech labs',
    color: '#38bdf8'
  },
  {
    icon: Globe2,
    value: '450+',
    label: 'Global University Alliances',
    subtext: 'Dual-degree exchange in 42 nations',
    color: '#a855f7'
  }
];

export default function Stats() {
  return (
    <section style={{ padding: '40px 0', position: 'relative', zIndex: 2 }}>
      <div className="container">
        <div className="grid-4">
          {statsData.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Accent top line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, ${stat.color}, transparent)`
                  }}
                />

                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `${stat.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: stat.color,
                    marginBottom: '0.5rem'
                  }}
                >
                  <IconComponent size={24} />
                </div>

                <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  {stat.value}
                </div>

                <div style={{ fontSize: '1rem', fontWeight: '700', color: '#e2e8f0' }}>
                  {stat.label}
                </div>

                <div style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.4 }}>
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
