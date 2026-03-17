import "./footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Right Section - Logo and About */}
        <div className="footer-section footer-about">
          <img src="/image/logo.png" alt="KeyDar" className="footer-logo" />
          <p className="footer-description">
            متخصصون في تقديم حلول عقارية متكاملة تلبي احتياجات السكن والاستثمار، مع توفير أعلى معايير الجودة والموثوقية.
          </p>
          <div className="footer-social">
            <a href="#" className="social-icon facebook"><img src="/image/Frame 429.png" alt="Facebook" /></a>
            <a href="#" className="social-icon whatsapp"><img src="/image/Frame 430.png" alt="WhatsApp" /></a>
            <a href="#" className="social-icon twitter"><img src="/image/Frame 431.png" alt="Twitter" /></a>
            <a href="#" className="social-icon instagram"><img src="/image/Frame 432.png" alt="Instagram" /></a>
          </div>
        </div>

        {/* Center-Right Section - Quick Links */}
        <div className="footer-section footer-links">
          <h3 className="footer-title">روابط سريعة</h3>
          <ul >
            <li ><a href="#home"><img src="/image/lefto.png" alt="" className="footer-links-icon" />الرئيسية</a></li>
            <li><a href="#projects"><img src="/image/lefto.png" alt="" className="footer-links-icon" />المشاريع</a></li>
            <li><a href="#about"><img src="/image/lefto.png" alt="" className="footer-links-icon" />تواصل معنا</a></li>
            <li><a href="#contact"><img src="/image/lefto.png" alt="" className="footer-links-icon" />مدونة</a></li>
          </ul>
        </div>

        {/* Center Section - Support and Policies */}
        <div className="footer-section footer-support">
          <h3 className="footer-title">الدعم والسياسات</h3>
          <ul>
            <li><a href="#faq"><img src="/image/lefto.png" alt="" className="footer-support-icon" />الأسئلة الشائعة (FAQ)</a></li>

            <li><a href="#privacy"><img src="/image/lefto.png" alt="" className="footer-support-icon" />سياسة الخصوصية</a></li>

            <li><a href="#terms"><img src="/image/lefto.png" alt="" className="footer-support-icon" />شروط الاستخدام</a></li>

          </ul>
        </div>

        {/* Left Section - Contact Info */}
        <div className="footer-section footer-contact">
          <h3 className="footer-title">التواصل والروابط الأخرى</h3>
          <div className="contact-info">
            <p className="contact-item">
              <img src="/image/lefto.png" alt="" className="contact-icon" />
              <span className="contact-label">المملكة العربية السعودية - الرياض شارع الملك عبد</span>
            </p>
            <p className="contact-item">
              <img src="/image/lefto.png" alt="" className="contact-icon" />
              <span className="contact-phone">+966 500 000 000</span>
            </p>
            <p className="contact-item">
              <img src="/image/lefto.png" alt="" className="contact-icon" />
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="copyright">
          جميع الحقوق محفوظة © 2025-2026 لهذه الموقع محفوظة
        </p>
        <img src="/image/Frame 433.png" alt="Badge" className="footer-badge" />
      </div>
    </footer>
  );
}

export default Footer;
