document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.getElementById('hamburger-button');
  const navLinks = document.getElementById('nav-links');

  if (hamburgerButton && navLinks) {
    hamburgerButton.addEventListener('click', () => {
      // Toggle classes on the nav links and the hamburger button
      navLinks.classList.toggle('nav-active');
      hamburgerButton.classList.toggle('is-active');

      // Update aria-expanded attribute for accessibility
      const isExpanded = navLinks.classList.contains('nav-active');
      hamburgerButton.setAttribute('aria-expanded', isExpanded);
    });

    // Close the menu when a link is clicked (for single-page navigation)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
          navLinks.classList.remove('nav-active');
          hamburgerButton.classList.remove('is-active');
          hamburgerButton.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
});