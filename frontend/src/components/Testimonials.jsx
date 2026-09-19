import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';

const testimonialsData = [
  {
    name: 'Elena Rostova',
    role: 'Lead AI Research Scientist, DeepMind',
    degree: 'B.S. in Computer Science & Robotics, Class of 2022',
    text: 'Jawaharlal Nehru University gave me access to deep research mentorship and vibrant academic discourse that directly shaped my career. The faculty encouraged independent analytical research at the highest level.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80'
  },
  {
    name: 'Marcus Vance',
    role: 'Founder & CEO, Aether Aerospace',
    degree: 'M.S. in Aerospace Engineering, Class of 2020',
    text: 'The university venture fund provided our initial seed capital right out of our final capstone project. Today we have launched three micro-satellites into low Earth orbit.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80'
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Medical Resident, Boston Health',
    degree: 'Doctor of Medicine (M.D.), Class of 2021',
    text: 'The blend of clinical bedside training and biotechnology research gave me unmatched preparation for surgical fellowship. The collaborative spirit here is unforgettable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80'
  }
];

export default function Testimonials() {
  return (
    <section style={{ padding: '90px 0', position: 'relative', background: 'rgba(10, 19, 36, 0.4)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>Alumni Voices</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '1rem' }}>
            Stories of <span className="gradient-text">Impact & Success</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94a3b8' }}>
            Discover how Jawaharlal Nehru University graduates are transforming academia, public policy, science, and global industries.
          </p>
        </div>

        <div className="grid-3">
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2.2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.5rem',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '1.25rem' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                <p style={{ fontSize: '0.98rem', color: '#cbd5e1', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{item.text}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.07)' }}>
                <img
                  src={item.avatar}
                  alt={item.name}
                  style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #f59e0b' }}
                />
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc' }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#f59e0b', fontWeight: 600 }}>
                    {item.role}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    {item.degree}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
