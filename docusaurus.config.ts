import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// TODO: Replace these placeholders before deploying
const GITHUB_USERNAME = 'codewithramesh-pradhan';
const REPO_NAME = 'portfolio-site'; // GitHub repo name

const config: Config = {
  title: 'Ramesh Pradhan — Cloud & DevOps Engineer',
  tagline: 'Cloud Engineer in Sydney — I build secure AWS infrastructure with CDK, automate everything, and document what I learn.',
  favicon: 'img/favicon.ico',

  // GitHub Pages deployment config
  // For https://<username>.github.io/<repo>/
  url: `https://${GITHUB_USERNAME}.github.io`,
  baseUrl: `/${REPO_NAME}/`,

  organizationName: GITHUB_USERNAME,
  projectName: REPO_NAME,
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {defaultLocale: 'en', locales: ['en']},

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Learning Journal',
          blogDescription: 'Notes on cloud engineering, DevOps, and infrastructure.',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Ramesh Pradhan',
      items: [
        {type: 'docSidebar', sidebarId: 'portfolioSidebar', position: 'left', label: 'Portfolio'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/docs/resume', label: 'Resume', position: 'left'},
        {
          href: `https://github.com/${GITHUB_USERNAME}`,
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/ramesh-pradhan-b99707276',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          href: 'https://medium.com/@pradhanmesh88',
          label: 'Medium',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Portfolio',
          items: [
            {label: 'About', to: '/docs/about'},
            {label: 'Skills', to: '/docs/skills'},
            {label: 'Projects', to: '/docs/projects/tech-health-cdk'},
          ],
        },
        {
          title: 'Connect',
          items: [
            {label: 'GitHub', href: `https://github.com/${GITHUB_USERNAME}`},
            {label: 'LinkedIn', href: 'https://www.linkedin.com/in/ramesh-pradhan-b99707276'},
            {label: 'Medium', href: 'https://medium.com/@pradhanmesh88'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Blog', to: '/blog'},
            {label: 'Resume', to: '/docs/resume'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Ramesh Pradhan. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'yaml', 'json', 'hcl', 'docker'],
    },
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
