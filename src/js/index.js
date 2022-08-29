import { WEBSITE_IDENTITY, NAV_ITEMS, CONTACT_ITEMS, PROJECT_ITEMS } from './constant.js';

// Render website identity
document.querySelector('title').textContent = WEBSITE_IDENTITY.title;
document.querySelector('.author-logo').textContent = WEBSITE_IDENTITY.author;
document.querySelector('#copyright').textContent = WEBSITE_IDENTITY.copyright;

// Hide/show navbar shadow
window.addEventListener('scroll', () => {
    window.scrollTo = 0;

    const headNavbar = document.querySelector('.header');

    if (window.scrollY > 90) {
        headNavbar.classList.add('header-shadow');
        //  = '0.5rem 0 2rem 0 hsla(0, 0%, 0%, 0.2)';
    }
    if (window.scrollY < 90) {
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

// Render contact items
const contactItems = document.querySelector('.contact-items');
CONTACT_ITEMS.forEach((item) => {
    const contactItem = generateContactItem(item);
    contactItems.appendChild(contactItem);
});

// Generate project items
const generateProjectItem = (projectItem) => {
    const projectTitle = document.createElement('h3');
    projectTitle.classList.add('project-title');
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
            src="/src/images/github-icon.svg"
            width="30"
            alt="Github Icon"
        />
    </a>
    <a href=${projectItem['project-demo']} title="Go to project live demo" target="_blank">
        <img
            src="/src/images/share-icon.svg"
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

// Render project items
const projecsWrapper = document.querySelector('.projects');
PROJECT_ITEMS.forEach((item) => {
    const projectItem = generateProjectItem(item);
    projecsWrapper.appendChild(projectItem);
});

// Customize styling for portfolio section
const portfolioSection = document.getElementById('portfolio');
if (PROJECT_ITEMS.length > 3) {
    portfolioSection.style.paddingTop = '96px';
}
