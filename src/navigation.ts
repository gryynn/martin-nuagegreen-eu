import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Accueil', href: getPermalink('/'), icon: 'tabler:home' },
    { text: 'Projets', href: getPermalink('/projets'), icon: 'tabler:apps' },
    { text: 'Articles', href: getBlogPermalink(), icon: 'tabler:notebook' },
    { text: 'Boutique', href: getPermalink('/boutique'), icon: 'tabler:shopping-bag' },
    { text: 'À propos', href: getPermalink('/about'), icon: 'tabler:user' },
    { text: 'Contact', href: getPermalink('/contact'), icon: 'tabler:mail' },
  ],
  actions: [{ text: 'GitHub', href: 'https://github.com/gryynn', target: '_blank', icon: 'tabler:brand-github' }],
};

export const footerData = {
  links: [
    {
      title: 'Site',
      links: [
        { text: 'Accueil', href: getPermalink('/') },
        { text: 'Projets', href: getPermalink('/projets') },
        { text: 'Articles', href: getBlogPermalink() },
        { text: 'Boutique', href: getPermalink('/boutique') },
        { text: 'À propos', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Projets',
      links: [
        { text: 'Homelab', href: getPermalink('/projets/homelab') },
        { text: 'NOMAD', href: getPermalink('/projets/nomad') },
        { text: 'Mirai', href: getPermalink('/projets/mirai') },
        { text: 'Hermès AI Stack', href: getPermalink('/projets/hermes-ai-stack') },
        { text: 'Biosphère', href: getPermalink('/projets/biosphere') },
        { text: 'MG Design', href: 'https://mgdesign.cloud', target: '_blank' },
      ],
    },
    {
      title: 'Ailleurs',
      links: [
        { text: 'GitHub', href: 'https://github.com/gryynn', target: '_blank' },
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/martingreenfrance', target: '_blank' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Mentions légales', href: getPermalink('/mentions-legales') },
  ],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/gryynn' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/martingreenfrance' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <span class="opacity-70">Site fait par Martin Green avec <a class="text-primary underline" href="https://astro.build" target="_blank">Astro</a> + un peu d'aide IA. Code <a class="text-primary underline" href="https://github.com/gryynn/martin-nuagegreen-eu" target="_blank">sur GitHub</a>.</span>
    <span class="opacity-50 text-xs ml-2">·
      <a class="hover:opacity-100 transition-opacity"
         href="https://github.com/gryynn/martin-nuagegreen-eu/commit/${import.meta.env.PUBLIC_BUILD_COMMIT}"
         target="_blank"
         rel="noopener">build ${import.meta.env.PUBLIC_BUILD_COMMIT}</a>
      · ${import.meta.env.PUBLIC_BUILD_DATE}
    </span>
  `,
};
