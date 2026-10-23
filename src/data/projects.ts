export type Project = {
  title: string;
  description: string;
  url?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Roatán Paradise Adventures",
    description:
      "Sitio para tour operator con excursiones de snorkel, ATV, canopy y cabalgatas, con precios y reservación en línea.",
    url: "https://roatanparadiseadventures.com/",
    tags: ["Turismo", "Reservaciones", "SEO"],
  },
  {
    title: "Viviana Mendez Real Estate",
    description:
      "Sitio para agente de bienes raíces en Roatán: lotes, terrenos y casas con vista al mar para inversionistas.",
    url: "https://www.vivianamendezrealestateagent.com/",
    tags: ["Bienes raíces", "Catálogo", "SEO"],
  },
  {
    title: "AT21 Tours Roatán",
    description:
      "Sitio para tour operator local, pensado para atraer turistas internacionales y recibir reservaciones desde cualquier país.",
    url: "https://at21toursroatan.com",
    tags: ["Turismo", "Responsive", "WhatsApp"],
  },
  {
    title: "Roatán Family Tours",
    url: "https://www.roatanfamilytours.com/",
    description:
      "Plataforma de experiencias familiares con un diseño que genera confianza y convierte visitantes en clientes.",
    tags: ["Turismo", "Conversión", "Diseño"],
  },
];
