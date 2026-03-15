<template>
    <div v-if="show" class="fixed inset-0 z-50 overflow-hidden" @click="closeModal">
        <div class="flex items-center justify-center min-h-screen p-2 sm:p-4">
            <div class="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75" aria-hidden="true"></div>

            <div class="relative w-full max-w-7xl text-left bg-gray-800/95 backdrop-blur-sm shadow-xl rounded-2xl border border-white/10 overflow-hidden max-h-[95vh] sm:max-h-[90vh]"
                 @click.stop>
                <!-- Botón cerrar (cruz) - siempre visible -->
                <button type="button"
                        @click="closeModal"
                        aria-label="Cerrar modal"
                        class="absolute top-3 right-3 sm:top-4 sm:right-4 z-[60] flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-900/95 hover:bg-gray-700 text-white border border-white/20 shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-800">
                    <svg class="w-4 h-4 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                <div class="flex flex-col max-h-[95vh] sm:max-h-[90vh]">
                    <!-- Encabezado (padding-right para no solaparse con el botón) -->
                    <div class="px-4 pt-4 pb-3 pr-14 sm:px-6 sm:pt-6 sm:pb-4 sm:pr-6 bg-gray-800/95 backdrop-blur-sm sticky top-0 z-10 shrink-0">
                        <h3 class="text-lg sm:text-xl font-bold text-white">{{ project.title }}</h3>
                        <p class="text-gray-400 mt-1 text-xs sm:text-sm">{{ project.shortInfo }}</p>
                    </div>

                    <!-- Contenido scrolleable -->
                    <div class="overflow-y-auto overflow-x-hidden min-h-0">
                        <!-- Visor de imágenes -->
                        <div class="w-full bg-gray-900/50 backdrop-blur-sm">
                            <ModalImageViewer 
                                v-if="project"
                                :images="project.images || []"
                                :project-title="project.title"
                                :auto-play="true"
                                :interval="7000"
                            />
                        </div>

                        <!-- Información: 1 columna en móvil, 2 en desktop; más aire en móvil -->
                        <div class="px-4 pb-6 pt-4 sm:px-8 sm:pb-8 sm:pt-5 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" v-if="project">
                            <!-- Columna izquierda -->
                            <div class="space-y-5 sm:space-y-4">
                                <!-- Nota de privacidad -->
                                <div v-if="project.isPrivate">
                                    <div class="p-3 bg-primary/10 rounded-lg border border-primary/20">
                                        <p class="text-primary text-sm">{{ project.privateNote }}</p>
                                    </div>
                                </div>

                                <!-- Descripción -->
                                <div>
                                    <h4 class="text-sm font-semibold text-white/90 mb-2">Descripción</h4>
                                    <p class="text-gray-400 text-sm leading-relaxed">{{ project.description }}</p>
                                </div>

                                <!-- Enlaces de prensa -->
                                <div v-if="project.pressLinks && project.pressLinks.length > 0">
                                    <h4 class="text-sm font-semibold text-white/90 mb-2">Menciones en Prensa</h4>
                                    <div class="space-y-2">
                                        <a v-for="press in project.pressLinks" 
                                           :key="press.title"
                                           :href="press.url"
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           class="flex items-center gap-2 p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors duration-200 group"
                                        >
                                            <div class="text-primary text-xl">
                                                📰
                                            </div>
                                            <div class="flex-grow">
                                                <div class="text-white/90 text-sm font-medium group-hover:text-primary transition-colors duration-200">
                                                    {{ press.title }}
                                                </div>
                                                <div class="text-gray-400 text-xs line-clamp-2">
                                                    {{ press.description }}
                                                </div>
                                            </div>
                                            <svg class="w-4 h-4 text-primary/70 group-hover:text-primary flex-shrink-0 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <!-- Logros y Características -->
                                <div v-if="project.highlights && project.highlights.length > 0">
                                    <h4 class="text-sm font-semibold text-white/90 mb-2">Logros y Características</h4>
                                    <ul class="space-y-2">
                                        <li v-for="highlight in project.highlights" 
                                            :key="highlight"
                                            class="text-gray-400 text-sm flex items-start leading-relaxed">
                                            <span>{{ highlight }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Columna derecha -->
                            <div class="space-y-5 sm:space-y-4">
                                <!-- Tecnologías -->
                                <div>
                                    <h4 class="text-sm font-semibold text-white/90 mb-2">Tecnologías</h4>
                                    <div class="grid grid-cols-2 gap-2 sm:gap-2">
                                        <div v-for="tech in project.technologies" 
                                             :key="tech"
                                             class="flex items-center gap-2 p-2 bg-gray-750/50 rounded-lg">
                                            <TechIcon :name="tech.toLowerCase()" class="w-5 h-5" />
                                            <span class="text-gray-300 text-sm">{{ tech }}</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Botones de acción -->
                                <div class="flex flex-col sm:flex-row gap-2 pt-1">
                                    <a v-if="project.demoUrl"
                                       :href="project.demoUrl"
                                       :download="isAndroidApp"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       class="btn-primary text-sm flex items-center gap-2">
                                        <span v-if="isAndroidApp">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l4 4 4-4M12 4v16" />
                                            </svg>
                                        </span>
                                        {{ isAndroidApp ? 'Descargar APK' : 'Ver Demo' }}
                                    </a>
                                    <a v-if="project.codeUrl"
                                       :href="project.codeUrl"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       class="btn-outline text-sm">
                                        Ver Código
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';
import ModalImageViewer from '@/Components/ModalImageViewer.vue';
import TechIcon from '@/Components/TechIcon.vue';

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    project: {
        type: Object,
        default: null
    }
});

const emit = defineEmits(['close']);

const closeModal = () => {
    emit('close');
};

const isAndroidApp = computed(() => {
    return props.project?.technologies?.includes('Android');
});
</script>