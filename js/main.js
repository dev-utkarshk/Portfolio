/**
 * ==========================================================================
 * PORTFOLIO CLIENT-SIDE JAVASCRIPT
 * Features:
 *   1. Dark / Light Theme Toggle (with localStorage memory)
 *   2. Mobile Navigation Drawer (Open / Close on click)
 *   3. Smooth Auto-close on link navigation
 *   4. Scroll Spy (Active navigation link highlighting on scroll)
 * ==========================================================================
 */

// Wait for the HTML document to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. SELECT DOM ELEMENTS
     ========================================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const menuToggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  /* ==========================================================================
     2. THEME TOGGLE (DARK / LIGHT MODE + LOCALSTORAGE)
     ========================================================================== */

  // Function to apply a given theme ('dark' or 'light')
  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  // Function to determine the initial theme when the visitor opens the site
  function initializeTheme() {
    // Check if the user previously saved a theme preference in this browser
    const savedTheme = localStorage.getItem('portfolio-theme');

    if (savedTheme) {
      // If a saved preference exists, apply it
      applyTheme(savedTheme);
    } else {
      // Default to dark theme as planned
      applyTheme('dark');
    }
  }

  // Function to toggle between dark and light themes
  function toggleTheme() {
    const isCurrentlyLight = document.documentElement.getAttribute('data-theme') === 'light';
    const newTheme = isCurrentlyLight ? 'dark' : 'light';

    // 1. Update the HTML page attribute
    applyTheme(newTheme);

    // 2. Save the new preference to localStorage so it persists across refreshes
    localStorage.setItem('portfolio-theme', newTheme);
  }

  // Attach click event listener to the theme toggle button
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Initialize theme on initial page load
  initializeTheme();


  /* ==========================================================================
     3. MOBILE NAVIGATION MENU TOGGLE
     ========================================================================== */

  // Function to toggle the mobile menu open/closed state
  function toggleMobileMenu() {
    const isMenuOpen = navMenu.classList.toggle('open');
    
    // Update the accessibility attribute so screen readers know the menu state
    menuToggleBtn.setAttribute('aria-expanded', isMenuOpen ? 'true' : 'false');
  }

  // Function to close the mobile menu
  function closeMobileMenu() {
    if (navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      menuToggleBtn.setAttribute('aria-expanded', 'false');
    }
  }

  // Open/Close menu when the hamburger icon button is clicked
  if (menuToggleBtn && navMenu) {
    menuToggleBtn.addEventListener('click', toggleMobileMenu);
  }

  // Automatically close the mobile menu whenever any navigation link is clicked
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Optional UX polish: Close the mobile menu if the user clicks anywhere outside the menu
  document.addEventListener('click', (event) => {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnToggleBtn = menuToggleBtn.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggleBtn) {
      closeMobileMenu();
    }
  });


  /* ==========================================================================
     4. SCROLL SPY (ACTIVE NAVIGATION LINK HIGHLIGHTING)
     ========================================================================== */

  // Function to highlight the navbar link corresponding to the section on screen
  function handleScrollSpy() {
    // Current vertical scroll position from top + small offset for header height
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      // Check if current scroll position is within this section's vertical boundary
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove active class from all navigation links
        navLinks.forEach((link) => link.classList.remove('active'));

        // Find the matching link and add the 'active' class
        const matchingLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
        if (matchingLink) {
          matchingLink.classList.add('active');
        }
      }
    });
  }

  // Listen for window scroll events
  window.addEventListener('scroll', handleScrollSpy);

  // Run once on page load to set the initial active link
  handleScrollSpy();

});
