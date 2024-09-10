import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Beyond the Blonde | Bold Hair Transformations</title>
        <meta name="description" content="Unleash your boldest look with Beyond the Blonde's expert hair services. Specializing in platinum blonde, balayage, and creative color transformations." />
        <meta name="keywords" content="hair salon, blonde hair specialist, balayage, creative hair color, platinum blonde, bold hairstyles" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">Beyond the Blonde</a>
        </div>
        <ul className="navbar-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="/book" className="navbar-cta">Book Now</a>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Beyond the Blonde</h1>
          <p className="hero-description">Unleash Your Boldest Look</p>
          <a href="/services" className="cta-button">Explore Services</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Platinum Blonde Perfection</h3>
            <p>For the boldest blonde transformations.</p>
          </div>
          <div className="service-card">
            <h3>Creative Color</h3>
            <p>Unleash your creativity with custom colors.</p>
          </div>
          <div className="service-card">
            <h3>Balayage Brilliance</h3>
            <p>Soft, seamless highlights for a natural glow.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>"Beyond the Blonde gave me the transformation of a lifetime!"</p>
            <h4>- Client A</h4>
          </div>
          <div className="testimonial">
            <p>"My platinum blonde looks incredible. The best in the city!"</p>
            <h4>- Client B</h4>
          </div>
          <div className="testimonial">
            <p>"I love my new color. They truly brought my vision to life!"</p>
            <h4>- Client C</h4>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="footer-section">
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p>123 Main Street, City, State, 12345</p>
          <p>Email: info@beyondtheblonde.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="Twitter">Twitter</a>
        </div>
      </footer>
    </>
  );
}
