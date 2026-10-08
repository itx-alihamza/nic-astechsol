import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaBrain,
  FaCode,
  FaCube,
  FaGlobe,
  FaIndustry,
  FaMicrochip,
  FaMobileScreen,
  FaRocket,
  FaSatelliteDish,
  FaWandMagicSparkles,
} from 'react-icons/fa6';

const services = [
  ['IoT Product Development', 'We design and develop secure, scalable IoT solutions that connect devices, collect data, and deliver real-time insight.', FaSatelliteDish],
  ['AI & Intelligent Solutions', 'We build AI-powered solutions that automate processes, uncover insight, and help your product think smarter.', FaBrain],
  ['Website & Web App Development', 'We create fast, responsive, and secure websites and web applications tailored to your business goals.', FaGlobe],
  ['Mobile App Development', 'We build intuitive, high-performance mobile apps for Android and iOS that your users will love.', FaMobileScreen],
  ['PCB & Embedded Systems', 'From circuit design to embedded firmware, we deliver robust and efficient hardware solutions.', FaMicrochip],
  ['Automation & Custom Software', 'We develop custom software and automation tools to streamline operations and boost productivity.', FaCode],
];

const capabilities = [
  ['Virtual Simulation', 'We simulate and validate your product virtually to reduce risk and ensure optimal performance.', FaWandMagicSparkles],
  ['Prototype Development', 'We build functional prototypes to test, refine, and prove your product idea.', FaCube],
  ['Minimum Viable Product', 'We develop MVPs that help you launch faster, validate demand, and attract real users.', FaRocket],
  ['Mass Production', 'We manage manufacturing and quality control to deliver reliable products at scale.', FaIndustry],
];

const process = [
  ['01', 'Discover', 'We understand your idea, requirements, and market to define the right solution.'],
  ['02', 'Design', 'We design the architecture, UX, and hardware for the best user experience.'],
  ['03', 'Develop', 'We build, test, and iterate using agile methods to ensure quality.'],
  ['04', 'Deliver', 'We deliver, deploy, and support the product so it succeeds.'],
];

const businessTypes = [
  ['For Startups', 'Turn your idea into a product with rapid prototyping, MVP development, and go-to-market support.'],
  ['For Growing Businesses', 'Scale your product with advanced features, integrations, and process automation.'],
  ['For Enterprises', 'Deliver secure, scalable, and reliable solutions that integrate with your enterprise systems.'],
];

function Services() {
  return (
    <main className="theme-page services-page">
      <section className="services-hero">
        <div className="services-hero__image" aria-hidden="true" />
        <div className="services-hero__grid" aria-hidden="true" />
        <div className="theme-shell services-hero__content">
          <p className="services-eyebrow">Creativity with innovation</p>
          <h1 className="services-hero__title">Services that turn ideas into products.</h1>
          <p className="services-hero__copy">From concept and simulation to software, hardware, and mass production, we provide everything needed to build connected products.</p>
          <Link to="/gettouch" className="theme-button theme-brand-gradient services-primary-action">Discuss your project <FaArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="theme-section" aria-labelledby="services-title">
        <div className="theme-shell">
          <header className="services-section-heading">
            <p className="services-eyebrow">End-to-end product development</p>
            <h2 id="services-title" className="theme-heading services-section-title">One team for the entire product journey.</h2>
            <p className="theme-muted-text theme-reading">We combine creativity, engineering, and technology to deliver reliable, scalable, market-ready products. Our integrated services cover every stage of the product development lifecycle.</p>
          </header>
          <div className="services-grid">
            {services.map(([title, description, Icon]) => (
              <article key={title} className="theme-card services-card">
                <div className="services-icon">{React.createElement(Icon, { 'aria-hidden': true })}</div>
                <h3>{title}</h3><p>{description}</p>
                <Link to="/gettouch" className="services-card__link">Talk to our team <FaArrowRight aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="theme-section services-capabilities" aria-labelledby="capabilities-title">
        <div className="theme-shell services-capabilities__layout">
          <div className="services-product-image"><img src="/services/product-lifecycle.webp" alt="Connected product lifecycle from virtual simulation to mass production" loading="lazy" decoding="async" /></div>
          <div>
            <p className="services-eyebrow">From idea to impact</p>
            <h2 id="capabilities-title" className="theme-heading services-section-title">Everything your product needs.</h2>
            <div className="services-capability-list">
              {capabilities.map(([title, description, Icon]) => (
                <article className="services-capability" key={title}>
                  <div className="services-icon services-icon--small">{React.createElement(Icon, { 'aria-hidden': true })}</div>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </article>
              ))}
            </div>
            <Link to="/projects" className="theme-button theme-brand-gradient services-capability-action">Learn more <FaArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="services-process" aria-labelledby="process-title">
        <div className="theme-shell">
          <header className="services-section-heading services-section-heading--light">
            <p className="services-eyebrow">A clear path forward</p>
            <h2 id="process-title" className="theme-heading services-section-title">How we build.</h2>
          </header>
          <ol className="services-process__list">
            {process.map(([number, title, description]) => <li key={number} className="services-process__step"><span>{number}</span><h3>{title}</h3><p>{description}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="theme-section" aria-labelledby="business-title">
        <div className="theme-shell">
          <header className="services-section-heading">
            <p className="services-eyebrow">Flexible by design</p>
            <h2 id="business-title" className="theme-heading services-section-title">Built around your business.</h2>
          </header>
          <div className="services-business-grid">
            {businessTypes.map(([title, description], index) => <article className="theme-card services-business-card" key={title}>
              {index === 0 ? (
                <img className="services-business-card__image" src="/services/startup-team.webp" alt="Startup team collaborating around a table" loading="lazy" decoding="async" />
              ) : index === 1 ? (
                <img className="services-business-card__image" src="/services/growing-business-analytics.webp" alt="Business growth analytics displayed over a laptop workspace" loading="lazy" decoding="async" />
              ) : index === 2 ? (
                <img className="services-business-card__image" src="/services/enterprise-team.webp" alt="Enterprise team meeting in a modern conference room" loading="lazy" decoding="async" />
              ) : (
                <div className={`services-business-card__visual services-business-card__visual--${index + 1}`} aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span></div>
              )}
              <h3>{title}</h3><p>{description}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="services-final-cta">
        <div className="theme-shell services-final-cta__content">
          <div><p className="services-eyebrow">Ready when you are</p><h2 className="theme-heading">Have an idea worth building?</h2><p>Let&apos;s turn it into a reliable, market-ready product.</p></div>
          <Link to="/gettouch" className="theme-button theme-brand-gradient services-primary-action">Start your project <FaArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}

export default Services;
