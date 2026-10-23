/**
 * Portfolio Hubert Sossou Tonoukouin
 * Community Manager & Spécialiste Marketing Digital
 * Luxury Editorial JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // 2. Mobile Menu Management
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const menuIconOpen = document.getElementById('menuIconOpen');
  const menuIconClose = document.getElementById('menuIconClose');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        if (menuIconOpen && menuIconClose) {
          menuIconOpen.classList.add('hidden');
          menuIconClose.classList.remove('hidden');
        }
      } else {
        mobileMenu.classList.add('hidden');
        if (menuIconOpen && menuIconClose) {
          menuIconOpen.classList.remove('hidden');
          menuIconClose.classList.add('hidden');
        }
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        if (menuIconOpen && menuIconClose) {
          menuIconOpen.classList.remove('hidden');
          menuIconClose.classList.add('hidden');
        }
      });
    });
  }

  // 3. Header Scroll Effect
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back to top visibility
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      if (window.scrollY > 450) {
        backToTop.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
        backToTop.classList.add('opacity-100', 'translate-y-0');
      } else {
        backToTop.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
        backToTop.classList.remove('opacity-100', 'translate-y-0');
      }
    }
  });

  // 4. Animate KPI numbers on viewport entrance
  initKpiCounters();

  // 5. Portfolio Filter Tabs
  initPortfolioFilters();

  // 6. Contact Form Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }

  // 7. Modal Escape Key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
    }
  });
});

// Smooth Scroll to Top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// KPI Count-Up Animation
function initKpiCounters() {
  const kpiSection = document.getElementById('accueil') || document.getElementById('about');
  if (!kpiSection) return;

  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateAllCounters();
      }
    });
  }, { threshold: 0.15 });

  observer.observe(kpiSection);
}

function animateAllCounters() {
  const counters = document.querySelectorAll('.kpi-counter');
  counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'));
    const prefix = counter.getAttribute('data-prefix') || '';
    const suffix = counter.getAttribute('data-suffix') || '';
    const duration = 1800;
    const start = 0;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * ease);

      if (counter.getAttribute('data-formatted') === 'comma') {
        counter.textContent = prefix + current.toLocaleString('fr-FR') + suffix;
      } else {
        counter.textContent = prefix + current + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        const finalVal = counter.getAttribute('data-final-text');
        if (finalVal) {
          counter.textContent = finalVal;
        }
      }
    }

    requestAnimationFrame(updateCounter);
  });
}

// Portfolio Filter Tabs
function initPortfolioFilters() {
  const tabButtons = document.querySelectorAll('.portfolio-tab');
  const projectCards = document.querySelectorAll('.project-item');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.classList.add('hidden');
          }, 200);
        }
      });
    });
  });
}

// Showroom Realizations Detailed Data
const realizationsData = {
  ima: {
    badge: "Création Vidéo & Multi-Campus",
    title: "Campagnes Vidéo & Reels Multi-Campus",
    client: "Institut du Multimédia Appliqué (IMA)",
    role: "Community Manager Principal (Depuis Octobre 2025)",
    tagline: "Rythme soutenu de 5 publications/jour et couverture dynamique sur 6 campus",
    problem: "Nécessité de dynamiser la visibilité de l'institut et de fédérer les communautés étudiantes réparties sur 6 campus distincts avec des formats engageants, modernes et consommables en mobilité.",
    solution: "Mise en place d'une chaîne de production vidéo ultra-rapide (CapCut, Premiere Pro, tournage smartphone haute définition), création de formats récurrents (micro-trottoirs, présentations des filières, coulisses des cours, interviews alumni) et diffusion multi-plateformes temps réel (TikTok, Instagram Reels, Facebook Reels, YouTube Shorts).",
    kpis: [
      { label: "Vidéos produites & montées de A à Z", value: "100+" },
      { label: "Fréquence de diffusion", value: "5 posts / jour" },
      { label: "Périmètre géographique", value: "6 Campus" },
      { label: "Portée cumulée", value: "Forte viralité locale" }
    ],
    tools: ["CapCut", "Clipchamp", "TikTok Studio", "Meta Business Suite", "Canva", "WhatsApp Direct"]
  },
  iwo: {
    badge: "Growth B2B & Lead Generation",
    title: "Stratégie Growth & Carrousels B2B",
    client: "IWO GROUP SARL (Éditeur SaaS & Solutions)",
    role: "Lead Communication & Marketing (Depuis 2023)",
    tagline: "Explosion de la visibilité LinkedIn de 200 à près de 3 000 abonnés ciblés B2B",
    problem: "Page entreprise LinkedIn embryonnaire (200 abonnés) avec un très faible taux de transformation vers les solutions logicielles de l'entreprise, sans calendrier éditorial structuré.",
    solution: "Définition d'une ligne éditoriale axée sur l'expertise métier, conception de carrousels pédagogiques haute valeur ajoutée, copywriting persuasif (framework AIDA & PAS), storytelling de la direction et mise en place de campagnes d'emailing automatisées avec Brevo & HubSpot.",
    kpis: [
      { label: "Croissance de l'audience LinkedIn", value: "+1 385%" },
      { label: "Progression abonnés", value: "200 ➔ ~3 000" },
      { label: "Engagement moyen / post", value: "x4.2" },
      { label: "Génération de leads SaaS", value: "+180% demandes démo" }
    ],
    tools: ["LinkedIn Campaign Manager", "Photoshop", "Illustrator", "Brevo", "HubSpot", "Google Analytics"]
  },
  jve: {
    badge: "Engagement Communautaire & Plaidoyer",
    title: "Campagnes de Sensibilisation & Rapports d'Activité",
    client: "ONG JVE Bénin (Jeunes Volontaires pour l'Environnement)",
    role: "Community Manager & Responsable Membership (2018 - 2021)",
    tagline: "Gain de 1 500 abonnés qualifiés en 4 mois et digitalisation des rapports d'impact",
    problem: "Sensibiliser un public jeune aux enjeux de la transition écologique et du climat tout en mobilisant de nouveaux volontaires et membres actifs à travers le territoire national.",
    solution: "Organisation de challenges communautaires, lives thématiques, couverture en direct d'ateliers de terrain, et conception graphique de rapports d'activité impactants et infographies facilement partageables.",
    kpis: [
      { label: "Croissance express abonnés", value: "3 500 ➔ 5 000" },
      { label: "Délai de réalisation", value: "4 Mois seulement" },
      { label: "Recrutement de membres", value: "+220 volontaires" },
      { label: "Taux d'interaction communautaire", value: "+60%" }
    ],
    tools: ["Meta Business Suite", "Canva", "Trello", "Photoshop", "Live Event Coverage"]
  },
  seo: {
    badge: "SEO Local & Conversion",
    title: "Rédaction SEO & Fiches Google Optimisées",
    client: "SemJuice France / Ogmius Oueb / Multi-clients",
    role: "Rédacteur Web SEO & Spécialiste Référencement (2022)",
    tagline: "Domination des requêtes locales et optimisation sémantique à haute conversion",
    problem: "Visibilité locale invisible sur Google Maps et faible positionnement naturel sur les requêtes à forte intention commerciale dans des marchés concurrentiels.",
    solution: "Audit de mots-clés transactionnels, optimisation sémantique intégrale des pages web (balises title, Hn, méta descriptions, cocons sémantiques) et optimisation stratégique des fiches Google Business Profile (avis clients, posts d'actualité, géociblage).",
    kpis: [
      { label: "Top 3 Google sur requêtes cibles", value: "+75% requêtes" },
      { label: "Appels & itinéraires générés", value: "+110%" },
      { label: "Taux de clic organique (CTR)", value: "+38%" },
      { label: "Objectifs mensuels clients", value: "260% atteints" }
    ],
    tools: ["Google Business Profile", "Google Analytics", "WordPress", "Outils Sémantiques", "Excel Avancé"]
  }
};

// Open Project Modal
function openProjectModal(key) {
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalContent');
  const data = realizationsData[key];

  if (!modal || !modalBody || !data) return;

  modalBody.innerHTML = `
    <div class="space-y-6 text-left">
      <!-- Modal Top Header -->
      <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#c48956]/20">
        <span class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#c48956] bg-[#c48956]/10 border border-[#c48956]/30">
          ${data.badge}
        </span>
        <span class="text-xs text-[#bdafa3] font-medium">${data.role}</span>
      </div>

      <!-- Title & Tagline -->
      <div class="space-y-2">
        <h3 class="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#f5ede4] leading-snug">
          ${data.title}
        </h3>
        <p class="text-xs sm:text-sm font-semibold text-[#c48956]">
          Client / Cadre d'intervention : <span class="text-[#ebdcd0] font-normal">${data.client}</span>
        </p>
        <p class="text-sm sm:text-base text-[#bdafa3] font-normal leading-relaxed">
          ${data.tagline}
        </p>
      </div>

      <!-- Grid Problem & Solution -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
        <!-- Problem -->
        <div class="p-5 rounded-2xl bg-[#170f0b] border border-[#c48956]/15 space-y-2">
          <div class="flex items-center gap-2 text-[#c48956]">
            <i data-lucide="alert-circle" class="w-4 h-4"></i>
            <h4 class="text-xs font-bold uppercase tracking-wider text-[#f5ede4]">Le Défi Initial</h4>
          </div>
          <p class="text-xs sm:text-sm text-[#bdafa3] leading-relaxed font-normal">
            ${data.problem}
          </p>
        </div>

        <!-- Solution -->
        <div class="p-5 rounded-2xl bg-[#170f0b] border border-[#c48956]/15 space-y-2">
          <div class="flex items-center gap-2 text-[#c48956]">
            <i data-lucide="check-circle-2" class="w-4 h-4"></i>
            <h4 class="text-xs font-bold uppercase tracking-wider text-[#f5ede4]">La Solution Déployée</h4>
          </div>
          <p class="text-xs sm:text-sm text-[#bdafa3] leading-relaxed font-normal">
            ${data.solution}
          </p>
        </div>
      </div>

      <!-- Impact Metrics -->
      <div class="p-5 rounded-2xl bg-[#170f0b] border border-[#c48956]/20 space-y-4">
        <h4 class="text-xs font-bold uppercase tracking-wider text-[#c48956] flex items-center gap-2">
          <i data-lucide="trending-up" class="w-4 h-4"></i>
          Résultats & Impact Mesuré
        </h4>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          ${data.kpis.map(kpi => `
            <div class="p-3.5 rounded-xl bg-[#120b08] border border-[#c48956]/15 text-center">
              <p class="text-lg sm:text-xl font-serif-luxury font-bold text-[#c48956]">${kpi.value}</p>
              <p class="text-[10px] sm:text-xs text-[#8a7b70] font-medium uppercase mt-1 leading-tight">${kpi.label}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Tools Used -->
      <div class="space-y-2 pt-2">
        <p class="text-xs font-bold uppercase tracking-wider text-[#8a7b70]">Outils & Leviers Mobilisés :</p>
        <div class="flex flex-wrap gap-2">
          ${data.tools.map(tool => `
            <span class="px-3 py-1 rounded-lg bg-[#241610] border border-[#c48956]/25 text-xs text-[#ebdcd0] font-medium">
              ${tool}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Modal Footer Action -->
      <div class="pt-4 border-t border-[#c48956]/20 flex flex-wrap items-center justify-between gap-4">
        <p class="text-xs text-[#8a7b70]">Besoin d'un résultat similaire pour votre entreprise ?</p>
        <a href="#contact" onclick="closeProjectModal()" class="px-5 py-2.5 rounded-lg btn-camel-solid text-xs font-bold uppercase tracking-wider flex items-center gap-2">
          <span>Discuter d'un projet</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </a>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Close Project Modal
function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

// Contact Form Submission Handler
function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = document.getElementById('contactSubmitBtn');
  const toast = document.getElementById('contactToast');

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span>Envoi en cours...</span>
    `;
  }

  setTimeout(() => {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <i data-lucide="check" class="w-4 h-4"></i>
        <span>Message Envoyé !</span>
      `;
    }

    if (toast) {
      toast.classList.remove('hidden');
      toast.classList.add('flex');
    }

    form.reset();

    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.innerHTML = `
          <i data-lucide="send" class="w-4 h-4"></i>
          <span>Envoyer mon message</span>
        `;
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 4000);
  }, 1200);
}
