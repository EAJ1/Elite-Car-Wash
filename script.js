// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// Observe testimonial cards
document.querySelectorAll('.testimonial-card').forEach(card => {
    observer.observe(card);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    document.querySelector('.hero-bg').style.transform = `translateY(${rate}px)`;
});

// Mouse movement effect on hero
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    document.querySelector('.hero-content').style.transform = `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
});

// Typing effect for hero text
const text = "Shine Like Never Before";
const textElement = document.querySelector('.animate-text');
let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    textElement.textContent = '';
    typeWriter();
});

// Form submission animation
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const button = e.target.querySelector('button');
    const originalText = button.textContent;

    button.textContent = 'Sending...';
    button.disabled = true;

    setTimeout(() => {
        button.textContent = 'Sent!';
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 2000);
    }, 1000);
});

// Dynamic bubble generation
function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.width = Math.random() * 100 + 50 + 'px';
    bubble.style.height = bubble.style.width;
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.top = '100%';
    bubble.style.animationDuration = Math.random() * 10 + 5 + 's';
    bubble.style.animationDelay = Math.random() * 5 + 's';

    document.querySelector('.hero-bg').appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 15000);
}

// Create bubbles periodically
setInterval(createBubble, 3000);

// Scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.width = '0%';
progressBar.style.height = '4px';
progressBar.style.background = 'linear-gradient(90deg, #fff, #ccc)';
progressBar.style.zIndex = '1001';
progressBar.style.transition = 'width 0.3s ease';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// Book Now button functionality
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(93, 64, 55, 0.95)';
    } else {
        header.style.background = 'rgba(93, 64, 55, 0.9)';
    }
});
