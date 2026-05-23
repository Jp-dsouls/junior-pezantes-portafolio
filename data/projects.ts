import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'christian-photography',
    titleEs: 'Photographer',
    titleEn: 'Photographer',
    descriptionEs: 'Portafolio de fotografía con animaciones y diseño responsive.',
    descriptionEn: 'Photography portfolio with animations and responsive design.',
    descriptionLongEs: 'Sitio web de portafolio para fotógrafo, con galerías visuales y animaciones front-end. Incluye integración de Bootstrap, Font Awesome y efectos de entrada con Animate.css.',
    descriptionLongEn: 'Photography portfolio website with visual galleries and front-end animations. Includes Bootstrap, Font Awesome and Animate.css entry effects.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Font Awesome', 'Animate.css'],
    image: '/projects/christian-photography.webp',
    mobileImage: '/projects/christian-photography-mobile.webp',
    images: ['/projects/christian-photography.webp'],
    features: [
      {
        titleEs: 'Galería Dinámica',
        titleEn: 'Dynamic Gallery',
        descriptionEs: 'Visualización de imágenes en alta resolución con carga optimizada.',
        descriptionEn: 'High-resolution image viewing with optimized loading.',
        icon: 'Image'
      },
      {
        titleEs: 'Diseño Adaptativo',
        titleEn: 'Responsive Design',
        descriptionEs: 'Experiencia fluida en cualquier dispositivo móvil o tablet.',
        descriptionEn: 'Fluid experience on any mobile device or tablet.',
        icon: 'Smartphone'
      },
      {
        titleEs: 'Animaciones Suaves',
        titleEn: 'Smooth Animations',
        descriptionEs: 'Efectos visuales que mejoran la interacción del usuario.',
        descriptionEn: 'Visual effects that enhance user interaction.',
        icon: 'Zap'
      }
    ],
    link: 'https://christiandesignphotography.netlify.app/',
    status: 'finished',
    year: 2024,
  },
  {
    id: 'encrypt-julio-cesar',
    titleEs: 'Método de encriptación Julio César',
    titleEn: 'Julius Caesar Encryption Method',
    descriptionEs: 'Demostración interactiva del cifrado César con entradas de texto y resultados en tiempo real.',
    descriptionEn: 'Interactive demonstration of Caesar cipher with text input and real-time results.',
    descriptionLongEs: 'Aplicación web educativa que muestra el funcionamiento del método de cifrado Julio César. Incluye validación de texto, transformación dinámica y estilos claros para facilitar el aprendizaje.',
    descriptionLongEn: 'Educational web app showcasing the Julius Caesar cipher. Includes text validation, dynamic transformation and clean styles to facilitate learning.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/encrypt-julio-cesar.webp',
    mobileImage: '/projects/encrypt-julio-cesar-mobile.webp',
    images: ['/projects/encrypt-julio-cesar.webp'],
    features: [
      {
        titleEs: 'Cifrado en Tiempo Real',
        titleEn: 'Real-time Encryption',
        descriptionEs: 'Los resultados se actualizan instantáneamente al escribir.',
        descriptionEn: 'Results update instantly as you type.',
        icon: 'Lock'
      },
      {
        titleEs: 'Parámetros Ajustables',
        titleEn: 'Adjustable Parameters',
        descriptionEs: 'Permite cambiar la clave de desplazamiento fácilmente.',
        descriptionEn: 'Allows changing the shift key easily.',
        icon: 'Settings'
      },
      {
        titleEs: 'Validación de Entrada',
        titleEn: 'Input Validation',
        descriptionEs: 'Control de caracteres permitidos para evitar errores.',
        descriptionEn: 'Control of allowed characters to avoid errors.',
        icon: 'ShieldCheck'
      }
    ],
    link: 'https://encrypt-julio-cesar.netlify.app/',
    status: 'finished',
    year: 2020,
  },
  {
    id: 'encrypt-enigma',
    titleEs: 'Método de encriptado Enigma',
    titleEn: 'Enigma Encryption Method',
    descriptionEs: 'Simulación del cifrado Enigma con interacción de usuario y resultados cifrados.',
    descriptionEn: 'Enigma cipher simulation with user interaction and encrypted outputs.',
    descriptionLongEs: 'Proyecto de cifrado histórico que reproduce el comportamiento de la máquina Enigma. Permite a los usuarios cifrar y descifrar mensajes para entender cómo funcionaba el algoritmo.',
    descriptionLongEn: 'Historical cipher project replicating the Enigma machine behavior. Allows users to encrypt and decrypt messages to understand the algorithm.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/encrypt-enigma.webp',
    mobileImage: '/projects/encrypt-enigma-mobile.webp',
    images: ['/projects/encrypt-enigma.webp'],
    features: [
      {
        titleEs: 'Simulación de Rotores',
        titleEn: 'Rotor Simulation',
        descriptionEs: 'Replica fielmente el movimiento mecánico de los rotores.',
        descriptionEn: 'Faithfully replicates the mechanical movement of the rotors.',
        icon: 'RefreshCw'
      },
      {
        titleEs: 'Panel de Conexiones',
        titleEn: 'Plugboard System',
        descriptionEs: 'Configuración personalizada de cables para mayor seguridad.',
        descriptionEn: 'Custom cable configuration for increased security.',
        icon: 'Share2'
      },
      {
        titleEs: 'Fidelidad Histórica',
        titleEn: 'Historical Accuracy',
        descriptionEs: 'Algoritmo basado en los modelos reales de la Segunda Guerra Mundial.',
        descriptionEn: 'Algorithm based on real WWII models.',
        icon: 'History'
      }
    ],
    link: 'https://encrypt-enigma.netlify.app/',
    status: 'finished',
    year: 2020,
  },
  {
    id: 'landingpage-cocina',
    titleEs: 'Web de Restaurante',
    titleEn: 'Restaurant Website',
    descriptionEs: 'Landing page para restaurante con menú, secciones y llamada a la acción.',
    descriptionEn: 'Restaurant landing page with menu, sections and call to action.',
    descriptionLongEs: 'Sitio web de restaurante construido con HTML, CSS y JavaScript. Presenta un diseño limpio, sección de menú y botones destacados para reservas y contacto.',
    descriptionLongEn: 'Restaurant website built with HTML, CSS and JavaScript. Features a clean design, menu section and prominent buttons for reservations and contact.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/landingpage-cocina.webp',
    mobileImage: '/projects/landingpage-cocina-mobile.webp',
    images: ['/projects/landingpage-cocina.webp'],
    features: [
      {
        titleEs: 'Menú Interactivo',
        titleEn: 'Interactive Menu',
        descriptionEs: 'Navegación intuitiva por las categorías de platos.',
        descriptionEn: 'Intuitive navigation through dish categories.',
        icon: 'Utensils'
      },
      {
        titleEs: 'Gestión de Reservas',
        titleEn: 'Reservation Management',
        descriptionEs: 'Formularios optimizados para captar clientes.',
        descriptionEn: 'Optimized forms to capture customers.',
        icon: 'CalendarDays'
      },
      {
        titleEs: 'SEO Optimizado',
        titleEn: 'SEO Optimized',
        descriptionEs: 'Estructura diseñada para mejorar el posicionamiento.',
        descriptionEn: 'Structure designed to improve search ranking.',
        icon: 'Search'
      }
    ],
    link: 'https://landingpage-cocina.netlify.app/',
    status: 'finished',
    year: 2020,
  },
  {
    id: 'huayra-mistika',
    titleEs: 'Web de Huayra Mistika',
    titleEn: 'Huayra Mistika Website',
    descriptionEs: 'Sitio institucional para Huayra Mistika con diseño sencillo y navegación clara.',
    descriptionEn: 'Institutional site for Huayra Mistika with simple design and clear navigation.',
    descriptionLongEs: 'Página web de presentación para Huayra Mistika con secciones de servicios, equipo y contacto. El proyecto prioriza la claridad visual y la accesibilidad del contenido.',
    descriptionLongEn: 'Presentation website for Huayra Mistika with services, team and contact sections. The project prioritizes visual clarity and content accessibility.',
    technologies: ['Font Awesome', 'Bootstrap', 'Jquery', 'Isotope'],
    image: '/projects/huayra-mistika.webp',
    mobileImage: '/projects/huayra-mistika-mobile.webp',
    images: ['/projects/huayra-mistika.webp'],
    features: [
      {
        titleEs: 'Filtrado de Servicios',
        titleEn: 'Service Filtering',
        descriptionEs: 'Categorización dinámica de servicios con Isotope.',
        descriptionEn: 'Dynamic service categorization with Isotope.',
        icon: 'Filter'
      },
      {
        titleEs: 'Identidad Visual',
        titleEn: 'Visual Identity',
        descriptionEs: 'Diseño alineado con los valores y estética de la marca.',
        descriptionEn: 'Design aligned with brand values and aesthetics.',
        icon: 'Palette'
      },
      {
        titleEs: 'Contacto Directo',
        titleEn: 'Direct Contact',
        descriptionEs: 'Integración de canales de comunicación rápidos.',
        descriptionEn: 'Integration of fast communication channels.',
        icon: 'MessageSquare'
      }
    ],
    link: 'https://huayramistika.netlify.app/',
    status: 'finished',
    year: 2023,
  },
  {
    id: 'inventory-system',
    titleEs: 'Sistema de registro de inventario',
    titleEn: 'Inventory Registration System',
    descriptionEs: 'Dashboard de inventario con gestión de productos y navegación administrativa.',
    descriptionEn: 'Inventory dashboard with product management and admin navigation.',
    descriptionLongEs: 'Aplicación web de inventarios que permite visualizar y gestionar productos, con diseño basado en Bootstrap y funcionalidades de administración. Incluye iconos de Font Awesome y tablas interactivas.',
    descriptionLongEn: 'Inventory web app that allows viewing and managing products, built with Bootstrap and admin-friendly layout. Includes Font Awesome icons and interactive tables.',
    technologies: ['Ionicons', 'SweetAlert2', 'Google Font API', 'Moment.js', 'Font Awesome', 'Jquery UI', 'Jquery', 'Chart.js', 'Bootstrap'],
    image: '/projects/inventory-system.webp',
    mobileImage: '/projects/inventory-system-mobile.webp',
    images: ['/projects/inventory-system.webp'],
    features: [
      {
        titleEs: 'Dashboard Administrativo',
        titleEn: 'Admin Dashboard',
        descriptionEs: 'Vista general del estado del inventario en tiempo real.',
        descriptionEn: 'General overview of inventory status in real-time.',
        icon: 'LayoutDashboard'
      },
      {
        titleEs: 'Gráficos Estadísticos',
        titleEn: 'Statistical Charts',
        descriptionEs: 'Visualización de datos con Chart.js para toma de decisiones.',
        descriptionEn: 'Data visualization with Chart.js for decision making.',
        icon: 'BarChart3'
      },
      {
        titleEs: 'Gestión de Usuarios',
        titleEn: 'User Management',
        descriptionEs: 'Control de accesos y roles dentro del sistema.',
        descriptionEn: 'Control of access and roles within the system.',
        icon: 'Users'
      }
    ],
    link: 'https://sistema-de-registro-de-inventario.netlify.app/dashboard.html',
    status: 'finished',
    year: 2023,
  },
  {
    id: 'resto-bar',
    titleEs: 'Resto Bar',
    titleEn: 'Resto Bar',
    descriptionEs: 'Landing page moderna para bar con diseño responsivo y estilo contemporáneo.',
    descriptionEn: 'Modern landing page for bar with responsive and contemporary style.',
    descriptionLongEs: 'Página de presentación para bar con información de carta, ubicación y contacto. Construida con Tailwind CSS y Astro para una experiencia rápida y fluida.',
    descriptionLongEn: 'Presentation page for a bar with menu information, location and contact. Built with Tailwind CSS and Astro for a fast, smooth experience.',
    technologies: ['Astro', 'Tailwind', 'JavaScript'],
    image: '/projects/resto-bar.webp',
    mobileImage: '/projects/resto-bar-mobile.webp',
    images: ['/projects/resto-bar.webp'],
    features: [
      {
        titleEs: 'Carga Ultrarrápida',
        titleEn: 'Ultra-fast Loading',
        descriptionEs: 'Optimización avanzada gracias a la arquitectura de Astro.',
        descriptionEn: 'Advanced optimization thanks to Astro architecture.',
        icon: 'Gauge'
      },
      {
        titleEs: 'Estilo Moderno',
        titleEn: 'Modern Style',
        descriptionEs: 'Interfaz elegante diseñada con Tailwind CSS.',
        descriptionEn: 'Elegant interface designed with Tailwind CSS.',
        icon: 'Sparkles'
      },
      {
        titleEs: 'Mobile First',
        titleEn: 'Mobile First',
        descriptionEs: 'Diseñado pensando primero en la experiencia móvil.',
        descriptionEn: 'Designed with mobile experience in mind first.',
        icon: 'Smartphone'
      }
    ],
    link: 'https://resto-bar.netlify.app/',
    status: 'finished',
    year: 2022,
  },
  {
    id: 'emi-lima',
    titleEs: 'EMILIMA',
    titleEn: 'EMILIMA',
    descriptionEs: 'Sitio de EMILIMA con secciones informativas y presentación institucional.',
    descriptionEn: 'EMILIMA site with informational and institutional sections.',
    descriptionLongEs: 'Proyecto web para la Empresa Municipal Inmobiliaria de Lima, con foco en funcionalidades institucionales y administración de contenidos.',
    descriptionLongEn: 'Website project for Empresa Municipal Inmobiliaria de Lima, focused on institutional content and management features.',
    technologies: ['PHP', 'GSAP', 'Font Awesome', 'Cloudflare', 'Swiper', 'Jquery', 'Bootstrap', 'ApexCharts'],
    image: '/projects/emi-lima.webp',
    mobileImage: '/projects/emi-lima-mobile.webp',
    images: ['/projects/emi-lima.webp'],
    features: [
      {
        titleEs: 'Transiciones Premium',
        titleEn: 'Premium Transitions',
        descriptionEs: 'Efectos fluidos logrados con GSAP.',
        descriptionEn: 'Smooth effects achieved with GSAP.',
        icon: 'MoveRight'
      },
      {
        titleEs: 'Panel de Gestión',
        titleEn: 'Management Panel',
        descriptionEs: 'Administración eficiente de contenidos institucionales.',
        descriptionEn: 'Efficient administration of institutional content.',
        icon: 'Settings2'
      },
      {
        titleEs: 'Infraestructura Robusta',
        titleEn: 'Robust Infrastructure',
        descriptionEs: 'Seguridad y velocidad con integración de Cloudflare.',
        descriptionEn: 'Security and speed with Cloudflare integration.',
        icon: 'Globe2'
      }
    ],
    link: 'https://emilima.com.pe/home',
    status: 'finished',
    year: 2021,
  },
  {
    id: 'interseguro-inversion-segura',
    titleEs: 'Interseguro Inversión Segura',
    titleEn: 'Interseguro Secure Investment',
    descriptionEs: 'Página de producto financiero con enfoque en inversión segura.',
    descriptionEn: 'Financial product page focused on secure investment.',
    descriptionLongEs: 'Plataforma de producto para Interseguro, con contenidos financieros y experiencia de usuario optimizada.',
    descriptionLongEn: 'Product platform for Interseguro, with financial content and optimized UX.',
    technologies: ['Vue.js', 'Pinia', 'Swiper', 'SweetAlert2', 'Nuxt.js', 'Tailwind'],
    image: '/projects/interseguro-inversion-segura.webp',
    mobileImage: '/projects/interseguro-mobile.webp',
    images: ['/projects/interseguro-inversion-segura.webp'],
    features: [
      {
        titleEs: 'Inversión Segura',
        titleEn: 'Secure Investment',
        descriptionEs: 'Garantía de capital y rentabilidad competitiva.',
        descriptionEn: 'Capital guarantee and competitive profitability.',
        icon: 'ShieldCheck'
      },
      {
        titleEs: 'Flexibilidad',
        titleEn: 'Flexibility',
        descriptionEs: 'Diferentes plazos y opciones de retiro.',
        descriptionEn: 'Different terms and withdrawal options.',
        icon: 'Calendar'
      },
      {
        titleEs: 'Gestión Digital',
        titleEn: 'Digital Management',
        descriptionEs: 'Acceso y control total desde la plataforma web.',
        descriptionEn: 'Total access and control from the web platform.',
        icon: 'Globe'
      }
    ],
    link: 'https://www.interseguro.pe/inversion-segura/',
    status: 'finished',
    year: 2026,
  },
  {
    id: 'tickets-lima',
    titleEs: 'Tickets Lima',
    titleEn: 'Tickets Lima',
    descriptionEs: 'Sitio de venta y reserva de entradas con experiencia de usuario dinámica.',
    descriptionEn: 'Ticket sales and reservation site with dynamic user experience.',
    descriptionLongEs: 'Proyecto web para venta de boletos y reservas, con enfoque en velocidad y usabilidad.',
    descriptionLongEn: 'Web project for ticket sales and reservations, focused on speed and usability.',
    technologies: ['Vue.js', 'Vuetify', 'GSAP', 'Swiper.js', 'Font Awesome'],
    image: '/projects/tickets-lima.webp',
    mobileImage: '/projects/tickets-lima-mobile.webp',
    images: ['/projects/tickets-lima.webp'],
    features: [
      {
        titleEs: 'E-commerce de Tickets',
        titleEn: 'Ticket E-commerce',
        descriptionEs: 'Proceso de compra optimizado en pocos pasos.',
        descriptionEn: 'Optimized purchase process in few steps.',
        icon: 'Ticket'
      },
      {
        titleEs: 'Interfaz Dinámica',
        titleEn: 'Dynamic Interface',
        descriptionEs: 'Experiencia de usuario interactiva con Vuetify y GSAP.',
        descriptionEn: 'Interactive user experience with Vuetify and GSAP.',
        icon: 'MousePointer2'
      },
      {
        titleEs: 'Validación en Tiempo Real',
        titleEn: 'Real-time Validation',
        descriptionEs: 'Verificación inmediata de disponibilidad y datos.',
        descriptionEn: 'Immediate verification of availability and data.',
        icon: 'CheckCircle'
      }
    ],
    link: 'https://ticketslima.pe/',
    status: 'finished',
    year: 2022,
  },
  {
    id: 'ods',
    titleEs: 'ODS',
    titleEn: 'ODS',
    descriptionEs: 'Plataforma para el cumplimiento de los Objetivos de Desarrollo Sostenible.',
    descriptionEn: 'Platform for the fulfillment of the Sustainable Development Goals.',
    descriptionLongEs: 'Proyecto web para el cumplimiento de los Objetivos de Desarrollo Sostenible, con enfoque en velocidad y usabilidad.',
    descriptionLongEn: 'Web project for the fulfillment of the Sustainable Development Goals, focused on speed and usability.',
    technologies: ['Php', 'Vue.js', 'Javascript', 'Google Analytics', 'MySQL'],
    image: '/projects/ods.webp',
    mobileImage: '/projects/ods-mobile.webp',
    images: ['/projects/ods.webp'],
    features: [
      {
        titleEs: 'Dashboard Interactivo',
        titleEn: 'Interactive Dashboard',
        descriptionEs: 'Panel de control en tiempo real para el cumplimiento de los Objetivos de Desarrollo Sostenible.',
        descriptionEn: 'Real-time control panel for the fulfillment of the Sustainable Development Goals.',
        icon: 'LayoutDashboard'
      },
      {
        titleEs: 'Interfaz Dinámica',
        titleEn: 'Dynamic Interface',
        descriptionEs: 'Experiencia de usuario interactiva con Vue.js y GSAP.',
        descriptionEn: 'Interactive user experience with Vue.js and GSAP.',
        icon: 'MousePointer2'
      },
      {
        titleEs: 'Validación en Tiempo Real',
        titleEn: 'Real-time Validation',
        descriptionEs: 'Verificación inmediata de disponibilidad y datos.',
        descriptionEn: 'Immediate verification of availability and data.',
        icon: 'ChartLine'
      }
    ],
    link: 'https://visitalima.pe/',
    status: 'disabled',
    year: 2022,
  },
  {
    id: 'gobierno-abierto',
    titleEs: 'GOBIERNO ABIERTO Y COMPROMISOS DEL ALCALDE',
    titleEn: 'OPEN GOVERNMENT AND MAYOR COMMITMENTS',
    descriptionEs: 'Plataforma para el cumplimiento de los Objetivos de Desarrollo Sostenible.',
    descriptionEn: 'Platform for the fulfillment of the Sustainable Development Goals.',
    descriptionLongEs: 'Proyecto web para el cumplimiento de los Objetivos de Desarrollo Sostenible, con enfoque en velocidad y usabilidad.',
    descriptionLongEn: 'Web project for the fulfillment of the Sustainable Development Goals, focused on speed and usability.',
    technologies: ['Php', 'Vue.js', 'Javascript', 'Google Analytics', 'MySQL'],
    image: '/projects/gobierno-abierto.webp',
    mobileImage: '/projects/gobierno-abierto-mobile.webp',
    images: ['/projects/gobierno-abierto.webp'],
    features: [
      {
        titleEs: 'Dashboard Interactivo',
        titleEn: 'Interactive Dashboard',
        descriptionEs: 'Panel de control en tiempo real para el cumplimiento de los Objetivos de Desarrollo Sostenible.',
        descriptionEn: 'Real-time control panel for the fulfillment of the Sustainable Development Goals.',
        icon: 'LayoutDashboard'
      },
      {
        titleEs: 'Interfaz Dinámica',
        titleEn: 'Dynamic Interface',
        descriptionEs: 'Experiencia de usuario interactiva con Vue.js y GSAP.',
        descriptionEn: 'Interactive user experience with Vue.js and GSAP.',
        icon: 'MousePointer2'
      },
      {
        titleEs: 'Validación en Tiempo Real',
        titleEn: 'Real-time Validation',
        descriptionEs: 'Verificación inmediata de disponibilidad y datos.',
        descriptionEn: 'Immediate verification of availability and data.',
        icon: 'ChartLine'
      }
    ],
    link: 'https://www.munlima.gob.pe/gobierno-abierto/compromisos',
    status: 'disabled',
    year: 2022,
  },
  {
    id: 'luminaria',
    titleEs: 'Web de venta de luminarias',
    titleEn: 'Lighting Sales Website',
    descriptionEs: 'Landing page para venta de luminarias con diseño responsivo y enfoque en conversión.',
    descriptionEn: 'Landing page for lighting sales with responsive design and conversion focus.',
    descriptionLongEs: 'Sitio web para venta de luminarias con diseño responsivo y enfoque en conversión.',
    descriptionLongEn: 'Website for lighting sales with responsive design and conversion focus.',
    technologies: ['React', 'Swiper', 'Tailwind'],
    image: '/projects/luminaria.webp',
    mobileImage: '/projects/luminaria-mobile.webp',
    images: ['/projects/luminaria.webp'],
    features: [
      {
        titleEs: 'Catálogo Visual Impactante',
        titleEn: 'Stunning Visual Showroom',
        descriptionEs: 'Exhibición de luminarias en alta resolución con filtros avanzados por estilo y ambiente.',
        descriptionEn: 'High-resolution lighting display with advanced filters by style and environment.',
        icon: 'Lightbulb'
      },
      {
        titleEs: 'Diseño Enfocado en Conversión',
        titleEn: 'Conversion-Focused Design',
        descriptionEs: 'Secciones estratégicas y llamadas a la acción optimizadas para maximizar las ventas.',
        descriptionEn: 'Strategic sections and optimized calls to action to maximize sales.',
        icon: 'ShoppingBag'
      },
      {
        titleEs: 'Experiencia Fluida y Responsiva',
        titleEn: 'Seamless Responsive Experience',
        descriptionEs: 'Navegación rápida y adaptada a móviles usando sliders dinámicos con Swiper y Tailwind.',
        descriptionEn: 'Fast, mobile-friendly navigation using dynamic sliders with Swiper and Tailwind.',
        icon: 'Smartphone'
      }
    ],
    link: 'https://luminaria-two.vercel.app/',
    status: 'finished',
    year: 2025,
  },
  {
    id: 'viajes',
    titleEs: 'Mejoras en la Web de seguro de viajes',
    titleEn: 'Improvements on the Travel Insurance Website',
    descriptionEs: 'Modernización del backend y optimización del sistema de cupones y márgenes comerciales.',
    descriptionEn: 'Backend modernization and optimization of the coupon and commercial margin systems.',
    descriptionLongEs: 'Implementación de mejoras críticas en la plataforma, incluyendo la modernización de la arquitectura del backend, el desarrollo de un módulo de cupones de descuento y la optimización del cálculo de márgenes comerciales.',
    descriptionLongEn: 'Implementation of critical platform improvements, including backend architecture modernization, the development of a discount coupon module, and optimization of commercial margin calculations.',
    technologies: ['Vue', 'Pug', 'Sass'],
    image: '/projects/viajes.webp',
    mobileImage: '/projects/viajes-mobile.webp',
    images: ['/projects/viajes.webp'],
    features: [
      {
        titleEs: 'Modernización del Backend',
        titleEn: 'Backend Modernization',
        descriptionEs: 'Refactorización y actualización de la lógica del servidor para mejorar el rendimiento y la escalabilidad del sitio con Vue.',
        descriptionEn: 'Refactoring and updating server-side logic to improve site performance and scalability with Vue.',
        icon: 'Cpu'
      },
      {
        titleEs: 'Módulo de Cupones Dinámicos',
        titleEn: 'Dynamic Coupons Module',
        descriptionEs: 'Implementación de un sistema flexible para la gestión, aplicación y validación de cupones de descuento en el checkout.',
        descriptionEn: 'Implementation of a flexible system for managing, applying, and validating discount coupons during checkout.',
        icon: 'Tag'
      },
      {
        titleEs: 'Optimización de Márgenes',
        titleEn: 'Margin Optimization',
        descriptionEs: 'Ajuste y precisión en el cálculo de márgenes comerciales y costos de las pólizas de seguro de viajes.',
        descriptionEn: 'Fine-tuning and accuracy in commercial margin calculations and travel insurance policy costs.',
        icon: 'TrendingUp'
      }
    ],
    link: 'https://www.interseguro.pe/viajes',
    status: 'finished',
    year: 2025,
  },
];
