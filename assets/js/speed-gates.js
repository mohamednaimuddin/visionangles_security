// ==========================================
// VISIONANGLES SECURITY - SPEED GATES PAGE SCRIPTS
// Performance Optimized
// ==========================================

// Page Loader - Optimized for faster loading
(function() {
    const loader = document.getElementById('loader');
    let resourcesLoaded = false;
    let minTimeElapsed = false;
    
    // Minimum display time for brand consistency
    setTimeout(() => {
        minTimeElapsed = true;
        hideLoaderIfReady();
    }, 600);
    
    function hideLoaderIfReady() {
        if (resourcesLoaded && minTimeElapsed && loader) {
            loader.classList.add('loaded');
            document.body.classList.add('page-loaded');
            // Use requestAnimationFrame for smoother transition
            requestAnimationFrame(() => {
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 400);
            });
        }
    }
    
    // Check if page is already loaded
    if (document.readyState === 'complete') {
        resourcesLoaded = true;
        hideLoaderIfReady();
    } else {
        window.addEventListener('load', function() {
            resourcesLoaded = true;
            hideLoaderIfReady();
        });
    }
})();

// Navbar scroll effect - debounced for performance
let scrollTimeout;
window.addEventListener('scroll', function() {
    if (!scrollTimeout) {
        scrollTimeout = requestAnimationFrame(function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            scrollTimeout = null;
        });
    }
}, { passive: true });

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navCenter = document.querySelector('.nav-center');
const navbar = document.getElementById('navbar');

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
        if (mobileMenuBtn) {
            mobileMenuBtn.classList.remove('active');
        }
        if (navCenter) {
            navCenter.classList.remove('mobile-open');
        }
        if (navbar) {
            navbar.classList.remove('menu-open');
        }
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
        if (mobileMenuBtn) {
            mobileMenuBtn.classList.remove('active');
        }
        if (navCenter) {
            navCenter.classList.remove('mobile-open');
        }
        if (navbar) {
            navbar.classList.remove('menu-open');
        }
    });
});

// Scroll to top
const scrollTopBtn = document.querySelector('.scroll-top');
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========================================
// PARTICLE ANIMATION SYSTEM
// ========================================
const canvas = document.getElementById('particleCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');

    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };

    // Set canvas size
    function resizeCanvas() {
        const hero = document.querySelector('.page-hero');
        if (hero) {
            canvas.width = hero.offsetWidth;
            canvas.height = hero.offsetHeight;
        }
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse position
    canvas.addEventListener('mousemove', function(e) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    canvas.addEventListener('mouseleave', function() {
        mouse.x = null;
        mouse.y = null;
    });

    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.baseSize = this.size;
            this.speedX = (Math.random() - 0.5) * 0.8;
            this.speedY = (Math.random() - 0.5) * 0.8;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.baseOpacity = this.opacity;
            this.pulse = Math.random() * Math.PI * 2;
            this.pulseSpeed = 0.02 + Math.random() * 0.02;
        }
        
        update() {
            // Pulsing effect
            this.pulse += this.pulseSpeed;
            const pulseFactor = Math.sin(this.pulse) * 0.3 + 1;
            this.size = this.baseSize * pulseFactor;
            
            // Movement
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Boundary check with wrap-around
            if (this.x > canvas.width + 10) this.x = -10;
            if (this.x < -10) this.x = canvas.width + 10;
            if (this.y > canvas.height + 10) this.y = -10;
            if (this.y < -10) this.y = canvas.height + 10;
            
            // Mouse interaction
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    this.x -= Math.cos(angle) * force * 3;
                    this.y -= Math.sin(angle) * force * 3;
                    this.size = this.baseSize * (1 + force);
                    this.opacity = Math.min(1, this.baseOpacity + force * 0.5);
                } else {
                    this.opacity = this.baseOpacity;
                }
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(45, 80%, 55%, ${this.opacity})`;
            ctx.shadowBlur = 15;
            ctx.shadowColor = 'rgba(201, 162, 39, 0.5)';
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    // Connection line class for extra visual effect
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    const opacity = (1 - distance / 120) * 0.15;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(201, 162, 39, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Initialize particles
    function initParticles() {
        particles = [];
        const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000));
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    initParticles();
    window.addEventListener('resize', initParticles);

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        
        // Draw connection lines
        drawConnections();
        
        requestAnimationFrame(animate);
    }

    animate();
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            animateOnScroll.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.brand-card, .service-card, .product-item, .feature-card').forEach(el => {
    animateOnScroll.observe(el);
});

// ========================================
// PRODUCTS SLIDER FUNCTIONALITY
// ========================================
function initSliders() {
    const sliderContainers = document.querySelectorAll('.products-slider-container');
    
    sliderContainers.forEach(container => {
        const slider = container.querySelector('.products-slider');
        const prevBtn = container.querySelector('.slider-prev');
        const nextBtn = container.querySelector('.slider-next');
        
        if (!slider || !prevBtn || !nextBtn) return;
        
        // Update arrow states based on scroll position
        function updateArrowStates() {
            const scrollLeft = slider.scrollLeft;
            const scrollWidth = slider.scrollWidth;
            const clientWidth = slider.clientWidth;
            const maxScroll = scrollWidth - clientWidth;
            
            // Disable prev button at start
            if (scrollLeft <= 5) {
                prevBtn.classList.add('disabled');
                prevBtn.setAttribute('aria-disabled', 'true');
            } else {
                prevBtn.classList.remove('disabled');
                prevBtn.setAttribute('aria-disabled', 'false');
            }
            
            // Disable next button at end
            if (scrollLeft >= maxScroll - 5) {
                nextBtn.classList.add('disabled');
                nextBtn.setAttribute('aria-disabled', 'true');
            } else {
                nextBtn.classList.remove('disabled');
                nextBtn.setAttribute('aria-disabled', 'false');
            }
        }
        
        // Initial state
        updateArrowStates();
        
        // Update on scroll
        slider.addEventListener('scroll', updateArrowStates, { passive: true });
        
        // Click handlers
        const scrollAmount = 400;
        
        prevBtn.addEventListener('click', function() {
            if (!this.classList.contains('disabled')) {
                slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        });
        
        nextBtn.addEventListener('click', function() {
            if (!this.classList.contains('disabled')) {
                slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        });
        
        // Update on window resize
        window.addEventListener('resize', updateArrowStates, { passive: true });
    });
}

// Initialize sliders when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSliders);
} else {
    initSliders();
}
