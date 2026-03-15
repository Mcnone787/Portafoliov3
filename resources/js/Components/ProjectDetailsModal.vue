<template>
    <div v-if="show" class="fixed inset-0 z-50 overflow-hidden" @click="closeModal">
        <div class="flex items-center justify-center min-h-screen p-4">
            <div class="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75" aria-hidden="true"></div>

            <div class="relative w-full max-w-7xl text-left bg-gray-800/95 backdrop-blur-sm shadow-xl rounded-2xl border border-white/10"
                 @click.stop>
                <!-- Botón de cerrar -->
                <button @click="closeModal" 
                        class="absolute top-4 right-4 z-10 text-white/80 hover:text-white bg-black/30 hover:bg-black/50 rounded-full p-2 transition-all duration-200 backdrop-blur-sm">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div class="flex flex-col max-h-[90vh]">
                    <!-- Encabezado fijo -->
                    <div class="px-6 pt-6 pb-4 bg-gray-800/95 backdrop-blur-sm sticky top-0 z-10">
                        <h3 class="text-xl font-bold text-white">{{ project.title }}</h3>
                        <p class="text-gray-400 mt-1 text-sm">{{ project.shortInfo }}</p>
                    </div>

                    <!-- Contenido scrolleable -->
                    <div class="overflow-y-auto">
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

                        <!-- Información -->
                        <div class="px-8 pb-8 grid grid-cols-2 gap-8 mt-[20px]" v-if="project">
                            <!-- Columna izquierda -->
                            <div>
                                <!-- Nota de privacidad -->
                                <div v-if="project.isPrivate" class="mb-4">
                                    <div class="p-3 bg-primary/10 rounded-lg border border-primary/20">
                                        <p class="text-primary text-sm">{{ project.privateNote }}</p>
                                    </div>
                                </div>

                                <!-- Descripción -->
                                <div class="mb-4">
                                    <h4 class="text-sm font-semibold text-white/90 mb-2">Descripción</h4>
                                    <p class="text-gray-400 text-sm">{{ project.description }}</p>
                                </div>

                                <!-- Enlaces de prensa -->
                                <div v-if="project.pressLinks && project.pressLinks.length > 0" class="mb-4">
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
                                    <ul class="space-y-1.5">
                                        <li v-for="highlight in project.highlights" 
                                            :key="highlight"
                                            class="text-gray-400 text-sm flex items-start">
                                            <span>{{ highlight }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Columna derecha -->
                            <div>
                                <!-- Tecnologías -->
                                <div class="mb-4">
                                    <h4 class="text-sm font-semibold text-white/90 mb-2">Tecnologías</h4>
                                    <div class="grid grid-cols-2 gap-2">
                                        <div v-for="tech in project.technologies" 
                                             :key="tech"
                                             class="flex items-center gap-2 p-2 bg-gray-750/50 rounded-lg">
                                            <TechIcon :name="tech.toLowerCase()" class="w-5 h-5" />
                                            <span class="text-gray-300 text-sm">{{ tech }}</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Botones de acción -->
                                <div class="flex gap-2">
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