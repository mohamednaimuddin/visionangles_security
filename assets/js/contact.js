// Contact Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Hide loader when page is ready
    const loader = document.getElementById('loader');
    
    function hideLoader() {
        if (loader) {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }
    }
    
    // Hide loader immediately when DOM is ready (don't wait for external resources)
    hideLoader();

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

    // Initialize Leaflet Map — lazily, only when scrolled into view,
    // and only after the container has its final layout size.
    const mapContainer = document.getElementById('contact-map');
    if (mapContainer && typeof L !== 'undefined') {
        let mapInitialized = false;

        const initMap = () => {
            if (mapInitialized) return;
            mapInitialized = true;

            // Branch locations
            const locations = [
                {
                    name: "Head Office",
                    coords: [26.282234, 50.212013],
                    link: "https://maps.app.goo.gl/rYADwCbbud7wgos68",
                    isMain: true
                },
                {
                    name: "Al Khobar Showroom",
                    coords: [26.285198, 50.212366],
                    link: "https://maps.app.goo.gl/yeqsH3qESi6rozv78",
                    isMain: false
                },
                {
                    name: "Al Jubail Showroom",
                    coords: [27.001588, 49.649989],
                    link: "https://maps.app.goo.gl/vLPhLCWJuATvnnwi7",
                    isMain: false
                }
            ];

            // Compute bounds first so we can create the map directly at the
            // correct view — no initial setView/fitBounds re-render that would
            // cancel an earlier batch of tile requests.
            const bounds = L.latLngBounds(locations.map(l => l.coords)).pad(0.2);

            const map = L.map('contact-map', {
                scrollWheelZoom: false,
                zoomControl: true,
                preferCanvas: true
            }).fitBounds(bounds);

            // Add OpenStreetMap tiles
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors',
                maxZoom: 19,
                crossOrigin: true
            }).addTo(map);

            // Custom red marker icon
            const redIcon = L.divIcon({
                className: 'marker-red',
                html: '<div class="marker-pin"></div>',
                iconSize: [30, 30],
                iconAnchor: [15, 30],
                popupAnchor: [0, -30]
            });

            // Add markers
            locations.forEach(loc => {
                const marker = L.marker(loc.coords, { icon: redIcon }).addTo(map);
                marker.bindPopup(`
                    <div style="text-align: center; padding: 10px;">
                        <strong style="font-size: 14px; color: #1a1a2e;">${loc.name}</strong>
                        <br>
                        <a href="${loc.link}" target="_blank" rel="noopener" style="color: #c9a227; font-size: 12px; text-decoration: none;">
                            Get Directions &rarr;
                        </a>
                    </div>
                `);
            });

            // After the loader finishes its fade and any reflow settles,
            // tell Leaflet to recheck the container size. This prevents the
            // first batch of tiles from being requested for a stale viewport
            // and then canceled when the real size kicks in.
            const refresh = () => map.invalidateSize({ pan: false });
            requestAnimationFrame(() => requestAnimationFrame(refresh));
            window.addEventListener('load', refresh, { once: true });

            // Recompute on container resize (responsive layout shifts).
            if (typeof ResizeObserver !== 'undefined') {
                const ro = new ResizeObserver(() => map.invalidateSize({ pan: false }));
                ro.observe(mapContainer);
            }
        };

        // Defer creation until the map scrolls into view.
        if ('IntersectionObserver' in window) {
            const io = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        obs.disconnect();
                        initMap();
                    }
                });
            }, { rootMargin: '200px' });
            io.observe(mapContainer);
        } else {
            // Fallback: init immediately
            initMap();
        }
    }

    // Contact Form - AJAX submission with validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formMessage = document.getElementById('formMessage');
            const submitBtn = document.getElementById('submitBtn');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            
            // Get form fields
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value;
            const branch = document.getElementById('branch').value;
            const message = document.getElementById('message').value.trim();
            
            // Validation
            const errors = [];
            
            if (!name) errors.push('Full Name is required');
            if (!email) errors.push('Email Address is required');
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Please enter a valid email address');
            if (!subject) errors.push('Please select a subject');
            if (!branch) errors.push('Please select a branch');
            if (!message) errors.push('Message is required');
            
            // Show validation errors
            if (errors.length > 0) {
                formMessage.innerHTML = '<strong>Please fix the following:</strong><ul>' + 
                    errors.map(err => '<li>' + err + '</li>').join('') + '</ul>';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                return;
            }
            
            // Show loading state
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline';
            submitBtn.disabled = true;
            formMessage.style.display = 'none';
            
            try {
                // Submit via AJAX
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Success
                    formMessage.innerHTML = '<strong>Thank you!</strong> Your message has been sent successfully. We will get back to you soon.';
                    formMessage.className = 'form-message success';
                    formMessage.style.display = 'block';
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                // Error
                formMessage.innerHTML = '<strong>Oops!</strong> Something went wrong. Please try again or contact us directly.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
            } finally {
                // Reset button
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
                submitBtn.disabled = false;
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    // Animate contact cards on scroll
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

    const animateElements = document.querySelectorAll('.contact-card, .contact-form-wrapper');
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
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
