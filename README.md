# 🏠 Personal Portfolio - Aarya Patil

A modern, responsive personal portfolio website featuring 3D flip card animations and interactive components built with vanilla HTML5, CSS3, and ES6+ JavaScript.

![Portfolio Screenshot](images/screenshot.png)

## 🔗 Live Demo

**[View Live Site](https://aaryapatil113.github.io/personal-homepage/)**

## 👨‍💻 Author

**Aarya Patil**  
Master's Student in Computer Science  
Northeastern University - Khoury College  
[LinkedIn](https://linkedin.com/in/aarya-patil) | [GitHub](https://github.com/aaryapatil113)

## 🎯 Project Objective

This project demonstrates proficiency in front-end web development by creating a personal portfolio website that showcases:

- Modern JavaScript (ES6+ modules)
- Responsive CSS design (Grid & Flexbox)
- Interactive 3D animations
- Multi-page navigation
- Form validation
- Theme switching
- Semantic HTML5

**Course:** Web Development - Northeastern University  
**Instructor:** Professor John Guerra Gomez  
**Class Link:** [CS 5610 Web Development](https://johnguerra.co/classes/webDevelopment_fall_2024/)

## ✨ Creative Feature: 3D Flip Cards

The standout feature of this portfolio is the **interactive 3D flip card gallery** for projects:

- **Front Side:** Project thumbnail, title, and tech stack tags
- **Back Side:** Detailed description, features list, and action buttons
- **Interaction:** Hover to flip (desktop) or click to flip (mobile)
- **Animation:** Smooth 3D transform with perspective effect

This creates an engaging, memorable way to showcase projects that goes beyond standard card layouts.

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with:
  - CSS Grid for layout
  - Flexbox for components
  - CSS Variables for theming
  - 3D transforms for flip animation
  - Smooth transitions and animations
- **JavaScript (ES6+)**:
  - ES6 Modules
  - Async/Await
  - Arrow functions
  - Template literals
  - DOM manipulation
  - Event handling
- **Tools**:
  - Git/GitHub for version control
  - ESLint for code quality
  - Prettier for formatting
  - W3C Validator for compliance

## 📁 Project Structure
```
personal-homepage/
├── index.html              # Main homepage
├── projects.html           # All projects page
├── blog.html              # AI-generated blog page
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   ├── main.js           # Main entry point (ES6 module)
│   ├── flip-cards.js     # 3D flip card logic
│   ├── theme-toggle.js   # Dark/light theme switcher
│   ├── projects-page.js  # Projects page logic
│   └── blog-page.js      # Blog page logic
├── images/
│   ├── favicon.png       # Site favicon
│   ├── profile.jpg       # Profile photo
│   └── project*.jpg      # Project screenshots
├── .eslintrc.json        # ESLint configuration
├── .prettierrc           # Prettier configuration
├── package.json          # Project dependencies
├── LICENSE               # MIT License
└── README.md             # This file
```

## 🚀 Features

### Core Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light theme toggle with localStorage persistence
- ✅ Smooth scroll navigation
- ✅ Contact form with validation
- ✅ Three separate HTML pages with unique URLs
- ✅ SEO optimized with meta tags

### Interactive Elements
- ✅ **3D Flip Cards** - Hover/click to reveal project details
- ✅ **Theme Toggle** - Switch between dark and light modes
- ✅ **Form Validation** - Client-side email and input validation
- ✅ **Smooth Scrolling** - Seamless navigation between sections
- ✅ **Responsive Navigation** - Adapts to different screen sizes

### Technical Features
- ✅ ES6 Modules for code organization
- ✅ No external libraries (vanilla JavaScript)
- ✅ CSS Grid and Flexbox for layouts
- ✅ W3C compliant HTML
- ✅ ESLint compliant JavaScript
- ✅ Prettier formatted code
- ✅ All images have alt attributes
- ✅ Semantic HTML5 elements

## 📋 Setup Instructions

### Prerequisites

- Node.js (for ESLint and Prettier)
- Python 3 (for local server) or any HTTP server
- Modern web browser

### Local Development

1. **Clone the repository**
```bash
   git clone https://github.com/Aaryapatil113/personal-homepage.git
   cd personal-homepage
```

2. **Install dependencies**
```bash
   npm install
```

3. **Run local server** (required for ES6 modules)
```bash
   # Using Python
   python3 -m http.server 8000
   
   # Or use VS Code Live Server extension
```

4. **Open in browser**
```
   http://localhost:8000
```

### Build Commands
```bash
# Check code quality
npm run lint

# Format code
npm run format
```

## 🎨 Design Decisions

### Color Palette
- **Dark Theme (Default):**
  - Background: `#0f172a` (Navy)
  - Accent: `#3b82f6` (Blue)
  - Text: `#e2e8f0` (Light Gray)
  - Gradient: Purple to Blue
  
- **Light Theme:**
  - Background: `#ffffff` (White)
  - Text: `#1e293b` (Dark Gray)
  - Maintains same accent colors

### Typography
- **Headings:** Poppins (Bold, Modern)
- **Body:** Inter (Clean, Readable)
- **Sizing:** Responsive with rem units

### Layout Philosophy
- Mobile-first responsive design
- Maximum content width: 1200px
- Generous whitespace for readability
- Card-based components for consistency

## 📱 Pages Overview

### 1. Home (index.html)
- Hero section with introduction
- About section with profile photo and stats
- Featured projects with 3D flip cards (6 projects)
- Skills organized by category
- Contact form and information
- Footer with links

### 2. Projects (projects.html)
- Complete project gallery
- All projects displayed with flip cards
- Call-to-action section
- Consistent navigation

### 3. Blog (blog.html) - AI Generated
- Six blog posts on web development topics
- AI-generated content about:
  - ES6 Modules
  - CSS Grid vs Flexbox
  - Async/Await
  - UI/UX Design
  - Machine Learning integration
  - Personal journey
- Newsletter subscription form
- Tag-based categorization

## ✅ Requirements Checklist

- ✅ Uses ES6 modules (`type="module"`)
- ✅ Original creative component (3D flip cards)
- ✅ Deployed on GitHub Pages
- ✅ CSS/JS/Images in organized folders
- ✅ Meta tags for author, description, icon
- ✅ Original JavaScript functionality (100+ lines)
- ✅ Formatted with Prettier
- ✅ W3C compliant
- ✅ ESLint compliant
- ✅ All images have alt attributes
- ✅ At least 3 HTML pages with different URLs
- ✅ Uses classes for element identification
- ✅ Standard HTML tags (buttons, forms, etc.)
- ✅ CSS without !important
- ✅ Uses CSS Grid and Flexbox
- ✅ Clear and descriptive README
- ✅ package.json with dependencies
- ✅ MIT License included

## 🎥 Video Demo

[Watch Video Demo](https://youtu.be/YOUR_VIDEO_LINK) *(To be added)*

## 🐛 Known Issues

- Some project images use placeholders (actual screenshots to be added)
- Form submission is simulated (no backend)
- Newsletter subscription is front-end only

## 🔮 Future Enhancements

- [ ] Add blog post filtering by tags
- [ ] Implement dark mode transition animation
- [ ] Add project filtering by technology
- [ ] Integrate with a headless CMS for blog
- [ ] Add analytics tracking
- [ ] Implement actual contact form backend

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Professor John Guerra Gomez** - Course instruction and guidance
- **Northeastern University** - Educational resources
- **Google Fonts** - Typography (Inter & Poppins)
- **Placeholder.com** - Temporary image placeholders
- **Claude AI** - Code assistance and debugging support

---

**Built with ❤️ by Aarya Patil | January 2025**
