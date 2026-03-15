<template>
    <Head title="Contacto - Portfolio" />
    
    <div class="min-h-screen bg-gray-900">
        <!-- Navigation -->
        <nav class="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm border-b border-primary/20 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <h1 class="text-primary font-bold text-xl">Portfolio</h1>
                    </div>
                    
                    <div class="hidden sm:flex sm:items-center sm:space-x-8">
                        <a href="/" class="nav-link">Inicio</a>
                        <a href="/proyectos" class="nav-link">Proyectos</a>
                        <a href="/sobre-mi" class="nav-link">Sobre mí</a>
                        <a href="/contacto" class="nav-link active">Contacto</a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Header -->
        <section class="pt-16 py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-4xl sm:text-5xl font-bold text-white mb-6">
                    <span class="text-primary">Contacto</span>
                </h1>
                <p class="text-xl text-gray-400 max-w-2xl mx-auto">
                    ¿Tienes un proyecto en mente? ¡Me encantaría escuchar sobre él!
                </p>
            </div>
        </section>

        <!-- Contact Content -->
        <section class="py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <!-- Contact Form -->
                    <div class="card">
                        <h2 class="text-2xl font-bold text-white mb-6">Envíame un mensaje</h2>
                        
                        <form @submit.prevent="submitForm" class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        v-model="form.name"
                                        class="w-full px-4 py-3 bg-gray-900-lighter border border-primary/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Tu nombre"
                                        required
                                    >
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        v-model="form.email"
                                        class="w-full px-4 py-3 bg-gray-900-lighter border border-primary/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="tu@email.com"
                                        required
                                    >
                                </div>
                            </div>
                            
                            <div>
                                <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">Asunto</label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    v-model="form.subject"
                                    class="w-full px-4 py-3 bg-gray-900-lighter border border-primary/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="¿En qué puedo ayudarte?"
                                    required
                                >
                            </div>
                            
                            <div>
                                <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
                                <textarea 
                                    id="message" 
                                    v-model="form.message"
                                    rows="6"
                                    class="w-full px-4 py-3 bg-gray-900-lighter border border-primary/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Cuéntame más sobre tu proyecto..."
                                    required
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit" 
                                class="w-full btn-primary py-3"
                                :disabled="loading"
                            >
                                <span v-if="loading">Enviando...</span>
                                <span v-else>Enviar Mensaje</span>
                            </button>
                        </form>
                    </div>

                    <!-- Contact Information -->
                    <div class="space-y-8">
                        <div class="card">
                            <h2 class="text-2xl font-bold text-white mb-6">Información de Contacto</h2>
                            
                            <div class="space-y-6">
                                <div class="flex items-center space-x-4">
                                    <div class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                                        <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Email</h3>
                                        <p class="text-gray-400">contacto@tuportfolio.com</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-center space-x-4">
                                    <div class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                                        <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Ubicación</h3>
                                        <p class="text-gray-400">Madrid, España</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-center space-x-4">
                                    <div class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                                        <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-semibold text-white">Teléfono</h3>
                                        <p class="text-gray-400">+34 600 000 000</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Social Links -->
                        <div class="card">
                            <h2 class="text-2xl font-bold text-white mb-6">Sígueme</h2>
                            
                            <div class="flex space-x-4">
                                <a href="#" class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors">
                                    <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                    </svg>
                                </a>
                                
                                <a href="#" class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors">
                                    <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                                
                                <a href="#" class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors">
                                    <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                                
                                <a href="#" class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors">
                                    <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <!-- Availability -->
                        <div class="card">
                            <h2 class="text-2xl font-bold text-white mb-6">Disponibilidad</h2>
                            <div class="space-y-4">
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-400">Estado actual:</span>
                                    <span class="text-primary font-semibold">Disponible para proyectos</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-400">Tiempo de respuesta:</span>
                                    <span class="text-white">24-48 horas</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-400">Zona horaria:</span>
                                    <span class="text-white">CET (UTC+1)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';

const loading = ref(false);
const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const submitForm = async () => {
    loading.value = true;
    
    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Aquí iría la lógica real de envío del formulario
    console.log('Formulario enviado:', form.value);
    
    // Resetear formulario
    form.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };
    
    loading.value = false;
    
    // Mostrar mensaje de éxito (aquí podrías usar una notificación)
    alert('¡Mensaje enviado con éxito!');
};
</script>
