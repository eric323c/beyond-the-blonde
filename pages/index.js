import Head from 'next/head';

export default function Home() {
  return (
    <div className="hero-container">
      <Head>
        <title>Beyond the Blonde | Bold Hair Transformations</title>
        <meta name="description" content="Unleash your boldest look with Beyond the Blonde's expert hair services. Specializing in platinum blonde, balayage, and creative color transformations." />
        <meta name="keywords" content="hair salon, blonde hair specialist, balayage, creative hair color, platinum blonde, bold hairstyles" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <div className="hero-content">
        <h1 className="hero-title">Go Beyond the Blonde</h1>
        <p className="hero-description">Where bold transformations meet fearless style.</p>
        <a href="/services" className="cta-button">Explore Services</a>
      </div>
    </div>
  );
}
