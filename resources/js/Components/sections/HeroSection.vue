<template>
    <section id="inicio" class="pt-16 min-h-screen flex items-center relative overflow-hidden bg-gray-850">
        <ParticlesBackground 
            container-id="inicio"
            :config="{
                particleCount: 120,
                particleSize: 2,
                particleColor: 'rgb(14 136 168)',
                lineColor: 'rgba(14, 136, 168, 0.4)',
                particleSpeed: 0.5,
                lineDistance: 150,
                mouseMoveRadius: 120
            }"
        />

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="text-center lg:text-left">
                    <h1 class="text-4xl sm:text-6xl font-bold text-white mb-6">
                        ¡Hola! Soy <span class="text-primary">Adria Moya Duran</span>
                    </h1>
                    <div class="text-xl text-gray-400 mb-8 space-y-4">
                        <p>
                            Desarrollador web full-stack apasionado por crear soluciones innovadoras.
                        </p>
                        <p class="text-lg">
                            Con experiencia en tecnologías modernas como Laravel, Vue.js, y más. Para mí, la programación es como resolver un emocionante rompecabezas - cada desafío es una oportunidad para aprender y crecer.
                        </p>
                    </div>
                    <div class="flex justify-center lg:justify-start gap-4">
                        <button type="button" @click="$emit('navigate', 'proyectos')" class="btn-primary" aria-label="Ir a la sección de proyectos">
                            <CodeBracketIcon class="w-5 h-5 mr-2 inline-block" aria-hidden="true" />
                            Ver Proyectos
                        </button>
                        <button type="button" @click="$emit('navigate', 'contacto')" class="btn-outline" aria-label="Ir a la sección de contacto">
                            <EnvelopeIcon class="w-5 h-5 mr-2 inline-block" aria-hidden="true" />
                            Contactar
                        </button>
                    </div>
                </div>

                <div class="hidden lg:flex justify-center items-center">
                    <div class="relative">
                        <div class="w-96 h-96 rounded-full relative">
                            <div class="absolute inset-0 rounded-full border-2 border-primary/20 animate-border-wave"></div>
                            <div class="absolute inset-0 rounded-full border-2 border-primary/30 animate-border-wave" style="animation-delay: -1s;"></div>
                            <div class="absolute inset-0 rounded-full border-2 border-primary/40 animate-border-wave" style="animation-delay: -2s;"></div>
                            
                            <div class="absolute inset-2 rounded-full overflow-hidden border-2 border-primary/50 p-2">
                                <div class="w-full h-full rounded-full overflow-hidden bg-gray-750 flex items-center justify-center">
                                    <img src="images/profile.jpg" class="w-full h-full object-cover" alt="Adrià Moya Duran, desarrollador web full-stack">
                                    <!-- <UserIcon class="w-48 h-48 text-primary/40" /> -->
                                </div>
                            </div>
                        </div>
                        
                        <div class="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { CodeBracketIcon, UserIcon, EnvelopeIcon } from '@heroicons/vue/24/outline';
import ParticlesBackground from '@/Components/ParticlesBackground.vue';

defineEmits(['navigate']);
</script>
