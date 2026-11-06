import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Phone,
  MapPin, 
  CheckCircle2, 
  FileText,
  ExternalLink 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, PROJECTS, TIMELINE } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    window.print();
  };

  const handleDownloadOriginal = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: 'rgba(5, 5, 10, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '92vh',
          backgroundColor: '#ffffff',
          color: '#1e293b',
          borderRadius: '16px',
          overflowY: 'auto',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
        className="resume-container"
      >
        {/* Modal Top Control Bar (Hidden during print) */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            background: '#0f172a',
            color: '#ffffff',
            padding: '14px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 10,
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
          className="no-print"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', fontWeight: 600 }}>
            <FileText size={18} style={{ color: 'var(--primary-accent)' }} />
            <span>Ansaf M — Curriculum Vitae</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Direct Original PDF Download */}
            <a
              href="/Ansaf_Resume.pdf"
              download="Ansaf_M_Resume.pdf"
              onClick={handleDownloadOriginal}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '8px',
                backgroundColor: 'var(--primary-accent)',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '0.84rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
              title="Download original uploaded resume PDF"
            >
              <Download size={15} />
              <span>Download Original PDF</span>
            </a>

            {/* Print/Save ATS button */}
            <button
              onClick={handlePrint}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                fontSize: '0.84rem',
                fontWeight: 500,
                cursor: 'pointer'
              }}
              title="Print ATS Formatted Resume"
            >
              <Printer size={15} />
              <span>Print ATS</span>
            </button>

            <button
              onClick={onClose}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable ATS Resume Document Body */}
        <div style={{ padding: '40px 48px' }} className="print-area">
          {/* Header */}
          <div style={{ borderBottom: '2px solid #0f172a', paddingBottom: '18px', marginBottom: '22px' }}>
            <h1 style={{ fontSize: '2.3rem', color: '#0f172a', fontWeight: 800, marginBottom: '4px', letterSpacing: '0.04em' }}>
              ANSAF M
            </h1>
            <h2 style={{ fontSize: '1.15rem', color: '#475569', fontWeight: 600, marginBottom: '12px', letterSpacing: '0.06em' }}>
              FULL STACK DEVELOPER
            </h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', fontSize: '0.86rem', color: '#475569', fontWeight: 500 }}>
              <a href="tel:9042108322" style={{ color: 'inherit', textDecoration: 'none' }}>📞 9042108322</a>
              <span>•</span>
              <a href="https://wa.me/919042108322" target="_blank" rel="noreferrer" style={{ color: '#059669', textDecoration: 'none', fontWeight: 600 }}>💬 WhatsApp</a>
              <span>•</span>
              <a href="mailto:ansafmuadh@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>✉️ ansafmuadh@gmail.com</a>
              <span>•</span>
              <a href="https://github.com/ansaf-m" target="_blank" rel="noreferrer" style={{ color: '#0f172a', textDecoration: 'underline', fontWeight: 600 }}>🔗 github.com/ansaf-m</a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" style={{ color: '#0f172a', textDecoration: 'underline', fontWeight: 600 }}>💼 LinkedIn</a>
              <span>•</span>
              <span>📍 Kanniyakumari, Tamil Nadu</span>
            </div>
          </div>

          {/* About Me */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '0.98rem', textTransform: 'uppercase', color: '#0f172a', letterSpacing: '0.06em', borderBottom: '1px solid #e2e8f0', paddingBottom: '6px', marginBottom: '10px', fontWeight: 700 }}>
              ABOUT ME
            </h3>
            <p style={{ fontSize: '0.92rem', lineHeight: '1.68', color: '#334155' }}>
              Full Stack Developer proficient in React.js, Java, Spring Boot, and Node.js, with experience developing responsive web applications, RESTful APIs, secure authentication, and database-driven solutions. Skilled in building scalable and maintainable applications following modern software development practices.
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '0.98rem', textTransform: 'uppercase', color: '#0f172a', letterSpacing: '0.06em', borderBottom: '1px solid #e2e8f0', paddingBottom: '6px', marginBottom: '10px', fontWeight: 700 }}>
              EDUCATION
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
              <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: '#0f172a' }}>
                Bachelor of Engineering in Computer Science
              </h4>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>2022 – 2026</span>
            </div>
            <div style={{ fontSize: '0.9rem', color: '#475569' }}>
              Mar Ephraem College of Engineering and Technology
            </div>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '0.98rem', textTransform: 'uppercase', color: '#0f172a', letterSpacing: '0.06em', borderBottom: '1px solid #e2e8f0', paddingBottom: '6px', marginBottom: '10px', fontWeight: 700 }}>
              TECHNICAL SKILLS
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem', color: '#334155' }}>
              <div><strong>Frontend:</strong> React JS, HTML, CSS, JavaScript</div>
              <div><strong>Backend:</strong> Spring Boot Java, REST API, Node.js, Express.js</div>
              <div><strong>Database:</strong> MySQL, PostgreSQL, MongoDB</div>
              <div><strong>Programming Languages:</strong> Java, Python</div>
              <div><strong>Tools:</strong> GitHub, Postman, Docker</div>
            </div>
          </div>

          {/* Internship */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '0.98rem', textTransform: 'uppercase', color: '#0f172a', letterSpacing: '0.06em', borderBottom: '1px solid #e2e8f0', paddingBottom: '6px', marginBottom: '10px', fontWeight: 700 }}>
              INTERNSHIP
            </h3>
            <div style={{ marginBottom: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: '#0f172a' }}>
                  Full Stack Developer Intern — AK Infopark
                </h4>
              </div>
              <ul style={{ paddingLeft: '20px', marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.9rem', color: '#334155' }}>
                <li>Gained in-depth experience in front-end development and exposure to back-end technologies.</li>
                <li>Worked on web projects, contributing to design, development, and implementation of user-friendly interfaces.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '0.98rem', textTransform: 'uppercase', color: '#0f172a', letterSpacing: '0.06em', borderBottom: '1px solid #e2e8f0', paddingBottom: '6px', marginBottom: '10px', fontWeight: 700 }}>
              PROJECTS
            </h3>

            {/* Project 1 */}
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: '#0f172a', marginBottom: '2px' }}>
                E-Commerce Clothing Management Platform
              </h4>
              <div style={{ fontSize: '0.84rem', color: '#475569', fontStyle: 'italic', marginBottom: '6px' }}>
                Tech Stack: React.js, Vite, Java, Spring Boot, Spring Security, JWT, MySQL, JPA/Hibernate, REST API, Axios
              </div>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.9rem', color: '#334155' }}>
                <li>Developed a full-stack clothing catalog and inventory management platform using React.js, Spring Boot, and MySQL.</li>
                <li>Implemented JWT-based authentication, protected routes, and role-based API authorization using Spring Security.</li>
                <li>Developed RESTful APIs for products, categories, inventory, sizes, and image management using Spring Data JPA.</li>
                <li>Built an admin dashboard for product/category management, inventory control, image uploads, and customer enquiry/order integration.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: '#0f172a', marginBottom: '2px' }}>
                Movie Search & Favorites Management System
              </h4>
              <div style={{ fontSize: '0.84rem', color: '#475569', fontStyle: 'italic', marginBottom: '6px' }}>
                Tech Stack: React.js, JavaScript, HTML, CSS, REST API
              </div>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.9rem', color: '#334155' }}>
                <li>Developed a responsive movie discovery platform using React.js and the TMDB REST API for real-time movie data.</li>
                <li>Built reusable, modular React components with dynamic search and filtering functionality.</li>
                <li>Implemented a favorites management feature to allow users to save and access selected movies.</li>
                <li>Designed a clean, responsive, and user-friendly interface optimized for different screen sizes.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
                <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: '#0f172a' }}>
                  SAYF STORE — 3D E-Commerce Platform
                </h4>
                <a href="https://sayfstore.in" target="_blank" rel="noreferrer" style={{ fontSize: '0.82rem', color: '#2563eb', fontWeight: 600 }}>sayfstore.in ↗</a>
              </div>
              <div style={{ fontSize: '0.84rem', color: '#475569', fontStyle: 'italic', marginBottom: '6px' }}>
                Tech Stack: React.js, Three.js, JavaScript ES6+, Modern CSS3, Vercel, GoDaddy DNS
              </div>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.9rem', color: '#334155' }}>
                <li>Designed and developed the complete modern e-commerce storefront for SAYF Store beard oil brand.</li>
                <li>Created an interactive 3D rotating product presentation utilizing Three.js showcasing product benefits and ingredients.</li>
                <li>Implemented dynamic shopping cart with quantity selection and direct WhatsApp order dispatch to the store owner.</li>
                <li>Configured custom GoDaddy domain integration and deployed the live website using Vercel.</li>
              </ul>
            </div>

            {/* Project 4 */}
            <div style={{ marginBottom: '14px' }}>
              <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: '#0f172a', marginBottom: '2px' }}>
                Smart Expense Classifier — AI-Powered Expense Tracker
              </h4>
              <div style={{ fontSize: '0.84rem', color: '#475569', fontStyle: 'italic', marginBottom: '6px' }}>
                Tech Stack: React.js, Python, Machine Learning, JavaScript ES6+, Chart.js, REST APIs, CSS3
              </div>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.9rem', color: '#334155' }}>
                <li>Engineered an intelligent expense management system featuring automated machine learning-based transaction categorization.</li>
                <li>Implemented monthly budget management with real-time budget utilization progress tracking and spending limits.</li>
                <li>Built interactive financial analytics dashboard featuring dynamic pie chart visualizations across expense categories.</li>
                <li>Developed complete expense list management with inline edit, deletion, and date-filtered transaction history.</li>
              </ul>
            </div>
          </div>

          {/* Certification */}
          <div style={{ marginBottom: '12px' }}>
            <h3 style={{ fontSize: '0.98rem', textTransform: 'uppercase', color: '#0f172a', letterSpacing: '0.06em', borderBottom: '1px solid #e2e8f0', paddingBottom: '6px', marginBottom: '10px', fontWeight: 700 }}>
              CERTIFICATION
            </h3>
            <div>
              <h4 style={{ fontSize: '0.96rem', fontWeight: 700, color: '#0f172a' }}>
                Java Full Stack Developer Certification – Telusko
              </h4>
              <ul style={{ paddingLeft: '20px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.9rem', color: '#334155' }}>
                <li>Completed a comprehensive Java Full Stack Developer certification program covering Java, Spring Boot, MySQL, Postman, Docker, and REST API.</li>
                <li>Gained hands-on, project-based experience by building working full-stack projects covering the complete development workflow.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .resume-container, .resume-container * {
            visibility: visible;
          }
          .resume-container {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            box-shadow: none !important;
          }
          .no-print {
            display: none !important;
          }
          .print-area {
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};
