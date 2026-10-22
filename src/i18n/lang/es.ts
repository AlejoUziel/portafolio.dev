import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Inicio",
    posts: "Blog",
    tags: "Etiquetas",
    about: "Sobre mí",
    archives: "Archivo",
    search: "Buscar",
  },
  post: {
    publishedAt: "Publicado el",
    updatedAt: "Actualizado",
    sharePostIntro: "Comparte este artículo:",
    sharePostOn: "Compartir en {{platform}}",
    sharePostViaEmail: "Compartir por correo",
    tagLabel: "Etiquetas",
    backToTop: "Volver arriba",
    goBack: "Regresar",
    editPage: "Editar página",
    previousPost: "Artículo anterior",
    nextPost: "Artículo siguiente",
  },
  pagination: {
    prev: "Anterior",
    next: "Siguiente",
    page: "Página",
  },
  home: {
    socialLinks: "Redes",
    featured: "Destacados",
    recentPosts: "Del blog",
    allPosts: "Ver todos los artículos",
  },
  footer: {
    copyright: "Uziel Garcia",
    allRightsReserved: "Roatán, Islas de la Bahía, HN",
  },
  pages: {
    tagTitle: "Etiqueta",
    tagDesc: "Todos los artículos con la etiqueta",

    tagsTitle: "Etiquetas",
    tagsDesc: "Todas las etiquetas usadas en el blog.",

    postsTitle: "Blog",
    postsDesc: "Notas sobre desarrollo web y negocios digitales en Roatán.",

    archivesTitle: "Archivo",
    archivesDesc: "Todos los artículos archivados.",

    searchTitle: "Buscar",
    searchDesc: "Busca cualquier artículo ...",
  },
  a11y: {
    skipToContent: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    toggleTheme: "Cambiar tema",
    searchPlaceholder: "Buscar artículos...",
    noResults: "Sin resultados",
    goToPreviousPage: "Ir a la página anterior",
    goToNextPage: "Ir a la página siguiente",
  },
  notFound: {
    title: "404 No encontrado",
    message: "Página no encontrada",
    goHome: "Volver al inicio",
  },
} satisfies UIStrings;
