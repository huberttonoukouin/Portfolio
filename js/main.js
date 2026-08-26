// Configurable Hero Profile Image URL variable for easy swapping
const HERO_IMAGE_URL = 'assets/hero_portrait.jpg';

// Apply dynamic hero portrait image source & setup event listeners
document.addEventListener('DOMContentLoaded', () => {
  const imgElement = document.getElementById('heroPortraitImg');
  if (imgElement) {
    imgElement.src = HERO_IMAGE_URL;
  }

  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
});

// Project Filtering Logic
function filterPortfolio(category) {
  const cards = document.querySelectorAll('.project-card');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    if (btn.getAttribute('data-category') === category) {
      btn.className = 'filter-btn active px-6 py-2.5 rounded-full text-sm font-bold transition-all bg-gradient-to-r from-brand-gold to-brand-goldLight text-black shadow-gold-sm';
    } else {
      btn.className = 'filter-btn px-6 py-2.5 rounded-full text-sm font-semibold transition-all bg-brand-card text-brand-muted hover:text-white border border-white/10 hover:border-brand-gold/40';
    }
  });

  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Modal Data Definitions
const projectsData = {
  powerbi: {
    title: "Dashboard de Suivi de Performance Commerciale (Power BI / IWO GROUP)",
    category: "Data Analysis & Business Intelligence",
    image: "assets/project_powerbi.jpg",
    description: "Centralisation et modélisation des flux de données de vente pour la direction générale et commerciale. Réduction des délais de reporting décisionnel.",
    problem: "Données marchandes fragmentées sur plusieurs fichiers Excel sans vision consolidée des performances régionales.",
    solution: "Modèle de données relationnel en étoile (Power BI + DAX), automatisant les flux d'intégration et générant des KPI dynamiques.",
    results: ["-65% de temps passé sur la création des rapports mensuels", "Détection en temps réel des produits leaders et sous-performants", "Adoption par l'équipe commerciale et de gestion"],
    tools: ["Power BI", "DAX", "SQL Server", "Excel Avancé"]
  },
  nlp: {
    title: "Modèle Machine Learning & Traitement NLP (EPITECH Bénin)",
    category: "Data Analyse & Intelligence Artificielle",
    image: "assets/project_ml_nlp.jpg",
    description: "Conception d'une chaîne algorithmique d'analyse textuelle pour la catégorisation automatique et l'extraction de sentiments.",
    problem: "Nécessité de traiter et classer de grands volumes de retours textuels clients non structurés.",
    solution: "Prétraitement NLP (tokenisation, TF-IDF/embeddings) suivi d'un modèle d'apprentissage supervisé (Scikit-learn).",
    results: ["Précision du modèle supérieure à 92%", "Automatisation du tri des feedbacks négatifs/positifs", "Projet salué lors du cursus EPITECH"],
    tools: ["Python", "Scikit-Learn", "NLTK / Pandas", "Jupyter"]
  },
  marketing: {
    title: "Stratégie d'Acquisition & Campagnes Campus (+45% d'engagement)",
    category: "Marketing Digital & Stratégie Omnicanale",
    image: "assets/project_marketing.jpg",
    description: "Déploiement d'un plan de communication et d'acquisition de prospects pour booster la visibilité des programmes de formation.",
    problem: "Manque d'engagement sur les canaux sociaux et faible taux de conversion des formulaires de prospects.",
    solution: "Repensée complète du tunnel de conversion, création de contenus engageants et campagnes ciblées multi-canaux.",
    results: ["+45% d'engagement global sur les réseaux sociaux", "+30% de prospects qualifiés inscrits", "Optimisation du coût par acquisition (CPA)"],
    tools: ["Copywriting", "Meta Ads Manager", "Google Analytics", "Funnels"]
  },
  design: {
    title: "Conception de Supports Multimédia & Intégration Web",
    category: "Design Graphique & Développement Web",
    image: "assets/project_design_video.jpg",
    description: "Réalisation de l'identité visuelle de campagnes événementielles, création d'affiches grand format, intégration web et montage de capsules vidéo.",
    problem: "Besoin de visuels à fort impact et d'une présence web fluide pour capter l'attention.",
    solution: "Charte graphique moderne, déclinaisons multiformats, intégration web WordPress/responsive et motion design dynamique.",
    results: ["Forte valorisation de l'image de marque", "Format vidéo court à haut taux de rétention", "Interface web fluide et 100% responsive"],
    tools: ["WordPress", "Photoshop", "Illustrator", "Premiere Pro", "HTML/CSS"]
  }
};

// Open Project Modal
function openProjectModal(key) {
  const modal = document.getElementById('projectModal');
  const content = document.getElementById('modalContent');
  const data = projectsData[key];

  if (!data) return;

  content.innerHTML = `
    <div class="space-y-6 text-left">
      <div class="relative rounded-2xl overflow-hidden aspect-video">
        <img src="${data.image}" alt="${data.title}" class="w-full h-full object-cover">
        <div class="absolute top-3 left-3 bg-brand-black/80 backdrop-blur-md px-3 py-1 rounded-full text-brand-gold text-xs font-bold border border-brand-gold/30">
          ${data.category}
        </div>
      </div>

      <div class="space-y-3">
        <h3 class="text-2xl font-heading font-extrabold text-white">${data.title}</h3>
        <p class="text-sm text-brand-muted">${data.description}</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
          <p class="text-xs uppercase font-bold text-brand-gold">🎯 Défi / Problématique</p>
          <p class="text-xs text-brand-subtle">${data.problem}</p>
        </div>
        <div class="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
          <p class="text-xs uppercase font-bold text-brand-gold">💡 Solution Apportée</p>
          <p class="text-xs text-brand-subtle">${data.solution}</p>
        </div>
      </div>

      <div class="space-y-2">
        <p class="text-xs uppercase font-bold text-brand-gold">📈 Résultats Obtenus :</p>
        <ul class="space-y-1.5">
          ${data.results.map(r => `<li class="text-xs text-white flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-brand-gold"></i> ${r}</li>`).join('')}
        </ul>
      </div>

      <div class="pt-4 border-t border-white/10 flex flex-wrap gap-2">
        ${data.tools.map(t => `<span class="text-xs px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/30 font-medium">${t}</span>`).join('')}
      </div>
    </div>
  `;

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  modal.classList.remove('hidden');
}

function closeProjectModal() {
  document.getElementById('projectModal').classList.add('hidden');
}

// Open/Close Parcours Modal
function openParcoursModal() {
  document.getElementById('parcoursModal').classList.remove('hidden');
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}
function closeParcoursModal() {
  document.getElementById('parcoursModal').classList.add('hidden');
}

// Open/Close CV Modal
function openCVModal() {
  document.getElementById('cvModal').classList.remove('hidden');
}
function closeCVModal() {
  document.getElementById('cvModal').classList.add('hidden');
}

// Contact Form Submission
function handleContactSubmit(event) {
  event.preventDefault();
  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toast');

  toast.classList.remove('hidden');
  form.reset();

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 4000);
}
