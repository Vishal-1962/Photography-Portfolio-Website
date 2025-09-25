document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const mobileNavLinks = document.querySelectorAll('.nav-link-mobile');
    const sections = document.querySelectorAll('section[id]');
    const desktopNavLinks = document.querySelectorAll('header .nav-link');
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('is-open');
        menuOverlay.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden');
    };

    hamburgerButton.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const highlightNav = () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 100) {
                currentSectionId = section.getAttribute('id');
            }
        });

        desktopNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', highlightNav);
    highlightNav();

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        contactForm.style.display = 'none';
        successMessage.classList.remove('hidden');
    });
});
