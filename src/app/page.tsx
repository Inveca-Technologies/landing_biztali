import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { siteJsonLd, serializeJsonLd } from "@/lib/json-ld";

const features = [
  {
    number: "01",
    title: "Know what is moving",
    text: "Keep products, stock levels and purchasing activity in view, so the next decision is easier to make.",
    icon: "box",
  },
  {
    number: "02",
    title: "Keep sales in focus",
    text: "Record orders, issue invoices and receipts, and understand how your business is performing.",
    icon: "chart",
  },
  {
    number: "03",
    title: "See the whole picture",
    text: "Bring expenses, customer accounts and cashflow into the same workspace as your daily operations.",
    icon: "wallet",
  },
  {
    number: "04",
    title: "Grow beyond one location",
    text: "Coordinate teams and branches with location-aware tools and business-wide visibility.",
    icon: "branch",
  },
];

const faqs = [
  {
    question: "What is Biztali?",
    answer:
      "Biztali is a business management platform that helps you manage sales, inventory, expenses, customers and business operations from one place.",
  },
  {
    question: "Who can use Biztali?",
    answer:
      "Biztali is designed for small and growing businesses, including retailers and service businesses that want a clearer view of day-to-day operations.",
  },
  {
    question: "Can I manage more than one branch?",
    answer:
      "Biztali supports multi-branch operations, helping teams work with location-specific activity and business-wide views.",
  },
  {
    question: "How do I get started?",
    answer:
      "Create a Biztali account to set up your workspace and explore the tools available for your business.",
  },
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link
      aria-label="Biztali home"
      className={`brand${light ? " brand-light" : ""}`}
      href="/"
    >
      <Image
        alt=""
        aria-hidden="true"
        className="brand-image"
        height={32}
        priority
        src="/logo/Biztali_logo.png"
        width={32}
      />
      <span>biztali</span>
    </Link>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path
        d="M4.167 10h11.666m0 0L10 4.167M15.833 10 10 15.833"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const paths: Record<string, ReactNode> = {
    box: (
      <>
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="m4.3 7.6 7.7 4.3 7.7-4.3M12 21v-9" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V5m0 14h17" />
        <path d="m7 14 4-4 3 2 6-7" />
      </>
    ),
    wallet: (
      <>
        <rect x="3" y="5" width="18" height="15" rx="2.5" />
        <path d="M16 14h5M3 9h18M7 5V3h11" />
        <circle cx="16" cy="14" r=".6" fill="currentColor" />
      </>
    ),
    branch: (
      <>
        <circle cx="6" cy="5" r="2" />
        <circle cx="18" cy="7" r="2" />
        <circle cx="12" cy="19" r="2" />
        <path d="M6 7v4a3 3 0 0 0 3 3h3m0 3v-3a4 4 0 0 1 4-4h0" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="feature-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

function DashboardPreview() {
  return (
    <div className="dashboard">
      <Image
        alt="Biztali dashboard with a business workspace, sales, cashflow and stock alerts"
        className="dashboard-image"
        height={800}
        priority
        sizes="(max-width: 700px) 94vw, (max-width: 1200px) 52vw, 555px"
        src="/dashboard.png"
        width={1920}
      />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(siteJsonLd) }}
      />
      <header className="site-header">
        <div className="nav-wrap">
          <BrandMark />
          <nav aria-label="Main navigation" className="main-nav">
            <a href="#platform">Platform</a>
            <a href="#how-it-works">How it works</a>
            <a href="#faq">FAQs</a>
          </nav>
          <div className="nav-actions">
            <Link className="login-link" href="https://www.biztali.com/login">Log in</Link>
            <Link className="button button-small button-blue" href="https://www.biztali.com/signin">
              Get started <ArrowIcon />
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div aria-hidden="true" className="hero-glow hero-glow-one" />
          <div aria-hidden="true" className="hero-glow hero-glow-two" />
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow"><span /> MADE FOR THE WAY YOU WORK</p>
              <h1>Run your business.<br /><span>Not the busywork.</span></h1>
              <p className="hero-description">
                Sales, stock, expenses and your team&apos;s daily work—together in
                one simple workspace. Get the clarity to make your next move.
              </p>
              <div className="hero-actions">
                <Link className="button button-white" href="https://www.biztali.com/signin">
                  Get started for free <ArrowIcon />
                </Link>
                <a className="text-link" href="#platform">Explore the platform <span>↓</span></a>
              </div>
              <div className="hero-trust">
                <span className="trust-icon">✓</span>
                <span>Built for small and growing businesses</span>
              </div>
            </div>
            <div className="hero-visual">
              <div aria-hidden="true" className="visual-orbit orbit-one" />
              <div aria-hidden="true" className="visual-orbit orbit-two" />
              <DashboardPreview />
            </div>
          </div>
          <div className="hero-bottom">
            <span>ONE PLACE FOR YOUR BUSINESS</span>
            <div><span>Sales</span><i /><span>Inventory</span><i /><span>Cashflow</span><i /><span>Branches</span></div>
          </div>
        </section>

        <section aria-labelledby="platform-title" className="section platform-section" id="platform">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="section-kicker">LESS SWITCHING. MORE RUNNING.</p>
              <h2 id="platform-title">The moving parts of your business,<br /><span>finally working together.</span></h2>
              <p>Good decisions start with a clear picture. Biztali brings everyday business tools into one place, so you can spend less time chasing details and more time moving forward.</p>
            </div>
            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.number}>
                  <div className="feature-top">
                    <div className="feature-icon-wrap"><FeatureIcon name={feature.icon} /></div>
                    <span>{feature.number}</span>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="operations-title" className="operations-section" id="how-it-works">
          <div className="operations-wrap">
            <div className="operations-art" aria-hidden="true">
              <div className="operations-backdrop" />
              <div className="operation-tile tile-one"><span>SALES</span><strong>Orders</strong><i>↗</i></div>
              <div className="operation-tile tile-two"><span>INVENTORY</span><strong>Stock</strong><i>▦</i></div>
              <div className="operation-tile tile-three"><span>TEAM</span><strong>Branches</strong><i>⌘</i></div>
              <div className="operations-center"><span className="mini-mark">b</span><strong>One workspace</strong><small>Everything connected</small></div>
              <span className="art-dot art-dot-one" />
              <span className="art-dot art-dot-two" />
              <span className="art-dot art-dot-three" />
            </div>
            <div className="operations-copy">
              <p className="section-kicker">BUILT TO GROW WITH YOU</p>
              <h2 id="operations-title">A clearer way to keep business moving.</h2>
              <p>Bring your daily operations into focus. Whether you&apos;re checking stock, recording a sale or keeping an eye on another location, your tools are ready when you need them.</p>
              <ul className="check-list">
                <li><span>✓</span> Keep everyday work in one place</li>
                <li><span>✓</span> Make activity easier to understand</li>
                <li><span>✓</span> Give your team a shared view of what matters</li>
              </ul>
              <Link className="button button-blue" href="https://www.biztali.com/signin">
                Explore Biztali <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        <section aria-labelledby="faq-title" className="faq-section" id="faq">
          <div className="faq-wrap">
            <div className="faq-heading">
              <p className="section-kicker">GOOD QUESTIONS</p>
              <h2 id="faq-title">A few things you might be wondering.</h2>
              <p>Need another answer? <a href="mailto:info@biztali.com">Talk to our team</a></p>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details className="faq-item" key={faq.question} open={index === 0}>
                  <summary>{faq.question}<span aria-hidden="true" /></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-glow" aria-hidden="true" />
          <div className="cta-content">
            <p className="section-kicker">YOUR NEXT CHAPTER STARTS HERE</p>
            <h2>Make room for the work<br />that moves you forward.</h2>
            <p>Bring your business into focus with Biztali.</p>
            <Link className="button button-white" href="https://www.biztali.com/signin">
              Get started for free <ArrowIcon />
            </Link>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <BrandMark light />
            <p>Business tools that help you see clearly, work confidently and keep growing.</p>
          </div>
          <div className="footer-links">
            <div><strong>Discover</strong><a href="#platform">Platform</a><a href="#how-it-works">How it works</a><a href="#faq">FAQs</a></div>
            <div><strong>Get started</strong><Link href="https://www.biztali.com/signin">Create an account</Link><Link href="https://www.biztali.com/login">Log in</Link><a href="mailto:info@biztali.com">Contact</a></div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Biztali. All rights reserved.</span>
          <span>Made for businesses ready to grow.</span>
        </div>
      </footer>
    </>
  );
}
