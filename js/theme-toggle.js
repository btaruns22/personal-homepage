// theme-toggle.js - ES6 Module for Dark/Light Theme Toggle

const THEME_KEY = 'preferred-theme';

function getSavedTheme() {
  return localStorage.getItem(THEME_KEY) || 'dark';
}

function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

function applyTheme(theme) {
  if (theme === 'light') {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }
}

function toggleTheme() {
  const currentTheme = document.body.classList.contains('light-theme')
    ? 'light'
    : 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  applyTheme(newTheme);
  saveTheme(newTheme);
}

function initializeThemeToggle() {
  const savedTheme = getSavedTheme();
  applyTheme(savedTheme);

  const toggleButton = document.getElementById('theme-toggle');

  if (toggleButton) {
    toggleButton.addEventListener('click', toggleTheme);
  }
}

export { initializeThemeToggle };
