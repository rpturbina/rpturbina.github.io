const WEBSITE_IDENTITY = {
    author: 'rpturbina',
    title: 'rpturbina | Personal Website',
    copyright: `© ${new Date().getFullYear()} by Rizki Pratama Turbina. All rights reserved.`,
};

document.querySelector('title').textContent = WEBSITE_IDENTITY.title;
document.querySelector('.author-logo').textContent = WEBSITE_IDENTITY.author;
document.querySelector('#copyright').textContent = WEBSITE_IDENTITY.copyright;

// Hide/show navbar shadow
window.addEventListener('scroll', () => {
    window.scrollTo = 0;

    const headNavbar = document.querySelector('.header');

    if (window.scrollY > 120) {
        headNavbar.classList.add('header-shadow');
        //  = '0.5rem 0 2rem 0 hsla(0, 0%, 0%, 0.2)';
    }
    if (window.scrollY < 120) {
        headNavbar.classList.remove('header-shadow');
        // headNavbar.style['box-shadow'] = 'none';
    }
});

// Show mobile navbar
const hamburgerIconOpen = document.querySelector('.hamburger-open');
hamburgerIconOpen.addEventListener('click', () => {
    const navbarMobile = document.querySelector('.navbar-mobile');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    body.style['overflowY'] = 'hidden';
    overlay.style.display = 'block';
    navbarMobile.classList.add('navbar-show');
});

// Hide mobile navbar
const hamburgerIconClose = document.querySelector('.hamburger-close');
hamburgerIconClose.addEventListener('click', () => {
    const navbarMobile = document.querySelector('.navbar-mobile');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    body.style['overflowY'] = 'initial';
    overlay.style.display = 'none';
    navbarMobile.classList.remove('navbar-show');
});

// Generate navlink item
const generateLinkItem = (navItem) => {
    const anchorItem = document.createElement('a');
    anchorItem.setAttribute('href', navItem.href);
    anchorItem.textContent = navItem.label;

    const linkItem = document.createElement('li');
    linkItem.appendChild(anchorItem);
    return linkItem;
};

// Nav items
const NAV_ITEMS = [
    {
        label: 'Home',
        href: '#home',
    },
    {
        label: 'Portofolio',
        href: '#portofolio',
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

// Render navlinks for desktop and mobile view
const navLinks = document.querySelector('.navlinks-desktop');
const mobileNavLinks = document.querySelector('.navlinks-mobile');

NAV_ITEMS.forEach((navItem) => {
    const linkItem = generateLinkItem(navItem);
    navLinks.appendChild(linkItem);
});

NAV_ITEMS.forEach((navItem) => {
    const linkItem = generateLinkItem(navItem);
    mobileNavLinks.appendChild(linkItem);
});

// Generate contact item
const generateContactItem = (contactItem) => {
    const imgItem = document.createElement('img');
    imgItem.setAttribute('src', contactItem.iconSrc);
    imgItem.setAttribute('alt', contactItem.label);
    imgItem.classList.add('contact-icon');

    const anchorItem = document.createElement('a');
    anchorItem.setAttribute('href', contactItem.href);
    anchorItem.setAttribute('target', '_blank');
    anchorItem.classList.add('contact-icon-anchor');
    anchorItem.appendChild(imgItem);

    const listItem = document.createElement('li');
    listItem.appendChild(anchorItem);

    return listItem;
};

// Contact items
const CONTACT_ITEMS = [
    {
        label: 'Github Icon',
        iconSrc: 'assets/images/github-icon.svg',
        href: 'https://github.com/rpturbina',
    },
    {
        label: 'LinkedIn Icon',
        iconSrc: 'assets/images/linkedin-icon.svg',
        href: 'https://www.linkedin.com/in/rpturbina/',
    },
    {
        label: 'Instagram Icon',
        iconSrc: 'assets/images/instagram-icon.svg',
        href: 'https://www.instagram.com/rpturbina/',
    },
    {
        label: 'Email Icon',
        iconSrc: 'assets/images/email-icon.svg',
        href: 'mailto:rizki.pratama.turbina@gmail.com',
    },
];

// Render contact items
const contactItems = document.querySelector('.contact-items');
CONTACT_ITEMS.forEach((item) => {
    const contactItem = generateContactItem(item);
    contactItems.appendChild(contactItem);
});

// Generate project items
const generateProjectItem = (projectItem) => {
    const projectTitle = document.createElement('h3');
    projectTitle.textContent = projectItem.title;

    const projectDescription = document.createElement('p');
    projectDescription.textContent = projectItem.description;
    projectDescription.classList.add('project-description');

    const projectTechStack = document.createElement('p');
    projectTechStack.innerHTML = `<strong>Tech Stack : </strong> ${projectItem.stack}`;

    const projectLink = document.createElement('div');
    projectLink.innerHTML = `
    <a href="${projectItem['project-repo']}" title="Go to project repository" target="_blank">
        <img
            src="assets/images/github-icon.svg"
            width="30"
            alt="Github Icon"
        />
    </a>
    <a href=${projectItem['project-demo']} title="Go to project live demo" target="_blank">
        <img
            src="assets/images/share-icon.svg"
            width="30"
            alt="Share Icon"
        />  
    </a>
    `;
    projectLink.classList.add('project-link');

    const sectionItem = document.createElement('section');
    sectionItem.append(projectTitle, projectDescription, projectTechStack, projectLink);
    sectionItem.classList.add('project-item');

    return sectionItem;
};

// Project items
const PROJECT_ITEMS = [
    {
        title: 'Tribute Page - B. J. Habibie',
        description:
            "I built this page for tribute and sharing about B. J. Habibie's life timeline and to complete the freeCodeCamp course about Responsive Web Design.",
        stack: 'HTML, CSS',
        'project-repo': 'https://github.com/rpturbina/fcc-tribute-page',
        'project-demo': 'https://rpturbina.github.io/fcc-tribute-page',
    },
    {
        title: 'Survey Form - freeCodeCamp',
        description:
            'I built this survey form for completing the freeCodeCamp course about Responsive Web Design.',
        stack: 'HTML, CSS, JavaScript',
        'project-repo': 'https://rpturbina.github.io/fcc-survey-form',
        'project-demo': 'https://github.com/rpturbina/fcc-survey-form',
    },
    {
        title: 'JavaScript Documentation Page',
        description:
            'I built this technical documentation page for completing the freeCodeCamp course about Responsive Web Design.',
        stack: 'HTML, CSS, JavaScript',
        'project-repo': 'https://github.com/rpturbina/fcc-technical-doc/',
        'project-demo': 'https://rpturbina.github.io/fcc-technical-doc/',
    },
];

// Render project items
const projecsWrapper = document.querySelector('.projects');
PROJECT_ITEMS.forEach((item) => {
    const projectItem = generateProjectItem(item);
    projecsWrapper.appendChild(projectItem);
});
