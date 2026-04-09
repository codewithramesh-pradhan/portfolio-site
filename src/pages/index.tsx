import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const skills = [
  {icon: '☁️', title: 'AWS', description: 'EC2, S3, RDS, CloudFront, VPC, IAM, CloudFormation, Lambda'},
  {icon: '🐳', title: 'Containers', description: 'Docker, Kubernetes (k3s), Helm, Docker Compose'},
  {icon: '🐧', title: 'Linux', description: 'Ubuntu, Amazon Linux, systemd, Bash scripting'},
  {icon: '🌐', title: 'Networking', description: 'TCP/IP, DNS, subnetting, VPN, firewalls, load balancing'},
  {icon: '🔄', title: 'CI/CD', description: 'GitHub Actions, automated deployments, IaC pipelines'},
  {icon: '📊', title: 'Monitoring', description: 'CloudWatch, Prometheus, Grafana, alerting'},
];

const projects = [
  {
    emoji: '🏥',
    title: 'Tech Health CDK',
    description: 'HIPAA-compliant healthcare API with Cognito auth, WAF protection, DynamoDB, Lambda, and CloudWatch monitoring.',
    link: '/docs/projects/tech-health-cdk',
  },
  {
    emoji: '✈️',
    title: 'TravelEase Infrastructure CDK',
    description: 'Serverless travel inquiry system with API Gateway, Lambda, DynamoDB, SES notifications, and SQS dead letter queues.',
    link: '/docs/projects/travelease-infrastructure-cdk',
  },
  {
    emoji: '🔐',
    title: 'AWS IAM CloudFormation',
    description: 'Enterprise IAM with RBAC, MFA enforcement, CloudTrail audit logging, and GitHub Actions CI/CD pipeline.',
    link: '/docs/projects/aws-iam-cloudformation',
  },
];

function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.hero)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.typingText)}>{siteConfig.tagline}</p>
        <p className={styles.heroSummary}>
          I design, build, and maintain cloud infrastructure on AWS. I work with containers,
          automate everything I can, and document what I learn. This portfolio is a living
          record of my projects, skills, and technical thinking.
        </p>
        <div className={styles.heroButtons}>
          <Link className="button button--secondary button--lg" to="/docs/projects/tech-health-cdk">
            View Projects
          </Link>
          <Link className="button button--outline button--lg" to="/docs/about"
                style={{marginLeft: '1rem', color: 'white', borderColor: 'white'}}>
            About Me
          </Link>
        </div>
      </div>
    </header>
  );
}

function SkillsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Core Skills</h2>
        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.title} className={styles.card}>
              <span className={styles.skillIcon}>{skill.icon}</span>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
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
            Explore Portfolio
          </Link>
          <Link className="button button--outline button--primary button--lg" to="/docs/resume"
                style={{marginLeft: '1rem'}}>
            View Resume
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
        <SkillsSection />
        <ProjectsSection />
        <CTASection />
      </main>
    </Layout>
  );
}
