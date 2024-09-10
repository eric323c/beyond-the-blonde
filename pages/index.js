import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Beyond the Blonde | Bold, Creative Hair Transformations</title>
        <meta name="description" content="Unleash your boldest look with Beyond the Blonde's creative hair services. Fun, fearless, and creative hair transformations for all!" />
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
        <a href="/book" className="navbar-cta">Let’s Go Bold!</a>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Step Beyond the Blonde</h1>
          <p className="hero-description">Where Fun Meets Fearless Style</p>
          <a href="/services" className="cta-button">Get Creative!</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2>Our Fun Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1562259920-47afc3030ba2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhbG9ufGVufDB8MHwwfHx8MA%3D%3D" alt="Blonde hair transformation" />
            <h3>Blonde but Bold</h3>
            <p>Taking blonde to new creative heights.</p>
          </div>
          <div className="service-card">
            <img src="https://plus.unsplash.com/premium_photo-1676677513676-d2add148a9fa?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Creative haircut" />
            <h3>Color Craze</h3>
            <p>Colors that speak to your wild side.</p>
          </div>
          <div className="service-card">
            <img src="https://plus.unsplash.com/premium_photo-1677616798094-d34c85b61e36?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Salon blow-dry" />
            <h3>Funky Fresh Styles</h3>
            <p>Blowouts that give you a fresh new look.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <h2>What Our Creative Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>"Beyond the Blonde made me feel like a new person!"</p>
            <h4>- Client A</h4>
          </div>
          <div className="testimonial">
            <p>"It’s not just blonde, it’s BOLD! Love the creativity!"</p>
            <h4>- Client B</h4>
          </div>
          <div className="testimonial">
            <p>"Best hair experience ever—super fun, fresh, and fearless."</p>
            <h4>- Client C</h4>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="footer-section">
        <div className="footer-content">
          <h3>Get in Touch</h3>
          <p>123 Fun Street, Creative City, State, 12345</p>
          <p>Email: hello@beyondtheblonde.com</p>
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
