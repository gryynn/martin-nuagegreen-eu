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
    title: 'Homelab homelab personnel',
    tagline: 'Souveraineté numérique en pratique',
    icon: 'tabler:server-2',
    status: 'live',
    year: '2024 →',
    tags: ['infra', 'self-hosting', 'docker'],
    stack: ['Docker', 'Traefik', 'Cloudflare Tunnel', 'tunnel chiffré', 'Linux', 'Nextcloud', 'Supabase', 'n8n'],
    summary:
      "20+ services Docker auto-hébergés sur 4 machines, exposés via tunnel chiffré. Pleine souveraineté sur mes données et mes outils.",
    description:
      "homelab personnel est mon homelab personnel — un Mini-PC Beelink (Linux) qui héberge tout ce que j'utilise au quotidien : Nextcloud (fichiers + sync mobile), Supabase (10+ schémas data perso), n8n (automatisations), agent IA Hermès, Obsidian remote, et une vingtaine d'autres services. Le tout derrière Traefik + Cloudflare Tunnel pour l'accès public, et tunnel chiffré pour le VPN entre mes machines (homelab personnel, homelab personnel, homelab personnel, homelab personnel).",
    highlights: [
      "20+ services Docker en production continue",
      "Reverse proxy Traefik + auto-renouvellement TLS",
      "Cloudflare Tunnel (zéro port ouvert) + tunnel chiffré VPN",
      "Backups rclone vers OneDrive + snapshots locaux",
      "Documentation vivante dans le vault Obsidian",
    ],
    metrics: [
      { label: 'Services Docker', value: '20+' },
      { label: 'Machines', value: '4' },
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
      "NOMAD est ma solution pour capturer la pensée à l'oral et la transformer en notes structurées sans friction. PWA installable sur mobile qui enregistre l'audio (locale ou multi-sources), upload sur Supabase, déclenche un pipeline Whisper pour la transcription, puis un agent qui découpe la transcription en notes atomiques cross-linkées dans le vault Obsidian.",
    highlights: [
      "PWA installable, fonctionne offline-first",
      "Pipeline async : enregistrement → upload → transcription → atomisation",
      "200+ sessions transcrites en production",
      "plusieurs RLS policies Supabase pour sécurité multi-utilisateurs",
      "Intégration vault Obsidian via cross-linking automatique",
    ],
    metrics: [
      { label: 'Sessions transcrites', value: '200+' },
      { label: 'RLS policies', value: '24' },
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
      "App Flutter de suivi du temps par tags fractals. Offline-first avec sync Supabase, architecture documentée par 16 ADRs. Live sur Samsung S26.",
    description:
      "Mirai est mon outil quotidien de capture du temps et des activités. Architecture par tags fractals (pas de catégories rigides — un arbre hiérarchique libre), 7 types d'items composables (time, value, link, meta, note, date, form), et concept d'items \"ghost\" (reflets UI purs). Offline-first sur SQLite via Drift, sync Supabase avec stratégie last-write-wins. 16 ADRs documentent toutes les décisions architecturales.",
    highlights: [
      "Tags fractals : zéro catégorie figée, arbre libre",
      "7 types d'items génériques (LEGO de tracking)",
      "Offline-first : SQLite source de vérité",
      "Sync bidirectionnelle Supabase, LWW",
      "16 ADRs documentés en base Supabase",
      "Slider, link, meta, ghost — primitives composables",
    ],
    metrics: [
      { label: 'ADRs documentés', value: '16' },
      { label: 'Items en prod', value: '1k+' },
      { label: 'Selections', value: '3600+' },
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
      "Agent IA personnel auto-hébergé avec mémoire cross-session, RAG Qdrant sur le vault, et serveurs MCP (TickTick, Home Assistant, Supabase).",
    description:
      "Hermès est mon agent IA personnel, container Docker tournant sur homelab personnel. Modèle Kimi K2 via OpenRouter (avec fallback Claude Haiku), RAG sur 1k+ chunks de mon vault Obsidian via Qdrant, et accès aux outils du quotidien via MCPs : TickTick (tâches), Home Assistant (domotique), Supabase REST (toutes mes données perso). Mémoire long-terme avec rotator de sessions toutes les 15 min, indexées dans Qdrant pour rappel cross-session.",
    highlights: [
      "Kimi K2 via OpenRouter, fallback Anthropic",
      "RAG Qdrant : 1k+ chunks du vault indexés",
      "MCPs : TickTick + Home Assistant + Supabase REST",
      "Mémoire cross-session validée (cron 15 min)",
      "Persona via SOUL.md (system prompt structuré)",
      "Skills modulaires (rag-vault, supabase-rest, etc.)",
    ],
    metrics: [
      { label: 'Chunks RAG', value: '1k+' },
      { label: 'MCPs connectés', value: '3' },
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
      "Atelier mené avec Mael Guyon : conception et impression 3D d'objets personnalisés sur commande. Projet clos en octobre 2025.",
    description:
      "MG Design était l'atelier d'objets imprimés en 3D que j'ai co-piloté avec Mael Guyon. On concevait des pièces sur-mesure (objets fonctionnels, déco, prototypes, trophées) qu'on imprimait puis livrait. Présentation au concours Altern up FIPA pendant la Créativ Week Berlin 2025. Projet conclu en octobre 2025 — mais l'expertise et la machine restent, je continue les pièces sur commande en direct via la boutique.",
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
    // [TODO] Ajouter 2-3 témoignages clients
    testimonials: [
      // { quote: '...', author: 'Prénom Nom', role: 'Organisateur événement X', date: 'Mars 2025' },
    ],
  },
  {
    slug: 'psm',
    title: 'PSM — système de pilotage perso',
    tagline: 'Cockpit data-oriented sur ma vie',
    icon: 'tabler:dashboard',
    status: 'live',
    year: '2024 →',
    tags: ['data', 'self-hosting', 'health'],
    stack: ['Supabase', 'PostgreSQL', 'TickTick API', 'capteurs santé', 'n8n', 'Python'],
    summary:
      "10+ schémas Supabase qui captent ma vie au quotidien (humeur, habitudes, finances, santé, temps). Bilans hebdomadaires automatisés.",
    description:
      "PSM (Personal System Management) est l'écosystème de données qui sous-tend mon quotidien. Centralise via Supabase : humeur via Mirai, habitudes quotidiennes (schéma habitudes, 1k+ rows), tâches TickTick (sync horaire), bilans hebdomadaires PERMA-V (schéma bilans, 100+ bilans), insights et apprentissages (centaines d'entrées), schéma finance (18 comptes, snapshots patrimoine), schéma santé via capteurs santé (12 tables). Tout passe par Hermès pour analyse, coaching, et reporting.",
    highlights: [
      "10+ schémas Supabase en production",
      "100+ bilans hebdomadaires accumulés",
      "1k+ rows d'habitudes quotidiennes trackées",
      "Sync TickTick automatique (cron horaire)",
      "Pipeline capteurs santé S26 → Supabase",
      "295 insights structurés avec relations PERMA",
    ],
    metrics: [
      { label: 'Schémas DB', value: '14+' },
      { label: 'Bilans hebdo', value: '121' },
      { label: 'Habitudes loggées', value: '1k+' },
    ],
  },
];

export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();
export const allStacks = Array.from(new Set(projects.flatMap((p) => p.stack))).sort();

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
