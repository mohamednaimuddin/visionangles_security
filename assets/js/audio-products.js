// ==========================================
// VISIONANGLES SECURITY - AUDIO PRODUCTS PAGE SCRIPTS
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

// Hero Video Setup
(function() {
    const videoElement = document.getElementById('heroVideo');
    const videoSource = document.getElementById('videoSource');
    
    if (videoElement && videoSource) {
        videoSource.src = 'assets/video/audio/audio_solution.mp4';
        videoElement.load();
        
        // Disable fullscreen on double-click
        videoElement.addEventListener('dblclick', function(e) {
            e.preventDefault();
            e.stopPropagation();
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
const ctx = canvas.getContext('2d');

let particles = [];
let mouse = { x: null, y: null, radius: 150 };

// Set canvas size
function resizeCanvas() {
    const hero = document.querySelector('.page-hero');
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
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
        // Theme color variations (magenta/cyan)
        this.colorType = Math.random() > 0.5 ? 'magenta' : 'cyan';
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
        const goldHue = 45 + Math.random() * 15;
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

// Floating geometric shapes
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
        this.type = Math.floor(Math.random() * 3); // 0: hexagon, 1: triangle, 2: diamond
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
        ctx.strokeStyle = `rgba(201, 162, 39, ${this.opacity})`;
        ctx.lineWidth = 1;
        
        if (this.type === 0) {
            // Hexagon
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i;
                const x = Math.cos(angle) * this.size;
                const y = Math.sin(angle) * this.size;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.stroke();
        } else if (this.type === 1) {
            // Triangle
            ctx.beginPath();
            ctx.moveTo(0, -this.size);
            ctx.lineTo(this.size * 0.866, this.size * 0.5);
            ctx.lineTo(-this.size * 0.866, this.size * 0.5);
            ctx.closePath();
            ctx.stroke();
        } else {
            // Diamond
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
for (let i = 0; i < 8; i++) {
    shapes.push(new FloatingShape());
}

// Animation loop with IntersectionObserver for performance
let isAnimating = false;
let animationFrameId = null;

function animate() {
    if (!isAnimating) return;
    
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
