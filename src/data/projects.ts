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
    title: "Roatán Family Tours",
    url: "https://www.roatanfamilytours.com/",
    description:
      "Plataforma de experiencias familiares con un diseño que genera confianza y convierte visitantes en clientes.",
    tags: ["Turismo", "Conversión", "Diseño"],
  },
];
