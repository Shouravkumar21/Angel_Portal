import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const HERO_SLIDES = [
  {
    id: 'hero-1',
    image: '/assets/hero/hero-1.jpg',
    subtitle: 'We are eager to give you the best education',
    title: 'Welcome to Ascencia Malta',
    cta: 'Discover our courses',
  },
  {
    id: 'hero-2',
    image: '/assets/hero/hero-2.jpg',
    subtitle: 'Shape Your Future with Innovation',
    title: 'The Leader in Business Education',
    cta: 'Discover our courses',
  },
  {
    id: 'hero-3',
    image: '/assets/hero/hero-3.jpg',
    subtitle: 'Experience Education in the Heart of the Mediterranean',
    title: 'Your Career Starts in Malta',
    cta: 'Discover our courses',
  },
  {
    id: 'hero-4',
    image: '/assets/hero/hero-4.jpg',
    subtitle: 'Achieve Your Dreams and Beyond',
    title: 'Excellence in Every Step',
    cta: 'Discover our courses',
  },
];

// Reordered to match screenshot: Bachelor, Diploma, Award, Postgraduate...
const PROGRAMMES = [
  { title: 'Bachelor degrees', path: 'https://www.ascencia-business-school.mt/courses/bachelor-degrees/', image: '/assets/ascencia/4.jpg' },
  { title: 'Diploma programmes', path: 'https://www.ascencia-business-school.mt/courses/diploma-programmes/', image: '/assets/ascencia/8.jpg' },
  { title: 'Award certificates', path: 'https://www.ascencia-business-school.mt/courses/award-certificates/', image: '/assets/ascencia/Icef-brazil.jpg' },
  { title: 'Postgraduate programmes', path: 'https://www.ascencia-business-school.mt/courses/postgraduate-programmes/', image: '/assets/ascencia/ascencia-malta-banner-3.jpg' },
  { title: 'MBA degrees', path: 'https://www.ascencia-business-school.mt/formations/mba-degrees/', image: '/assets/ascencia/ascencia-malta-banner.jpg' },
  { title: 'DBA degrees', path: 'https://www.ascencia-business-school.mt/formations/dba-degrees/', image: '/assets/ascencia/ascencia-paris-campus.jpg' },
  { title: 'Masters degrees', path: 'https://www.ascencia-business-school.mt/courses/masters-degrees/', image: '/assets/ascencia/ascencia-valencia-campus.jpg' },
];

const WHY_FLORIANA = [
  'Because of History',
  'Architecture',
  'Public gardens',
  'Music festivals',
  'Its authenticity',
];

const CAMPUSES = [
  {
    name: 'Paris',
    desc: 'Ascencia Business School and its international programs are pleased to welcome you on its Paris campus.',
    link: 'https://www.ascencia-business-school.com/',
    image: '/assets/ascencia/ascencia-paris-campus.jpg',
  },
  {
    name: 'Valencia',
    desc: 'Ascencia Business School and its international programs are pleased to welcome you on its Valencia campus',
    link: 'https://www.ascencia-business-school.es/',
    image: '/assets/ascencia/ascencia-valencia-campus.jpg',
  },
];

const NEWS_ITEMS = [
  {
    date: '02/02/2026',
    title: 'World Cancer Day – Cancer Awareness at Ascencia Malta 💜',
    excerpt: 'Ascencia Malta February 2026, About Puttinu Cares:Puttinu Cares is a',
    link: 'https://www.ascencia-business-school.mt/blog/world-cancer-day-cancer-awareness-at-ascencia-malta/',
    image: '/assets/ascencia/8.jpg',
  },
  {
    date: '02/02/2026',
    title: 'A New National Benchmark and Historic Achievement 🎉',
    excerpt: 'Ascencia Malta February 2026, A new national benchmark has been',
    link: 'https://www.ascencia-business-school.mt/blog/a-new-national-benchmark-and-historic-achievement/',
    image: '/assets/ascencia/4.jpg',
  },
  {
    date: '20/09/2025',
    title: 'Ascencia Malta to Present at ICEF Rio de Janeiro — Showcasing Malta as a Premier Study Destination',
    excerpt: 'Ascencia Malta September 2025, Ascencia Malta is pleased to announce',
    link: 'https://www.ascencia-business-school.mt/blog/ascencia-malta-to-present-at-icef-rio-de-janeiro-showcasing-malta-as-a-premier-study-destination/',
    image: '/assets/ascencia/Icef-brazil.jpg',
  },
];

