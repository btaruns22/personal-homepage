// flip-cards.js - ES6 Module for 3D Flip Card Functionality

const projects = [
  {
    id: 1,
    title: 'Airbnb Listings Dashboard',
    image: 'images/project1.jpg',
    tech: ['JavaScript', 'Bootstrap', 'Fetch API'],
    description: 'A responsive web application displaying Airbnb listings with search and sort features.',
    features: [
      'Real-time search functionality',
      'Dynamic sorting options',
      'Statistics dashboard',
      'Responsive design',
    ],
    githubUrl: 'https://github.com/aaryapatil113', 
  },
  {
    id: 2,
    title: 'OncoFusion ML Framework',
    image: 'images/project2.jpg',
    tech: ['Python', 'Machine Learning', 'TensorFlow'],
    description: 'Machine learning framework for cancer detection using medical imaging data.',
    features: [
      'Multi-model ensemble approach',
      'High accuracy detection',
      'Real-time predictions',
      'Comprehensive reporting',
    ],
    githubUrl: 'https://github.com/aaryapatil113',
  },
  {
    id: 3,
    title: 'HTML CSS Concepts',
    image: 'images/project3.jpg',
    tech: ['HTML5', 'CSS3', 'Vanilla JS'],
    description: 'Interactive demonstration of core HTML and CSS concepts including box model, positioning, and typography.',
    features: [
      'Box model visualization',
      'Font size comparison',
      'CSS positioning examples',
      'SEO best practices',
    ],
    githubUrl: 'https://github.com/aaryapatil113',
  },
  {
    id: 4,
    title: 'E-Portfolio Website',
    image: 'images/project4.jpg',
    tech: ['HTML5', 'CSS3', 'ES6+'],
    description: 'Basic Portfolio ',
    features: [
      'Introduction Video',
      'Elevator pitch',
      'Smooth Transition ',
      'Contact info',
    ],
    githubUrl: 'https://github.com/aaryapatil113',
  },
  {
    id: 5,
    title: 'Restaurant Management DB',
    image: 'images/project5.jpg',
    tech: ['SQL', 'MySQL', 'Database Design'],
    description: 'Normalized database system for restaurant operations management.',
    features: [
      'Efficient query optimization',
      'Transaction management',
      'Data integrity constraints',
      'Comprehensive reporting',
    ],
    githubUrl: 'https://github.com/aaryapatil113',
  },
  {
    id: 6,
    title: 'Calendar Application',
    image: 'images/project6.jpg',
    tech: ['Java', 'MVC', 'Design Patterns'],
    description: 'Event scheduling application built using SOLID principles and MVC architecture.',
    features: [
      'SOLID design principles',
      'Model-View-Controller pattern',
      'Event management system',
      'Clean code architecture',
    ],
    githubUrl: 'https://github.com/aaryapatil113',
  },
];

function createFlipCard(project) {
  const card = document.createElement('article');
  card.className = 'flip-card';
  card.setAttribute('data-project-id', project.id);

  card.innerHTML = `
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src="${project.image}" alt="${project.title}" class="project-image" 
             onerror="this.src='https://via.placeholder.com/400x200?text=${encodeURIComponent(project.title)}'">
        <div class="project-front-content">
          <h3 class="project-title">${project.title}</h3>
          <ul class="project-tech">
            ${project.tech.map((tech) => `<li class="tech-tag">${tech}</li>`).join('')}
          </ul>
        </div>
      </div>
      
      <div class="flip-card-back">
        <h3>${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <ul class="project-features">
          ${project.features.map((feature) => `<li>${feature}</li>`).join('')}
        </ul>
        <div class="project-links">
          <a href="${project.githubUrl}" target="_blank" rel="noopener" class="project-link">View on GitHub</a>
        </div>
      </div>
    </div>
  `;

  return card;
}

function initializeFlipCards() {
  const grid = document.getElementById('projects-grid');

  if (!grid) {
    console.warn('Projects grid element not found');
    return;
  }

  grid.innerHTML = '';

  projects.forEach((project) => {
    const card = createFlipCard(project);
    grid.appendChild(card);
  });

  addMobileFlipSupport();
}

function addMobileFlipSupport() {
  const cards = document.querySelectorAll('.flip-card');

  cards.forEach((card) => {
    card.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        this.classList.toggle('flipped');
      }
    });
  });
}

export { initializeFlipCards, projects };
