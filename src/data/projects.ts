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
    stack: ['Docker', 'Traefik', 'Linux', 'Nextcloud', 'Supabase', 'n8n', 'Tailscale', 'Cloudflare'],
    summary:
      "Mon cloud personnel : photos, notes, base de données, agent IA et automatisations tournent sur des machines que j'administre moi-même, accessibles depuis partout sans dépendre des GAFAM.",
    description:
      "Le homelab est mon infrastructure pivot : un mini-PC Linux et quelques machines satellites qui hébergent une vingtaine de services. C'est ce qui me permet d'avoir un Nextcloud à la place de Google Drive, une base de données qui me sert à moi seul, un agent IA qui tourne en local, et toutes mes automatisations centralisées — le tout accessible depuis mon téléphone ou un PC distant via un réseau privé chiffré. C'est aussi mon banc d'essai pour explorer ce que devient un quotidien numérique quand on reprend la main sur sa stack.",
    highlights: [
      "Une vingtaine de services en production continue : cloud perso, base de données, agent IA, domotique",
      "HTTPS automatique sur tous les services internes",
      "Accès distant sans port ouvert sur internet (réseau privé chiffré)",
      "Sauvegardes externes + snapshots locaux automatisés",
      "Documentation vivante : chaque service a sa note dédiée dans un vault Obsidian",
    ],
    metrics: [
      { label: 'Services en prod', value: '20+' },
      { label: 'Uptime', value: '99%+' },
    ],
  },
  {
    slug: 'nomad',
    title: 'NOMAD',
    tagline: 'Capter ses idées à la voix, sans perdre le fil',
    icon: 'tabler:microphone-2',
    status: 'live',
    year: '2025 →',
    tags: ['ai', 'audio', 'pwa', 'data'],
    stack: ['React', 'TypeScript', 'Flutter', 'Python', 'Whisper', 'Groq', 'Supabase'],
    summary:
      "Application web et mobile pour enregistrer une réflexion à la volée — un voice memo, une conversation, un podcast — et la retrouver transcrite, découpée et reliée automatiquement à mes notes existantes.",
    description:
      "NOMAD répond à une frustration concrète : les meilleures idées arrivent en marchant, en discutant, en conduisant — et le clavier n'est jamais là au bon moment. C'est une application installable sur téléphone qui démarre un enregistrement en un geste, transcrit l'audio dès qu'il y a du réseau, puis fait passer le texte par un agent IA qui le découpe en notes atomiques, classées et reliées dans mon vault Obsidian. Le travail de classement, qui prend habituellement plus de temps que la capture elle-même, est délégué à la machine. La version open-source publique est en préparation pour que d'autres puissent l'auto-héberger.",
    highlights: [
      "S'installe comme une vraie app sur mobile, démarre en un geste",
      "Du dictaphone aux notes structurées sans intervention manuelle",
      "Fonctionne hors réseau, synchronise quand c'est possible",
      "Multi-utilisateur : chaque user voit uniquement ses propres données",
      "Les notes générées se relient automatiquement aux notes existantes",
      "Plusieurs centaines de sessions transcrites depuis le début de l'usage",
    ],
    metrics: [
      { label: 'Sessions transcrites', value: '200+' },
    ],
  },
  {
    slug: 'mirai',
    title: 'Mirai',
    tagline: 'Suivre son temps autrement, sans cases imposées',
    icon: 'tabler:device-mobile',
    status: 'live',
    year: '2024 →',
    tags: ['mobile', 'flutter', 'data'],
    stack: ['Flutter', 'Dart', 'Drift', 'SQLite', 'Supabase', 'Provider'],
    summary:
      "Application mobile de suivi du temps construite autour d'une idée simple : les vraies activités humaines ne rentrent pas dans des cases prédéfinies. Mirai laisse construire son propre arbre d'étiquettes au fil de l'usage, et observer ses habitudes sans jugement.",
    description:
      "Mirai est l'outil que j'utilise tous les jours depuis plus d'un an pour comprendre où passe mon temps et ce que je fais vraiment de mes journées. Plutôt que d'imposer des catégories (« travail », « sport », « loisir »…), l'app propose un arbre d'étiquettes 100% libre que chaque utilisateur fait grandir au fil de l'usage. Les données restent sur le téléphone (l'app marche sans réseau), et se synchronisent silencieusement quand le wifi revient. Toutes les décisions d'architecture sont documentées dans un registre interne — l'app est conçue pour durer, pas pour être jetée à la prochaine refonte. La version open-source publique sort bientôt sur GitHub.",
    highlights: [
      "Arbre d'étiquettes 100% libre — aucune catégorie imposée",
      "Plusieurs formats de suivi composables (temps, intensité, notes, liens)",
      "Fonctionne sans réseau, sync silencieuse au retour du wifi",
      "Plus d'un an d'usage perso continu — testé en conditions réelles",
      "Architecture entièrement documentée (16 décisions consignées)",
      "Pensée pour scaler proprement, pas pour être jetée",
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
      "Un assistant IA personnel qui tourne chez moi, garde la mémoire de nos échanges et a accès direct à mes outils du quotidien (notes, tâches, domotique). Mon terrain pour explorer ce qu'un agent local bien outillé peut vraiment faire.",
    description:
      "Hermès est mon agent IA personnel, conteneurisé sur le homelab. Contrairement aux assistants généralistes qui oublient tout entre deux conversations, Hermès se souvient de nos échanges passés, sait retrouver une idée évoquée six mois plus tôt dans mes notes, et peut agir sur mes outils : ajouter une tâche dans mon gestionnaire, allumer une lumière, requêter ma base de données personnelle. C'est aussi un banc d'essai pour évaluer où en sont les agents IA en 2026 — et jusqu'où on peut leur faire confiance pour des actions concrètes.",
    highlights: [
      "Modèle de pointe (Kimi K2) avec bascule automatique en cas d'incident fournisseur",
      "Mémoire indexée de mes notes : retrouve une idée évoquée plusieurs mois plus tôt",
      "Accès direct à mes tâches, à ma domotique, à ma base de données personnelle",
      "Mémoire qui persiste entre les sessions — l'agent se souvient des conversations passées",
      "Personnalité configurable via un fichier dédié",
      "Capacités modulaires, ajoutables à la volée selon les besoins",
    ],
    metrics: [
      { label: 'Outils connectés', value: '3+' },
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
      "Trois itérations de culture hydroponique sur balcon, dont une en cours. Mon terrain d'expérimentation pour comprendre la culture de demain et le locavorisme alimentaire en milieu urbain.",
    description:
      "Biosphère, c'est ma série d'expérimentations autour d'une question simple : comment favoriser le **locavorisme** — qu'il soit alimentaire, organisationnel ou énergétique. Le projet s'inspire du [Lowtech Lab](https://lowtechlab.org/) et notamment de leur science participative *Biosphère* à laquelle j'ai participé en 2024. La première étape, c'est le locavorisme alimentaire — un vrai défi en milieu urbain. D'où l'idée de tester la culture hydroponique, d'abord en intérieur puis sur balcon. Trois itérations à ce jour, chacune avec son système de contrôle des variables (capteurs, gestion d'eau, impressions 3D maison). L'objectif n'est pas le rendement parfait — c'est de comprendre concrètement ce qu'il faut maîtriser (lumière, nutriments, pH, microclimat) avant de pousser plus loin. Comme tous mes projets, c'est un levier pour explorer le monde de demain en équilibre avec notre environnement et les enjeux globaux. Un banc d'essai pour aller plus loin, plus tard.",
    highlights: [
      "V1 — Tour NFT en intérieur (avant Lowtech Lab) : première tentative, probablement freinée par une eau trop calcaire",
      "V2 — Table multi-cultures : inspirée des recherches du Lowtech Lab, irrigation régulière, capteurs, impressions 3D — limitée par un manque de lumière",
      "V3 — Retour à la tour, sur balcon (en cours) : itération qui corrige les manques des deux premières, intégration domotique",
      "Question de fond : comment favoriser le locavorisme alimentaire en milieu urbain ?",
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
    tagline: 'Centraliser ses données du quotidien pour un coaching IA pertinent',
    icon: 'tabler:dashboard',
    status: 'live',
    year: '2024 →',
    tags: ['data', 'self-hosting', 'productivity'],
    stack: ['Supabase', 'PostgreSQL', 'TickTick API', 'n8n', 'Python'],
    summary:
      "Mes outils du quotidien (tâches, capteurs santé, agenda, suivi du temps) parlent rarement entre eux. PSM les rassemble dans une base unifiée pour que mon agent IA personnel puisse en tirer des bilans pertinents et proposer un coaching qui tient debout.",
    description:
      "PSM (Personal System Management) relie les outils que j'utilise déjà — TickTick, agenda, capteurs santé, [Mirai](/projets/mirai) pour le suivi du temps — dans une base unifiée et requêtable. L'idée n'est pas de tout mesurer (la donnée pour la donnée ne sert à rien), c'est de donner à mon [agent IA personnel](/projets/hermes-ai-stack) le contexte qu'il faut pour rester pertinent : repérer un pattern hebdomadaire, proposer un coaching tenant compte de mon état réel, faire un bilan croisé entre humeur et activité. Les bilans hebdomadaires sortent automatiquement, le reste à la demande.",
    highlights: [
      "Plus de dix sources de données consolidées en une base unique requêtable",
      "Bilans hebdomadaires automatisés croisant émotions, activités et tâches (cadre PERMA-V)",
      "Mes tâches synchronisées toutes les heures depuis TickTick",
      "Capteurs santé Samsung intégrés en temps réel",
      "Tout passe par Hermès pour l'analyse et le reporting — pas de tableaux de bord à consulter",
    ],
    metrics: [
      { label: 'Sources connectées', value: '5+' },
      { label: 'Bilans générés', value: '120+' },
    ],
  },
];

export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();
export const allStacks = Array.from(new Set(projects.flatMap((p) => p.stack))).sort();

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
