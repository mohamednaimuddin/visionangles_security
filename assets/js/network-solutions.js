// ==========================================
// VISIONANGLES SECURITY - NETWORK SOLUTIONS PAGE SCRIPTS
// Performance Optimized
// ==========================================

// Page Loader - Optimized for faster loading
(function() {
    const loader = document.getElementById('loader');
    let resourcesLoaded = false;
    let minTimeElapsed = false;
    
    // Minimum display time for brand consistency (reduced from 1500ms)
    setTimeout(() => {
        minTimeElapsed = true;
        hideLoaderIfReady();
    }, 600);
    
    function hideLoaderIfReady() {
        if (resourcesLoaded && minTimeElapsed && loader) {
            loader.classList.add('loaded');
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

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navCenter = document.querySelector('.nav-center');
const navbar = document.getElementById('navbar');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navCenter.classList.toggle('mobile-open');
        navbar.classList.toggle('menu-open');
    });
    
    // Close menu when clicking a link (except dropdown toggles)
    document.querySelectorAll('.nav-link').forEach(link => {
        // Skip the Products dropdown link
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
}

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
        // Also close mobile menu
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

// Particle Canvas Animation - Optimized for performance
const canvas = document.getElementById('particleCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId = null;
    let isVisible = true;
    let canvasWidth = 0;
    let canvasHeight = 0;
    
    // Use Intersection Observer to pause animation when not visible
    const observer = new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
        if (isVisible && !animationId) {
            animationId = requestAnimationFrame(drawParticles);
        }
    }, { threshold: 0.1 });
    observer.observe(canvas);
    
    function resizeCanvas() {
        const hero = document.querySelector('.page-hero');
        if (hero) {
            canvasWidth = hero.offsetWidth;
            canvasHeight = hero.offsetHeight;
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
        }
    }
    
    function createParticles() {
        particles = [];
        // Particle count based on canvas area
        const particleCount = Math.min(Math.floor((canvasWidth * canvasHeight) / 15000), 60);
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvasWidth,
                y: Math.random() * canvasHeight,
                radius: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: 0.02 + Math.random() * 0.02
            });
        }
    }
    
    function drawParticles() {
        if (!isVisible) {
            animationId = null;
            return;
        }
        
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        
        particles.forEach((particle) => {
            // Pulsing effect
            particle.pulse += particle.pulseSpeed;
            const pulseFactor = Math.sin(particle.pulse) * 0.3 + 1;
            const currentRadius = particle.radius * pulseFactor;
            
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Wrap around edges
            if (particle.x > canvasWidth + 10) particle.x = -10;
            if (particle.x < -10) particle.x = canvasWidth + 10;
            if (particle.y > canvasHeight + 10) particle.y = -10;
            if (particle.y < -10) particle.y = canvasHeight + 10;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, currentRadius, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(45, 80%, 55%, ${particle.opacity})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(201, 162, 39, 0.4)';
            ctx.fill();
            ctx.shadowBlur = 0;
        });
        
        // Draw connections between nearby particles
        ctx.lineWidth = 0.5;
        const connectionDistance = 100;
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                
                if (Math.abs(dx) < connectionDistance && Math.abs(dy) < connectionDistance) {
                    const distSq = dx * dx + dy * dy;
                    if (distSq < connectionDistance * connectionDistance) {
                        const opacity = (1 - Math.sqrt(distSq) / connectionDistance) * 0.15;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(201, 162, 39, ${opacity})`;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }
        
        animationId = requestAnimationFrame(drawParticles);
    }
    
    // Debounced resize handler
    let resizeTimeout;
    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            resizeCanvas();
            createParticles();
        }, 150);
    }
    
    resizeCanvas();
    createParticles();
    animationId = requestAnimationFrame(drawParticles);
    
    window.addEventListener('resize', handleResize, { passive: true });
}

// Products Slider Functionality with disabled state
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
