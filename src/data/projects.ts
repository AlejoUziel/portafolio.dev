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
    title: "Ocean Code",
    description:
      "Sitio para empresa de software en Roatán: sistemas a la medida, tiendas en línea y apps como Manage X y Platia, con cotización y llamada por WhatsApp.",
    url: "https://oceancoderoatan.com/",
    tags: ["Software", "Portafolio", "SEO"],
  },
  {
    title: "Roatán Family Tours",
    url: "https://www.roatanfamilytours.com/",
    description:
      "Plataforma de experiencias familiares con un diseño que genera confianza y convierte visitantes en clientes.",
    tags: ["Turismo", "Conversión", "Diseño"],
  },
];
