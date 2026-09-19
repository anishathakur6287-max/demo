import React from 'react';
import {
  Sparkles,
  Atom,
  Binary,
  Compass,
  Building,
  GraduationCap,
  ShieldCheck,
  CheckCircle,
  Network
} from 'lucide-react';

const featuresList = [
  {
    icon: Binary,
    title: 'Supercomputing & Quantum Tech Hub',
    description: 'Direct student access to petascale GPU compute clusters and proprietary quantum simulation testbeds.',
    color: '#38bdf8'
  },
  {
    icon: Atom,
    title: '12 Nobel & Fields Medalist Faculty',
    description: 'Learn directly from pioneer researchers, patent holders, and leading thought architects in small seminars.',
    color: '#f59e0b'
  },
  {
    icon: Building,
    title: '500-Acre Ultra-Smart Eco Campus',
    description: 'Zero-carbon footprint campus equipped with IoT smart labs, high-tech residential dorms, and athletic complexes.',
    color: '#10b981'
  },
  {
    icon: Network,
    title: 'Venture Incubation & Angel Capital',
    description: '$25M student startup fund providing seed investment, IP legal assistance, and Silicon Valley mentor networks.',
    color: '#ec4899'
  },
  {
    icon: GraduationCap,
    title: 'Global Dual-Degree Exchanges',
    description: 'Study across our sister campuses in London, Tokyo, Zurich, and Singapore with seamless credit transfer.',
    color: '#8b5cf6'
  },
  {
    icon: ShieldCheck,
    title: 'Lifetime Career Placement Network',
    description: 'Dedicated career advisory with 1-on-1 interview training and fast-track hiring pipelines with Fortune 100 firms.',
    color: '#eab308'
  }
];

export default function CampusFeatures() {
  return (
    <section id="campus-life" style={{ padding: '90px 0', position: 'relative', background: 'rgba(10, 19, 36, 0.4)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>Why Jawaharlal Nehru University</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>
            An Unrivaled Campus Built for <span className="gradient-text">Discovery & Ambition</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94a3b8' }}>
            Immerse yourself in an inspiring environment designed to cultivate leadership, collaborative research, and transformational innovation.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid-3">
          {featuresList.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2.2rem 1.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  border: '1px solid rgba(255, 255, 255, 0.07)'
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: `${feat.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: feat.color,
                    border: `1px solid ${feat.color}30`
                  }}
                >
                  <IconComp size={26} />
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc' }}>
                  {feat.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6 }}>
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
