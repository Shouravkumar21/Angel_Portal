import './Footer.css';

const LOGO_URL = '/assets/ascencia/Ascencia-Malta-Logo.svg';

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo" style={{ cursor: 'pointer' }}>
              <img src={LOGO_URL} alt="Ascencia Business School Malta" />
            </div>
            <h3>Ascencia Malta Ltd</h3>
            <p className="footer-tagline">We are eager to give you the best education.</p>
            <address className="footer-address">
              23, Vincenzo Dimech Street, Floriana, Malta<br />
              Tel.: +356 2034 1784
            </address>
            <div className="footer-cta-wrapper">
               <button type="button" className="btn btn-outline">Contact us</button>
            </div>
          </div>
          <div className="footer-links">
            <h4>Courses</h4>
            <ul>
              <li><button type="button">Doctorate of Business Administration (DBA)</button></li>
              <li><button type="button">Master of Business Administration (MBA)</button></li>
              <li><button type="button">Bachelor of Business Administration (BBA)</button></li>
              <li><button type="button">Undergraduate Diploma Specialization</button></li>
              <li><button type="button">Award certificates</button></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>English language courses</h4>
            <ul>
              <li><button type="button">General English Course</button></li>
              <li><button type="button">Intensive English Course</button></li>
              <li><button type="button">IELTS Preparation</button></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-grid">
          <div className="footer-social-column">
            <h3>Follow Ascencia Malta</h3>
            <div className="social-links">
              <button type="button" className="social-icon"><i className="fa-brands fa-facebook-f"></i></button>
              <button type="button" className="social-icon"><i className="fa-brands fa-instagram"></i></button>
              <button type="button" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></button>
              <button type="button" className="social-icon"><i className="fa-brands fa-tiktok"></i></button>
              <button type="button" className="social-icon"><i className="fa-brands fa-youtube"></i></button>
            </div>
          </div>
          
          <div className="footer-info-column">
            <div className="footer-copyright-row">
              <p>&copy; {new Date().getFullYear()} Ascencia Malta | <span style={{ cursor: 'pointer' }}>Terms & Conditions</span> | <span style={{ cursor: 'pointer' }}>Privacy Policy</span></p>
            </div>
            <div className="footer-license-row">
              <p>Licensed by: The Malta Further and Higher Education Authority (MFHEA)</p>
              <p>License number: 2021-018</p>
              <p>Category: Higher Education Institution</p>
            </div>
            <div className="footer-membership">
              <div className="membership-logo">
                <i className="fa-solid fa-graduation-cap"></i> 
                <span>COLLEGE DE PARIS</span>
              </div>
              <p>Member of College de Paris</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
