import mensulasImg from '../assets/images/mensulas_soporte_ac_1790711588345.jpg';

export interface MostSearchedItem {
  id: string;
  name: string;
  categoryTag: string;
  imageUrl: string;
  link: string;
  badge?: string;
}

export interface PromoHighlight {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  link: string;
  imageUrl: string;
}

export interface BrandPartner {
  id: string;
  name: string;
  category: string;
  logoType: 'value' | 'anton' | 'danfoss' | 'surrey' | 'carrier' | 'bgh' | 'chemours' | 'daikin' | 'york';
}

export const MINI_LANDING_CONFIG = {
  brandName: 'Tolosa Refrigeración',
  tagline: 'Todo para refrigeración y aire acondicionado.',
  categoriesPill: ['Equipos', 'Repuestos', 'Herramientas', 'Gases', 'Accesorios'],
  
  // URLs reales oficiales absolutas
  officialWebUrl: 'https://tolosarefrigeracion.com.ar/',
  offersUrl: 'https://tolosarefrigeracion.com.ar/ofertas/',
  
  // WhatsApp del local (Atención comercial independiente, NO usa el link de la comunidad)
  whatsappCommercialUrl: 'https://wa.me/5492213165654?text=Hola%20Tolosa%20Refrigeraci%C3%B3n,%20tengo%20una%20consulta%20comercial%20sobre%20un%20producto.',
  
  // Comunidad Tolosa — URLs Reales Oficiales
  communityUrls: {
    // Grupo WhatsApp de Técnicos
    whatsappGroup: 'https://chat.whatsapp.com/H4zcFesnB8P7RimrkXB2Vh',
    // Comunidad / Canal de Instagram
    instagramChannel: 'https://www.instagram.com/channel/wf1lbM57icKBXTqr/',
  },
  
  // Redes Sociales Oficiales con URLs Reales
  socials: {
    instagram: {
      handle: '@tolosarefrigeracion',
      url: 'https://www.instagram.com/tolosa.refrigeracion/',
    },
    tiktok: {
      handle: '@tolosarefrigeracion',
      url: 'https://www.tiktok.com/@tolosarefrigeracion',
    },
    facebook: {
      handle: 'Tolosa Refrigeración',
      url: 'https://www.facebook.com/profile.php?id=100086557254377',
    },
  },
};

// 4 productos/categorías más buscadas con fotos oficiales verificadas y URLs absolutas a tolosarefrigeracion.com.ar
export const MOST_SEARCHED_ITEMS: MostSearchedItem[] = [
  {
    id: 'gases-refrigerantes',
    name: 'Gases Refrigerantes',
    categoryTag: 'Anton · R410A · R134a · R32 · R22',
   imageUrl: 'https://res.cloudinary.com/ddbqqeh8x/image/upload/v1790714146/35caaa4b-a0a4-498e-9f0a-82552378faee_vcowuy.png',    
   link: 'https://tolosarefrigeracion.com.ar/categoria-producto/gas-refrigerante/',
    badge: 'Garrafas Anton',
  },
  {
    id: 'mensulas-soportes',
    name: 'Ménsulas y Soportes',
    categoryTag: 'Reforzadas 40cm y 50cm para Split',
    imageUrl: mensulasImg,
    link: 'https://tolosarefrigeracion.com.ar/categoria-producto/aire-acondicionado/',
    badge: 'Con Bulonería',
  },
  {
    id: 'manometros-manifolds',
    name: 'Manómetros y Manifolds',
    categoryTag: 'Value · R22 / R290 / R410A / R134a',
    imageUrl: '/products/manifold-value.jpg', // Manifold oficial Value con relojes y mangueras
    link: 'https://tolosarefrigeracion.com.ar/producto/manifold-value-r22-290-410-134-404-07/',
    badge: 'Marca Value',
  },
  {
    id: 'bombas-de-vacio',
    name: 'Bombas de Vacío',
    categoryTag: 'Value · 1 y 2 etapas VE245N Pro',
    imageUrl: '/products/bomba-vacio-value.jpg', // Bomba de vacío oficial Value VE245N
    link: 'https://tolosarefrigeracion.com.ar/producto/bomba-vacio-value-ve245n-pro-126l-min/',
    badge: 'Bomba Value',
  },
];

// Ofertas Tolosa: Imágenes y enlaces 100% distintos y específicos
export const PROMO_HIGHLIGHTS: PromoHighlight[] = [
  {
    id: 'promo-gases',
    title: 'Gases Refrigerantes Anton',
    subtitle: 'Línea oficial Anton Eco: R410A, R134a, AN22 Plus y mezclas',
    badge: 'OPORTUNIDAD WEB',
    link: 'https://tolosarefrigeracion.com.ar/categoria-producto/gas-refrigerante/',
    imageUrl: '/products/anton-familia-gases-oferta.jpg', // Fotografía oficial suministrada por el usuario con la familia completa Anton Eco
  },
  {
   id: 'promo-herramientas',
title: 'Herramientas y Equipos Value',
subtitle: 'Bombas de vacío, manifolds y kits de instalación',
badge: 'PRECIO GREMIO',
link: 'https://tolosarefrigeracion.com.ar/categoria-producto/herramientas/',
imageUrl: 'https://res.cloudinary.com/ddbqqeh8x/image/upload/v1790714739/img-1_knyjzi.png',
},
];

// Marcas reales oficiales
export const BRAND_PARTNERS: BrandPartner[] = [
  { id: 'value', name: 'VALUE', category: 'Herramientas & Equipos', logoType: 'value' },
  { id: 'anton', name: 'ANTON', category: 'Gases Refrigerantes', logoType: 'anton' },
  { id: 'carrier', name: 'Carrier', category: 'Equipos & Repuestos', logoType: 'carrier' },
  { id: 'danfoss', name: 'Danfoss', category: 'Válvulas & Controles', logoType: 'danfoss' },
  { id: 'surrey', name: 'Surrey', category: 'Climatización', logoType: 'surrey' },
  { id: 'bgh', name: 'BGH', logoType: 'bgh', category: 'Climatización' },
  { id: 'daikin', name: 'Daikin', category: 'Climatización', logoType: 'daikin' },
  { id: 'dupont', name: 'DuPont', category: 'Gases Refrigerantes', logoType: 'chemours' },
  { id: 'york', name: 'YORK', category: 'Climatización & Equipos', logoType: 'york' },
];
