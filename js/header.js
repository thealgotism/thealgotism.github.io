document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname.split('/').pop();
    
    // Inject navigation
    document.body.insertAdjacentHTML('afterbegin', `
      <nav>
        <a href="index.html" class="logo-link">
          <img src="logo.jpg" class="logo" alt="Algotism Logo">
        </a>
        <button class="hamburger" aria-label="Toggle navigation">
          ☰
        </button>
        <ul class="nav-links">
          <li><a href="index.html"${path === 'index.html' ? ' class="active-tab"' : ''}>Home</a></li>
          <li><a href="blog.html"${path === 'blog.html' ? ' class="active-tab"' : ''}>Blog</a></li>
          <li><a href="learning-philosophy.html"${path === 'learning-philosophy.html' ? ' class="active-tab"' : ''}>Learning Philosophy</a></li>
          <li><a href="tutoring.html"${path === 'tutoring.html' ? ' class="active-tab"' : ''}>Tutoring</a></li>
        </ul>
      </nav>
    `);
  
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  
    // Close menu when a link is clicked (for mobile)
    navLinks.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
      }
    });
  });