/**
 * Portfolio Hubert Sossou Tonoukouin
 * Community Manager & Spécialiste Marketing Digital
 * Interactive JavaScript Engine
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
    if (window.scrollY > 40) {
      header.classList.add('shadow-xl', 'bg-[#0a0a0c]/95');
      header.classList.remove('bg-[#0a0a0c]/80');
    } else {
      header.classList.remove('shadow-xl', 'bg-[#0a0a0c]/95');
      header.classList.add('bg-[#0a0a0c]/80');
    }

    // Back to top visibility
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      if (window.scrollY > 400) {
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

  // 5. Contact Form Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }

  // 6. Keyboard navigation for modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
    }
  });
});

// KPI Count-Up Animation
function initKpiCounters() {
  const kpiSection = document.getElementById('resultats');
  if (!kpiSection) return;

  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateAllCounters();
      }
    });
  }, { threshold: 0.25 });

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
      // Ease out cubic
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
        // Final explicit value
        const finalVal = counter.getAttribute('data-final-text');
        if (finalVal) {
          counter.textContent = finalVal;
        }
      }
    }

    requestAnimationFrame(updateCounter);
  });
}

// Showroom Realizations Detailed Data
const realizationsData = {
  ima: {
    badge: "Création Vidéo & Multi-Campus",
    title: "Campagnes Vidéo & Reels multi-campus",
    client: "Institut du Multimédia Appliqué (IMA)",
    role: "Community Manager Principal (Depuis Oct 2025)",
    imageType: "video",
    icon: "video",
    tagline: "Rythme soutenu de 5 publications/jour et couverture dynamique sur 6 campus",
    problem: "Nécessité de dynamiser la visibilité de l'institut et de fédérer les communautés étudiantes réparties sur 6 campus distincts avec des formats engageants, modernes et consommables en mobilité.",
    solution: "Mise en place d'une chaîne de production vidéo ultra-rapide (CapCut, Premiere Pro, tournage smartphone haute définition), création de formats récurrents (micro-trottoirs, présentations des filières, coulisses des cours, interviews alumni) et diffusion multi-plateformes temps réel (TikTok, Instagram Reels, Facebook Reels, YouTube Shorts).",
    kpis: [
      { label: "Vidéos produites & montées de A à Z", value: "100+" },
      { label: "Fréquence de diffusion", value: "5 posts / jour" },
      { label: "Périmètre géographique", value: "6 Campus" },
      { label: "Portée cumulée", value: "Forte viralité locale" }
    ],
    tools: ["CapCut", "Clipchamp", "TikTok Studio", "Meta Business Suite", "Canva", "Canal WhatsApp"]
  },
  iwo: {
    badge: "Growth B2B & Lead Generation",
    title: "Stratégie Growth & Carrousels B2B",
    client: "IWO GROUP SARL (Éditeur SaaS & Solutions)",
    role: "Lead Communication & Marketing (Depuis 2023)",
    imageType: "growth",
    icon: "trending-up",
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
    title: "Campagnes de sensibilisation et rapports",
    client: "ONG JVE Bénin (Jeunes Volontaires pour l'Environnement)",
    role: "Community Manager & Responsable Membership (2018 - 2021)",
    imageType: "community",
    icon: "users",
    tagline: "Gain de 1 500 abonnés qualifiés en 4 mois et digitalisation des rapports d'impact",
    problem: "Sensibiliser un public jeune aux enjeux de la transition écologique et du climat tout en mobilisant de nouveaux volontaires et membres actifs à travers le territoire national.",
    solution: "Organisation de challenges communautaires, lives thématiques, couverture en direct d'ateliers de terrain, et conception graphique de rapports d'activité impactants et infographies facilement partageables.",
    kpis: [
      { label: "Croissance express abonnés", value: "3 500 ➔ 5 000" },
      { label: "Délai de réalisation", value: "4 Mois seulement" },
      { label: "Recrutement de membres", value: "+220 volontaires" },
      { label: "Taux d'interaction communautaire", value: "+60%" }
    ],
    tools: ["Meta Business Suite", "Canva", "Trello", "Photoshop", "Gestion d'événements Live"]
  },
  seo: {
    badge: "SEO Local & Conversion",
    title: "Rédaction SEO & Fiches Google optimisées",
    client: "SemJuice France / Ogmius Oueb / Multi-clients",
    role: "Rédacteur Web SEO & Spécialiste Référencement (2022)",
    imageType: "seo",
    icon: "search",
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
    <div class="space-y-6">
      <!-- Modal Top Header -->
      <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold badge-orange uppercase tracking-wider">
          <i data-lucide="${data.icon}" class="w-3.5 h-3.5"></i>
          ${data.badge}
        </span>
        <span class="text-xs text-brand-subtle font-medium">${data.role}</span>
      </div>

      <!-- Title & Tagline -->
      <div class="space-y-2">
        <h3 class="text-2xl sm:text-3xl font-heading font-extrabold text-white leading-snug">
          ${data.title}
        </h3>
        <p class="text-sm font-semibold text-orange-400">
          Client / Cadre : <span class="text-white">${data.client}</span>
        </p>
        <p class="text-base text-gray-300 font-medium leading-relaxed">
          ${data.tagline}
        </p>
      </div>

      <!-- Problem & Solution Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
          <div class="flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-wider">
            <i data-lucide="alert-circle" class="w-4 h-4"></i>
            <span>Défi & Problématique</span>
          </div>
          <p class="text-sm text-gray-300 leading-relaxed">${data.problem}</p>
        </div>

        <div class="p-5 rounded-2xl bg-black/40 border border-orange-500/30 space-y-2">
          <div class="flex items-center gap-2 text-orange-400 font-bold text-xs uppercase tracking-wider">
            <i data-lucide="zap" class="w-4 h-4"></i>
            <span>Stratégie & Solution</span>
          </div>
          <p class="text-sm text-gray-300 leading-relaxed">${data.solution}</p>
        </div>
      </div>

      <!-- KPIs Highlights Grid -->
      <div class="space-y-3">
        <h4 class="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
          <i data-lucide="bar-chart-2" class="w-4 h-4 text-orange-500"></i>
          Résultats & Impact Mesuré
        </h4>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${data.kpis.map(kpi => `
            <div class="p-3.5 rounded-xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 text-center">
              <p class="text-xl sm:text-2xl font-heading font-extrabold text-orange-500">${kpi.value}</p>
              <p class="text-xs text-gray-400 mt-1 font-medium leading-tight">${kpi.label}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Stack Tools -->
      <div class="space-y-3 pt-2">
        <h4 class="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
          <i data-lucide="cpu" class="w-4 h-4 text-orange-500"></i>
          Outils & Technologies Mobilisés
        </h4>
        <div class="flex flex-wrap gap-2">
          ${data.tools.map(tool => `
            <span class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-gray-200">
              ${tool}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Footer CTA in Modal -->
      <div class="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
        <p class="text-xs text-gray-400">
          Besoin d'un résultat similaire pour votre structure ?
        </p>
        <a href="#contact" onclick="closeProjectModal()" class="px-5 py-2.5 rounded-xl orange-glow-btn text-white text-xs font-extrabold flex items-center gap-2">
          <i data-lucide="send" class="w-3.5 h-3.5"></i>
          <span>Discuter de votre projet</span>
        </a>
      </div>
    </div>
  `;

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

// Contact Form Submission with Feedback
function handleContactSubmit(event) {
  event.preventDefault();
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('contactSubmitBtn');
  const toast = document.getElementById('contactToast');

  if (!form || !submitBtn) return;

  const originalContent = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <span>Envoi en cours...</span>
  `;

  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalContent;
    form.reset();

    if (toast) {
      toast.classList.remove('hidden');
      toast.classList.add('flex');

      setTimeout(() => {
        toast.classList.add('hidden');
        toast.classList.remove('flex');
      }, 5000);
    }
  }, 900);
}

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
