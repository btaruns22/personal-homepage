// main.js - Main ES6 Module Entry Point

import { initializeFlipCards } from './flip-cards.js';
import { initializeThemeToggle } from './theme-toggle.js';

// Photo click animation to reveal about text
function initializePhotoClick() {
  const profileImg = document.getElementById('profile-img');
  const aboutText = document.getElementById('about-text');
  const stats = document.querySelectorAll('.stat');

  if (!profileImg || !aboutText) {
    console.warn('Profile elements not found');
    return;
  }

  profileImg.addEventListener('click', function() {
    console.log('Photo clicked!');
    
    // Add spin animation to photo
    this.classList.add('clicked');
    
    // Remove spin class after animation
    setTimeout(() => {
      this.classList.remove('clicked');
    }, 600);

    // Show text with animation
    aboutText.classList.add('visible');
    
    // Show stats with stagger
    stats.forEach(stat => {
      stat.classList.add('visible');
    });
  });
}

// Smooth scroll for navigation links
function initializeSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
}

// Form validation and submission
function initializeContactForm() {
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      showFormStatus('error', 'Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormStatus('error', 'Please enter a valid email address.');
      return;
    }

    showFormStatus(
      'success',
      'Thank you! Your message has been received. I will get back to you soon!'
    );

    form.reset();
    console.log('Form submitted:', { name, email, message });
  });

  function showFormStatus(type, message) {
    formStatus.className = `form-status ${type}`;
    formStatus.textContent = message;

    setTimeout(() => {
      formStatus.className = 'form-status';
      formStatus.textContent = '';
    }, 5000);
  }
}

// Navbar scroll effect
function initializeNavbarScroll() {
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
  });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('Initializing portfolio...');

  initializeFlipCards();
  initializeThemeToggle();
  initializeSmoothScroll();
  initializeContactForm();
  initializeNavbarScroll();
  initializePhotoClick();  // MAKE SURE THIS IS HERE

  console.log('Portfolio initialized successfully!');
});