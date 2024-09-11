import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import '../styles/globals.css';

export default function Home() {
  useEffect(() => {
    // Scroll animation trigger for sections
    const sections = document.querySelectorAll('.section');
    const options = { threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section (Front of the postcard) */}
      <section className="hero-section section">
        <div className="hero-left">
          <img src="/images/salon-image.jpg" alt="Salon" />
        </div>
        <div className="hero-right">
          <h1 className="hero-logo">Beyond the Blonde</h1>
          <button className="book-now-btn">Book Now</button>
        </div>
      </section>

      {/* About Us Section (Back of the postcard) */}
      <section className="about-section section">
        <div className="about-left">
          <img src="/images/lexie.jpg" alt="Lexie" />
        </div>
        <div className="about-right">
          <h2>About Lexie</h2>
          <p>Lexie is a creative stylist offering...</p>
        </div>
      </section>

      {/* Additional sections can go here */}
    </>
  );
}