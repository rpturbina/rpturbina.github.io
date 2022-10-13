const BASE_DOMAIN = 'rpturbina.me';

export const WEBSITE_IDENTITY = {
  author: 'rpturbina',
  title: 'rpturbina | Personal Website',
  copyright: `©${new Date().getFullYear()} by Rizki Pratama Turbina. All rights reserved.`,
};

// Nav items
export const NAV_ITEMS = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'Portfolio',
    href: '#portfolio',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
  {
    label: 'About',
    href: '#about',
  },
];

// Contact items
export const CONTACT_ITEMS = [
  {
    label: 'Github Icon',
    iconSrc: '/src/images/github-icon.svg',
    href: 'https://github.com/rpturbina',
  },
  {
    label: 'LinkedIn Icon',
    iconSrc: '/src/images/linkedin-icon.svg',
    href: 'https://www.linkedin.com/in/rpturbina/',
  },
  {
    label: 'Instagram Icon',
    iconSrc: '/src/images/instagram-icon.svg',
    href: 'https://www.instagram.com/rpturbina/',
  },
  {
    label: 'Email Icon',
    iconSrc: '/src/images/email-icon.svg',
    href: 'mailto:rizki.pratama.turbina@gmail.com',
  },
];

// Project items
export const PROJECT_ITEMS = [
  {
    title: 'UrSpotify App (Generasi Gigih 2.0 Final Project)',
    description:
      'UrSpotify is a web-based application that can create playlists for the Spotify app easily. This app consume Spotify Web API.',
    stack: 'React.js, Chakra UI',
    'project-repo': 'https://github.com/rpturbina/homework-spotify-app',
    'project-demo': `https://urspotify.${BASE_DOMAIN}/`,
  },
  {
    title: 'Tribute Page - B. J. Habibie',
    description:
      "I built this page for tribute and sharing about B. J. Habibie's life timeline and to complete the freeCodeCamp course about Responsive Web Design.",
    stack: 'HTML, CSS',
    'project-repo': 'https://github.com/rpturbina/fcc-tribute-page',
    'project-demo': `https://${BASE_DOMAIN}/fcc-tribute-page`,
  },
  {
    title: 'Survey Form - freeCodeCamp',
    description:
      'I built this survey form for completing the freeCodeCamp course about Responsive Web Design.',
    stack: 'HTML, CSS, JavaScript',
    'project-repo': 'https://github.com/rpturbina/fcc-survey-form',
    'project-demo': `https://${BASE_DOMAIN}/fcc-survey-form`,
  },
  {
    title: 'JavaScript Documentation Page',
    description:
      'I built this technical documentation page for completing the freeCodeCamp course about Responsive Web Design.',
    stack: 'HTML, CSS, JavaScript',
    'project-repo': 'https://github.com/rpturbina/fcc-technical-doc/',
    'project-demo': `https://${BASE_DOMAIN}/fcc-technical-doc/`,
  },
];
