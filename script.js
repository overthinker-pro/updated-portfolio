document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.getElementById("hamburger-button");
  const navLinks = document.getElementById("nav-links");

  if (hamburgerButton && navLinks) {
    hamburgerButton.addEventListener("click", () => {
      navLinks.classList.toggle("nav-active");
      hamburgerButton.classList.toggle("is-active");

      const isExpanded = navLinks.classList.contains("nav-active");
      hamburgerButton.setAttribute("aria-expanded", isExpanded);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (navLinks.classList.contains("nav-active")) {
          navLinks.classList.remove("nav-active");
          hamburgerButton.classList.remove("is-active");
          hamburgerButton.setAttribute("aria-expanded", "false");
        }
      });
    });
  }
  // Modal functionality
  const openModalButtons = document.querySelectorAll("[data-modal-target]");

  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    const closeModalElements = modal.querySelectorAll("[data-modal-close]");
    closeModalElements.forEach((element) => {
      element.addEventListener(
        "click",
        () => {
          modal.classList.remove("active");
          document.body.style.overflow = "auto";
        },
        { once: true }
      );
    });
  }
});

// Update the copyright year dynamically
document.getElementById("year").textContent = new Date().getFullYear();
