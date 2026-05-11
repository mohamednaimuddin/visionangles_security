// About Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Hide loader
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000);
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navCenter = document.querySelector('.nav-center');
    const navbar = document.getElementById('navbar');
    
    if (mobileMenuBtn && navCenter) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navCenter.classList.toggle('mobile-open');
            if (navbar) navbar.classList.toggle('menu-open');
        });
    }

    // Close menu when clicking a link (except dropdown toggles)
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.closest('.has-dropdown')) return;
        
        link.addEventListener('click', function() {
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
            if (navCenter) navCenter.classList.remove('mobile-open');
            if (navbar) navbar.classList.remove('menu-open');
        });
    });

    // Dropdown Toggle for Touch/Click (mobile support)
    const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');
    dropdownItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const dropdown = item.querySelector('.mega-dropdown');
        
        if (link && dropdown) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Close other dropdowns
                dropdownItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('dropdown-open');
                    }
                });
                
                // Toggle current dropdown
                item.classList.toggle('dropdown-open');
            });
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-item.has-dropdown')) {
            dropdownItems.forEach(item => {
                item.classList.remove('dropdown-open');
            });
        }
    });

    // Close dropdown when clicking a link inside it
    document.querySelectorAll('.mega-dropdown a').forEach(link => {
        link.addEventListener('click', function() {
            dropdownItems.forEach(item => {
                item.classList.remove('dropdown-open');
            });
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
            if (navCenter) navCenter.classList.remove('mobile-open');
            if (navbar) navbar.classList.remove('menu-open');
        });
    });

    // Navbar scroll effect (navbar already declared above)
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Scroll to top
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.mv-card, .value-card, .feature-item, .about-story');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add animate-in class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
