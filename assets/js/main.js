// MENU
const navMemu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMemu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMemu.classList.remove('show-menu');
    });
}

// MOBILE MENU
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(navLink => navLink.addEventListener('click', () => {
    navMemu.classList.remove('show-menu');
}));

// SKILLS SECTION
const skillsConents = document.querySelectorAll('.skills__content');
const skillsHeaders = document.querySelectorAll('.skills__header');

skillsHeaders.forEach(skillsHeader => {
    skillsHeader.addEventListener('click', function() {
        let parentClassName = this.parentNode.className;

        if (parentClassName === 'skills__content skills__close') {
            this.parentNode.className = 'skills__content skills__open';
        }
        else {
            this.parentNode.className = 'skills__content skills__close';
        }
    });
});