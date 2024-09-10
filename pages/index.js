import Head from 'next/head'; // This line is necessary to avoid the error

export default function Home() {
  return (
    <>
      <Head>
        <title>Beyond the Blonde | Luxury Hair Transformations</title>
        <meta name="description" content="Beyond the Blonde offers luxury hair transformations with bold, modern designs inspired by creativity and elegance. Make your next look timeless." />
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
          <p className="hero-description">Luxury Hair. Creative Transformations.</p>
          <a href="/services" className="cta-button">Get Your Transformation</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="/images/blonde-transformation.jpg" alt="Blonde Hair Transformation" />
            <h3>Blonde But Bold</h3>
            <p>A daring take on classic blonde styles.</p>
          </div>
          <div className="service-card">
            <img src="/images/color-craze.jpg" alt="Creative Hair Color" />
            <h3>Color Craze</h3>
            <p>Vibrant, bold colors to match your personality.</p>
          </div>
          <div className="service-card">
            <img src="/images/luxury-cut.jpg" alt="Luxury Haircut" />
            <h3>Luxury Cuts</h3>
            <p>Refined and modern cuts for any style.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>"Beyond the Blonde gave me the transformation of a lifetime. I love the creativity they bring to every look!"</p>
            <h4>- Client A</h4>
          </div>
          <div className="testimonial">
            <p>"The best hair experience I’ve ever had. They truly know how to deliver a luxury experience."</p>
            <h4>- Client B</h4>
          </div>
          <div className="testimonial">
            <p>"From bold blonde to vibrant color, Beyond the Blonde has changed my hair game completely!"</p>
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
