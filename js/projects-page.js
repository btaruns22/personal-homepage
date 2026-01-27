// projects-page.js - ES6 Module for All Projects Page

import { projects } from './flip-cards.js';
import { initializeThemeToggle } from './theme-toggle.js';

// Create flip card
function createFlipCard(project) {
  const card = document.createElement('div');
  card.className = 'flip-card';

  card.innerHTML = `
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src="${project.image}" alt="${project.title}" class="project-image" 
             onerror="this.src='https://via.placeholder.com/400x200?text=${encodeURIComponent(project.title)}'">
        <div class="project-front-content">
          <h3 class="project-title">${project.title}</h3>
          <div class="project-tech">
            ${project.tech.map((tech) => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
        </div>
      </div>
      
      <div class="flip-card-back">
        <h3>${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <ul class="project-features">
          ${project.features.map((feature) => `<li>${feature}</li>`).join('')}
        </ul>
        <div class="project-links">
          ${project.liveUrl !== '#' ? `<a href="${project.liveUrl}" target="_blank" rel="noopener" class="project-link">Live Demo</a>` : ''}
          <a href="${project.githubUrl}" target="_blank" rel="noopener" class="project-link">GitHub</a>
        </div>
      </div>
    </div>
  `;

  return card;
}

// Initialize all projects
function initializeAllProjects() {
  const grid = document.getElementById('all-projects-grid');
  if (!grid) return;

  grid.innerHTML = '';
  projects.forEach((project) => {
    const card = createFlipCard(project);
    grid.appendChild(card);
  });

  // Add mobile flip support
  const cards = document.querySelectorAll('.flip-card');
  cards.forEach((card) => {
    card.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        this.classList.toggle('flipped');
      }
    });
  });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  console.log('Projects page initialized');
  initializeAllProjects();
  initializeThemeToggle();
});
