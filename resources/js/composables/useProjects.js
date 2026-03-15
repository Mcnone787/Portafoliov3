import { ref, computed } from 'vue';

export function useProjects() {
    const projects = ref([
       
        {
            title: 'APP Trueta OPA',
            description: 'Aplicación para optimizar la profilaxis antibiótica en el Hospital Trueta, ahorrando 35.700€ anuales en tiempo de trabajo de los anestesistas.',
            shortInfo: 'Implementado en el Hospital Trueta con planes de extensión a otros hospitales de Cataluña',
            technologies: ['Laravel', 'Vue.js', 'MySQL', 'TailwindCSS', 'PHP'],
            images: [
                '/images/projects/trueta/imagen1.png',
                '/images/projects/trueta/imagen2.jpeg',
            ],
            highlights: [
                '🏆 Primer premio CFGS Universidad de Girona',
                '🏅 Premio Bonaplata Joves 2024',
                'Optimización del proceso de profilaxis antibiótica',
                'Reducción de costes y tiempo de trabajo',
                'Interfaz intuitiva para personal médico'
            ],
            pressLinks: [
                {
                    title: 'Diari Emporda',
                    url: 'https://www.emporda.info/comarca/2024/08/12/alumnes-cendrassos-figueres-programen-app-trueta-106914562.html',
                    description: 'Unos estudiantes de Figueres crea una app para ahorrar 35.000€ al año al Trueta'
                },
                {
                    title: 'Cendrassos',
                    url: 'https://cendrassos.net/presentacio-app-a-lhospital-trueta/',
                    description: 'Unos estudiantes del Institut Cendrassos crea una app que ahorra 35.000€ al año al Trueta'
                }
            ],
            isPrivate: true,
            privateNote: '🔒 Aplicación de uso interno hospitalario',
            demoUrl: null,
            codeUrl: null
        },
        {
            title: 'Després de la COVID',
            description: 'Portal web para la Fundació Salut Empordà que ofrece ejercicios de rehabilitación y recursos para la recuperación de pacientes COVID-19.',
            shortInfo: 'Colaboración con Fundació Salut Empordà y Institut Cendrassos',
            technologies: ['jQuery', 'HTML5', 'CSS3', 'JavaScript', 'YouTube API'],
            highlights: [
                '📱 Contenido multimedia y descargable',
                '🔄 Integración con YouTube',
                '🌐 Útil para múltiples patologías'
            ],
            images: [
                '/images/projects/despresdelacovid/imagen1.webp',
                '/images/projects/despresdelacovid/imagen2.png'
            ],
            pressLinks: [
                {
                    title: 'L\'Empordà',
                    url: 'https://www.emporda.info/salut/2021/09/23/fse-i-l-institut-cendrassos-57599955.html',
                    description: 'La FSE i l\'Institut Cendrassos creen una web per ajudar els pacients post-Covid'
                }
            ],
            demoUrl: 'http://www.despresdelacovid.cat',
            codeUrl: null
        },
        {
            title: 'Only BBQ',
            description: 'Red social con interfaz sencilla y amigable para crear eventos de barbacoas. Permite crear eventos, invitar personas, editar perfiles, seguir a otros usuarios, filtrar usuarios y chatear en tiempo real.',
            shortInfo: 'Proyecto final de DAW - Institut Cendrassos',
            technologies: ['Laravel', 'Livewire', 'Alpine.js', 'MySQL', 'TailwindCSS', 'PHP', 'Node.js', 'Oracle Cloud','WebSockets','OAUTH2','Laravel Reverb'],
            images: [
                '/images/projects/onlybbq/imagen1.jpg',
                '/images/projects/onlybbq/imagen2.jpg',
                '/images/projects/onlybbq/imagen3.jpg',
                '/images/projects/onlybbq/imagen4.jpg',
                '/images/projects/onlybbq/imagen5.jpg',
                '/images/projects/onlybbq/imagen6.jpg',
     

            ],
            highlights: [
                '🔄 Chat en tiempo real con Laravel Reverb',
                '👥 Sistema de seguidores y perfiles',
                '📅 Gestión de eventos y invitaciones',
                '🔍 Filtrado avanzado de usuarios',
                '☁️ Desplegado en Oracle Cloud'
            ],
  
            demoUrl: null,
            codeUrl: "https://github.com/ABP-2n-DAW-23-24/G2-barbaquiu"
        },
        {
            title: 'TaskManager',
            description: 'Aplicación móvil para Android desarrollada con React Native que permite gestionar tareas de manera eficiente con una interfaz moderna e intuitiva.',
            shortInfo: 'App móvil de gestión de tareas con React Native',
            technologies: ['React Native', 'JavaScript', 'Android', 'Expo', 'AsyncStorage', 'React Navigation'],
            images: [
                '/images/projects/taskmanager/imagen1.png',
                '/images/projects/taskmanager/imagen2.png',
                '/images/projects/taskmanager/imagen3.png',
                '/images/projects/taskmanager/imagen4.png',
                '/images/projects/taskmanager/imagen5.png'

            ],
            highlights: [
                '✨ Interfaz moderna y minimalista',
                '📱 Diseñado específicamente para Android',
                '🔄 CRUD completo de tareas con modales',
                '✅ Sistema de marcado de tareas completadas',
                '📊 Panel de estadísticas',
                '🔍 Filtros por estado de tareas',
                '🔔 Sistema de notificaciones de acciones'
            ],
            demoUrl: "https://mega.nz/file/a9wwxKoR#JNwBAnzFRElK_sYVL3BxV-nAPT3Iv30JvhtIyTdySDo",
            codeUrl: 'https://github.com/Mcnone787/TaskManager'
        },
        {
            title: 'E-commerce Platform',
            description: 'Plataforma completa de comercio electrónico con sistema de pagos, gestión de inventario y panel de administración.',
            technologies: ['Laravel', 'Vue.js', 'MySQL', 'Stripe'],
            images: [
                '/images/projects/ecommerce-1.jpg',
                '/images/projects/ecommerce-2.jpg',
                '/images/projects/ecommerce-3.jpg'
            ],
            demoUrl: 'https://demo-ecommerce.com',
            codeUrl: 'https://github.com/tu-usuario/ecommerce-project'
        },
        {
            title: 'Task Management App',
            description: 'Aplicación de gestión de tareas con interfaz moderna, colaboración en tiempo real y análisis de productividad.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
            images: [
                '/images/projects/taskapp-1.jpg',
                '/images/projects/taskapp-2.jpg'
            ],
            demoUrl: null,
            codeUrl: 'https://github.com/tu-usuario/taskapp-project'
        },
        {
            title: 'Blog Platform',
            description: 'Plataforma de blog con sistema de comentarios, gestión de usuarios y editor de contenido rico.',
            technologies: ['Laravel', 'Alpine.js', 'PostgreSQL', 'Redis'],
            images: [
                '/images/projects/blog-1.jpg',
                '/images/projects/blog-2.jpg',
                '/images/projects/blog-3.jpg',
                '/images/projects/blog-4.jpg'
            ],
            demoUrl: 'https://demo-blog.com',
            codeUrl: 'https://github.com/tu-usuario/blog-project'
        },
        {
            title: 'Social Media Dashboard',
            description: 'Panel de control para gestión de redes sociales con análisis en tiempo real y programación de contenido.',
            technologies: ['Vue.js', 'Firebase', 'TailwindCSS', 'Chart.js'],
            images: [
                '/images/projects/dashboard-1.jpg',
                '/images/projects/dashboard-2.jpg'
            ],
            demoUrl: 'https://demo-dashboard.com',
            codeUrl: 'https://github.com/tu-usuario/dashboard-project'
        },
        {
            title: 'Real Estate Platform',
            description: 'Plataforma inmobiliaria con búsqueda avanzada, filtros dinámicos y visualización de propiedades en mapa.',
            technologies: ['Next.js', 'Node.js', 'MongoDB', 'MapBox'],
            images: [
                '/images/projects/realestate-1.jpg',
                '/images/projects/realestate-2.jpg',
                '/images/projects/realestate-3.jpg'
            ],
            demoUrl: 'https://demo-realestate.com',
            codeUrl: 'https://github.com/tu-usuario/realestate-project'
        },
        {
            title: 'Learning Management System',
            description: 'Sistema de gestión de aprendizaje con cursos en línea, evaluaciones y seguimiento de progreso.',
            technologies: ['Laravel', 'Vue.js', 'MySQL', 'AWS'],
            images: [
                '/images/projects/lms-1.jpg',
                '/images/projects/lms-2.jpg',
                '/images/projects/lms-3.jpg'
            ],
            demoUrl: 'https://demo-lms.com',
            codeUrl: 'https://github.com/tu-usuario/lms-project'
        }
    ]);

    const projectsPerPage = 3;
    const currentPage = ref(1);
    const isLoading = ref(false);
    const gridHeight = ref('auto');

    const displayedProjects = computed(() => {
        return projects.value.slice(0, currentPage.value * projectsPerPage);
    });

    const hasMoreProjects = computed(() => {
        return displayedProjects.value.length < projects.value.length;
    });

    const gridStyle = computed(() => ({
        minHeight: gridHeight.value
    }));

    const showMoreProjects = async () => {
        if (hasMoreProjects.value && !isLoading.value) {
            isLoading.value = true;
            const container = document.querySelector('.grid');
            if (container) {
                gridHeight.value = `${container.offsetHeight}px`;
            }
            
            await new Promise(resolve => setTimeout(resolve, 50));
            currentPage.value++;
        }
    };

    // Animation helpers
    const onBeforeEnter = (el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
    };

    const onEnter = (el, done) => {
        const delay = el.dataset.index % 3 * 100;
        setTimeout(() => {
            el.style.transition = 'all 0.4s ease-out';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.addEventListener('transitionend', () => {
                done();
                if (el.dataset.index == displayedProjects.value.length - 1) {
                    isLoading.value = false;
                }
            }, { once: true });
        }, delay);
    };

    const onBeforeLeave = (el) => {
        const gridContainer = el.parentElement;
        if (gridContainer) {
            gridHeight.value = `${gridContainer.offsetHeight}px`;
        }
    };

    return {
        projects,
        displayedProjects,
        hasMoreProjects,
        isLoading,
        gridStyle,
        showMoreProjects,
        onBeforeEnter,
        onEnter,
        onBeforeLeave
    };
}
