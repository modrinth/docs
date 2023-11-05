/** @type {import('@docusaurus/types').DocusaurusConfig} */
const {exist} = require("joi");
module.exports = {
  title: 'Modrinth Documentation',
  tagline: "Need help doing something with Modrinth? This is the place!",
  url: 'https://docs.modrinth.com',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'modrinth',
  projectName: 'docs',
  themeConfig: {
    navbar: {
      title: 'modrinth',
      logo: {
        alt: 'Modrinth Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'faq/index',
          position: 'left',
          label: 'Knowledge Base',
        },
        {
          to: 'api-spec',
          position: 'left',
          label: 'API Routes',
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
      links: [
        {
          items: [
            {
              html: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 3307 593" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m1053 205.51c35.59 0 64.27 10.1 84.98 30.81 20.72 21.25 31.34 52.05 31.34 93.48v162.53h-66.4v-154.03c0-24.96-5.3-43.55-16.46-56.3-11.15-12.22-26.55-18.6-47.27-18.6-22.3 0-40.37 7.45-53.65 21.79-13.27 14.87-20.18 36.11-20.18 63.2v143.94h-66.4v-154.03c0-24.96-5.3-43.55-16.46-56.3-11.15-12.22-26.56-18.6-47.27-18.6-22.84 0-40.37 7.45-53.65 21.79-13.27 14.34-20.18 35.58-20.18 63.2v143.94h-66.4v-283.63h63.21v36.12c10.63-12.75 23.9-22.3 39.84-29.21 15.93-6.9 33.46-10.1 53.11-10.1 21.25 0 40.37 3.72 56.84 11.69 16.46 8.5 29.21 20.18 38.77 35.59 11.69-14.88 26.56-26.56 45.15-35.06 18.59-7.97 38.77-12.22 61.08-12.22zm329.84 290.54c-28.68 0-54.7-6.37-77.54-18.59a133.19 133.19 0 0 1-53.65-52.05c-13.28-21.78-19.65-46.74-19.65-74.9 0-28.14 6.37-53.1 19.65-74.88a135.4 135.4 0 0 1 53.65-51.53c22.84-12.21 48.86-18.59 77.54-18.59 29.22 0 55.24 6.38 78.08 18.6 22.84 12.21 40.9 29.74 54.18 51.52 12.75 21.77 19.12 46.74 19.12 74.89s-6.37 53.11-19.12 74.89c-13.28 22.3-31.34 39.83-54.18 52.05s-48.86 18.6-78.08 18.6zm0-56.83c24.44 0 44.62-7.97 60.55-24.43 15.94-16.47 23.9-37.72 23.9-64.27 0-26.56-7.96-47.8-23.9-64.27-15.93-16.47-36.11-24.43-60.55-24.43-24.43 0-44.61 7.96-60.02 24.43-15.93 16.46-23.9 37.71-23.9 64.27 0 26.55 7.97 47.8 23.9 64.27 15.4 16.46 35.6 24.43 60.02 24.43zm491.32-341v394.11h-63.74v-36.65a108.02 108.02 0 0 1-40.37 30.28c-16.46 6.9-34 10.1-53.65 10.1-27.08 0-51.52-5.85-73.3-18.07-21.77-12.21-39.3-29.21-51.52-51.52-12.21-21.78-18.59-47.27-18.59-75.95s6.38-54.18 18.6-75.96c12.21-21.77 29.74-38.77 51.52-50.99 21.77-12.21 46.2-18.06 73.3-18.06 18.59 0 36.11 3.2 51.52 9.56a106.35 106.35 0 0 1 39.83 28.69v-145.54h66.4zm-149.79 341c15.94 0 30.28-3.72 43.03-11.16 12.74-6.9 22.83-17.52 30.27-30.8s11.15-29.21 11.15-46.74-3.71-33.46-11.15-46.74-17.53-23.9-30.27-31.34c-12.75-6.9-27.1-10.62-43.03-10.62s-30.27 3.71-43.02 10.62c-12.75 7.43-22.84 18.06-30.28 31.34-7.43 13.28-11.15 29.2-11.15 46.74 0 17.53 3.72 33.46 11.15 46.74 7.44 13.28 17.53 23.9 30.28 30.8 12.75 7.44 27.09 11.16 43.02 11.16zm298.51-189.09c19.12-29.74 52.58-44.62 100.92-44.62v63.21a84.29 84.29 0 0 0-15.4-1.6c-26.03 0-46.22 7.44-60.56 22.32-14.34 15.4-21.78 37.18-21.78 65.33v137.56h-66.39v-283.63h63.2v41.43zm155.63-41.43h66.39v283.63h-66.4v-283.63zm33.46-46.74c-12.22 0-22.31-3.72-30.28-11.68a37.36 37.36 0 0 1-12.21-28.16c0-11.15 4.25-20.71 12.21-28.68 7.97-7.43 18.06-11.15 30.28-11.15 12.21 0 22.3 3.72 30.27 10.62 7.97 7.44 12.22 16.47 12.22 27.62 0 11.69-3.72 21.25-11.69 29.21-7.96 7.97-18.59 12.22-30.8 12.22zm279.38 43.55c35.59 0 64.27 10.63 86.05 31.34 21.78 20.72 32.4 52.05 32.4 92.95v162.53h-66.4v-154.03c0-24.96-5.84-43.55-17.52-56.3-11.69-12.22-28.15-18.6-49.93-18.6-24.43 0-43.55 7.45-57.9 21.79-14.34 14.87-21.24 36.11-21.24 63.73v143.41h-66.4v-283.63h63.21v36.65c11.16-13.28 24.97-22.84 41.43-29.74 16.47-6.9 35.59-10.1 56.3-10.1zm371.81 271.42a78.34 78.34 0 0 1-28.15 14.34 130.83 130.83 0 0 1-35.6 4.78c-31.33 0-55.23-7.97-72.23-24.43-17-16.47-25.5-39.84-25.5-71.17v-136.51h-46.73v-53.11h46.74v-64.8h66.4v64.8h75.95v53.11h-75.96v134.91c0 13.81 3.19 24.43 10.1 31.34 6.9 7.44 16.46 11.15 29.2 11.15 14.88 0 27.1-3.71 37.19-11.68l18.59 47.27zm214.05-271.42c35.59 0 64.27 10.63 86.05 31.34 21.77 20.72 32.4 52.05 32.4 92.95v162.53h-66.4v-154.03c0-24.96-5.84-43.55-17.53-56.3-11.68-12.22-28.15-18.6-49.92-18.6-24.44 0-43.56 7.45-57.9 21.79-14.34 14.87-21.24 36.11-21.24 63.73v143.41h-66.4v-394.1h66.4v143.4c11.15-11.68 24.43-20.71 40.9-27.09 15.93-5.84 33.99-9.03 53.64-9.03z" fill="currentColor" fill-rule="nonzero"/><g fill="var(--ifm-color-primary)"><path d="m29 424.4 188.2-112.95-17.15-45.48 53.75-55.21 67.93-14.64 19.67 24.21-31.32 31.72-27.3 8.6-19.52 20.05 9.56 26.6 19.4 20.6 27.36-7.28 19.47-21.38 42.51-13.47 12.67 28.5-43.87 53.78-73.5 23.27-32.97-36.7L55.06 467.94C46.1 456.41 35.67 440.08 29 424.4Zm543.03-230.25-149.5 40.32c8.24 21.92 10.95 34.8 13.23 49l149.23-40.26c-2.38-15.94-6.65-32.17-12.96-49.06Z"/><path d="M51.28 316.13c10.59 125 115.54 223.3 243.27 223.3 96.51 0 180.02-56.12 219.63-137.46l48.61 16.83c-46.78 101.34-149.35 171.75-268.24 171.75C138.6 590.55 10.71 469.38 0 316.13h51.28ZM.78 265.24C15.86 116.36 141.73 0 294.56 0c162.97 0 295.28 132.31 295.28 295.28 0 26.14-3.4 51.49-9.8 75.63l-48.48-16.78a244.28 244.28 0 0 0 7.15-58.85c0-134.75-109.4-244.15-244.15-244.15-124.58 0-227.49 93.5-242.32 214.11H.8Z"/><path d="M293.77 153.17c-78.49.07-142.2 63.83-142.2 142.34 0 78.56 63.79 142.34 142.35 142.34 3.98 0 7.93-.16 11.83-.49l14.22 49.76a194.65 194.65 0 0 1-26.05 1.74c-106.72 0-193.36-86.64-193.36-193.35 0-106.72 86.64-193.35 193.36-193.35 2.64 0 5.28.05 7.9.16l-8.05 50.85Zm58.2-42.13c78.39 24.67 135.3 97.98 135.3 184.47 0 80.07-48.77 148.83-118.2 178.18l-14.17-49.55c48.08-22.85 81.36-71.89 81.36-128.63 0-60.99-38.44-113.07-92.39-133.32l8.1-51.15Z"/></g></svg>',
            },
            {
              html: 'Modrinth is <a href="https://github.com/modrinth">open source</a>.'
            },
            {
              html: `modrinth/docs ${process.env.CF_PAGES_BRANCH || 'master'}@<a href="https://github.com/modrinth/docs/tree/${process.env.CF_PAGES_COMMIT_SHA || 'unknown'}">${process.env.CF_PAGES_COMMIT_SHA?.substring(0, 7) || 'unknown'}</a>`,
            },
            {
              html: `Public Domain/<a href="https://github.com/modrinth/docs/blob/master/LICENSE">CC0-1.0</a> (except Modrinth branding)`,
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Terms',
              href: 'https://modrinth.com/legal/terms',
            },
            {
              label: 'Privacy',
              href: 'https://modrinth.com/legal/privacy',
            },
            {
              label: 'Rules',
              href: 'https://modrinth.com/legal/rules',
            },
            {
              label: 'Careers',
              href: 'https://careers.modrinth.com',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Main website',
              href: 'https://modrinth.com',
            },
            {
              label: 'Blog',
              href: 'https://blog.modrinth.com/subscribe?utm_medium=website&utm_source=footer&utm_campaign=footer',
            },
            {
              label: 'Status',
              href: 'https://status.modrinth.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/modrinth',
            },
          ],
        },
        {
          title: 'Interact',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.modrinth.com',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/modrinth',
            },
            {
              label: 'Mastodon',
              href: 'https://floss.social/@modrinth',
            },
            {
              label: 'Crowdin',
              href: 'https://crowdin.com/project/modrinth',
            },
          ],
        },
      ],
      copyright: `<span style="font-size: .75rem">NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG.</span>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['http', 'groovy', 'toml'],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    metadata: [
      {
        name: 'publisher',
        content: 'Rinth, Inc.',
      },
      {
        name: 'theme-color',
        content: '#1bd96a',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:site',
        content: '@modrinth',
      },
    ],
    image: 'https://cdn.modrinth.com/modrinth-new.png',
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          editUrl: 'https://github.com/modrinth/docs/edit/master/',
          routeBasePath: '/',
          sidebarCollapsible: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
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
            route: '/api-spec/',
          },
        ],
        theme: {
          primaryColor: '#1bd96a',
          redocOptions: {
            hideLoading: true,
            noAutoAuth: true,
          },
        },
      },
    ],
  ],
  plugins: [
    [
      '@cmfcmf/docusaurus-search-local',
      {
        indexBlog: false,
      }
    ],
    [
      "docusaurus2-dotenv",
      {
        systemvars: true,
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects(path) {
          if (path.includes('/faq/app')) {
            return path.includes('#')
                ? path.replace('#', '/')
                : path.replace('/app', '')
          } else if (path.includes('/faq#')) {
            return path.replace('#', '/')
          }
          return undefined
        },
      },
    ],
  ],
}