const PARTNER_LOGOS = [
  { name: 'Nimala', logo: '/assets/ascencia/download.jpg' },
  { name: 'Auro University', logo: '/assets/ascencia/download.png' },
  { name: 'Parul University', logo: '/assets/ascencia/Untitled-design.png' },
  { name: 'CGC', logo: '/assets/ascencia/CGC-Jhanjeri-Logo.jpg' },
  { name: 'AMTE', logo: '/assets/ascencia/amte-min.png' },
  { name: 'JRNRVU', logo: '/assets/ascencia/JRNRVU-LOGO-302x272-1.jpg' },
  { name: 'ITBS', logo: '/assets/ascencia/ITBS_logo_resized.jpg' },
  { name: 'Suptech', logo: '/assets/ascencia/logo-suptech4.png' },
];

const ACCREDITATIONS = [
  { name: 'MQF', logo: '/assets/ascencia/mqf-logo.png' },
  { name: 'ELT Council', logo: '/assets/ascencia/elt-council.png' },
  { name: 'ATHE', logo: '/assets/ascencia/athe-logo.png' },
  { name: 'European Qualifications Framework', logo: '/assets/ascencia/EQF-PICTURE_rdax_250x91.jpg' },
  { name: 'MFHEA', logo: '/assets/ascencia/mfhea-logo.png' },
  { name: 'AACSB', logo: '/assets/ascencia/aacsb-member-logo.png' },
  { name: 'AMTE', logo: '/assets/ascencia/amte-min.png' },
  { name: 'BGA', logo: '/assets/ascencia/bga-member-logo.jpg' },
];

const COLLABORATIONS = [
  {
    name: 'Edusign',
    logo: '/assets/ascencia/edusign-logo.png',
    href: 'https://www.edusign.fr/',
  },
  {
    name: 'The Malta Chamber',
    logo: '/assets/ascencia/the-malta-chamber-logo.png',
    href: 'https://www.maltachamber.org.mt/',
  },
  {
    name: 'Get Qualified',
    logo: '/assets/ascencia/get-qualified-logo.png',
    href: 'https://www.maltaenterprise.com/support/get-qualified-2017-2023',
  },
  {
    name: 'Erasmus+',
    logo: '/assets/ascencia/erasmus-plus-logo.png',
    href: 'https://erasmus-plus.ec.europa.eu/',
  },
];

