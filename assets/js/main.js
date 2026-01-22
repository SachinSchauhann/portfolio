document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================
    // 1. THEME SWITCHER
    // =========================================
    const themeBtns = document.querySelectorAll('.theme-btn');
    const htmlElement = document.documentElement;

    // Check for saved theme
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    }

    const themeOrder = ['neon', 'blue', 'purple', 'orange', 'red'];
    let autoDisabled = false;
    let currentTheme = savedTheme || htmlElement.getAttribute('data-theme') || 'neon';
    let idx = Math.max(0, themeOrder.indexOf(currentTheme));
    let autoTimer = null;

    const startAutoSwitch = () => {
        if (autoDisabled) return;
        if (autoTimer) clearInterval(autoTimer);
        autoTimer = setInterval(() => {
            idx = (idx + 1) % themeOrder.length;
            const next = themeOrder[idx];
            htmlElement.setAttribute('data-theme', next);
            if (next === 'neon') {
                localStorage.removeItem('selectedTheme');
            } else {
                localStorage.setItem('selectedTheme', next);
            }
        }, 4000);
    };

    startAutoSwitch();

    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const color = btn.getAttribute('data-color');
            htmlElement.setAttribute('data-theme', color);
            localStorage.setItem('selectedTheme', color);
            if (autoTimer) {
                clearInterval(autoTimer);
                autoTimer = null;
            }
            autoDisabled = true;
            
            // Animation for button click
            gsap.fromTo(btn, { scale: 0.8 }, { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1 });
        });
    });

    // =========================================
    // 2. HAMBURGER MENU
    // =========================================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate links
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger animation
        hamburger.classList.toggle('toggle');
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    const hashLinks = document.querySelectorAll('a[href^="#"]');
    hashLinks.forEach(a => {
        a.addEventListener('click', (e) => {
            const href = a.getAttribute('href');
            const id = href.slice(1);
            const target = document.getElementById(id) || document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.replaceState(null, '', location.pathname + location.search);
            }
        });
    });

    // =========================================
    // 3. TILT JS INITIALIZATION
    // =========================================
    // Using vanilla-tilt.js
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
            scale: 1.05
        });
    }

    // =========================================
    // 4. GSAP ANIMATIONS
    // =========================================
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Slide Down
    gsap.from('.navbar', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    });

    // Hero Animations
    const heroTl = gsap.timeline();
    
    heroTl.from('.hero-content > *', {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    })
    .from('.hero-image', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)'
    }, "-=0.5");

    // Social Bar
    gsap.from('.social-icon', {
        scrollTrigger: {
            trigger: '.social-bar',
            start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out',
        immediateRender: false
    });

    // About Section
    gsap.from('.about-content', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        immediateRender: false
    });

    // Skills Stagger
    gsap.from('.skill-card', {
        scrollTrigger: {
            trigger: '.skills-section',
            start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        immediateRender: false
    });

    // Projects Zoom In
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects-section',
            start: 'top 75%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        immediateRender: false
    });

    // Experience Slide In
    gsap.from('.experience-card', {
        scrollTrigger: {
            trigger: '.experience-section',
            start: 'top 75%',
        },
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        immediateRender: false
    });

    gsap.from('.training-wrapper', {
        scrollTrigger: {
            trigger: '.experience-section',
            start: 'top 70%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        immediateRender: false
    });

    // Education Timeline
    gsap.from('.timeline-item', {
        scrollTrigger: {
            trigger: '.education-section',
            start: 'top 75%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
    });

    // Footer Fade Up
    gsap.from('.footer', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

});
