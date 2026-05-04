export type ProjectStatus = 'live' | 'wip' | 'concept' | 'archived';

export interface ProjectLink {
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role?: string;
  date?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  icon: string;
  status: ProjectStatus;
  year: string;
  tags: string[];
  stack: string[];
  summary: string;
  description: string;
  highlights: string[];
  links?: ProjectLink[];
  metrics?: { label: string; value: string }[];
  screenshots?: ProjectScreenshot[];
  testimonials?: ProjectTestimonial[];
}

export const projects: Project[] = [
  {
    slug: 'homelab',
    title: 'Homelab personnel',
    tagline: 'Souveraineté numérique en pratique',
    icon: 'tabler:server-2',
    status: 'live',
    year: '2024 →',
    tags: ['infra', 'self-hosting', 'docker'],
    stack: ['Docker', 'Traefik', 'Linux', 'Nextcloud', 'Supabase', 'n8n'],
    summary:
      "20+ services Docker auto-hébergés sur ma flotte de machines, tout passe par un reverse proxy avec TLS auto. Mes données et mes outils, chez moi.",
    description:
      "Mon homelab est un Mini-PC Linux qui héberge la plupart de mes outils du quotidien : stockage de fichiers, base de données, automatisations, agent IA, instance Obsidian. Une vingtaine de services accessibles depuis n'importe lequel de mes appareils, sans passer par les clouds des géants. C'est mon laboratoire pour tester ce qu'on peut faire quand on récupère la main sur sa stack.",
    highlights: [
      "20+ services Docker en production continue",
      "Reverse proxy Traefik + auto-renouvellement TLS",
      "Accès distant sans port ouvert (tunnel chiffré)",
      "Backups vers stockage externe + snapshots locaux",
      "Documentation vivante dans le vault Obsidian",
    ],
    metrics: [
      { label: 'Services Docker', value: '20+' },
      { label: 'Uptime', value: '99%+' },
    ],
  },
  {
    slug: 'nomad',
    title: 'NOMAD',
    tagline: 'Capture audio multi-sources → vault Obsidian',
    icon: 'tabler:microphone-2',
    status: 'live',
    year: '2025 →',
    tags: ['ai', 'audio', 'pwa', 'data'],
    stack: ['React', 'TypeScript', 'Python', 'Whisper', 'Supabase', 'PostgreSQL'],
    summary:
      "PWA de capture audio (dictaphone, conversations, podcasts) avec pipeline de transcription automatique et atomisation en notes Obsidian.",
    description:
      "NOMAD est ma solution pour capturer la pensée à l'oral et la transformer en notes structurées sans friction. PWA installable sur mobile qui enregistre l'audio, l'envoie sur ma base, déclenche un pipeline Whisper pour la transcription, puis un agent qui découpe la transcription en notes atomiques cross-linkées dans le vault Obsidian.",
    highlights: [
      "PWA installable, fonctionne offline-first",
      "Pipeline async : enregistrement → upload → transcription → atomisation",
      "Plusieurs centaines de sessions transcrites en production",
      "Politiques de sécurité multi-utilisateurs en place",
      "Intégration vault Obsidian via cross-linking automatique",
    ],
    metrics: [
      { label: 'Sessions transcrites', value: '200+' },
    ],
  },
  {
    slug: 'mirai',
    title: 'Mirai',
    tagline: 'Time-tracking fractal offline-first',
    icon: 'tabler:device-mobile',
    status: 'live',
    year: '2024 →',
    tags: ['mobile', 'flutter', 'data'],
    stack: ['Flutter', 'Dart', 'Drift', 'SQLite', 'Supabase', 'Provider'],
    summary:
      "App Flutter de suivi du temps par tags fractals. Offline-first avec sync cloud, architecture documentée par 16 ADRs. Live sur mon mobile depuis plus d'un an.",
    description:
      "Mirai est mon outil quotidien de capture du temps et des activités. Architecture par tags fractals (pas de catégories rigides — un arbre hiérarchique libre), 7 types d'items composables (time, value, link, meta, note, date, form), et concept d'items \"ghost\" (reflets UI purs). Offline-first sur SQLite via Drift, sync cloud avec stratégie last-write-wins. 16 ADRs documentent toutes les décisions architecturales.",
    highlights: [
      "Tags fractals : zéro catégorie figée, arbre libre",
      "7 types d'items génériques (LEGO de tracking)",
      "Offline-first : SQLite source de vérité",
      "Sync bidirectionnelle, last-write-wins",
      "16 ADRs documentés en base",
      "Slider, link, meta, ghost — primitives composables",
    ],
    metrics: [
      { label: 'ADRs documentés', value: '16' },
      { label: 'Items en prod', value: '1k+' },
    ],
  },
  {
    slug: 'hermes-ai-stack',
    title: 'Hermès AI Stack',
    tagline: 'Agent IA local avec mémoire long-terme',
    icon: 'tabler:robot',
    status: 'live',
    year: '2025 →',
    tags: ['ai', 'agent', 'self-hosting'],
    stack: ['Kimi K2', 'OpenRouter', 'Qdrant', 'MCP', 'Docker', 'Python'],
    summary:
      "Agent IA personnel auto-hébergé avec mémoire cross-session, RAG sur le vault et serveurs MCP (TickTick, Home Assistant, base perso).",
    description:
      "Hermès est mon agent IA personnel, container Docker tournant sur le homelab. Modèle Kimi K2 via OpenRouter (avec fallback Claude Haiku), RAG sur le vault Obsidian via Qdrant, et accès aux outils du quotidien via MCPs : TickTick (tâches), Home Assistant (domotique), API REST de ma base perso. Mémoire long-terme avec rotator de sessions, indexées pour rappel cross-session. C'est mon terrain de test pour comprendre ce qu'un agent local bien outillé peut vraiment faire au quotidien.",
    highlights: [
      "Kimi K2 via OpenRouter, fallback Anthropic",
      "RAG Qdrant : milliers de chunks du vault indexés",
      "MCPs : TickTick + Home Assistant + base perso",
      "Mémoire cross-session validée (cron 15 min)",
      "Persona via SOUL.md (system prompt structuré)",
      "Skills modulaires (rag-vault, supabase-rest, etc.)",
    ],
    metrics: [
      { label: 'MCPs connectés', value: '3' },
    ],
  },
  {
    slug: 'biosphere',
    title: 'Biosphère',
    tagline: 'Apprendre à fabriquer du vivant chez soi',
    icon: 'tabler:plant-2',
    status: 'wip',
    year: '2024 →',
    tags: ['hardware', 'diy', 'ecologie'],
    stack: ['Hydroponie NFT', 'Arduino', 'ESP32', 'Impression 3D', 'Capteurs'],
    summary:
      "Tour hydroponique de balcon : deux versions itérées, troisième en cours. Mon terrain d'expérimentation pour comprendre la culture de demain et préparer un projet plus grand.",
    description:
      "Biosphère, c'est ma série d'essais autour de la culture hydroponique sur balcon. Deux prototypes physiques déjà construits (tour NFT + bac salades), avec capteurs, gestion d'eau et impressions 3D maison. L'objectif n'est pas le rendement parfait — c'est de comprendre concrètement ce qu'il faut maîtriser (lumière, nutriments, pH, microclimat) avant de pousser plus loin. Comme tous mes projets, c'est un levier pour explorer le monde de demain en équilibre avec notre environnement et les enjeux globaux. Ce banc d'essai sert de laboratoire pour Greenity, ma vision long terme d'écolieu autonome.",
    highlights: [
      "V1 tour NFT — première itération",
      "V2 bac multi-cultures — design 3D + capteurs",
      "V3 en cours : intégration domotique Home Assistant",
      "Banc de test pour le projet Greenity (autonomie alimentaire)",
      "Toute la documentation dans le vault — itérations, échecs, leçons",
    ],
  },
  {
    slug: 'mg-design',
    title: 'MG Design',
    tagline: "Atelier d'objets imprimés en 3D",
    icon: 'tabler:3d-cube-sphere',
    status: 'archived',
    year: '2024 — 2025',
    tags: ['hardware', '3d-printing', 'design'],
    stack: ['Fusion 360', 'Blender', 'Bambu Lab', 'PLA', 'PETG'],
    summary:
      "Atelier mené avec mon associé : conception et impression 3D d'objets personnalisés sur commande. Projet clos en octobre 2025.",
    description:
      "MG Design était l'atelier d'objets imprimés en 3D que j'ai co-piloté. On concevait des pièces sur-mesure (objets fonctionnels, déco, prototypes, trophées) qu'on imprimait puis livrait. Présentation au concours Altern up FIPA pendant la Créativ Week Berlin 2025. Projet conclu en octobre 2025 — l'expertise et la machine restent, je continue les pièces sur commande en direct via la boutique.",
    highlights: [
      "Conception Fusion 360 + Blender",
      "Impression Bambu Lab — PLA, PETG, ABS",
      "Présenté Créativ Week Berlin 2025 (Altern up FIPA)",
      "Plusieurs séries de trophées et pièces personnalisées livrées",
      "Site dédié archivé : mgdesign.cloud",
    ],
    links: [
      { label: 'mgdesign.cloud (archive)', href: 'https://mgdesign.cloud', icon: 'tabler:external-link', external: true },
      { label: 'Voir Stashflask (nouveau produit)', href: '/boutique/stashflask', icon: 'tabler:shopping-bag' },
    ],
    // [TODO] Ajouter 4-6 photos : produits livrés, atelier, Berlin 2025
    screenshots: [
      // { src: '/projets/mg-design/1.jpg', alt: 'Trophée personnalisé livré', caption: 'Trophée hackathon — janvier 2025' },
    ],
    // [TODO] Ajouter 2-3 témoignages clients (cf. carnet de commandes 2024-2025)
    testimonials: [
      // { quote: '...', author: 'Prénom Nom', role: 'Organisateur événement X', date: 'Mars 2025' },
    ],
  },
  {
    slug: 'psm',
    title: 'PSM — pilotage perso',
    tagline: 'Cockpit data-oriented sur mon quotidien',
    icon: 'tabler:dashboard',
    status: 'live',
    year: '2024 →',
    tags: ['data', 'self-hosting', 'productivity'],
    stack: ['Supabase', 'PostgreSQL', 'TickTick API', 'n8n', 'Python'],
    summary:
      "Plus d'une dizaine de schémas qui consolident mes outils du quotidien (tâches, capteurs, agenda) pour que mon agent IA puisse en faire quelque chose d'utile.",
    description:
      "PSM (Personal System Management) est ma façon de relier les outils que j'utilise déjà — TickTick, agenda, capteurs santé via smartwatch + Android, time-tracking via [Mirai](/projets/mirai) — dans une base unifiée. L'idée n'est pas de tout mesurer, c'est de donner à mon [agent IA personnel auto-hébergé](/projets/hermes-ai-stack) le contexte qu'il faut pour rester pertinent au quotidien : faire un bilan, proposer un coaching, repérer un pattern. Les bilans hebdomadaires sortent automatiquement, le reste est à la demande.",
    highlights: [
      "Plus d'une dizaine de schémas Supabase en production",
      "Bilans hebdomadaires automatisés (PERMA-V)",
      "Sync TickTick → tâches centralisées (cron horaire)",
      "Pipeline capteurs santé Android → base perso",
      "Tout passe par Hermès pour l'analyse et le reporting",
    ],
    metrics: [
      { label: 'Schémas DB', value: '10+' },
      { label: 'Sources connectées', value: '5+' },
    ],
  },
];

export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();
export const allStacks = Array.from(new Set(projects.flatMap((p) => p.stack))).sort();

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