const HERO_AUTOPLAY_MS = 6000;
const PROGRAMME_AUTOPLAY_MS = 4000;
const PARTNER_AUTOPLAY_MS = 3500;

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [programmeIndex, setProgrammeIndex] = useState(0);
  const [visibleProgrammes, setVisibleProgrammes] = useState(4);
  const [campusIndex, setCampusIndex] = useState(0);
  const [showCookieModal, setShowCookieModal] = useState(false);
  const programmeTrackRef = useRef(null);
  const whySectionRef = useRef(null);

  // Hero auto-play (matches live delay 6000ms)
  useEffect(() => {
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % HERO_SLIDES.length), HERO_AUTOPLAY_MS);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const updateVisibleProgrammes = () => {
      if (window.innerWidth <= 768) {
        setVisibleProgrammes(1);
      } else if (window.innerWidth <= 1024) {
        setVisibleProgrammes(2);
      } else {
        setVisibleProgrammes(4);
      }
    };

    updateVisibleProgrammes();
    window.addEventListener('resize', updateVisibleProgrammes);
    return () => window.removeEventListener('resize', updateVisibleProgrammes);
  }, []);

  // No-op for partner data

  // Reveal sections on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); 
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Why Floriana motion effects
  useEffect(() => {
    const section = whySectionRef.current;
    if (!section) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      section.style.setProperty('--why-bg-shift', '0px');
      section.style.setProperty('--why-visual-shift', '0px');
      section.style.setProperty('--why-content-shift', '0px');
      return undefined;
    }

    let ticking = false;
    const updateParallax = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const normalizedOffset = (viewportCenter - sectionCenter) / viewportHeight;

      const bgShiftX = normalizedOffset * -44;
      const visualShiftY = normalizedOffset * -36;
      const contentShiftY = normalizedOffset * -40;

      section.style.setProperty('--why-bg-shift', `${bgShiftX.toFixed(2)}px`);
      section.style.setProperty('--why-visual-shift', `${visualShiftY.toFixed(2)}px`);
      section.style.setProperty('--why-content-shift', `${contentShiftY.toFixed(2)}px`);
    };

    const queueUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateParallax();
        ticking = false;
      });
    };

    updateParallax();
    window.addEventListener('scroll', queueUpdate, { passive: true });
    window.addEventListener('resize', queueUpdate);

    return () => {
      window.removeEventListener('scroll', queueUpdate);
      window.removeEventListener('resize', queueUpdate);
    };
  }, []);

  const maxProgrammeIndex = Math.max(0, PROGRAMMES.length - visibleProgrammes);

  // Programmes auto-play
  useEffect(() => {
    const t = setInterval(() => {
      setProgrammeIndex((prev) => {
        const next = prev + 1;
        return next > maxProgrammeIndex ? 0 : next;
      });
    }, PROGRAMME_AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [maxProgrammeIndex]);

  const goToProgramme = (dir) => {
    setProgrammeIndex((i) => {
      const next = i + dir;
      if (next < 0) return maxProgrammeIndex;
      if (next > maxProgrammeIndex) return 0;
      return next;
    });
  };

  const programmeOffset = programmeIndex * (100 / PROGRAMMES.length);
  const programmeTrackWidth = (PROGRAMMES.length / visibleProgrammes) * 100;
  const programmeCardBasis = 100 / PROGRAMMES.length;
  const programmePages = maxProgrammeIndex + 1;

  return (
    <main className="page-home">
      {/* Hero */}
      <section className="hero" aria-label="Hero">
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero-slide ${i === heroIndex ? 'hero-slide-active' : ''}`}
            style={{
              backgroundImage: `url("${slide.image}")`,
            }}
          />
        ))}
        <div className="hero-overlay" />
        <div className="hero-copy-layer">
          <div className="container">
            <div className="hero-content" key={heroIndex}>
              <p className="hero-subtitle">{HERO_SLIDES[heroIndex].subtitle}</p>
              <h1 className="hero-title">{HERO_SLIDES[heroIndex].title}</h1>
              <button 
                type="button" 
                className="hero-cta"
                onClick={() => {
                  document.getElementById('programmes')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="hero-cta-text">{HERO_SLIDES[heroIndex].cta}</span>
                <span className="hero-cta-icon" aria-hidden="true"><i className="fa-solid fa-chevron-right"></i></span>
              </button>
            </div>
          </div>
        </div>

        <div className="hero-indicators">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`hero-dot ${i === heroIndex ? 'active' : ''}`}
              onClick={() => setHeroIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Programmes / Courses Carousel */}
      <section className="section programmes-section reveal-on-scroll" id="programmes">
        <div className="container">
          <h2 className="section-title programmes-heading">Find the best programme for yourself</h2>
          <p className="section-intro">
            Because each training course corresponds to a personal ambition, all our students receive individual attention.
            The success of each student is our priority. Our teams accompany each student in the success of his project.
          </p>
          <div className="programmes-carousel">
            <button type="button" className="carousel-arrow carousel-prev" aria-label="Previous" onClick={() => goToProgramme(-1)} />
            <div className="programmes-track-wrap" ref={programmeTrackRef}>
              <div
                className="programmes-track"
                style={{
                  width: `${programmeTrackWidth}%`,
                  transform: `translateX(-${programmeOffset}%)`,
                }}
              >
                {PROGRAMMES.map((p) => (
                  <div
                    key={p.title}
                    className="programme-card-wrapper"
                    style={{ flex: `0 0 ${programmeCardBasis}%` }}
                  >
                    <div 
                      className="programme-card"
                      style={{ backgroundImage: `url("${p.image}")` }}
                    >
                      <div className="programme-card-overlay" />
                      <div className="programme-card-content">
                        <span className="programme-label">Courses</span>
                        <h3 className="programme-title">{p.title}</h3>
                        <button type="button" className="programme-link" aria-label={`Open ${p.title}`}>
                          <span><i className="fa-solid fa-play"></i></span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button type="button" className="carousel-arrow carousel-next" aria-label="Next" onClick={() => goToProgramme(1)} />
          </div>
          <div className="programmes-dots" role="tablist">
            {Array.from({ length: programmePages }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === programmeIndex}
                className={`programme-dot ${i === programmeIndex ? 'active' : ''}`}
                onClick={() => setProgrammeIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Ascencia Malta - Upgraded */}
      <section className="section about-premium reveal-on-scroll">
        <div className="container">
          <div className="about-premium-grid">
            <div className="about-premium-content">
              <span className="about-kicker">Est. in Malta</span>
              <h2 className="about-heading">
                About <span className="about-heading-accent">Ascencia Malta</span>
              </h2>
              <div className="about-text-wrapper">
                <p>
                  Ascencia Malta is located in Floriana – right on the doorstep of Valletta. Floriana was meant to be a suburb of Valletta,
                  but it developed to be a town on its own. A short walk separates the two towns. It isn't easy to understand where Floriana
                  finishes and Valletta starts, but the iconic entry to the capital is part of Floriana.
                </p>
                <div className="about-highlight-box">
                  <p>
                    "Floriana sits in the very heart of the Maltese islands... all the roads lead to Floriana."
                  </p>
                </div>
                <p>
                  Meaning that all the buses will bring you here as well. We are dedicated to providing an environment where tradition meets future-proof education.
                </p>
              </div>
              <Link to="/ascencia-malta" className="about-premium-btn">
                <span>Explore Our Heritage</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="about-premium-visual">
              <div className="about-main-img-container">
                <img src="/assets/ascencia/ascencia-malta-banner-4.jpg" alt="Ascencia Malta Campus" className="about-main-img" />
                <div className="about-accent-frame" />
                <div className="about-stat-card">
                  <span className="stat-number">#1</span>
                  <span className="stat-desc">Business Hub in Malta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section ref={whySectionRef} className="section why-location reveal-on-scroll">
        <div className="why-v2-backdrop-text" aria-hidden="true">MALTA</div>
        <div className="container">
          <div className="why-v2-grid">
            <div className="why-v2-visual">
              <div className="why-v3-blob-bg" />
              <div className="why-v2-image-container">
                <img src="/assets/ascencia/malta-ascencia-bs.jpg" alt="Floriana, Malta" className="why-v2-main-image" />
                <div className="why-v2-image-overlay" />
                <div className="why-v2-floating-badge">
                  <span className="badge-number">450+</span>
                  <span className="badge-text">Years of History</span>
                </div>
              </div>
              <div className="why-v2-decoration-dots" />
            </div>
            
            <div className="why-v2-content">
              <span className="why-v2-kicker">Discover the location</span>
              <h2 className="why-v2-title">Why Floriana?</h2>
              <p className="why-v2-description">
                Experience education in a town that blends historic majesty with modern Mediterranean life.
              </p>
              
              <div className="why-v2-list">
                {WHY_FLORIANA.map((item, idx) => (
                  <div 
                    key={item} 
                    className="why-v2-item" 
                    style={{ '--item-index': idx }}
                  >
                    <div className="why-v2-item-icon">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="why-v2-item-text-wrap">
                      <span className="why-v2-item-text">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="why-v2-footer">
                <p>And because there is a lot more… But you have to discover!</p>
                <button 
                  className="why-v2-explore-btn"
                  onClick={() => {
                    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Explore Malta <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome / Director */}
      <section className="section welcome-section reveal-on-scroll">
        <div className="container welcome-grid">
          <div className="welcome-content">
            <h2 className="welcome-heading">Business School!</h2>
            <p className="welcome-text">
              As the Director of Ascencia Malta Business and English Language School, it is an honour and a pleasure to welcome you
              dear students and faculty to our beautiful campus in Floriana, Malta. I am honoured to spearhead a school that is built
              on a solid foundation of academic integrity and excellence paired with an inherent commitment to learn, teach, innovate and
              champion knowledge and business success. Our academic teams have been tasked with the responsibility of mentoring some of
              the brightest minds of this generation. Watching our students evolve into trailblazers with achievements in both professional
              and personal spheres fuels our commitment to offering practical, and business-relevant education. Our mission is to ensure that
              after completing their studies with us, our students are able to step right into the world of work and excel. We understand
              that education is a vital tool in helping us discover our paths, and so I invite you all to join us at the heart of the
              Mediterranean to start your journey of self-discovery. Your career starts here!
            </p>
          </div>
          <div className="welcome-image">
            <img
              src="/assets/ascencia/Tess-Giordmaina-Ascencia-Malta.jpg"
              alt="Dr. Tess Giordmaina"
              className="welcome-photo"
            />
            <p className="welcome-signature">
              <strong>Dr. Tess Giordmaina</strong><br />
              Director of Ascencia Malta
            </p>
          </div>
        </div>
      </section>

      {/* Our Campuses Slider */}
      <section className="section campuses-section reveal-on-scroll">
        <div className="container">
          <div className="campuses-layout">
            <aside className="campuses-nav" role="tablist" aria-label="Campus selector">
              {CAMPUSES.map((c, i) => (
                <button
                  key={c.name}
                  type="button"
                  role="tab"
                  aria-selected={i === campusIndex}
                  className={`campus-tab ${i === campusIndex ? 'active' : ''}`}
                  onClick={() => setCampusIndex(i)}
                >
                  {c.name}
                </button>
              ))}
            </aside>

            <div className="campuses-panels">
              {CAMPUSES.map((c, i) => (
                <article
                  key={c.name}
                  className={`campus-panel ${i === campusIndex ? 'active' : ''}`}
                  aria-hidden={i !== campusIndex}
                >
                  <img src={c.image} alt={`${c.name} Campus`} className="campus-panel-image" />
                  <div className="campus-panel-body">
                    <div>
                      <h4>{c.name} Campus</h4>
                      <p>{c.desc}</p>
                    </div>
                    <button type="button" className="campus-go" aria-label={`Visit ${c.name} campus`}>
                      <i className="fa-solid fa-chevron-right"></i>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Network */}
      <section className="section partners-network reveal-on-scroll">
        <div className="partners-v3-bg-layer">
          <div className="v3-grid-lines" />
          <div className="v3-glow-orb" />
        </div>
        
        <div className="container">
          <div className="partners-v3-main-grid">
            <div className="partners-v3-info">
              <span className="v3-kicker">Global Network</span>
              <h2 className="v3-title">We are Proudly <span>Partnered</span></h2>
              <p className="v3-desc">
                Ascencia Malta collaborates with world-renowned institutions to provide our students with a truly international perspective and industry-leading opportunities.
              </p>
              <div className="v3-stat-row">
                <div className="v3-stat-item">
                  <span className="v3-stat-num">25+</span>
                  <span className="v3-stat-label">Global Partners</span>
                </div>
                <div className="v3-stat-item">
                  <span className="v3-stat-num">10+</span>
                  <span className="v3-stat-label">Countries Reach</span>
                </div>
              </div>
            </div>

            <div className="partners-v3-ticker-wrap">
              <div className="partners-v3-ticker">
                <div className="v3-ticker-track">
                  {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((p, idx) => (
                    <div key={`${p.name}-${idx}`} className="v3-partner-card">
                      <div className="v3-card-inner">
                        <img src={p.logo} alt={p.name} className="v3-partner-logo" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="v3-ticker-track" aria-hidden="true">
                  {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((p, idx) => (
                    <div key={`${p.name}-duplicate-${idx}`} className="v3-partner-card">
                      <div className="v3-card-inner">
                        <img src={p.logo} alt={p.name} className="v3-partner-logo" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="v3-ticker-overlay-top" />
              <div className="v3-ticker-overlay-bottom" />
            </div>
          </div>
        </div>
      </section>

      {/* Accredited by */}
      <section className="section accredited-section reveal-on-scroll">
        <div className="container accredited-layout">
          <h2 className="accredited-title">Ascencia Malta is accredited by:</h2>
          <div className="accredited-logos">
            {ACCREDITATIONS.map((item) => (
              <div key={item.name} className="accredited-item">
                {item.logo ? (
                  <img src={item.logo} alt={item.name} className="accredited-logo" />
                ) : (
                  <div className="accredited-text-badge">{item.textBadge}</div>
                )}
              </div>
              ))}
          </div>
        </div>
      </section>

      {/* In collaboration with */}
      <section className="section collaboration-section reveal-on-scroll">
        <div className="container">
          <h2 className="collaboration-title">In collaboration with:</h2>
          <div className="collaboration-logos">
            {COLLABORATIONS.map((item) => (
              <div key={item.name} className="collab-logo" aria-label={item.name} style={{ cursor: 'pointer' }}>
                <img src={item.logo} alt={item.name} className="collab-logo-image" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="section news-section reveal-on-scroll">
        <div className="container">
          <p className="news-label">NEWS</p>
          <h2 className="section-title news-heading">Discover our news & events</h2>
          <div className="news-grid">
            {NEWS_ITEMS.map((item) => (
              <div key={item.title} className="news-card" style={{ cursor: 'pointer' }}>
                <img src={item.image} alt={item.title} className="news-image" />
                <span className="news-date">{item.date}</span>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
              </div>
            ))}
          </div>
          <div className="news-actions">
            <button type="button" className="btn btn-outline-secondary">Load More</button>
            <button type="button" className="news-see-more">See more</button>
          </div>
        </div>
      </section>

      {/* Join us CTA */}
      <section className="section cta-final reveal-on-scroll">
        <div className="container">
          <div className="cta-final-box">
            <div className="cta-v4-bubbles">
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
            </div>
            
            <div className="cta-final-wrap">
              <div className="cta-final-text">
                <h2 className="cta-v4-title">Join us!</h2>
                <p className="cta-v4-desc">The registration and admission procedure is simple and free. The team is ready to answer your questions and guide your next step.</p>
              </div>
              <div className="cta-v4-action-side">
                <button 
                  type="button" 
                  className="cta-final-btn"
                  onClick={() => {
                    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact us now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Floating Organic Quality Mark - Replicating User Reference */}
      <div className="organic-blob-badge" title="Excellence Verified" onClick={() => setShowCookieModal(true)}>
        <svg className="blob-icon-svg" viewBox="0 0 100 100">
          {/* Futuristic Excellence Seal - Shield + Star */}
          <path d="M50 15 L80 30 L80 60 C80 75 65 85 50 88 C35 85 20 75 20 60 L20 30 Z" 
                fill="none" stroke="white" strokeWidth="4" />
          <path d="M50 35 L55 45 L65 45 L58 52 L61 62 L50 56 L39 62 L42 52 L35 45 L45 45 Z" 
                fill="white" />
          <path d="M30 35 L40 40 M70 35 L60 40 M50 25 L50 35" 
                stroke="white" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {/* Cookie Consent Modal */}
      {showCookieModal && (
        <div className="cookie-modal-overlay" onClick={() => setShowCookieModal(false)}>
          <div className="cookie-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="cookie-modal-header">
              <div className="cookie-title-group">
                <h3>Hi there!</h3>
                <h2>We're the cookies</h2>
              </div>
              <div className="cookie-logo-wrap">
                <img src="/assets/ascencia/Ascencia-Malta-Logo.svg" alt="Ascencia Malta" className="cookie-modal-logo" />
              </div>
            </div>
            
            <p className="cookie-main-text">
              We waited to make sure that you were interested in the content of this website before bothering you, but we would love to be your companions during your visit...
            </p>
            
            <div className="cookie-details-box">
              <h4>Here's why we use cookies.</h4>
              <ul>
                <li>Share analytics, advertising data, user data, and ad personalization data with Google</li>
                <li>Functional cookies</li>
                <li>Audience Measurement & Analytics</li>
              </ul>
            </div>
            
            <div className="cookie-footer-auth">
              <p>Consents certified by <span className="axeptio-logo">✓ axeptio</span></p>
            </div>
            
            <div className="cookie-modal-actions">
              <button type="button" className="cookie-btn-choose" onClick={() => setShowCookieModal(false)}>Let me choose</button>
              <button type="button" className="cookie-btn-ok" onClick={() => setShowCookieModal(false)}>OK!</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
