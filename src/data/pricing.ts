export type Plan = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  featured?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Para empezar",
    price: "L 16,000",
    features: [
      "Sitio de 1 a 3 páginas",
      "Diseño responsivo para móvil",
      "Formulario de contacto",
      "Botón de WhatsApp",
      "Google Maps integrado",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Más solicitado",
    price: "L 25,000",
    featured: true,
    features: [
      "Sitio de hasta 6 páginas",
      "Diseño premium personalizado",
      "Animaciones y efectos",
      "SEO básico optimizado",
      "Carrusel de fotos o productos",
      "3 meses de soporte",
    ],
  },
  {
    id: "business",
    name: "Business",
    tagline: "Para escalar",
    price: "L 30,000",
    features: [
      "Páginas ilimitadas",
      "Tienda en línea o reservaciones",
      "SEO avanzado + Analytics",
      "Panel de administración",
      "Capacitación incluida",
      "12 meses de soporte",
    ],
  },
];
