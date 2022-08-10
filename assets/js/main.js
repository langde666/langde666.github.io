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
let swiperPortfolio = new Swiper(".portfolio__container", {
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

// TESTIMONIAL SECTION
let swiperTestimonial = new Swiper(".testimonial__container", {
    cssMode: true,
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        },
    },
});


// SCROLL SECTION ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
});

// CHANGE BACKGROUND  HEADER
window.addEventListener('scroll', function(){
    const nav = document.getElementById('header');

    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    }
    else {
        nav.classList.remove('scroll-header')
    }
});

// SHOW SCROLL UP
window.addEventListener('scroll', function(){
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >=560) {
        scrollUp.classList.add('show-scroll');
    }
    else {
        scrollUp.classList.remove('show-scroll');
    }
});

// DARK LIGHT THEME
const themeBtn = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun';

// Previously selected
const selectedTheme = localStorage.getItem('selectedTheme');
const selectedIcon = localStorage.getItem('selectedIcon');

// Get current theme
const currentTheme = document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const currentIcon = themeBtn.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun';

// Handle previously selected etheme
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeBtn.classList[selectedIcon === 'fa-moon' ?  'add' : 'remove'](iconTheme);
}

// Theme Button
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeBtn.classList.toggle(iconTheme);

    // Save to localStorage
    localStorage.setItem('selectedTheme', currentTheme);
    localStorage.setItem('selectedIcon', currentIcon);
})
