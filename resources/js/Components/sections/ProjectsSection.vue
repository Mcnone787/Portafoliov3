<template>
    <section id="proyectos" class="py-20 bg-gray-850 relative overflow-hidden">
        <!-- Particles Container -->
        <ParticlesBackground 
            container-id="proyectos"
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

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 class="text-3xl font-bold text-center mb-12">Proyectos Destacados</h2>
            <div class="space-y-8">
                <TransitionGroup 
                    tag="div"
                    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                    :css="false"
                    @before-enter="onBeforeEnter"
                    @enter="onEnter"
                    @before-leave="onBeforeLeave"
                    :style="gridStyle"
                >
                    <div v-for="(project, index) in displayedProjects" 
                        :key="project.title"
                        :data-index="index"
                        class="card group relative flex flex-col"
                        @mouseenter="hoveredProject = project.title"
                        @mouseleave="hoveredProject = null"
                    >
                        <!-- Carrusel de imágenes -->
                        <div class="mb-4">
                            <ProjectCarousel 
                                :images="project.images || []"
                                :project-title="project.title"
                                :auto-play="true"
                                :interval="4000"
                                :is-hovered="hoveredProject === project.title"
                            />
                        </div>
                        
                        <!-- Contenido -->
                        <div class="flex-grow">
                            <h3 class="text-xl font-semibold text-white mb-2">{{ project.title }}</h3>
                            
                            <!-- Tecnologías (mostrar solo las 3 primeras) -->
                            <div class="flex flex-wrap gap-2 mb-3">
                                <span v-for="tech in project.technologies.slice(0, 3)" 
                                      :key="tech"
                                      class="bg-primary/20 text-primary px-2 py-1 rounded text-sm">
                                    {{ tech }}
                                </span>
                                <span v-if="project.technologies.length > 3" 
                                      class="text-gray-400 text-sm">
                                    +{{ project.technologies.length - 3 }}
                                </span>
                            </div>

                                                                    <p class="text-gray-400 mb-3">{{ project.description }}</p>

                                        <!-- Botón de prensa -->
                                        <div v-if="project.pressLinks && project.pressLinks.length > 0" class="flex flex-wrap gap-2 mb-3">
                                            <a :href="project.pressLinks[0].url"
                                               target="_blank"
                                               rel="noopener noreferrer"
                                               class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 rounded-lg text-sm text-primary transition-colors duration-200 group"
                                            >
                                                <span>📰</span>
                                                <span>Ver en prensa</span>
                                                <svg class="w-3.5 h-3.5 text-primary/70 group-hover:text-primary transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        </div>

                                        <!-- Nota de privacidad si existe -->
                                        <div v-if="project.isPrivate" class="mb-3">
                                            <p class="text-primary text-sm">
                                                {{ project.privateNote }}
                                            </p>
                                        </div>

                                        <!-- Primer highlight como preview -->
                                        <div v-if="project.highlights && project.highlights.length > 0" class="mb-3">
                                            <p class="text-gray-400 text-sm">
                                                {{ project.highlights[0] }}
                                    <span v-if="project.highlights.length > 1" class="text-primary">
                                        +{{ project.highlights.length - 1 }} más
                                    </span>
                                </p>
                            </div>
                        </div>
                        
                        <!-- Botones de acción -->
                        <div class="flex flex-col sm:flex-row gap-2 mt-4">
                            <!-- Botón Ver más siempre a la izquierda -->
                            <button 
                                @click="selectedProject = project"
                                class="btn-outline text-sm flex items-center justify-center gap-1 sm:w-1/3"
                            >
                                Ver más
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>

                            <!-- Contenedor para botones de acción a la derecha -->
                            <div class="flex gap-2 sm:w-2/3">
                                <a 
                                    v-if="project.demoUrl"
                                    :href="project.demoUrl" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    class="btn-primary text-sm flex-1 flex items-center justify-center gap-1"
                                    @click.stop
                                >
                                    <span v-if="isAndroidApp(project)">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l4 4 4-4M12 4v16" />
                                        </svg>
                                    </span>
                                    {{ isAndroidApp(project) ? 'Descargar APK' : 'Ver Demo' }}
                                </a>
                                <a 
                                    v-if="project.codeUrl"
                                    :href="project.codeUrl" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    class="btn-outline text-sm flex-1 flex items-center justify-center gap-1"
                                    @click.stop
                                >
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                    Ver Código
                                </a>
                            </div>
                        </div>
                    </div>
                </TransitionGroup>

                <div v-if="hasMoreProjects" class="flex justify-center mt-8">
                    <button @click="showMoreProjects" 
                            :disabled="isLoading"
                            class="btn-outline group relative overflow-hidden">
                        <span class="relative z-10 flex items-center">
                            <span v-if="isLoading" class="mr-2">
                                <svg class="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            </span>
                            {{ isLoading ? 'Cargando...' : 'Ver Más Proyectos' }}
                        </span>
                        <div class="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Modal de detalles del proyecto -->
    <ProjectDetailsModal
        :show="!!selectedProject"
        :project="selectedProject"
        @close="selectedProject = null"
    />
</template>

<script setup>
import { useProjects } from '@/composables/useProjects';
import ParticlesBackground from '@/Components/ParticlesBackground.vue';
import ProjectCarousel from '@/Components/ProjectCarousel.vue';
import ProjectDetailsModal from '@/Components/ProjectDetailsModal.vue';

import { ref } from 'vue';

const hoveredProject = ref(null);
const selectedProject = ref(null);

const {
    displayedProjects,
    hasMoreProjects,
    isLoading,
    gridStyle,
    showMoreProjects,
    onBeforeEnter,
    onEnter,
    onBeforeLeave
} = useProjects();

const isAndroidApp = (project) => {
    return project.technologies?.includes('Android');
};
</script>
