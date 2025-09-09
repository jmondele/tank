export const locales = ['en', 'es'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'en';

export const translations = {
  en: {
    // Navigation
    services: 'Services',
    certificates: 'Certificates',
    equipment: 'Equipment',
    safety: 'Safety',
    about: 'About us',
    contact: 'Contact us',
    welderQualification: 'Welder Qualification',
    
    // Home page
    homeTitle: 'Tank Inspection Services | Professional API 653, 570, 510 Inspections',
    homeDescription: 'Leading provider of professional tank and vessel inspections. API 653, API 570, API 510 certified services. Expert NDT testing and maritime operations.',
    trustedInspections: 'Trusted Inspections',
    builtOnExpertise: 'Built on Decades of Expertise',
    homeIntro: 'At Tank Inspection Services, we deliver safe, precise, and reliable inspection services for storage tanks, piping, and pressure vessels.',
    homeMission: 'Our mission is simple: keep your assets compliant, safe, and efficient through work. We provide exceptional',
    certifiedInspections: 'certified inspections, supported by advanced',
    nonDestructiveTesting: 'Non-Destructive Testing (NDT)',
    fullRangeInspection: 'methods and a full range of inspection equipment to handle projects of any size or complexity.',
    petroleumSector: 'Petroleum Sector',
    chemicalIndustry: 'Chemical Industry',
    industrialFacilities: 'Industrial Facilities',
    experience: 'Experience',
    experienceText: 'With more than 10 years of expertise, our team has been safeguarding critical infrastructure through reliable inspections, advanced engineering solutions, and strong management practices across multiple industries.',
    experienceText2: 'With broad technical knowledge, industry certifications, and state of the art equipment, we adapt to the changing needs of tank owners while upholding the highest standards of quality and safety.',
    yearsExperience: 'Years',
    ofIndustryExcellence: 'of Industry Excellence',
    yearsText: 'More than 10 years safeguarding critical infrastructure.',
    projectsCompleted: 'Projects Completed',
    acrossAllSectors: 'Across All Sectors',
    safetyRecord: 'Safety Record',
    zeroMajorIncidents: 'Zero Major Incidents',
    emergencyResponse: '24/7 Emergency Response',
    alwaysAvailable: 'Always Available',
    trustedByIndustryLeaders: 'Trusted by Industry Leaders',
    trustedByText: 'Tank owners across the industry depend on us to protect their facilities and maintain compliance with the highest safety standards.',
    
    // Common buttons and actions
    getQuote: 'Get Free Quote',
    contactExperts: 'Contact Our Experts',
    startProject: 'Start Your Project',
    learnMore: 'Learn More About Us',
    
    // Services
    api653Title: 'API 653 Tank Inspection',
    api653Description: 'Professional aboveground storage tank inspection, repair, and reconstruction services following API 653 standards.',
    api570Title: 'API 570 Piping Inspection',
    api570Description: 'Professional in-service inspection, repair, alteration, and rerating of process piping systems following API 570 standards.',
    api510Title: 'API 510 Pressure Vessel Inspection',
    api510Description: 'Professional in-service inspection, repair, alteration, and rerating of pressure vessels following API 510 standards.',
    ndtTitle: 'NDT Non-Destructive Testing',
    ndtDescription: 'Advanced inspection techniques to evaluate integrity without causing damage or interrupting operations.',
    welderQualificationTitle: 'Welder Qualification Services',
    welderQualificationDescription: 'Professional ASME Section IX welder qualification and certification services ensuring compliance with industry standards.',
  },
  es: {
    // Navigation
    services: 'Servicios',
    certificates: 'Certificados',
    equipment: 'Equipos',
    safety: 'Seguridad',
    about: 'Acerca de nosotros',
    contact: 'Contáctanos',
    welderQualification: 'Calificación de Soldadores',
    
    // Home page
    homeTitle: 'Servicios de Inspección de Tanques | Inspecciones Profesionales API 653, 570, 510',
    homeDescription: 'Proveedor líder de inspecciones profesionales de tanques y recipientes. Servicios certificados API 653, API 570, API 510. Pruebas NDT expertas y operaciones marítimas.',
    trustedInspections: 'Inspecciones Confiables',
    builtOnExpertise: 'Basadas en Décadas de Experiencia',
    homeIntro: 'En Tank Inspection Services, ofrecemos servicios de inspección seguros, precisos y confiables para tanques de almacenamiento, tuberías y recipientes a presión.',
    homeMission: 'Nuestra misión es simple: mantener sus activos conformes, seguros y eficientes a través del trabajo. Proporcionamos excepcionales',
    certifiedInspections: 'inspecciones certificadas, respaldadas por avanzados',
    nonDestructiveTesting: 'Pruebas No Destructivas (NDT)',
    fullRangeInspection: 'métodos y una gama completa de equipos de inspección para manejar proyectos de cualquier tamaño o complejidad.',
    petroleumSector: 'Sector Petrolero',
    chemicalIndustry: 'Industria Química',
    industrialFacilities: 'Instalaciones Industriales',
    experience: 'Experiencia',
    experienceText: 'Con más de 10 años de experiencia, nuestro equipo ha estado protegiendo infraestructura crítica a través de inspecciones confiables, soluciones de ingeniería avanzadas y prácticas sólidas de gestión en múltiples industrias.',
    experienceText2: 'Con amplio conocimiento técnico, certificaciones industriales y equipos de última generación, nos adaptamos a las necesidades cambiantes de los propietarios de tanques mientras mantenemos los más altos estándares de calidad y seguridad.',
    yearsExperience: 'Años',
    ofIndustryExcellence: 'de Excelencia Industrial',
    yearsText: 'Más de 10 años protegiendo infraestructura crítica.',
    projectsCompleted: 'Proyectos Completados',
    acrossAllSectors: 'En Todos los Sectores',
    safetyRecord: 'Récord de Seguridad',
    zeroMajorIncidents: 'Cero Incidentes Mayores',
    emergencyResponse: 'Respuesta de Emergencia 24/7',
    alwaysAvailable: 'Siempre Disponible',
    trustedByIndustryLeaders: 'Confiado por Líderes de la Industria',
    trustedByText: 'Los propietarios de tanques en toda la industria dependen de nosotros para proteger sus instalaciones y mantener el cumplimiento con los más altos estándares de seguridad.',
    
    // Common buttons and actions
    getQuote: 'Obtener Cotización Gratuita',
    contactExperts: 'Contactar a Nuestros Expertos',
    startProject: 'Iniciar Su Proyecto',
    learnMore: 'Conocer Más Sobre Nosotros',
    
    // Services
    api653Title: 'Inspección de Tanques API 653',
    api653Description: 'Servicios profesionales de inspección, reparación y reconstrucción de tanques de almacenamiento aéreos siguiendo estándares API 653.',
    api570Title: 'Inspección de Tuberías API 570',
    api570Description: 'Servicios profesionales de inspección en servicio, reparación, alteración y recalificación de sistemas de tuberías de proceso siguiendo estándares API 570.',
    api510Title: 'Inspección de Recipientes a Presión API 510',
    api510Description: 'Servicios profesionales de inspección en servicio, reparación, alteración y recalificación de recipientes a presión siguiendo estándares API 510.',
    ndtTitle: 'Pruebas No Destructivas NDT',
    ndtDescription: 'Técnicas de inspección avanzadas para evaluar la integridad sin causar daño o interrumpir las operaciones.',
    welderQualificationTitle: 'Servicios de Calificación de Soldadores',
    welderQualificationDescription: 'Servicios profesionales de calificación y certificación de soldadores ASME Sección IX asegurando el cumplimiento con estándares industriales.',
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}