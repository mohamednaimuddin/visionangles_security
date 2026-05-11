// Partners Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Loader
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1500);
    }

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
    }

    // Close menu when clicking a regular nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.closest('.has-dropdown')) return;
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            navCenter.classList.remove('mobile-open');
            navbar.classList.remove('menu-open');
        });
    });

    // Dropdown Toggle for Mobile
    const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');
    dropdownItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const dropdown = item.querySelector('.mega-dropdown');
        if (link && dropdown) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                dropdownItems.forEach(otherItem => {
                    if (otherItem !== item) otherItem.classList.remove('dropdown-open');
                });
                item.classList.toggle('dropdown-open');
            });
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-item.has-dropdown')) {
            dropdownItems.forEach(item => item.classList.remove('dropdown-open'));
        }
    });

    // Close menu when clicking a link inside mega-dropdown
    document.querySelectorAll('.mega-dropdown a').forEach(link => {
        link.addEventListener('click', function() {
            dropdownItems.forEach(item => item.classList.remove('dropdown-open'));
            mobileMenuBtn.classList.remove('active');
            navCenter.classList.remove('mobile-open');
            navbar.classList.remove('menu-open');
        });
    });

    // Particle Canvas
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        
        function resizeCanvas() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.2;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            
            draw() {
                ctx.fillStyle = `rgba(201, 162, 39, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        function initParticles() {
            particles = [];
            const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }
        
        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            // Draw connections
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 120) {
                        ctx.strokeStyle = `rgba(201, 162, 39, ${0.1 * (1 - distance / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });
            
            requestAnimationFrame(animateParticles);
        }
        
        initParticles();
        animateParticles();
    }

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

    // Partner card hover effects
    const partnerCards = document.querySelectorAll('.partner-card');
    partnerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Animate stats on scroll
    const statNumbers = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                const numericValue = parseInt(finalValue.replace(/\D/g, ''));
                const suffix = finalValue.replace(/[0-9]/g, '');
                
                let current = 0;
                const increment = numericValue / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= numericValue) {
                        target.textContent = finalValue;
                        clearInterval(timer);
                    } else {
                        target.textContent = Math.floor(current) + suffix;
                    }
                }, 30);
                
                statsObserver.unobserve(target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
});
