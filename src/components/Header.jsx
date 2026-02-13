import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const LOGO_URL = '/assets/ascencia/Ascencia-Malta-Logo.svg';
const NAV_ITEMS = [
  { label: 'Ascencia Malta', path: '/ascencia-malta' }, 
  { label: 'Programmes', path: '/#programmes' },
  { label: 'English School', path: '#' },
  { label: 'Living in Malta', path: '#' },
  { label: 'Quality Assurance', path: '#' },
  { label: 'Fees', path: '#' },
  { label: 'Events', path: '#' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [fullMenuOpen, setFullMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setFullMenuOpen(false);

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="header-shell">
          <Link to="/" className="logo-block" aria-label="Ascencia Business School Malta - Home">
            <img src={LOGO_URL} alt="Ascencia Business School Malta" />
          </Link>

          <div className="nav-shell">
            <nav className="main-nav" aria-label="Main navigation">
              <ul className="nav-list">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className="nav-item-btn">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setFullMenuOpen(true)}
          >
            <span className="menu-toggle-bar" />
            <span className="menu-toggle-bar" />
            <span className="menu-toggle-bar" />
          </button>

          <button 
            type="button" 
            className="contact-block"
            onClick={() => {
              document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact us
          </button>
        </div>
      </header>

      <div className={`menu-overlay ${fullMenuOpen ? 'is-active' : ''}`}>
        <div className="menu-overlay-image"></div>
        <div className="menu-overlay-content">
          <button className="menu-close-btn" onClick={closeMenu}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          
          <div className="menu-title">Menu Navigation</div>
          
          <div className="menu-grid">
            <div className="menu-col">
              <h3>Ascencia Malta</h3>
              <ul>
                <li><Link to="/ascencia-malta" onClick={closeMenu}>About us</Link></li>
                <li><button type="button">Our Team</button></li>
                <li><button type="button">Work with us</button></li>
              </ul>
            </div>
            
            <div className="menu-col">
              <h3>Our Courses</h3>
              <ul>
                <li><button type="button">Masters Degrees</button></li>
                <li><button type="button">Bachelor Degrees</button></li>
                <li><button type="button">Diploma Degrees</button></li>
                <li><button type="button">Award Certificates</button></li>
              </ul>
            </div>
            
            <div className="menu-col">
              <h3>English School</h3>
              <ul>
                <li><button type="button">English Language Programmes</button></li>
              </ul>
            </div>
            
            <div className="menu-col">
              <h3>Living in Malta</h3>
              <ul>
                <li><button type="button">Study in Malta</button></li>
                <li><button type="button">Jobs in Malta</button></li>
                <li><button type="button">Visa Requirements</button></li>
              </ul>
            </div>
            
            <div className="menu-col">
              <h3>Quality Assurance</h3>
              <ul>
                <li><button type="button">IQA Policy</button></li>
                <li><button type="button">Welcome Booklet</button></li>
                <li><button type="button">Recruitment Process</button></li>
                <li><button type="button">Recruitment Policy</button></li>
              </ul>
            </div>
            
            <div className="menu-col">
              <h3>News & Events</h3>
              <ul>
                <li><button type="button">News</button></li>
              </ul>
            </div>
          </div>

          <button 
            type="button" 
            className="menu-overlay-contact-btn"
            onClick={() => {
              closeMenu();
              setTimeout(() => {
                document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
              }, 300);
            }}
          >
            Contact us
          </button>
        </div>
      </div>
    </>
  );
}
