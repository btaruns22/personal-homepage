// theme-toggle.js - ES6 Module for Dark/Light Theme Toggle

const THEME_KEY = 'preferred-theme';

// Get saved theme or default to dark
function getSavedTheme() {
  return localStorage.getItem(THEME_KEY) || 'dark';
}

// Save theme preference
function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

// Apply theme to document
function applyTheme(theme) {
  if (theme === 'light') {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }
}

// Toggle between themes
function toggleTheme() {
  const currentTheme = document.body.classList.contains('light-theme')
    ? 'light'
    : 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  applyTheme(newTheme);
  saveTheme(newTheme);
}

// Initialize theme toggle
function initializeThemeToggle() {
  // Apply saved theme on load
  const savedTheme = getSavedTheme();
  applyTheme(savedTheme);

  // Add event listener to toggle button
  const toggleButton = document.getElementById('theme-toggle');

  if (toggleButton) {
    toggleButton.addEventListener('click', toggleTheme);
  }
}

export { initializeThemeToggle };