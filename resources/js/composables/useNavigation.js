import { ref, onMounted, onUnmounted } from 'vue';

export function useNavigation() {
    const activeSection = ref('inicio');
    const scrollProgress = ref(0);
    const mobileMenuOpen = ref(false);

    const navigation = [
        { id: 'inicio', name: 'Inicio', icon: 'HomeIcon' },
        { id: 'proyectos', name: 'Proyectos', icon: 'CodeBracketIcon' },
        { id: 'habilidades', name: 'Habilidades', icon: 'WrenchScrewdriverIcon' },
        { id: 'sobre-mi', name: 'Sobre mí', icon: 'UserIcon' },
        { id: 'contacto', name: 'Contacto', icon: 'EnvelopeIcon' }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            activeSection.value = sectionId;
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const updateActiveSection = () => {
        const sections = navigation.map(item => item.id);
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    activeSection.value = sections[i];
                    break;
                }
            }
        }
    };

    const updateScrollProgress = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.value = Math.min(scrollPercent, 100);
    };

    const toggleMobileMenu = () => {
        mobileMenuOpen.value = !mobileMenuOpen.value;
    };

    // Dot navigation helpers
    const getTotalLineHeight = () => {
        const navItems = document.querySelectorAll('.nav-dot');
        if (navItems.length < 2) return 0;

        const firstDot = navItems[0].getBoundingClientRect();
        const lastDot = navItems[navItems.length - 1].getBoundingClientRect();
        
        return lastDot.top - firstDot.top;
    };

    const getProgressScale = () => {
        const currentSectionIndex = navigation.findIndex(nav => nav.id === activeSection.value);
        if (currentSectionIndex <= 0) return 0;
        return currentSectionIndex / (navigation.length - 1);
    };

    const getDotClass = (sectionId, index) => {
        const currentSectionIndex = navigation.findIndex(nav => nav.id === activeSection.value);
        const isActive = activeSection.value === sectionId;
        const isCompleted = index < currentSectionIndex;

        if (isActive) {
            return 'bg-primary border-primary scale-125 shadow-lg shadow-primary/50';
        } else if (isCompleted) {
            return 'bg-primary border-primary scale-110';
        } else {
            return 'bg-gray-750 border-white/60 hover:border-primary hover:bg-gray-850 hover:scale-110';
        }
    };

    onMounted(() => {
        window.addEventListener('scroll', updateActiveSection);
        window.addEventListener('scroll', updateScrollProgress);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', updateActiveSection);
        window.removeEventListener('scroll', updateScrollProgress);
    });

    return {
        activeSection,
        scrollProgress,
        mobileMenuOpen,
        navigation,
        scrollToSection,
        toggleMobileMenu,
        getTotalLineHeight,
        getProgressScale,
        getDotClass
    };
}
