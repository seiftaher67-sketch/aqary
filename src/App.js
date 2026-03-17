import React from 'react';
import './App.css';
import Footer from './footer';

function App() {
  const propertyCards = [
    { id: 1, title: 'الدرة للعقارات', price: '5,000,000 ر.س', image: 'https://via.placeholder.com/300x250/ddd/999?text=Property+1' },
    { id: 2, title: 'الفندق الفخم', price: '3,500,000 ر.س', image: 'https://via.placeholder.com/300x250/ddd/999?text=Property+2' },
    { id: 3, title: 'الحديقة الخضراء', price: '2,800,000 ر.س', image: 'https://via.placeholder.com/300x250/ddd/999?text=Property+3' },
  ];

  const popularProperties = [
    { id: 1, title: 'فيلا فاخرة', price: '4,500,000 ر.س', location: 'الرياض', image: 'https://via.placeholder.com/250x200/ddd/999?text=Popular+1' },
    { id: 2, title: 'عمارة سكنية', price: '3,200,000 ر.س', location: 'الرياض', image: 'https://via.placeholder.com/250x200/ddd/999?text=Popular+2' },
    { id: 3, title: 'منتجع فندقي', price: '6,800,000 ر.س', location: 'جدة', image: 'https://via.placeholder.com/250x200/ddd/999?text=Popular+3' },
    { id: 4, title: 'مول تجاري', price: '5,500,000 ر.س', location: 'الدمام', image: 'https://via.placeholder.com/250x200/ddd/999?text=Popular+4' },
    { id: 5, title: 'مجمع سكني', price: '3,900,000 ر.س', location: 'الرياض', image: 'https://via.placeholder.com/250x200/ddd/999?text=Popular+5' },
    { id: 6, title: 'مكتب احترافي', price: '2,100,000 ر.س', location: 'الرياض', image: 'https://via.placeholder.com/250x200/ddd/999?text=Popular+6' },
  ];

  const recentProjects = [
    { id: 1, title: 'مشروع الحي السكني', image: 'https://via.placeholder.com/300x250/ddd/999?text=Project+1' },
    { id: 2, title: 'مشروع المول التجاري', image: 'https://via.placeholder.com/300x250/ddd/999?text=Project+2' },
    { id: 3, title: 'مشروع الفندق', image: 'https://via.placeholder.com/300x250/ddd/999?text=Project+3' },
  ];

  return (
    <div className="App">
      {/* Header / Navigation */}
      <header className="header">
        <div className="header-container">
          <div className="nav-left">
            <h1 className="logo">استراتيجيه كوكب</h1>
          </div>
          <nav className="nav-menu">
            <a href="#home" className="nav-link">الرئيسية</a>
            <a href="#projects" className="nav-link">المشاريع</a>
            <a href="#properties" className="nav-link">العقارات</a>
            <a href="#about" className="nav-link">عننا</a>
            <a href="#contact" className="nav-link">تواصل معنا</a>
          </nav>
          <div className="nav-right">
            <button className="contact-btn">تواصل معنا</button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <img 
            src="https://via.placeholder.com/1200x400/ddd/999?text=Hero+Image" 
            alt="Hero Banner" 
            className="hero-image"
          />
          <div className="hero-overlay">
            <h2 className="hero-title">استراتيجيه كوكب</h2>
            <p className="hero-subtitle">أفضل الحلول العقارية لاستثمارك</p>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="featured-section">
          <div className="section-container">
            <h2 className="section-title">عقارات مميزة</h2>
            <div className="properties-grid featured-grid">
              {propertyCards.map((property) => (
                <div key={property.id} className="property-card">
                  <div className="card-image-wrapper">
                    <img src={property.image} alt={property.title} className="card-image" />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{property.title}</h3>
                    <p className="card-price">{property.price}</p>
                    <button className="card-btn">عرض التفاصيل</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Properties */}
        <section className="popular-section">
          <div className="section-container">
            <h2 className="section-title">الأكثر شهرة</h2>
            <div className="properties-grid popular-grid">
              {popularProperties.map((property) => (
                <div key={property.id} className="popular-card">
                  <div className="popular-card-image">
                    <img src={property.image} alt={property.title} />
                  </div>
                  <div className="popular-card-content">
                    <h4 className="popular-card-title">{property.title}</h4>
                    <p className="popular-card-location">{property.location}</p>
                    <p className="popular-card-price">{property.price}</p>
                    <button className="popular-card-btn">عرض المزيد</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials / Stats */}
        <section className="testimonials-section">
          <div className="section-container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon">📍</div>
                <h3 className="stat-title">عقارات متنوعة</h3>
                <p className="stat-description">لدينا تشكيلة واسعة من العقارات المميزة</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon">👥</div>
                <h3 className="stat-title">فريق محترف</h3>
                <p className="stat-description">خبرة عشرات السنين في المجال العقاري</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon">💼</div>
                <h3 className="stat-title">خدمة شاملة</h3>
                <p className="stat-description">نقدم الدعم الكامل من البيع إلى التسليم</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <section className="recent-section">
          <div className="section-container">
            <h2 className="section-title">مشاريعنا الحديثة</h2>
            <div className="properties-grid recent-grid">
              {recentProjects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-image" />
                  </div>
                  <div className="project-overlay">
                    <h3 className="project-title">{project.title}</h3>
                    <button className="project-btn">اكتشف المزيد</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
