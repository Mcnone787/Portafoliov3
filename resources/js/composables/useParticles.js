import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useParticles(containerId, options = {}) {
    const isInitialized = ref(false);
    let particles = null;

    const defaultConfig = {
        particleCount: 120,
        particleSize: 2,
        particleColor: 'rgb(14 136 168)',
        lineColor: 'rgba(14, 136, 168, 0.4)',
        particleSpeed: 0.5,
        lineDistance: 150,
        mouseMoveRadius: 120,
        opacity: 0.6
    };

    const config = { ...defaultConfig, ...options };

    const initParticles = () => {
        if (isInitialized.value) return;

        const container = document.getElementById(containerId);
        if (!container) return;

        // Aquí iría la lógica de inicialización de partículas
        // Por ahora es un placeholder, pero aquí implementarías
        // la biblioteca de partículas que estés usando

        isInitialized.value = true;
    };

    const destroyParticles = () => {
        if (particles) {
            // Aquí iría la lógica de limpieza de partículas
            particles = null;
        }
        isInitialized.value = false;
    };

    onMounted(() => {
        initParticles();
        
        // Observador de visibilidad para reiniciar las partículas si es necesario
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !isInitialized.value) {
                        initParticles();
                    }
                });
            },
            { threshold: 0.1 }
        );

        const container = document.getElementById(containerId);
        if (container) {
            observer.observe(container);
        }
    });

    onBeforeUnmount(() => {
        destroyParticles();
    });

    return {
        isInitialized,
        config
    };
}
