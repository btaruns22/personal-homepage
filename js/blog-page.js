// blog-page.js - ES6 Module for Blog Page

import { initializeThemeToggle } from './theme-toggle.js';

// Newsletter form handling
function initializeNewsletter() {
  const form = document.getElementById('newsletter-form');
  const status = document.getElementById('newsletter-status');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = this.querySelector('input[type="email"]').value;

    // Simulate subscription
    status.textContent = `Thanks for subscribing with ${email}! 🎉`;
    status.style.color = 'var(--accent-primary)';

    // Reset form
    this.reset();

    // Log to console
    console.log('Newsletter subscription:', email);

    // Clear message after 5 seconds
    setTimeout(() => {
      status.textContent = '';
    }, 5000);
  });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  console.log('Blog page initialized');
  initializeThemeToggle();
  initializeNewsletter();
});
