/**
 * Interactive Flat Panel Displays - JavaScript
 * Handles slider functionality, particle animations, and interactions
 */

// Page Loader - Optimized for faster loading (same as network-solutions)
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

document.addEventListener('DOMContentLoaded', function() {
    // Initialize sliders
    initSliders();
    
    // Initialize particle canvas
    initParticleCanvas();
    
    // Mobile menu
    initMobileMenu();
    
    // Scroll to top
    initScrollToTop();
});



/**
 * Product Sliders
 */
function initSliders() {
    const sliderContainers = document.querySelectorAll('.products-slider-container');
    
    sliderContainers.forEach(container => {
        const prevBtn = container.querySelector('.slider-prev');
        const nextBtn = container.querySelector('.slider-next');
        const sliderId = prevBtn?.getAttribute('data-slider');
        const slider = document.getElementById(sliderId);
        
        if (!slider) return;
        
        const track = slider.querySelector('.slider-track');
        const items = track?.querySelectorAll('.product-item');
        
        if (!items || items.length === 0) return;
        
        let currentIndex = 0;
        const itemsToShow = getItemsToShow();
        const maxIndex = Math.max(0, items.length - itemsToShow);
        
        function getItemsToShow() {
            if (window.innerWidth < 768) return 1;
            if (window.innerWidth < 1024) return 2;
            return 3;
        }
        
        function updateSlider() {
            const itemWidth = items[0].offsetWidth + 30; // Including gap
            track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            
            // Update button states
            prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
            nextBtn.style.opacity = currentIndex >= maxIndex ? '0.3' : '1';
        }
        
        prevBtn?.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });
        
        nextBtn?.addEventListener('click', () => {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateSlider();
            }
        });
        
        // Handle resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                currentIndex = 0;
                updateSlider();
            }, 250);
        });
        
        // Initial state
        updateSlider();
    });
}

/**
 * Particle Canvas Animation
 */
function initParticleCanvas() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    
    function resize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.color = `rgba(201, 162, 39, ${this.opacity})`;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Boundary check
            if (this.x < 0 || this.x > canvas.width ||
                this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }
    
    function init() {
        resize();
        particles = [];
        const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 15000));
        
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    const opacity = 0.15 * (1 - distance / 150);
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
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        connectParticles();
        animationId = requestAnimationFrame(animate);
    }
    
    init();
    animate();
    
    window.addEventListener('resize', () => {
        cancelAnimationFrame(animationId);
        init();
        animate();
    });
}

/**
 * Mobile Menu
 */
function initMobileMenu() {
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
}

/**
 * Scroll to Top
 */
function initScrollToTop() {
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
