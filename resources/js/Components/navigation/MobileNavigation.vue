<template>
    <nav class="fixed top-0 left-0 right-0 bg-gray-850/95 backdrop-blur-sm z-50 2xl:hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex items-center justify-end h-16">
                <button 
                    type="button"
                    @click="toggleMobileMenu"
                    class="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 min-w-[44px] min-h-[44px] flex items-center justify-center"
                    :aria-label="mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'"
                    :aria-expanded="mobileMenuOpen"
                >
                    <svg 
                        class="w-6 h-6 transition-colors duration-200"
                        :class="mobileMenuOpen ? 'text-primary' : 'text-gray-400'"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
                        />
                    </svg>
                </button>
            </div>
        </div>
                
        <div 
            class="absolute top-16 left-0 right-0 transform transition-all duration-300 origin-top bg-gray-850/95 backdrop-blur-sm border-t border-primary/10"
            :class="mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95 pointer-events-none'"
        >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 py-3">
                <div class="space-y-1">
                    <button
                        v-for="item in navigation"
                        :key="item.id"
                        @click="handleNavigation(item.id)"
                        class="w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200"
                        :class="[
                            activeSection === item.id 
                                ? 'bg-primary/10 text-primary' 
                                : 'text-gray-300 hover:bg-primary/5 hover:text-primary'
                        ]"
                    >
                        <component 
                            :is="item.icon"
                            class="w-5 h-5 mr-3 transition-colors duration-200"
                            :class="activeSection === item.id ? 'text-primary' : 'text-gray-400'"
                        />
                        <span class="font-medium">{{ item.name }}</span>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useNavigation } from '@/composables/useNavigation';
import { 
    CodeBracketIcon, 
    UserIcon, 
    WrenchScrewdriverIcon, 
    EnvelopeIcon, 
    HomeIcon 
} from '@heroicons/vue/24/outline';

const {
    activeSection,
    mobileMenuOpen,
    navigation,
    toggleMobileMenu
} = useNavigation();

const handleNavigation = (sectionId) => {
    toggleMobileMenu();
    emit('navigate', sectionId);
};

const emit = defineEmits(['navigate']);
</script>
