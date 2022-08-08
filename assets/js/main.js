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

// QUALIFICATION SECTION
const qualificationTabs = document.querySelectorAll('[data-target]');
const qualificationContents = document.querySelectorAll('[data-content]');

qualificationTabs.forEach(clickTab => {
    clickTab.addEventListener('click', () => {
        const targetContent = document.querySelector(clickTab.dataset.target);

        qualificationContents.forEach(qualificationContent => {
            qualificationContent.classList.remove('qualification__active');
        });
        targetContent.classList.add('qualification__active');

        qualificationTabs.forEach(qualificationTab => {
            qualificationTab.classList.remove('qualification__active');
        })
        clickTab.classList.add('qualification__active');
    });
});

// SERVICES SECTION
const servicesBtns = document.querySelectorAll('.services__button');
const servicesModals = document.querySelectorAll('.services__modal');
const servicesModalCloses = document.querySelectorAll('.services__modal-close');

servicesBtns.forEach((servicesBtn, index) => {
    servicesBtn.addEventListener('click', () => {
        servicesModals[index].classList.add('active-modal');
    });
});

servicesModalCloses.forEach(servicesModalClose => {
    servicesModalClose.addEventListener('click', () => {
        servicesModals.forEach(servicesModal => {
            servicesModal.classList.remove('active-modal');
        })
    });
});

// PORTFOLIO SECTION
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});