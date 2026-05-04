export type ProductStatus = 'available' | 'preorder' | 'soon' | 'sold-out';

export interface ProductImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  status: ProductStatus;
  price?: string;
  priceNote?: string;
  icon: string;
  images?: ProductImage[];
  specs?: { label: string; value: string }[];
  cta?: { label: string; href: string; external?: boolean };
}

export const products: Product[] = [
  {
    slug: 'stashflask',
    name: 'Stashflask',
    tagline: "Le compagnon discret du fumeur autonome",
    shortDescription:
      "Étui modulaire imprimé en 3D pour rouler, transporter et allumer ses sessions sans sortir 5 accessoires. Conçu pour fumeurs de tabac (et autres). Fait main, série limitée.",
    longDescription:
      "Stashflask est né d'un constat simple : quand on fume, on jongle entre tabac, papier, filtre, briquet, parfois grinder. Cinq objets dispersés dans la poche. Stashflask les regroupe dans un étui compact et modulaire imprimé en 3D, pensé pour la main et la poche. Made in Paris, à l'unité.",
    features: [
      "Compartiments modulaires : tabac / filtres / papier / briquet",
      "Imprimé en PETG (durable, résistant à la chaleur du briquet)",
      "Tient dans une poche de jean",
      "Couleurs et finitions personnalisables sur commande",
      "Conçu et imprimé en France",
    ],
    status: 'preorder',
    price: 'À partir de 25€',
    priceNote: 'Variations selon finitions / options. Contact pour devis perso.',
    icon: 'tabler:flame',
    // [TODO] : ajouter 4-6 photos produit + lifestyle
    images: [
      // { src: '/boutique/stashflask/1.jpg', alt: 'Stashflask fermé', caption: 'Vue extérieure' },
      // { src: '/boutique/stashflask/2.jpg', alt: 'Stashflask ouvert avec compartiments', caption: 'Compartiments modulaires' },
    ],
    specs: [
      { label: 'Matière', value: 'PETG' },
      { label: 'Dimensions', value: '95 × 55 × 25 mm' },
      { label: 'Poids', value: '~ 50 g' },
      { label: 'Délai production', value: '5-7 jours' },
      { label: 'Origine', value: 'Conçu et imprimé à Paris' },
    ],
    cta: {
      label: 'Précommander / Demander un devis',
      href: '/contact?subject=Stashflask',
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
