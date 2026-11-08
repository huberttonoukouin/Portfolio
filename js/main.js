/**
 * ==========================================================================
 * PORTFOLIO OFFICIEL - HUBERT SOSSOU TONOUKOUIN
 * Moteur Multilingue (FR/EN), Mode Sombre/Clair, Animation au Scroll & Rapport Détaillé
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. Dictionnaire de Traduction Bilingue (Français / Anglais)
// --------------------------------------------------------------------------
const translations = {
  fr: {
    nav_profil: "Profil",
    nav_parcours: "Parcours",
    nav_projets: "Projets",
    nav_competences: "Compétences",
    nav_realisations: "Réalisations",
    nav_contacts: "Contacts",
    btn_contact_header: "Me contacter",
    hero_eyebrow: "Statisticien-Économètre • Data Analyste • Marketing Digital",
    hero_title: "8 ans de<br>communication digitale,<br>pilotés par la donnée.",
    hero_desc: "Du suivi statistique à la stratégie de contenu : réseaux sociaux, campagnes, vidéo et reporting. Je transforme la donnée en audiences, et les audiences en conversions.",
    btn_contact: "Me contacter",
    btn_see_work: "Voir les réalisations",
    stat_1_val: "8 ans",
    stat_1_lbl: "EXPÉRIENCE EN COMMUNICATION DIGITALE",
    stat_2_val: "+1385%",
    stat_2_lbl: "CROISSANCE LINKEDIN (IWO GROUP)",
    stat_3_val: "+45%",
    stat_3_lbl: "HAUSSE D'ENGAGEMENT (AFRICA IMMO)",
    stat_4_val: "6 campus",
    stat_4_lbl: "COMMUNICATION MULTI-SITES BÉNIN & TOGO",

    phil_tag: "APERÇU GLOBAL",
    phil_title: "Un communicant qui<br>pilote par les chiffres.",
    phil_lead: "Licencié en Statistiques & Économétrie (UAC, 2016) et certifié Développement & Data Analysis (EPITECH Bénin, 2023), j'allie analyse de données et communication digitale. J'ai conduit la communication d'organisations de l'éducation, de l'immobilier, des ONG et des services, avec une approche mesurée par les KPI.",
    card_1_title: "Stratégie & exécution",
    card_1_desc: "Stratégie de communication digitale, gestion des réseaux sociaux et des fiches Google Business, rapports mensuels de performance.",
    card_2_title: "Performance & conversions",
    card_2_desc: "Campagnes Facebook, LinkedIn, Google et TikTok Ads, growth marketing B2B, CRM (Brevo, Systeme.io) et tunnel de conversion.",
    card_3_title: "Création & production",
    card_3_desc: "Visuels, carrousels, vidéos, scripts et supports (roll-up, bannières) avec Photoshop, Illustrator, Canva, CapCut.",
    card_4_title: "Data & SEO",
    card_4_desc: "Dashboards Power BI, Python, SQL, KoboToolbox, études quantitatives et rédaction web SEO.",

    timeline_tag: "PARCOURS",
    timeline_title: "Une trajectoire communication + data.",
    timeline_sub: "Des missions variées, toujours reliées à la mesure de la performance.",
    time_1_date: "Juin 2024 – Oct. 2025",
    time_1_role: "Chargé de Communication & Marketing Digital",
    time_1_comp: "Institut du Multimédia Appliqué (IMA)",
    time_1_desc: "Stratégie digitale pour les six campus (Bénin et Togo), contenus, campagnes de recrutement d'étudiants, événements de promotion, suivi KPI et rapports mensuels.",
    time_2_date: "Juil. 2023 – 2026",
    time_2_role: "Community Manager, Marketing Digital & Analyste Marketing",
    time_2_comp: "IWO GROUP SARL",
    time_2_desc: "Présence multi-plateformes (Facebook, LinkedIn, X, TikTok, YouTube), campagnes B2B et growth, dashboards et KPI. +1 385 % de croissance LinkedIn, 3 nouveaux canaux lancés.",
    time_3_date: "Juin 2022 – Fév. 2023",
    time_3_role: "Rédacteur Web SEO",
    time_3_comp: "SemJuice France / Ogmius Oueb",
    time_3_desc: "Articles SEO optimisés pour la hausse du trafic organique des clients.",
    time_4_date: "2018 – 2021",
    time_4_role: "Community Manager & Responsable Membership",
    time_4_comp: "ONG JVE Bénin",
    time_4_desc: "Visibilité digitale (+30 % d'engagement), contenus multimédias, blog et relations médias, animation de la base de membres.",
    time_5_date: "Juin 2017 – Août 2018",
    time_5_role: "Chargé de Communication & Marketing Digital",
    time_5_comp: "Africa Immo Bénin",
    time_5_desc: "Stratégie de contenu et publicités sociales : +45 % d'engagement, prospection et fidélisation via les réseaux.",

    proj_tag: "PROJETS",
    proj_title: "5 organisations, des résultats mesurés.",
    proj_sub: "Canaux gérés, résultats clés et missions marquantes.",
    lbl_canaux: "CANAUX & OUTILS",
    lbl_kpis: "INDICATEURS CLÉS",
    lbl_apercu: "APERÇU",
    lbl_campus_couv: "Campus couverts",
    lbl_pays_couv: "Pays (Bénin, Togo)",
    lbl_reporting: "Reporting KPI",
    btn_full_details: "Consulter le dossier détaillé de la mission",
    org1_cat: "Éducation • Bénin & Togo",
    org1_sub: "Stratégie digitale et recrutement d'étudiants sur 6 campus.",
    org1_desc: "Pilotage de la visibilité numérique globale des 6 campus, structuration des campagnes d'admission et suivi décisionnel des taux de conversion étudiants.",
    org2_cat: "B2B services",
    org2_sub: "Croissance de la présence digitale et acquisition client.",
    org2_desc: "Développement de la notoriété des logiciels SaaS, acquisition de leads B2B, automatisation CRM et production de tutoriels vidéo axés sur l'expertise métier.",
    org3_cat: "ONG • Environnement",
    org3_sub: "Communication web, médias sociaux et animation de communauté.",
    org3_desc: "Valorisation citoyenne par la vidéo de terrain, rédaction de rapports de sensibilisation et structuration de la communauté active de volontaires.",
    org4_cat: "B2C Immobilier",
    org4_sub: "Stratégie digitale avec suivi analytique et prospection en ligne.",
    org4_desc: "Création de campagnes publicitaires à fort impact pour promouvoir les parcelles et opportunités foncières, avec conclusion effective de ventes.",
    org5_cat: "Agence • Rédaction web SEO",
    org5_sub: "Rédaction d'articles optimisés pour des clients en France.",
    org5_desc: "Production de contenus à forte valeur sémantique optimisés pour le référencement naturel et structuration méthodique des architectures de sites.",

    skills_tag: "COMPÉTENCES",
    skills_title: "De la data à la création.",
    sk_1_title: "Stratégie & Content",
    sk_1_1: "Stratégie digitale",
    sk_1_2: "Planification & modération",
    sk_1_3: "Rédaction web SEO",
    sk_1_4: "Veille informationnelle et concurrentielle",
    sk_1_5: "Reporting & rapports",
    sk_2_title: "Paid Social & Ads",
    sk_2_1: "Facebook Ads",
    sk_2_2: "LinkedIn Ads",
    sk_2_3: "Google Ads & TikTok Ads",
    sk_2_4: "CRM : Brevo, Systeme.io",
    sk_2_5: "Meta Pixel & GTM",
    sk_3_title: "Création visuelle & vidéo",
    sk_3_1: "Photoshop, Illustrator, InDesign",
    sk_3_2: "Canva",
    sk_3_3: "CapCut, InVideo, Veed",
    sk_3_4: "Capsules vidéo smartphone",
    sk_3_5: "Roll-up, bannières, carrousels",
    sk_4_title: "Data & Analyse",
    sk_4_1: "Python (Pandas, NumPy)",
    sk_4_2: "SQL, Excel avancé",
    sk_4_3: "Power BI, dashboards",
    sk_4_4: "EViews, Stata (notions)",
    sk_4_5: "KoboToolbox, ODK",
    sk_5_title: "Statistiques & IA",
    sk_5_1: "Économétrie, modélisation",
    sk_5_2: "Sondages & études de marché",
    sk_5_3: "Machine Learning, NLP",
    sk_5_4: "Pipelines ETL, Apache Kafka",
    sk_5_5: "Prompt Engineering IA",
    sk_6_title: "Outils & Outils collaboratifs",
    sk_6_1: "Google Analytics",
    sk_6_2: "Hootsuite, Buffer",
    sk_6_3: "Trello, Jira",
    sk_6_4: "WordPress",
    sk_6_5: "GitHub, Linux",

    gal_tag: "RÉALISATIONS",
    gal_title: "Galerie de créations.",
    gal_sub: "Infographies, bannières, carrousels et ebooks leadmagnets.",
    vid_title: "Vidéos",
    vid_sub: "Aperçus depuis TikTok, YouTube et Facebook.",

    contact_tag: "CONTACTS",
    contact_title: "Construisons la prochaine<br>campagne qui convertit.",
    contact_sub: "Disponible pour des missions en CDI ou freelance.",
    form_lbl_name: "Votre nom",
    form_lbl_email: "Votre email",
    form_lbl_subject: "Sujet",
    form_lbl_msg: "Votre message",
    btn_send_wa: "Envoyer via WhatsApp",
    contact_online: "En ligne — discutons stratégie",
    contact_direct_lead: "Ou contactez-moi directement pour toute opportunité, étude de cas ou échange professionnel.",
    btn_dl_cv: "Télécharger mon CV complet (PDF)",
    footer_rights: "Tous droits réservés."
  },

  en: {
    nav_profil: "Profile",
    nav_parcours: "Journey",
    nav_projets: "Projects",
    nav_competences: "Skills",
    nav_realisations: "Creations",
    nav_contacts: "Contact",
    btn_contact_header: "Contact Me",
    hero_eyebrow: "Statistician-Economist • Data Analyst • Digital Marketing",
    hero_title: "8 years of<br>digital communication,<br>driven by data.",
    hero_desc: "From statistical analysis to content strategy: social media, campaigns, video, and reporting. I turn data into audiences, and audiences into revenue.",
    btn_contact: "Contact Me",
    btn_see_work: "View Creations",
    stat_1_val: "8 years",
    stat_1_lbl: "DIGITAL COMMUNICATION EXPERIENCE",
    stat_2_val: "+1385%",
    stat_2_lbl: "LINKEDIN GROWTH (IWO GROUP)",
    stat_3_val: "+45%",
    stat_3_lbl: "ENGAGEMENT INCREASE (AFRICA IMMO)",
    stat_4_val: "6 campuses",
    stat_4_lbl: "MULTI-SITE COMMUNICATION BENIN & TOGO",

    phil_tag: "OVERVIEW",
    phil_title: "A communicator who<br>steers with numbers.",
    phil_lead: "Holding a Bachelor's in Statistics & Econometrics (UAC, 2016) and certified in Development & Data Analysis (EPITECH Benin, 2023), I combine data analytics with digital marketing. I have led communication for education, real estate, NGO, and tech organizations, with a strict KPI-driven approach.",
    card_1_title: "Strategy & Execution",
    card_1_desc: "Digital communication strategy, social media and Google Business management, monthly performance reviews.",
    card_2_title: "Performance & Conversions",
    card_2_desc: "Facebook, LinkedIn, Google, and TikTok Ads, B2B growth marketing, CRM automation (Brevo, Systeme.io), and conversion funnels.",
    card_3_title: "Creation & Production",
    card_3_desc: "Visual designs, carousels, videos, copy, and print/digital assets (roll-ups, banners) with Photoshop, Illustrator, Canva, CapCut.",
    card_4_title: "Data & SEO",
    card_4_desc: "Power BI dashboards, Python, SQL, KoboToolbox, quantitative field studies, and SEO web copywriting.",

    timeline_tag: "CAREER JOURNEY",
    timeline_title: "A communication + data trajectory.",
    timeline_sub: "Diverse missions, always tied to measured performance.",
    time_1_date: "June 2024 – Oct. 2025",
    time_1_role: "Head of Communication & Digital Marketing",
    time_1_comp: "Institut du Multimédia Appliqué (IMA)",
    time_1_desc: "Digital strategy across six campuses in Benin and Togo, student recruitment campaigns, event coverage, and monthly KPI dashboards.",
    time_2_date: "July 2023 – 2026",
    time_2_role: "Community Manager, Digital Marketing & Marketing Analyst",
    time_2_comp: "IWO GROUP SARL",
    time_2_desc: "Multi-channel presence (Facebook, LinkedIn, X, TikTok, YouTube), B2B acquisition and growth, dashboards and KPIs. +1,385% LinkedIn growth, 3 new channels launched.",
    time_3_date: "June 2022 – Feb. 2023",
    time_3_role: "SEO Web Copywriter",
    time_3_comp: "SemJuice France / Ogmius Oueb",
    time_3_desc: "High-value SEO semantic articles boosting organic search engine rankings for clients in France.",
    time_4_date: "2018 – 2021",
    time_4_role: "Community Manager & Membership Coordinator",
    time_4_comp: "NGO JVE Benin",
    time_4_desc: "Digital brand awareness (+30% engagement), multimedia storytelling, blog, media relations, and active volunteer network animation.",
    time_5_date: "June 2017 – Aug. 2018",
    time_5_role: "Head of Communication & Digital Marketing",
    time_5_comp: "Africa Immo Benin",
    time_5_desc: "Content strategy and targeted social ads: +45% engagement, digital lead generation, and completed property transactions.",

    proj_tag: "PROJECTS",
    proj_title: "5 organizations, measured results.",
    proj_sub: "Managed channels, core results, and landmark missions.",
    lbl_canaux: "CHANNELS & TOOLS",
    lbl_kpis: "KEY PERFORMANCE INDICATORS",
    lbl_apercu: "MISSION OVERVIEW",
    lbl_campus_couv: "Campuses covered",
    lbl_pays_couv: "Countries (Benin, Togo)",
    lbl_reporting: "KPI Reporting",
    btn_full_details: "Explore full case study & results",
    org1_cat: "Education • Benin & Togo",
    org1_sub: "Digital strategy & student recruitment across 6 campuses.",
    org1_desc: "Coordinated digital visibility across all 6 campuses, built seasonal recruitment funnels, and tracked student conversion rates.",
    org2_cat: "B2B SaaS Services",
    org2_sub: "Brand authority and customer acquisition growth.",
    org2_desc: "Scaled SaaS software visibility, generated qualified B2B leads, automated CRM workflows, and produced step-by-step video tutorials.",
    org3_cat: "NGO • Environment & Climate",
    org3_sub: "Web communication, social media, and community growth.",
    org3_desc: "On-site video reportages, climate awareness articles, and coordination of the youth environmental volunteer network.",
    org4_cat: "B2C Real Estate",
    org4_sub: "Data-driven digital marketing and online sales prospecting.",
    org4_desc: "Crafted high-converting ad creatives to promote titled land parcels, generating qualified inquiries and completed sales.",
    org5_cat: "Agency • SEO Copywriting",
    org5_sub: "Search-optimized editorial content for international clients.",
    org5_desc: "Produced high-ranking semantic articles, optimized internal linking, and structured site taxonomies.",

    skills_tag: "SKILLS",
    skills_title: "From data to creation.",
    sk_1_title: "Strategy & Content",
    sk_1_1: "Digital strategy",
    sk_1_2: "Planning & community moderation",
    sk_1_3: "SEO web copywriting",
    sk_1_4: "Competitive benchmarking",
    sk_1_5: "KPI performance reporting",
    sk_2_title: "Paid Social & Ads",
    sk_2_1: "Facebook Ads",
    sk_2_2: "LinkedIn Ads",
    sk_2_3: "Google Ads & TikTok Ads",
    sk_2_4: "CRM: Brevo, Systeme.io",
    sk_2_5: "Meta Pixel & GTM",
    sk_3_title: "Visual Design & Video",
    sk_3_1: "Photoshop, Illustrator, InDesign",
    sk_3_2: "Canva",
    sk_3_3: "CapCut, InVideo, Veed",
    sk_3_4: "Smartphone video production",
    sk_3_5: "Roll-ups, banners, carousels",
    sk_4_title: "Data & Analytics",
    sk_4_1: "Python (Pandas, NumPy)",
    sk_4_2: "SQL, Advanced Excel",
    sk_4_3: "Power BI dashboards",
    sk_4_4: "EViews, Stata fundamentals",
    sk_4_5: "KoboToolbox, ODK",
    sk_5_title: "Statistics & AI",
    sk_5_1: "Econometrics & predictive models",
    sk_5_2: "Surveys & market studies",
    sk_5_3: "Machine Learning, NLP",
    sk_5_4: "ETL pipelines, Apache Kafka",
    sk_5_5: "AI Prompt Engineering",
    sk_6_title: "Tools & Collaboration",
    sk_6_1: "Google Analytics",
    sk_6_2: "Hootsuite, Buffer",
    sk_6_3: "Trello, Jira",
    sk_6_4: "WordPress",
    sk_6_5: "GitHub, Linux",

    gal_tag: "CREATIONS",
    gal_title: "Gallery of creations.",
    gal_sub: "Infographics, banners, carousels, and lead-magnet ebooks.",
    vid_title: "Videos",
    vid_sub: "Snippets from TikTok, YouTube, and Facebook.",

    contact_tag: "CONTACT",
    contact_title: "Let's build the next<br>campaign that converts.",
    contact_sub: "Available for full-time positions or freelance missions.",
    form_lbl_name: "Your name",
    form_lbl_email: "Your email",
    form_lbl_subject: "Subject",
    form_lbl_msg: "Your message",
    btn_send_wa: "Send via WhatsApp",
    contact_online: "Online — let's discuss strategy",
    contact_direct_lead: "Or reach me directly for any business inquiry, case study, or collaboration.",
    btn_dl_cv: "Download my complete CV (PDF)",
    footer_rights: "All rights reserved."
  }
};

// --------------------------------------------------------------------------
// 2. Base de Données des 5 Entreprises pour le Rapport Détaillé (Dossier Modal)
// --------------------------------------------------------------------------
const orgDetailsData = {
  ima: {
    name: "Institut du Multimédia Appliqué (IMA)",
    sector: "Enseignement Supérieur, Métiers du Multimédia & Numérique",
    period: "Juin 2024 – Octobre 2025 (1 an et 5 mois)",
    location: "Bénin & Togo (6 Campus)",
    role: "Chargé de Communication & Marketing Digital",
    context: "L'IMA forme des étudiants aux métiers d'avenir du numérique et de la création audiovisuelle à travers ses implantations à Cotonou, Porto-Novo, Parakou, Lomé, etc.",
    missions: [
      "Conception et mise en œuvre du plan de communication digitale multi-sites pour les 6 campus.",
      "Campagnes sponsorisées de recrutement d'étudiants (Meta Ads, Google Search, TikTok Ads).",
      "Animation continue des communautés étudiantes et gestion des fiches Google Business Profile.",
      "Organisation et couverture médiatique des salons d'orientation, journées portes ouvertes et hackathons.",
      "Mise en place de dashboards de reporting mensuel sur les admissions et le coût par étudiant recruté."
    ],
    results: [
      "Couverture intégrale et synchronisée de 6 campus répartis sur 2 pays (Bénin & Togo).",
      "Progression continue des inscriptions académiques via les canaux digitaux.",
      "Structuration du reporting décisionnel présenté à la direction générale."
    ],
    image: "assets/project_powerbi.jpg"
  },
  iwo: {
    name: "IWO GROUP SARL",
    sector: "Éditeur de Solutions Logicielles SaaS & Numérique B2B",
    period: "Juillet 2023 – Août 2026 (3 ans)",
    location: "Cotonou, Bénin",
    role: "Community Manager, Marketing Digital & Analyste Marketing",
    context: "IWO GROUP édite des progiciels de facturation normalisée (IWO Invoicing), de gestion de stocks (IWO Stocks) et des solutions ERP pour entreprises africaines.",
    missions: [
      "Animation quotidienne multi-réseaux : LinkedIn B2B, Facebook, X, TikTok et YouTube.",
      "Acquisition B2B : tunnels de conversion, formulaires d'essais gratuits, email nurturing.",
      "Conception de carrousels pédagogiques B2B et production de tutoriels vidéo axés sur l'expertise métier.",
      "Pilotage data-driven : tracking d'audience, intégration CRM et tableaux de bord décisionnels Power BI."
    ],
    results: [
      "+1 385% de croissance sur LinkedIn (de 200 à 3 270 abonnés professionnels qualifiés).",
      "+395% de croissance sur Facebook (de 200 à 990 abonnés actifs).",
      "Lancement avec succès de 3 nouveaux canaux de diffusion (TikTok, Twitter/X, YouTube).",
      "Hausse directe de l'adoption des solutions SaaS et des demandes de démonstrations."
    ],
    image: "assets/poster_01.jpg"
  },
  jve: {
    name: "ONG JEUNES VOLONTAIRES POUR L'ENVIRONNEMENT (JVE BÉNIN)",
    sector: "Organisation Non Gouvernementale / Transition Écologique & Climat",
    period: "Juin 2018 – Novembre 2021 (3 ans et 6 mois)",
    location: "Cotonou, Bénin & Départements",
    role: "Community Manager & Responsable Membership",
    context: "Organisation internationale dédiée à la sensibilisation de la jeunesse aux enjeux du climat, de l'agroécologie et de la justice environnementale.",
    missions: [
      "Gestion et développement de la présence digitale complète de l'ONG et animation du réseau des membres.",
      "Réalisation de la couverture photo et vidéo de terrain des ateliers, reboisements et plaidoyers.",
      "Rédaction et publication d'articles de sensibilisation et rapports d'activité sur le portail web.",
      "Coordination des relations avec les médias nationaux, les partenaires techniques et financiers."
    ],
    results: [
      "+30% d'engagement global constaté sur les canaux numériques de l'organisation.",
      "Forte hausse du trafic web grâce aux reportages vidéo et articles de fond.",
      "Mobilisation de plus de 100 jeunes volontaires actifs sur les actions citoyennes."
    ],
    image: "assets/reel_3.jpg"
  },
  africaimmo: {
    name: "AFRICA IMMO BÉNIN",
    sector: "Immobilier, Conseil & Valorisation de Biens Fonciers",
    period: "Juin 2017 – Mai 2018 (1 an)",
    location: "Cotonou & Régions, Bénin",
    role: "Chargé de Communication & Marketing Digital",
    context: "Agence immobilière spécialisée dans la vente de parcelles titrées, de domaines agricoles et la sécurisation foncière.",
    missions: [
      "Gestion de la communication multi-canaux (Facebook, Twitter/X, LinkedIn, Flickr, WhatsApp).",
      "Création et diffusion de contenus graphiques attractifs pour promouvoir les parcelles foncières.",
      "Organisation d'opérations promotionnelles (Club Tontine, Fête des Mères, offres étudiantes).",
      "Prospection commerciale et qualification des leads acquéreurs sur les plateformes sociales."
    ],
    results: [
      "+45% de hausse d'engagement sur la page et les publications promotionnelles.",
      "Augmentation significative du trafic qualifié et des prises de rendez-vous sur le terrain.",
      "Conclusion effective de multiples transactions immobilières initiées via les réseaux sociaux."
    ],
    image: "assets/poster_07.jpg"
  },
  semjuice: {
    name: "SEMJUICE FRANCE / OGMIUS OUEB",
    sector: "Agence Webmarketing & Stratégie SEO International",
    period: "Juin 2022 – Février 2023 (9 mois)",
    location: "Remote France / International",
    role: "Rédacteur Web SEO & Spécialiste Référencement",
    context: "Plateforme européenne de netlinking et agence spécialisée dans le positionnement naturel sur Google pour des centaines de marques.",
    missions: [
      "Rédaction d'articles de blog et de landing pages rigoureusement optimisés pour le SEO sémantique.",
      "Recherche de mots-clés, analyse de la concurrence et application des règles de maillage interne.",
      "Classement, indexation et organisation structurée des sites web collectés de l'agence."
    ],
    results: [
      "Hausse mesurée du trafic organique client sur des requêtes hautement compétitives.",
      "Respect strict des critères éditoriaux et des délais de livraison imposés par l'agence.",
      "Optimisation des architectures éditoriales de dizaines de plateformes clientes."
    ],
    image: "assets/project_marketing.jpg"
  }
};

// --------------------------------------------------------------------------
// 3. Initialisation au Chargement
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  // Icônes
  refreshIcons();

  // Année Footer
  const y = document.getElementById('currentYear');
  if (y) y.textContent = new Date().getFullYear();

  // Thème & Langue (Initialisation depuis le stockage local)
  initTheme();
  initLanguage();

  // Accordion des Projets avec la Flèche
  initProjectsAccordion();

  // Modal des Détails d'Entreprise
  initDetailsModal();

  // Formulaire WhatsApp Direct
  initContactForm();

  // Header Scroll & Menu Mobile
  initHeader();

  // Effet d'apparition douce et glissante au scroll
  initScrollReveal();

  // Protection du contenu et du code source
  initContentProtection();
});

function refreshIcons() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// --------------------------------------------------------------------------
// 4. Gestion du Thème (Clair / Sombre)
// --------------------------------------------------------------------------
function initTheme() {
  const html = document.documentElement;
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const mobileThemeBtn = document.getElementById('mobileThemeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const themeLabel = document.getElementById('themeLabel');

  const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
  applyTheme(savedTheme);

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);

    if (themeIcon) {
      themeIcon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
    }
    if (themeLabel) {
      themeLabel.textContent = theme === 'dark' ? 'Clair' : 'Sombre';
    }
    refreshIcons();
  }

  function toggleTheme() {
    const current = html.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', toggleTheme);
}

// --------------------------------------------------------------------------
// 5. Gestion de la Traduction (FR / EN)
// --------------------------------------------------------------------------
function initLanguage() {
  const langToggleBtn = document.getElementById('langToggleBtn');
  const mobileLangBtn = document.getElementById('mobileLangToggleBtn');
  const langLabel = document.getElementById('langLabel');

  const savedLang = localStorage.getItem('portfolio-lang') || 'fr';
  applyLanguage(savedLang);

  function applyLanguage(lang) {
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;

    if (langLabel) {
      langLabel.textContent = lang === 'fr' ? 'EN' : 'FR';
    }

    const dict = translations[lang] || translations.fr;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    refreshIcons();
  }

  function toggleLanguage() {
    const current = localStorage.getItem('portfolio-lang') || 'fr';
    const next = current === 'fr' ? 'en' : 'fr';
    applyLanguage(next);
  }

  if (langToggleBtn) langToggleBtn.addEventListener('click', toggleLanguage);
  if (mobileLangBtn) mobileLangBtn.addEventListener('click', toggleLanguage);
}

// --------------------------------------------------------------------------
// 6. Accordion & Flèche d'Affichage des Détails par Entreprise
// --------------------------------------------------------------------------
function initProjectsAccordion() {
  const accordionContainer = document.getElementById('projectsAccordion');
  if (!accordionContainer) return;

  const items = accordionContainer.querySelectorAll('.accordion-item');

  items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const arrowBtn = item.querySelector('.accordion-arrow-btn');

    if (header) {
      header.addEventListener('click', (e) => {
        const isActive = item.classList.contains('active');

        items.forEach(other => {
          if (other !== item) other.classList.remove('active');
        });

        if (!isActive) {
          item.classList.add('active');
        } else if (e.target.closest('.accordion-arrow-btn')) {
          const orgId = item.getAttribute('data-org-id');
          openOrgDetailsModal(orgId);
        } else {
          item.classList.remove('active');
        }

        refreshIcons();
      });
    }

    if (arrowBtn) {
      arrowBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = item.classList.contains('active');
        if (!isActive) {
          items.forEach(other => other.classList.remove('active'));
          item.classList.add('active');
        } else {
          const orgId = item.getAttribute('data-org-id');
          openOrgDetailsModal(orgId);
        }
        refreshIcons();
      });
    }
  });

  document.querySelectorAll('.view-details-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const orgId = btn.getAttribute('data-org');
      openOrgDetailsModal(orgId);
    });
  });
}

// --------------------------------------------------------------------------
// 7. Modale des Détails Complets de Chaque Entreprise (Mission & Résultats)
// --------------------------------------------------------------------------
function initDetailsModal() {
  const modal = document.getElementById('detailsModal');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (!modal) return;

  function closeModal() {
    modal.classList.remove('open');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  document.querySelectorAll('.poster-card, .video-card').forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.getAttribute('data-title') || 'Création Graphique & Vidéo';
      const desc = card.getAttribute('data-desc') || 'Format produit par Hubert SOSSOU TONOUKOUIN pour accroître la notoriété et la conversion.';
      if (!img) return;

      const content = document.getElementById('detailsModalContent');
      content.innerHTML = `
        <div style="margin-bottom: 1.25rem; border-radius: 12px; overflow: hidden; background-color: #0F172A; text-align: center;">
          <img src="${img.src}" alt="${title}" style="max-height: 520px; width: auto; max-width: 100%; margin: 0 auto; display: block;">
        </div>
        <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-heading); margin-bottom: 0.5rem;">${title}</h3>
        <p style="font-size: 0.95rem; color: var(--text-body); line-height: 1.6; margin-bottom: 1.5rem;">${desc}</p>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="#contact" class="btn btn-primary btn-sm" onclick="document.getElementById('detailsModal').classList.remove('open')">
            Discuter d'un projet similaire
          </a>
          <a href="https://wa.me/2290197150777" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
            WhatsApp Direct
          </a>
        </div>
      `;
      modal.classList.add('open');
      refreshIcons();
    });
  });
}

function openOrgDetailsModal(orgId) {
  const modal = document.getElementById('detailsModal');
  const content = document.getElementById('detailsModalContent');
  const org = orgDetailsData[orgId];

  if (!modal || !content || !org) return;

  const missionsHtml = org.missions.map(m => `
    <li style="display: flex; align-items: flex-start; gap: 0.65rem; margin-bottom: 0.6rem; font-size: 0.92rem; color: var(--text-body);">
      <span style="color: var(--blue-primary); font-weight: 800; margin-top: 1px;">•</span>
      <span>${m}</span>
    </li>
  `).join('');

  const resultsHtml = org.results.map(r => `
    <li style="display: flex; align-items: flex-start; gap: 0.65rem; margin-bottom: 0.6rem; font-size: 0.92rem; color: var(--text-body);">
      <span style="color: #10B981; font-weight: 800; margin-top: 1px;">✓</span>
      <span>${r}</span>
    </li>
  `).join('');

  content.innerHTML = `
    <div style="border-bottom: 1px solid var(--border-subtle); padding-bottom: 1.25rem; margin-bottom: 1.5rem;">
      <span class="section-tag" style="margin-bottom: 0.4rem;">DOSSIER D'INTERVENTION COMPLET</span>
      <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--text-heading); margin-bottom: 0.25rem;">${org.name}</h3>
      <div style="font-size: 0.9rem; color: var(--text-muted); font-weight: 600;">
        ${org.role} • ${org.period} • ${org.location}
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;">
      <div>
        <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-heading); margin-bottom: 0.5rem;">Contexte de la Mission</h4>
        <p style="font-size: 0.92rem; color: var(--text-body); line-height: 1.6; margin-bottom: 1.25rem;">${org.context}</p>

        <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-heading); margin-bottom: 0.65rem;">Missions Réalisées & Canaux Déployés</h4>
        <ul style="list-style: none; padding-left: 0; margin-bottom: 1.25rem;">
          ${missionsHtml}
        </ul>

        <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-heading); margin-bottom: 0.65rem;">Résultats Mesurés & Impact</h4>
        <ul style="list-style: none; padding-left: 0; margin-bottom: 1.5rem; background-color: var(--bg-subtle); padding: 1rem; border-radius: 12px; border: 1px solid var(--border-subtle);">
          ${resultsHtml}
        </ul>

        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="#contact" class="btn btn-primary btn-sm" onclick="document.getElementById('detailsModal').classList.remove('open')">
            Me contacter pour une mission similaire
          </a>
          <a href="https://wa.me/2290197150777" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
            Discuter sur WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  refreshIcons();
}

// --------------------------------------------------------------------------
// 8. Formulaire WhatsApp Direct
// --------------------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements['name']?.value.trim() || 'Visiteur';
    const email = form.elements['email']?.value.trim() || 'Non précisé';
    const subject = form.elements['subject']?.value.trim() || 'Prise de contact portfolio';
    const message = form.elements['message']?.value.trim() || '';

    const text = `Bonjour Hubert,%0A%0AJe m'appelle *${encodeURIComponent(name)}* (${encodeURIComponent(email)}).%0A%0A*Objet :* ${encodeURIComponent(subject)}%0A%0A*Message :*%0A${encodeURIComponent(message)}%0A%0A(Envoyé depuis portfolio.digital)`;
    const whatsappUrl = `https://wa.me/2290197150777?text=${text}`;

    window.open(whatsappUrl, '_blank');
  });
}

// --------------------------------------------------------------------------
// 9. Header Sticky & Mobile Drawer
// --------------------------------------------------------------------------
function initHeader() {
  const header = document.getElementById('mainHeader');
  const toggleBtn = document.getElementById('mobileToggleBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  if (toggleBtn && mobileNav) {
    toggleBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });

    mobileLinks.forEach(l => {
      l.addEventListener('click', () => {
        mobileNav.classList.remove('open');
      });
    });
  }
}

// --------------------------------------------------------------------------
// 10. Animation Douce d'Apparition Glissante au Défilement
// --------------------------------------------------------------------------
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// --------------------------------------------------------------------------
// 11. Protection du Contenu (Mobile & Desktop : Anti-copie, Anti-téléchargement)
// Protection silencieuse sans aucune notification visuelle
// --------------------------------------------------------------------------
function initContentProtection() {
  // 1. Bloquer universellement le menu contextuel (clic droit et appui long mobile)
  const blockContextMenu = (e) => {
    e.preventDefault();
    return false;
  };
  window.addEventListener('contextmenu', blockContextMenu, { capture: true, passive: false });
  document.addEventListener('contextmenu', blockContextMenu, { capture: true, passive: false });

  // 2. Bloquer le démarrage de sélection de texte sur mobile et desktop (hors champs de formulaire)
  document.addEventListener('selectstart', (e) => {
    const target = e.target;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
      return true;
    }
    e.preventDefault();
    return false;
  }, { capture: true, passive: false });

  // 3. Annuler instantanément toute tentative de sélection mobile résiduelle
  document.addEventListener('selectionchange', () => {
    const active = document.activeElement;
    if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) {
      return;
    }
    const sel = window.getSelection();
    if (sel && sel.removeAllRanges) {
      sel.removeAllRanges();
    }
  });

  // 4. Bloquer le glisser-déposer sur l'ensemble de la page
  const blockDrag = (e) => {
    e.preventDefault();
    return false;
  };
  window.addEventListener('dragstart', blockDrag, { capture: true, passive: false });
  document.addEventListener('dragstart', blockDrag, { capture: true, passive: false });

  // 5. Gérer les gestes tactiles d'appui long sur mobile (évite l'apparition de loupe ou de menu)
  let touchTimer = null;
  let touchStartX = 0;
  let touchStartY = 0;

  window.addEventListener('touchstart', (e) => {
    const target = e.target;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
      return;
    }

    if (e.touches && e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;

      if (touchTimer) clearTimeout(touchTimer);
      touchTimer = setTimeout(() => {
        const sel = window.getSelection();
        if (sel && sel.removeAllRanges) {
          sel.removeAllRanges();
        }
      }, 250);
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches.length === 1) {
      const dx = Math.abs(e.touches[0].clientX - touchStartX);
      const dy = Math.abs(e.touches[0].clientY - touchStartY);
      if (dx > 8 || dy > 8) {
        if (touchTimer) clearTimeout(touchTimer);
      }
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    if (touchTimer) clearTimeout(touchTimer);
  }, { passive: true });

  window.addEventListener('touchcancel', () => {
    if (touchTimer) clearTimeout(touchTimer);
  }, { passive: true });

  // 6. Sécurisation directe de toutes les balises <img> (statiques et dynamiques)
  const secureAllImages = () => {
    document.querySelectorAll('img').forEach((img) => {
      img.setAttribute('draggable', 'false');
      img.setAttribute('oncontextmenu', 'return false;');
      img.style.pointerEvents = 'none';
      img.style.webkitTouchCallout = 'none';
      img.style.webkitUserSelect = 'none';
      img.style.userSelect = 'none';
    });
  };
  secureAllImages();

  // Observer pour sécuriser immédiatement toute image ouverte dans le modal
  const imgObserver = new MutationObserver(() => secureAllImages());
  imgObserver.observe(document.body, { childList: true, subtree: true });

  // 7. Bloquer les raccourcis clavier PC
  document.addEventListener('keydown', (e) => {
    // F12 (DevTools)
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
      return false;
    }

    const isCtrlOrCmd = e.ctrlKey || e.metaKey;

    // Ctrl+U / Cmd+U (Afficher le code source)
    if (isCtrlOrCmd && (e.key === 'u' || e.key === 'U' || e.keyCode === 85)) {
      e.preventDefault();
      return false;
    }

    // Ctrl+S / Cmd+S (Enregistrer la page web)
    if (isCtrlOrCmd && (e.key === 's' || e.key === 'S' || e.keyCode === 83)) {
      e.preventDefault();
      return false;
    }

    // Ctrl+Shift+I / J / C (Inspecteur d'éléments & Console DevTools)
    if (isCtrlOrCmd && e.shiftKey) {
      const k = e.key ? e.key.toUpperCase() : '';
      if (k === 'I' || k === 'J' || k === 'C' || e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67) {
        e.preventDefault();
        return false;
      }
    }

    // Ctrl+P / Cmd+P (Imprimer la page)
    if (isCtrlOrCmd && (e.key === 'p' || e.key === 'P' || e.keyCode === 80)) {
      e.preventDefault();
      return false;
    }

    // Ctrl+C / Cmd+C (Copier du texte - autorisé seulement dans input et textarea)
    if (isCtrlOrCmd && (e.key === 'c' || e.key === 'C' || e.keyCode === 67)) {
      const tag = document.activeElement ? document.activeElement.tagName.toUpperCase() : '';
      if (tag !== 'INPUT' && tag !== 'TEXTAREA') {
        e.preventDefault();
        return false;
      }
    }

    // Ctrl+A / Cmd+A (Sélectionner tout - autorisé seulement dans input et textarea)
    if (isCtrlOrCmd && (e.key === 'a' || e.key === 'A' || e.keyCode === 65)) {
      const tag = document.activeElement ? document.activeElement.tagName.toUpperCase() : '';
      if (tag !== 'INPUT' && tag !== 'TEXTAREA') {
        e.preventDefault();
        return false;
      }
    }
  });

  // 8. Empêcher la copie et le coupage globaux hors formulaire
  const blockClipboard = (e) => {
    const tag = document.activeElement ? document.activeElement.tagName.toUpperCase() : '';
    if (tag !== 'INPUT' && tag !== 'TEXTAREA') {
      e.preventDefault();
      return false;
    }
  };
  document.addEventListener('copy', blockClipboard);
  document.addEventListener('cut', blockClipboard);
}
