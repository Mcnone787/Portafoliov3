<template>
    <section id="habilidades" class="py-20 bg-gray-850 relative overflow-hidden">
        <div class="absolute inset-0 z-0">
            <ParticlesBackground 
                container-id="habilidades"
                :config="{
                    particleCount: 120,
                    particleSize: 2,
                    particleColor: 'rgb(14 136 168)',
                    lineColor: 'rgba(14, 136, 168, 0.4)',
                    particleSpeed: 0.5,
                    lineDistance: 150,
                    mouseMoveRadius: 120
                }"
                :opacity="0.6"
            />
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 class="text-3xl font-bold text-center mb-12">Habilidades</h2>
            <div class="flex flex-wrap gap-3 sm:gap-4 mb-8 justify-center">
                <button
                    v-for="cat in categoriesList"
                    :key="cat.id"
                    @click="setSelectedCategory(cat.id)"
                    class="px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 w-full sm:w-auto"
                    :class="selectedCategory === cat.id ? 'bg-primary text-white' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'"
                >
                    <TechIcon :name="cat.icon" class="w-[4rem] h-15" />
                    <span class="text-sm sm:text-base">{{ cat.name }}</span>
                </button>
            </div>

            <div class="relative min-h-[400px]">
                <transition name="fade-scale" mode="out-in">
                    <div :key="selectedCategory" class="w-full">
                        <div v-if="selectedCategory === 'web'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-start max-w-6xl mx-auto">
                            <div class="card h-fit">
                                <h3 class="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                    <TechIcon name="frontend" class="w-5 sm:w-6 h-5 sm:h-6" />
                                    Frontend
                                </h3>
                                <div class="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-2 gap-3 sm:gap-4 justify-items-center">
                                    <div
                                        v-for="(tech, index) in getDisplayedTechs('web', 'frontend')"
                                        :key="tech.name"
                                        class="flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                                        :class="{
                                            'animate-fade-in-up': index >= 6,
                                            'opacity-0 translate-y-4': index >= 6
                                        }"
                                    >
                                        <TechIcon :name="tech.icon" />
                                        <span class="text-sm text-gray-400 text-center">{{ tech.name }}</span>
                                    </div>
                                </div>
                                <div v-if="hasMoreTechs('web', 'frontend')" class="flex justify-center mt-4">
                                    <button
                                        @click="toggleShowAll('web_frontend')"
                                        class="text-sm text-primary hover:text-primary/80 flex items-center gap-2 transition-colors duration-300"
                                    >
                                        <span>{{ showAll.web_frontend ? 'Ver menos' : 'Ver más tecnologías' }}</span>
                                        <svg
                                            class="w-4 h-4 transition-transform duration-300"
                                            :class="{ 'rotate-180': showAll.web_frontend }"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="card h-fit">
                                <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                    <TechIcon name="backend" class="w-6 h-6" />
                                    Backend
                                </h3>
                                <div class="grid grid-cols-2 gap-4">
                                    <div
                                        v-for="(tech, index) in getDisplayedTechs('web', 'backend')"
                                        :key="tech.name"
                                        class="flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                                        :class="{
                                            'animate-fade-in-up': index >= 6,
                                            'opacity-0 translate-y-4': index >= 6
                                        }"
                                    >
                                        <TechIcon :name="tech.icon" />
                                        <span class="text-sm text-gray-400 text-center">{{ tech.name }}</span>
                                    </div>
                                </div>
                                <div v-if="hasMoreTechs('web', 'backend')" class="flex justify-center mt-4">
                                    <button
                                        @click="toggleShowAll('web_backend')"
                                        class="text-sm text-primary hover:text-primary/80 flex items-center gap-2 transition-colors duration-300"
                                    >
                                        <span>{{ showAll.web_backend ? 'Ver menos' : 'Ver más tecnologías' }}</span>
                                        <svg
                                            class="w-4 h-4 transition-transform duration-300"
                                            :class="{ 'rotate-180': showAll.web_backend }"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="card h-fit">
                                <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                    <TechIcon name="devops" class="w-6 h-6" />
                                    DevOps
                                </h3>
                                <div class="grid grid-cols-2 gap-4">
                                    <div
                                        v-for="(tech, index) in getDisplayedTechs('web', 'devops')"
                                        :key="tech.name"
                                        class="flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                                        :class="{
                                            'animate-fade-in-up': index >= 6,
                                            'opacity-0 translate-y-4': index >= 6
                                        }"
                                    >
                                        <TechIcon :name="tech.icon" />
                                        <span class="text-sm text-gray-400 text-center">{{ tech.name }}</span>
                                    </div>
                                </div>
                                <div v-if="hasMoreTechs('web', 'devops')" class="flex justify-center mt-4">
                                    <button
                                        @click="toggleShowAll('web_devops')"
                                        class="text-sm text-primary hover:text-primary/80 flex items-center gap-2 transition-colors duration-300"
                                    >
                                        <span>{{ showAll.web_devops ? 'Ver menos' : 'Ver más tecnologías' }}</span>
                                        <svg
                                            class="w-4 h-4 transition-transform duration-300"
                                            :class="{ 'rotate-180': showAll.web_devops }"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div v-else class="flex justify-center">
                            <div class="card w-full max-w-3xl">
                                <h3 class="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                    <TechIcon :name="getCurrentCategory.icon" class="w-5 sm:w-6 h-5 sm:h-6" />
                                    {{ getCurrentCategory.name }}
                                </h3>
                                <div class="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 gap-3 sm:gap-4 justify-items-center">
                                    <div
                                        v-for="(tech, index) in getDisplayedTechs(selectedCategory)"
                                        :key="tech.name"
                                        class="flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                                        :class="{
                                            'animate-fade-in-up': index >= 6,
                                            'opacity-0 translate-y-4': index >= 6
                                        }"
                                    >
                                        <TechIcon :name="tech.icon" />
                                        <span class="text-sm text-gray-400 text-center">{{ tech.name }}</span>
                                    </div>
                                </div>
                                <div v-if="hasMoreTechs(selectedCategory)" class="flex justify-center mt-4">
                                    <button
                                        @click="toggleShowAll(selectedCategory)"
                                        class="text-sm text-primary hover:text-primary/80 flex items-center gap-2 transition-colors duration-300"
                                    >
                                        <span>{{ showAll[selectedCategory] ? 'Ver menos' : 'Ver más tecnologías' }}</span>
                                        <svg
                                            class="w-4 h-4 transition-transform duration-300"
                                            :class="{ 'rotate-180': showAll[selectedCategory] }"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useSkills } from '@/composables/useSkills';
import { computed } from 'vue';
import ParticlesBackground from '@/Components/ParticlesBackground.vue';
import TechIcon from '@/Components/TechIcon.vue';

const { selectedCategory, categories, showAll, getDisplayedTechs, hasMoreTechs, setSelectedCategory } = useSkills();

const categoriesList = computed(() => categories.value);
const getCurrentCategory = computed(() => 
    categories.value.find(cat => cat.id === selectedCategory.value)
);

const toggleShowAll = (key) => {
    showAll.value[key] = !showAll.value[key];
};
</script>

<style>
.fade-scale-enter-active,
.fade-scale-leave-active {
    transition: all 0.3s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
    opacity: 0;
    transform: scale(0.95);
}

.fade-scale-enter-to,
.fade-scale-leave-from {
    opacity: 1;
    transform: scale(1);
}
</style>