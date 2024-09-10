import Head from 'next/head';

export default function Home() {
  return (
    <div className="hero-container">
      <Head>
        <title>Beyond the Blonde | Transform Your Style</title>
        <meta name="description" content="Bold hair transformations at Beyond the Blonde." />
      </Head>
      <div className="hero-content">
        <h1 className="hero-title">Go Beyond the Blonde</h1>
        <p className="hero-description">Where bold transformations meet fearless style.</p>
        <a href="/services" className="cta-button">Explore Services</a>
      </div>
    </div>
  );
}
