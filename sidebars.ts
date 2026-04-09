import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  portfolioSidebar: [
    'intro',
    'about',
    'skills',
    {
      type: 'category',
      label: 'Projects',
      link: {type: 'generated-index', description: 'Hands-on cloud and DevOps projects.'},
      items: [
        'projects/tech-health-cdk',
        'projects/travelease-infrastructure-cdk',
        'projects/aws-iam-cloudformation',
      ],
    },
    {
      type: 'category',
      label: 'Homelab',
      items: ['homelab/overview'],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: ['troubleshooting/common-aws-issues'],
    },
    'resume',
  ],
};

export default sidebars;
