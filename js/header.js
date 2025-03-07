document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname.split('/').pop();
    
    // Inject navigation
    document.body.insertAdjacentHTML('afterbegin', `
      <nav>
        <a href="index.html" class="logo-link">
          <img src="mathhamster.jpg" class="logo" alt="Algotism Logo">
        </a>
        <button class="hamburger" aria-label="Toggle navigation">
          ☰
        </button>
        <ul class="nav-links">
          <li><a href="index.html"${path === 'index.html' ? ' class="active-tab"' : ''}>Home</a></li>
          <li><a href="blog.html"${['blog.html', 'handshaking.html', 'derangements.html'].includes(path) ? ' class="active-tab"' : ''}>Blog</a></li>
          <li><a href="philosophy.html"${['philosophy.html', 'ak47.html'].includes(path) ? ' class="active-tab"' : ''}>Our Philosophy</a></li>
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