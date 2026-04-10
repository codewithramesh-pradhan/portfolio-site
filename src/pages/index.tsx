import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const projects = [
  {
    emoji: '🏥',
    title: 'Tech Health CDK',
    description: 'HIPAA-compliant healthcare API — 7 AWS services, 5 HIPAA safeguards, deployed in under 10 minutes via CDK with zero manual console steps.',
    link: '/docs/projects/tech-health-cdk',
  },
  {
    emoji: '✈️',
    title: 'TravelEase Infrastructure CDK',
    description: 'Serverless travel inquiry system handling 50 req/min with rate limiting, honeypot spam protection, and SQS dead letter queues for zero message loss.',
    link: '/docs/projects/travelease-infrastructure-cdk',
  },
  {
    emoji: '🔐',
    title: 'AWS IAM CloudFormation',
    description: '8,900+ lines of CloudFormation managing 10 IAM users across 4 RBAC groups — with MFA enforcement, Checkov scanning, and CloudTrail audit logging.',
    link: '/docs/projects/aws-iam-cloudformation',
  },
];

function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.hero)}>
      <div className="container">
        {/* TODO: Add your photo at static/img/profile.jpg and uncomment below */}
        {/* <img src="/portfolio-site/img/profile.jpg" alt="Ramesh Pradhan" className={styles.profilePhoto} /> */}
        <h1 className="hero__title">Ramesh Pradhan</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.heroButtons}>
          <Link className={styles.heroBtnPrimary} to="/docs/projects/tech-health-cdk">
            🚀 View Projects
          </Link>
          <Link className={styles.heroBtnSecondary} to="/docs/about">
            👤 About Me
          </Link>
        </div>
      </div>
    </header>
  );
}

function HighlightSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.highlight}>
          <p>
            I've deployed <strong>3 production-grade AWS projects</strong> entirely through Infrastructure as Code —
            no console clicks. My work covers HIPAA-compliant APIs, serverless event systems, and enterprise IAM
            with CI/CD pipelines. Every project includes architecture diagrams, security controls, and documentation
            written for the next engineer, not just for me.
          </p>
          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>IaC Projects Deployed</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>12+</span>
              <span className={styles.statLabel}>AWS Services Used</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>8,900+</span>
              <span className={styles.statLabel}>Lines of CloudFormation</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>0</span>
              <span className={styles.statLabel}>Console-Click Deployments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.title} className={styles.card}>
              <span className={styles.skillIcon}>{project.emoji}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={project.link}>Read more →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={clsx(styles.section, styles.ctaSection)}>
      <div className="container" style={{textAlign: 'center'}}>
        <h2>Want to see how I work?</h2>
        <p>Browse my project writeups, troubleshooting docs, and blog to see how I approach real infrastructure problems.</p>
        <div className={styles.heroButtons}>
          <Link className="button button--primary button--lg" to="/docs/about">
            📂 Explore Portfolio
          </Link>
          <Link className="button button--outline button--primary button--lg" to="/docs/resume"
                style={{marginLeft: '0.5rem'}}>
            📄 View Resume
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <HeroSection />
      <main>
        <HighlightSection />
        <ProjectsSection />
        <CTASection />
      </main>
    </Layout>
  );
}
