import React from 'react';
import { Calendar, ArrowUpRight, Megaphone, BellRing, MapPin } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    category: 'Research Milestone',
    title: 'Imperial Quantum Lab Achieves Room-Temperature Coherence Breakthrough',
    date: 'Sep 24, 2026',
    readTime: '4 min read',
    summary: 'Faculty researchers publish peer-reviewed results on silicon photonic quantum repeaters in Nature Physics.'
  },
  {
    id: 2,
    category: 'Admissions & Scholarships',
    title: '$10M Global Presidential STEM Fellowship Announced for 2027 Cohort',
    date: 'Sep 20, 2026',
    readTime: '3 min read',
    summary: 'Full tuition and living stipend grants opened for outstanding international students pursuing tech degrees.'
  },
  {
    id: 3,
    category: 'Campus Event',
    title: 'Annual Global Artificial Intelligence & Ethics Summit 2026',
    date: 'Oct 12-14, 2026',
    readTime: 'Keynote & Panels',
    summary: 'Gathering tech CEOs, university provosts, and international policy makers at the Imperial Auditorium.'
  }
];

export default function NewsEvents() {
  return (
    <section id="research" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
          <div>
            <div className="badge-pill" style={{ marginBottom: '0.75rem' }}>
              <Megaphone size={14} />
              <span>Campus Dispatch</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)' }}>
              Latest News & <span className="gradient-text">Upcoming Events</span>
            </h2>
          </div>
          <a
            href="#admissions"
            className="btn btn-secondary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <span>View All Announcements</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid-3">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.25rem'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#f59e0b',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {item.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', color: '#64748b' }}>
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.8rem', lineHeight: 1.4 }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6 }}>
                  {item.summary}
                </p>
              </div>

              <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                <span style={{ color: '#64748b' }}>{item.readTime}</span>
                <span style={{ color: '#38bdf8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  Read Article <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
