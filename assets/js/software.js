// Software Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // ==================== PAGE LOADER ====================
    const loader = document.getElementById('loader');

    function hideLoader() {
        if (!loader || loader.classList.contains('loaded')) return;
        loader.classList.add('loaded');
        document.body.style.overflow = 'auto';
        // Remove from DOM after the CSS transition so it can't block clicks
        setTimeout(function () {
            if (loader && loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        }, 700);
    }

    // Hide on window load (normal case)
    if (document.readyState === 'complete') {
        setTimeout(hideLoader, 600);
    } else {
        window.addEventListener('load', function () {
            setTimeout(hideLoader, 800);
        });
    }

    // Safety fallback: never let the loader stay longer than 4s,
    // even if a third-party resource (image, widget, font) hangs.
    setTimeout(hideLoader, 4000);
    
    // ==================== NAVBAR SCROLL EFFECT ====================
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ==================== MOBILE MENU ====================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navCenter = document.querySelector('.nav-center');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navCenter.classList.toggle('mobile-open');
            navbar.classList.toggle('menu-open');
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
    
    // ==================== SCROLL ANIMATIONS ====================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.software-card, .benefit-card, .stat-item');
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Add animation class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    // ==================== SCROLL TO TOP ====================
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
    
    // ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ==================== CARD HOVER EFFECTS ====================
    const softwareCards = document.querySelectorAll('.software-card');
    
    softwareCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // ==================== COUNTER ANIMATION FOR STATS ====================
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            
            // Check if target has special characters
            const text = element.textContent;
            if (text.includes('+')) {
                element.textContent = Math.floor(current) + '+';
            } else if (text.includes('%')) {
                element.textContent = Math.floor(current) + '%';
            } else if (text.includes('∞')) {
                element.textContent = '∞';
            } else {
                element.textContent = Math.floor(current);
            }
        }, 30);
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const text = element.textContent;
                
                // Parse the number
                const numMatch = text.match(/\d+/);
                if (numMatch) {
                    const target = parseInt(numMatch[0]);
                    animateCounter(element, target);
                }
                
                statsObserver.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
});
