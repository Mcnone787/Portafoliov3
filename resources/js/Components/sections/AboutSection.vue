<template>
    <section id="sobre-mi" class="py-20 bg-gray-850 relative overflow-hidden">
        <DelayedParticlesBackground 
            container-id="sobre-mi"
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
            <h2 class="text-3xl font-bold text-center mb-12">Sobre Mí</h2>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="text-center lg:text-left">
                    <div class="w-64 h-64 mx-auto lg:mx-0 rounded-full relative mb-8">
                        <div class="absolute inset-0 rounded-full border-2 border-primary/20 animate-border-wave"></div>
                        <div class="absolute inset-0 rounded-full border-2 border-primary/20 animate-border-wave" style="animation-delay: -0.6s;"></div>
                        <div class="absolute inset-0 rounded-full border-2 border-primary/20 animate-border-wave" style="animation-delay: -1.2s;"></div>
                        <div class="absolute inset-0 rounded-full border-2 border-primary/20 animate-border-wave" style="animation-delay: -1.8s;"></div>
                        <div class="absolute inset-0 rounded-full border-2 border-primary/20 animate-border-wave" style="animation-delay: -2.4s;"></div>
                        
                        <div class="absolute inset-2 rounded-full overflow-hidden border-2 border-primary/50 p-2">
                            <div class="w-full h-full rounded-full overflow-hidden bg-gray-750 flex items-center justify-center">
                                <img src="/images/profile-512.webp" srcset="/images/profile-512.webp 512w, /images/profile.webp 800w" sizes="256px" class="w-full h-full object-cover" alt="Adrià Moya Duran, desarrollador full-stack en Girona" loading="lazy" width="256" height="256">
                                <!-- <UserIcon class="w-32 h-32 text-primary/40" /> -->
                            </div>
                        </div>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-4">Desarrollador Full-Stack</h3>
                    <p class="text-gray-400 mb-6">
                        Desarrollador apasionado que ve cada proyecto como un emocionante rompecabezas, transformando desafíos en soluciones creativas a través del código.
                    </p>
                    <div class="flex justify-center lg:justify-start gap-4">
                        <button type="button" class="btn-primary" aria-label="Descargar currículum en PDF">Descargar CV</button>
                        <button type="button" @click="$emit('navigate', 'contacto')" class="btn-outline" aria-label="Ir a la sección de contacto">Contactar</button>
                    </div>
                </div>

                <div class="space-y-6">
                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-3">Mi Historia</h3>
                        <p class="text-gray-400">
                            Soy un desarrollador web full-stack con más de 5 años de experiencia en la creación de aplicaciones web modernas y escalables. 
                            Me especializo en Laravel, Vue.js, React y otras tecnologías modernas del ecosistema web.
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-3">Mi Enfoque</h3>
                        <p class="text-gray-400">
                            Creo en el desarrollo de código limpio, mantenible y escalable. Me enfoco en crear experiencias de usuario excepcionales 
                            mientras mantengo un código backend robusto y eficiente.
                        </p>
                    </div>

                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-3">Objetivos</h3>
                        <p class="text-gray-400">
                            Mi objetivo es continuar aprendiendo y creciendo como desarrollador, contribuyendo a proyectos innovadores 
                            que tengan un impacto positivo en la vida de las personas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { UserIcon } from '@heroicons/vue/24/outline';
import DelayedParticlesBackground from '@/Components/DelayedParticlesBackground.vue';

defineEmits(['navigate']);
</script>
