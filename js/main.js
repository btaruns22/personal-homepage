// main.js - Main ES6 Module Entry Point

import { initializeFlipCards } from './flip-cards.js';
import { initializeThemeToggle } from './theme-toggle.js';

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

function initializeScrollReveal() {
  const sections = document.querySelectorAll('section');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    section.classList.add('section-hidden');
    observer.observe(section);
  });
}

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

document.addEventListener('DOMContentLoaded', () => {
  console.log('Initializing portfolio...');

  initializeFlipCards();
  initializeThemeToggle();
  initializeSmoothScroll();
  initializeContactForm();
  initializeNavbarScroll();
  initializeScrollReveal();

  console.log('Portfolio initialized successfully!');
});
