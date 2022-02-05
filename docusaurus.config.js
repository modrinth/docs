const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Modrinth Documentation',
  tagline: 'Learn how to interact with the Modrinth API!',
  url: 'https://docs.modrinth.com',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'modrinth', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Modrinth',
      logo: {
        alt: 'Modrinth Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'getting-started',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: 'api-spec',
          position: 'left',
          label: 'API Spec',
          activeBasePath: 'api-spec',
        },
        {
          href: 'https://modrinth.com/',
          label: 'Main website',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/EUHuJHt',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/modrinth',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/modrinth/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Guavy LLC. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['http'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/modrinth/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    [
      'redocusaurus',
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        specs: [
          {
            spec: './static/openapi.yaml',
            routePath: '/api-spec/',
          },
        ],
        theme: {
          primaryColor: '#5DA426',
          redocOptions: {
            hideLoading: true,
            noAutoAuth: true,
          },
        },
      },
    ],
  ],
}
