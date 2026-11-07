/**
 * ==========================================================================
 * PORTFOLIO OFFICIEL - HUBERT SOSSOU TONOUKOUIN
 * Logique Interactive, Filtrage & Accordion Responsive
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialisation des icônes vectorielles Lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. Année dynamique
  initCurrentYear();

  // 3. Header Sticky & Ombre au scroll
  initScrollHeader();

  // 4. Menu mobile
  initMobileNav();

  // 5. Espion de défilement (Scrollspy)
  initScrollSpy();

  // 6. Accordion des 5 Entités Phares
  initAccordion();

  // 7. Filtres de la Galerie de Créations
  initGalleryFilter();

  // 8. Modal d'aperçu pour les créations et vidéos
  initMediaModal();

  // 9. Gestionnaire du Formulaire de Contact
  initContactForm();
});

/* --------------------------------------------------------------------------
 * 2. Année Dynamique
 * -------------------------------------------------------------------------- */
function initCurrentYear() {
  const el = document.getElementById('currentYear');
  if (el) {
    el.textContent = new Date().getFullYear();
  }
}

/* --------------------------------------------------------------------------
 * 3. Header Sticky & Ombre
 * -------------------------------------------------------------------------- */
function initScrollHeader() {
  const header = document.getElementById('mainHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
 * 4. Menu Mobile
 * -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileToggleBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileNav) return;

  function toggleMenu(forceClose = false) {
    const isOpen = forceClose ? true : mobileNav.classList.contains('open');
    if (isOpen) {
      mobileNav.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = '<i data-lucide="menu"></i>';
    } else {
      mobileNav.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.innerHTML = '<i data-lucide="x"></i>';
    }
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  toggleBtn.addEventListener('click', () => toggleMenu());

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(true));
  });

  document.addEventListener('click', (e) => {
    if (mobileNav.classList.contains('open') && !mobileNav.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleMenu(true);
    }
  });
}

/* --------------------------------------------------------------------------
 * 5. ScrollSpy (Lien actif selon la position de lecture)
 * -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* --------------------------------------------------------------------------
 * 6. Accordion Interactif des 5 Entités Phares
 * -------------------------------------------------------------------------- */
function initAccordion() {
  const accordionContainer = document.getElementById('entitiesAccordion');
  if (!accordionContainer) return;

  const items = accordionContainer.querySelectorAll('.accordion-item');

  items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fermer tous les autres éléments
      items.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Si l'élément cliqué n'était pas ouvert, l'ouvrir
      if (!isActive) {
        item.classList.add('active');
      }

      // Réactualiser les icônes lucide si nécessaire
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    });
  });
}

/* --------------------------------------------------------------------------
 * 7. Filtres de la Galerie de Créations
 * -------------------------------------------------------------------------- */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const galleryCards = document.querySelectorAll('.gallery-card, .reel-card');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Activer l'onglet sélectionné
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
 * 8. Modal Médias (Aperçu Image & Vidéo)
 * -------------------------------------------------------------------------- */
function initMediaModal() {
  const modal = document.getElementById('mediaModal');
  const modalContent = document.getElementById('mediaModalContent');
  const closeBtn = document.getElementById('modalCloseBtn');
  const clickableItems = document.querySelectorAll('.gallery-card, .reel-card, .preview-media-card');

  if (!modal || !modalContent) return;

  function closeModal() {
    modal.classList.remove('open');
    modalContent.innerHTML = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  clickableItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.getAttribute('data-title') || item.querySelector('.gallery-card-title, .reel-caption, .preview-badge-label')?.textContent || 'Aperçu du Projet';
      const desc = item.getAttribute('data-desc') || 'Projet réalisé par Hubert SOSSOU TONOUKOUIN dans le cadre de ses missions en stratégie digitale et analyse de données.';

      if (!img) return;

      modalContent.innerHTML = `
        <div style="margin-bottom: 1.25rem; border-radius: 12px; overflow: hidden; background-color: #0F172A;">
          <img src="${img.src}" alt="${title}" style="width: 100%; max-height: 480px; object-fit: contain; display: block; margin: 0 auto;">
        </div>
        <h3 style="font-size: 1.35rem; font-weight: 700; color: #0F172A; margin-bottom: 0.5rem;">${title}</h3>
        <p style="font-size: 0.95rem; color: #475569; line-height: 1.6; margin-bottom: 1.5rem;">${desc}</p>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="#contact" class="btn btn-primary btn-sm" onclick="document.getElementById('mediaModal').classList.remove('open')">
            Discuter d'un projet similaire
          </a>
          <a href="https://wa.me/2290197150777" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
            Échanger sur WhatsApp
          </a>
        </div>
      `;

      modal.classList.add('open');

      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    });
  });
}

/* --------------------------------------------------------------------------
 * 9. Gestionnaire du Formulaire de Contact
 * -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const successAlert = document.getElementById('formSuccessAlert');
  const errorAlert = document.getElementById('formErrorAlert');
  const submitBtn = document.getElementById('submitContactBtn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['name']?.value.trim();
    const email = form.elements['email']?.value.trim();
    const subject = form.elements['subject']?.value.trim();
    const message = form.elements['message']?.value.trim();

    // Validation basique
    if (!name || !email || !subject || !message || message.length < 5) {
      if (errorAlert) {
        errorAlert.style.display = 'block';
        if (successAlert) successAlert.style.display = 'none';
      }
      return;
    }

    if (errorAlert) errorAlert.style.display = 'none';

    // Simulation de chargement
    if (submitBtn) {
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Envoi en cours...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (successAlert) {
          successAlert.style.display = 'block';
        }
        form.reset();

        // Réactualiser les icônes
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }

        setTimeout(() => {
          if (successAlert) successAlert.style.display = 'none';
        }, 6000);
      }, 700);
    }
  });
}
