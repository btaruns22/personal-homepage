// flip-cards.js - ES6 Module for 3D Flip Card Functionality

// Project data
const projects = [
  {
    id: 1,
    title: 'Airbnb Listings Dashboard',
    image: 'images/project1.jpg',
    tech: ['JavaScript', 'Bootstrap', 'Fetch API'],
    description:
      'A responsive web application displaying Airbnb listings with search and sort features.',
    features: [
      'Real-time search functionality',
      'Dynamic sorting options',
      'Statistics dashboard',
      'Responsive design',
    ],
    liveUrl: 'https://aaryapatil113.github.io/airbnb-listings/',
    githubUrl: 'https://github.com/aaryapatil113/airbnb-listings',
  },
  {
    id: 2,
    title: 'OncoFusion ML Framework',
    image: 'images/project2.jpg',
    tech: ['Python', 'Machine Learning', 'TensorFlow'],
    description:
      'Machine learning framework for cancer detection using medical imaging data.',
    features: [
      'Multi-model ensemble approach',
      'High accuracy detection',
      'Real-time predictions',
      'Comprehensive reporting',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/aaryapatil113/oncofusion',
  },
  {
    id: 3,
    title: 'E-Wallet Application',
    image: 'images/project3.jpg',
    tech: ['Flutter', 'Firebase', 'Dart'],
    description:
      'Mobile application for digital payments with secure authentication.',
    features: [
      'Secure payment processing',
      'Transaction history',
      'Real-time notifications',
      'Biometric authentication',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/aaryapatil113/e-wallet',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    image: 'images/project4.jpg',
    tech: ['HTML5', 'CSS3', 'ES6+'],
    description:
      'Personal portfolio with 3D flip cards and responsive design.',
    features: [
      '3D flip card animations',
      'Dark/Light theme toggle',
      'Smooth scroll navigation',
      'Form validation',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/aaryapatil113/portfolio',
  },
  {
    id: 5,
    title: 'Restaurant Management DB',
    image: 'images/project5.jpg',
    tech: ['SQL', 'MySQL', 'Database Design'],
    description:
      'Normalized database system for restaurant operations management.',
    features: [
      'Efficient query optimization',
      'Transaction management',
      'Data integrity constraints',
      'Comprehensive reporting',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/aaryapatil113/restaurant-db',
  },
  {
    id: 6,
    title: 'Task Management System',
    image: 'images/project6.jpg',
    tech: ['React', 'Node.js', 'MongoDB'],
    description: 'Collaborative task management tool with real-time updates.',
    features: [
      'Real-time collaboration',
      'Drag-and-drop interface',
      'Team notifications',
      'Analytics dashboard',
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/aaryapatil113/task-manager',
  },
];

// Create flip card HTML
function createFlipCard(project) {
  const card = document.createElement('div');
  card.className = 'flip-card';
  card.setAttribute('data-project-id', project.id);

  card.innerHTML = `
    <div class="flip-card-inner">
      <!-- Front -->
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
      
      <!-- Back -->
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

// Initialize flip cards
function initializeFlipCards() {
  const grid = document.getElementById('projects-grid');

  if (!grid) {
    console.warn('Projects grid element not found');
    return;
  }

  // Clear existing content
  grid.innerHTML = '';

  // Create and append cards
  projects.forEach((project) => {
    const card = createFlipCard(project);
    grid.appendChild(card);
  });

  // Add click event for mobile
  addMobileFlipSupport();
}

// Add mobile flip support (click instead of hover)
function addMobileFlipSupport() {
  const cards = document.querySelectorAll('.flip-card');

  cards.forEach((card) => {
    card.addEventListener('click', function () {
      // Toggle flipped class for mobile
      if (window.innerWidth <= 768) {
        this.classList.toggle('flipped');
      }
    });
  });
}

// Export functions
export { initializeFlipCards, projects };