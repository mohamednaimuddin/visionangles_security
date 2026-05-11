// ==========================================
// VISIONANGLES SECURITY - THERMAL CAMERAS PAGE SCRIPTS
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
            requestAnimationFrame(() => {
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 400);
            });
        }
    }
    
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
        this.classList.toggle('menu-open');
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
            mobileMenuBtn.classList.remove('menu-open');
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
            mobileMenuBtn.classList.remove('menu-open');
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
// PARTICLE ANIMATION SYSTEM - Thermal Theme
// ========================================
const canvas = document.getElementById('particleCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;

let particles = [];
let mouse = { x: null, y: null, radius: 150 };

// Set canvas size
function resizeCanvas() {
    if (!canvas) return;
    const hero = document.querySelector('.page-hero');
    if (hero) {
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
    }
}

if (canvas) {
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
}

// Thermal Particle class
class ThermalParticle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.baseSize = this.size;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.baseOpacity = this.opacity;
        // Thermal color spectrum: blue (cold) to red (hot)
        this.hue = Math.random() > 0.5 ? 
            Math.random() * 30 : // Orange-red (hot)
            Math.random() * 30 + 200; // Blue-cyan (cold)
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
        
        // Mouse interaction - particles get hotter (redder) near cursor
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
                // Get hotter (redder) near mouse
                this.hue = 15 + force * 15; // Shift towards red/orange
            } else {
                this.opacity = this.baseOpacity;
            }
        }
    }
    
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 85%, 55%, ${this.opacity})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `hsla(${this.hue}, 85%, 55%, 0.5)`;
        ctx.fill();
        ctx.shadowBlur = 0;
    }
}

// Connection line class with thermal gradient
function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
                const opacity = (1 - distance / 120) * 0.15;
                const avgHue = (particles[i].hue + particles[j].hue) / 2;
                ctx.beginPath();
                ctx.strokeStyle = `hsla(${avgHue}, 70%, 50%, ${opacity})`;
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
    if (!canvas) return;
    particles = [];
    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000));
    for (let i = 0; i < particleCount; i++) {
        particles.push(new ThermalParticle());
    }
}

if (canvas) {
    initParticles();
    window.addEventListener('resize', initParticles);
}

// Floating geometric shapes - heat circles
let shapes = [];

class FloatingShape {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 30 + 15;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.08 + 0.02;
        this.type = Math.floor(Math.random() * 3);
        // Thermal hue - spectrum from red to blue
        this.hue = Math.random() > 0.6 ? 15 : 200;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.y > canvas.height + 50) this.y = -50;
        if (this.y < -50) this.y = canvas.height + 50;
    }
    
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.strokeStyle = `hsla(${this.hue}, 70%, 50%, ${this.opacity})`;
        ctx.lineWidth = 1;
        
        if (this.type === 0) {
            // Thermal target circle
            ctx.beginPath();
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(0, 0, this.size * 0.6, 0, Math.PI * 2);
            ctx.stroke();
        } else if (this.type === 1) {
            // Crosshair
            ctx.beginPath();
            ctx.moveTo(-this.size, 0);
            ctx.lineTo(this.size, 0);
            ctx.moveTo(0, -this.size);
            ctx.lineTo(0, this.size);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(0, 0, this.size * 0.7, 0, Math.PI * 2);
            ctx.stroke();
        } else {
            // Diamond/Diamond
            ctx.beginPath();
            ctx.moveTo(0, -this.size);
            ctx.lineTo(this.size * 0.6, 0);
            ctx.lineTo(0, this.size);
            ctx.lineTo(-this.size * 0.6, 0);
            ctx.closePath();
            ctx.stroke();
        }
        
        ctx.restore();
    }
}

// Initialize floating shapes
if (canvas) {
    for (let i = 0; i < 8; i++) {
        shapes.push(new FloatingShape());
    }
}

// Animation loop with IntersectionObserver for performance
let isAnimating = false;
let animationFrameId = null;

function animate() {
    if (!isAnimating || !ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw floating shapes first (background)
    shapes.forEach(shape => {
        shape.update();
        shape.draw();
    });
    
    // Draw connections
    drawConnections();
    
    // Draw particles
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    animationFrameId = requestAnimationFrame(animate);
}

// Start/stop animation based on visibility
if (canvas) {
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!isAnimating) {
                    isAnimating = true;
                    animate();
                }
            } else {
                isAnimating = false;
                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                    animationFrameId = null;
                }
            }
        });
    }, { threshold: 0.1 });

    const heroSection = document.querySelector('.page-hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }

    // Start animation initially
    isAnimating = true;
    animate();
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
