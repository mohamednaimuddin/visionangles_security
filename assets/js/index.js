// ==========================================
// VISIONANGLES SECURITY - INDEX PAGE SCRIPTS
// ==========================================

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Slider functionality
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
const quotes = document.querySelectorAll('.hero-quote');
let currentSlide = 0;

function goToSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    quotes.forEach(quote => quote.classList.remove('active'));
    
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    quotes[index].classList.add('active');
    currentSlide = index;
}

// Auto-slide every 5 seconds
setInterval(() => {
    let nextSlide = (currentSlide + 1) % slides.length;
    goToSlide(nextSlide);
}, 5000);

// Slide indicators click
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
        goToSlide(index);
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navCenter = document.querySelector('.nav-center');
const navbar = document.getElementById('navbar');

mobileMenuBtn.addEventListener('click', function() {
    mobileMenuBtn.classList.toggle('active');
    navCenter.classList.toggle('mobile-open');
    navbar.classList.toggle('menu-open');
});

// Close menu when clicking a link (except dropdown toggles)
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.closest('.has-dropdown')) return;
    
    link.addEventListener('click', function() {
        mobileMenuBtn.classList.remove('active');
        navCenter.classList.remove('mobile-open');
        navbar.classList.remove('menu-open');
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
        mobileMenuBtn.classList.remove('active');
        navCenter.classList.remove('mobile-open');
        navbar.classList.remove('menu-open');
    });
});


// Page Loader - Quick fade out
window.addEventListener('load', function() {
    document.getElementById('loader').classList.add('loaded');
    document.body.classList.add('page-loaded');
});

// Horizontal Scroll with Sticky Lock Effect
const productsSection = document.getElementById('productsSection');
const productsTrack = document.getElementById('productsTrack');
const progressBar = document.getElementById('productsProgressBar');

let productsCurrentX = 0;
let productsTargetX = 0;

function updateHorizontalScroll() {
    const rect = productsSection.getBoundingClientRect();
    const sectionHeight = productsSection.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollableDistance = sectionHeight - viewportHeight;
    
    // Calculate how far we've scrolled into the section
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
    
    // Calculate the track scroll width
    const trackScrollWidth = productsTrack.scrollWidth - window.innerWidth + 100;
    
    // Set target position
    productsTargetX = -progress * trackScrollWidth;
    
    // Update progress bar
    progressBar.style.width = `${progress * 100}%`;
}

// Smooth animation loop for products section
function animateProductsScroll() {
    // Lerp (linear interpolation) for smooth movement
    productsCurrentX += (productsTargetX - productsCurrentX) * 0.1;
    
    if (productsTrack) {
        productsTrack.style.transform = `translateX(${productsCurrentX}px)`;
    }
    
    requestAnimationFrame(animateProductsScroll);
}

// Start animation loop
animateProductsScroll();

// Listen for scroll events
window.addEventListener('scroll', updateHorizontalScroll);
window.addEventListener('resize', updateHorizontalScroll);

// Initial call
updateHorizontalScroll();

// Software Section Horizontal Scroll
const softwareSection = document.getElementById('softwareSection');
const softwareTrack = document.getElementById('softwareTrack');
const softwareProgressBar = document.getElementById('softwareProgressBar');

let softwareCurrentX = 0;
let softwareTargetX = 0;

function updateSoftwareScroll() {
    if (!softwareSection || !softwareTrack) return;
    
    const rect = softwareSection.getBoundingClientRect();
    const sectionHeight = softwareSection.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollableDistance = sectionHeight - viewportHeight;
    
    // Calculate how far we've scrolled into the section
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
    
    // Calculate the track scroll width
    const trackScrollWidth = softwareTrack.scrollWidth - window.innerWidth + 100;
    
    // Set target position
    softwareTargetX = -progress * trackScrollWidth;
    
    // Update progress bar
    if (softwareProgressBar) {
        softwareProgressBar.style.width = `${progress * 100}%`;
    }
}

// Smooth animation loop for software section
function animateSoftwareScroll() {
    // Lerp (linear interpolation) for smooth movement
    softwareCurrentX += (softwareTargetX - softwareCurrentX) * 0.1;
    
    if (softwareTrack) {
        softwareTrack.style.transform = `translateX(${softwareCurrentX}px)`;
    }
    
    requestAnimationFrame(animateSoftwareScroll);
}

// Start animation loop
animateSoftwareScroll();

// Listen for scroll events
window.addEventListener('scroll', updateSoftwareScroll);
window.addEventListener('resize', updateSoftwareScroll);

// Initial call
updateSoftwareScroll();

// ==========================================
// LEAFLET MAP INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure container is ready
    setTimeout(function() {
        const mapContainer = document.getElementById('leaflet-map');
        if (!mapContainer) return;
        
        // Create map centered on Eastern Province
        const map = L.map('leaflet-map', {
            center: [26.65, 49.85],
            zoom: 9,
            zoomControl: true,
            scrollWheelZoom: false
        });

        // Light theme map tiles (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(map);

        // Force map to recalculate size
        setTimeout(() => map.invalidateSize(), 100);

        // Custom red marker icon
        const redIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div class="marker-red">
                <svg viewBox="0 0 24 24" fill="#ea4335" width="32" height="32">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
            </div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        });

        // Larger red icon for Head Office
        const redIconLarge = L.divIcon({
            className: 'custom-marker custom-marker-main',
            html: `<div class="marker-red marker-red-main">
                <div class="marker-pulse-ring"></div>
                <svg viewBox="0 0 24 24" fill="#d93025" width="44" height="44">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
            </div>`,
            iconSize: [44, 44],
            iconAnchor: [22, 44],
            popupAnchor: [0, -44]
        });

        // Location coordinates (extracted from Google Maps links)
        const locations = [
            {
                name: "Head Office - Al Khobar",
                coords: [26.282234, 50.212013],
                link: "https://maps.app.goo.gl/rYADwCbbud7wgos68",
                icon: redIconLarge,
                isMain: true
            },
            {
                name: "Al Khobar Showroom",
                coords: [26.285198, 50.212366],
                link: "https://maps.app.goo.gl/yeqsH3qESi6rozv78",
                icon: redIcon,
                isMain: false
            },
            {
                name: "Al Jubail Showroom",
                coords: [27.001588, 49.649989],
                link: "https://maps.app.goo.gl/vLPhLCWJuATvnnwi7",
                icon: redIcon,
                isMain: false
            }
        ];

        // Add markers to map
        locations.forEach(loc => {
            const marker = L.marker(loc.coords, { icon: loc.icon }).addTo(map);
            
            // Create popup
            const popupContent = `
                <div class="map-popup">
                    <strong>${loc.name}</strong>
                    <br>
                    <a href="${loc.link}" target="_blank" class="popup-link">
                        Open in Google Maps →
                    </a>
                </div>
            `;
            marker.bindPopup(popupContent);
            
            // Open popup on hover
            marker.on('mouseover', function() {
                this.openPopup();
            });
        });

        // Fit bounds to show all markers with better padding
        const bounds = L.latLngBounds(locations.map(loc => loc.coords));
        map.fitBounds(bounds, { padding: [80, 80], maxZoom: 10 });
    }, 200);

    // Scroll to Top Button
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Show/hide scroll button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
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
});
