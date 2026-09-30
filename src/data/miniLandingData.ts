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
  whatsappMessage?: string;
  brands?: string;
  highlights?: string[];
  detail?: string;
}

export interface BrandPartner {
  id: string;
  name: string;
  category: string;
  logoType: 'value' | 'anton' | 'danfoss' | 'surrey' | 'carrier' | 'bgh' | 'chemours' | 'daikin' | 'york';
}

export const MINI_LANDING_CONFIG = {
  brandName: 'Tolosa Refrigeración',
  tagline: 'Todo lo que necesitas en un solo lugar.',
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
    imageUrl: '/products/mensulas-soportes-usuario.png',
    link: 'https://tolosarefrigeracion.com.ar/categoria-producto/aire-acondicionado/',
    badge: 'Con Bulonería',
  },
  {
    id: 'manometros-manifolds',
    name: 'Manómetros y Manifolds',
    categoryTag: 'Value · R22 / R290 / R410A / R134a',
    imageUrl: '/products/manifold-value-usuario.png',
    link: 'https://tolosarefrigeracion.com.ar/producto/manifold-value-r22-290-410-134-404-07/',
    badge: 'Marca Value',
  },
  {
    id: 'bombas-de-vacio',
    name: 'Bombas de Vacío',
    categoryTag: 'Value · 1 y 2 etapas VE245N Pro',
    imageUrl: '/products/bombas-vacio-usuario.png',
    link: 'https://tolosarefrigeracion.com.ar/producto/bomba-vacio-value-ve245n-pro-126l-min/',
    badge: 'Bomba Value',
  },
];

// Ofertas Tolosa
export const PROMO_HIGHLIGHTS: PromoHighlight[] = [
  {
    id: 'kit-instalacion-aire',
    title: 'KIT DE INSTALACIÓN PARA AIRE ACONDICIONADO',
    subtitle: 'Kits completos para distintas medidas y capacidades.',
    badge: 'CONSULTÁ PRECIO',
    link: '',
    imageUrl: '/products/offer-kit-aire.jpg',
    whatsappMessage: 'Hola Tolosa Refrigeración, me interesaría saber los precios de los kits para instalación de aire acondicionado.',
  },
  {
    id: 'aires-acondicionados',
    title: 'NUEVOS INGRESOS — AIRES ACONDICIONADOS',
    subtitle: 'Distintas frigorías disponibles',
    badge: 'NUEVOS INGRESOS',
    link: '',
    imageUrl: '/products/offer-aires.jpg',
    whatsappMessage: 'Hola Tolosa Refrigeración, me interesaría recibir más información sobre los aires acondicionados, frigorías disponibles, cuotas y descuento en efectivo.',
    brands: 'Midea · Carrier · Surrey',
    highlights: ['CUOTAS DISPONIBLES', 'DESCUENTO EN EFECTIVO'],
  },
  {
    id: 'kit-instalacion-lavarropas',
    title: 'KIT EJE SOPORTE DE TAMBOR LAVARROPAS',
    subtitle: 'Repuesto para lavarropas · consultanos compatibilidad y medida.',
    badge: 'CONSULTÁ',
    link: '',
    imageUrl: '/products/offer-kit-eje-soporte-tambor-lavarropas.png',
    whatsappMessage: 'Hola Tolosa Refrigeración, me interesan los kits de instalación para lavarropas. ¿Me pueden asesorar según el modelo y la medida que necesito?',
  },
  {
    id: 'refrioil',
    title: 'Ofertas en productos Refrioil',
    subtitle: 'Precios especiales disponibles en nuestra web',
    badge: 'OPORTUNIDAD WEB',
    link: 'https://tolosarefrigeracion.com.ar/ofertas/',
    imageUrl: '/products/offer-refrioil.jpg',
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
