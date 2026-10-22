import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://uziel.dev/",
    title: "UZIEL.DEV",
    description:
      "Uziel Alejandro Garcia — Desarrollador web desde Roatán, Islas de la Bahía. Diseño que convierte.",
    author: "Uziel Garcia",
    profile: "https://uziel.dev",
    ogImage: "default-og.jpg",
    lang: "es",
    timezone: "America/Tegucigalpa",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 3,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/AlejoUziel", linkTitle: "Uziel en GitHub" },
    { name: "whatsapp", url: "https://wa.me/50488935250", linkTitle: "Escríbeme por WhatsApp" },
    { name: "mail", url: "mailto:uzielalejandro777@gmail.com", linkTitle: "Envíame un correo" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail", url: "mailto:?subject=Mira%20este%20art%C3%ADculo&body=" },
  ],
});
