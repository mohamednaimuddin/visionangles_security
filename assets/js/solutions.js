// Solutions Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // ==================== PAGE LOADER ====================
    const loader = document.getElementById('loader');
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            loader.classList.add('loaded');
            document.body.style.overflow = 'auto';
        }, 1500);
    });
    
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
    const animateElements = document.querySelectorAll('.solution-card, .approach-step, .stat-item, .amc-feature, .amc-plan');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
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
    
    // ==================== STATS COUNTER ANIMATION ====================
    const stats = document.querySelectorAll('.stat-number');
    let statsAnimated = false;
    
    function animateStats() {
        if (statsAnimated) return;
        
        const statsSection = document.querySelector('.solutions-stats');
        if (!statsSection) return;
        
        const rect = statsSection.getBoundingClientRect();
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            statsAnimated = true;
            
            stats.forEach(stat => {
                const text = stat.innerText;
                const hasPlus = text.includes('+');
                const hasPercent = text.includes('%');
                const hasSlash = text.includes('/');
                
                if (hasSlash) {
                    // Skip animation for "24/7"
                    return;
                }
                
                let target = parseInt(text.replace(/[^0-9]/g, ''));
                let current = 0;
                const increment = target / 50;
                const duration = 2000;
                const stepTime = duration / 50;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    
                    let displayValue = Math.floor(current);
                    if (hasPlus) displayValue += '+';
                    if (hasPercent) displayValue += '%';
                    
                    stat.innerText = displayValue;
                }, stepTime);
            });
        }
    }
    
    window.addEventListener('scroll', animateStats);
    animateStats(); // Check on load
    
});
