// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Native visionOS',
  tagline: 'A framework for building native visionOS applications using React',
  favicon: './img/favicon.ico',
  url: 'https://callstack.github.io',
  baseUrl: '/react-native-visionos-docs/',
  organizationName: 'callstack', // Usually your GitHub org/user name.
  projectName: 'react-native-visionos-docs', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: './img/social-card.jpg',
      navbar: {
        title: 'React Native visionOS',
        logo: {
          alt: 'visionOS',
          src: './img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/callstack/react-native-visionos',
            label: 'GitHub',
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
                label: 'Getting Started',
                to: '/',
              },
            ],
          },
          {
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/callstack/react-native-visionos',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} - <a target="_blank" rel="noreferrer" href="https://callstack.com">Callstack Open Source</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
