<template>
    <Head>
        <title>Adrià Moya — Desarrollador web full-stack | Portafolio</title>
        <meta name="description" content="Portafolio de Adrià Moya Duran. Desarrollador web full-stack con Laravel, Vue.js y tecnologías modernas. Proyectos y contacto." />
    </Head>
    
    <div class="min-h-screen bg-gray-850">
        <SideNavigation @navigate="scrollToSection" />
        <MobileNavigation @navigate="scrollToSection" />

        <div class="fixed top-0 left-0 w-full h-1 bg-gray-750 z-40">
            <div 
                class="h-full bg-primary transition-all duration-300"
                :style="{ width: scrollProgress + '%' }"
            ></div>
        </div>

        <div>
            <HeroSection @navigate="scrollToSection" />
            <ProjectsSection />
            <SkillsSection />
            <AboutSection @navigate="scrollToSection" />
            <ContactSection />
        </div>

        <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform translate-y-10 opacity-0"
            enter-to-class="transform translate-y-0 opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="transform translate-y-0 opacity-100"
            leave-to-class="transform translate-y-10 opacity-0"
        >
            <button 
                v-show="showScrollTop"
                @click="scrollToTop"
                class="fixed bottom-5 right-5 p-2 bg-primary rounded-full text-white shadow-lg shadow-primary/20 hover:bg-primary/90  transition-all duration-300 z-30"
                aria-label="Volver arriba"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="2" 
                    stroke="currentColor" 
                    class="w-5 h-5"
                >
                    <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" 
                    />
                </svg>
            </button>
        </transition>
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import { computed } from 'vue';
import { useNavigation } from '@/composables/useNavigation';
import SideNavigation from '@/Components/navigation/SideNavigation.vue';
import MobileNavigation from '@/Components/navigation/MobileNavigation.vue';
import HeroSection from '@/Components/sections/HeroSection.vue';
import ProjectsSection from '@/Components/sections/ProjectsSection.vue';
import SkillsSection from '@/Components/sections/SkillsSection.vue';
import AboutSection from '@/Components/sections/AboutSection.vue';
import ContactSection from '@/Components/sections/ContactSection.vue';

const { scrollProgress, activeSection, scrollToSection } = useNavigation();
const showScrollTop = computed(() => activeSection.value !== 'inicio');

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
</script>