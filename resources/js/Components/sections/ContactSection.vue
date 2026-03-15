<template>
    <section id="contacto" class="py-20 bg-gray-850 relative overflow-hidden">
        <ParticlesBackground 
            container-id="contacto"
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
            <h2 class="text-3xl font-bold text-center mb-12">Contacto</h2>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div class="card">
                    <h3 class="text-2xl font-bold text-white mb-6">Envíame un mensaje</h3>
                    
                    <form @submit.prevent="submitForm" class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    v-model="form.name"
                                    class="w-full px-4 py-3 bg-gray-750 border border-primary/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
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
                                    class="w-full px-4 py-3 bg-gray-750 border border-primary/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
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
                                class="w-full px-4 py-3 bg-gray-750 border border-primary/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
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
                                class="w-full px-4 py-3 bg-gray-750 border border-primary/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors resize-none"
                                placeholder="Cuéntame más sobre tu proyecto..."
                                required
                            ></textarea>
                        </div>

                        <p v-if="errorMessage" class="text-red-400 text-sm">{{ errorMessage }}</p>
                        <div
                            v-if="successMessage"
                            role="alert"
                            class="flex items-center gap-3 p-4 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-sm"
                        >
                            <span class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                </svg>
                            </span>
                            <span>{{ successMessage }}</span>
                        </div>

                        <button 
                            type="submit" 
                            class="w-full btn-primary py-3"
                            :disabled="loading"
                        >
                            <span v-if="loading">Enviando...</span>
                            <span v-else>Enviar Mensaje</span>
                        </button>

                        <div class="mt-3 flex flex-col gap-2">
                            <p class="text-gray-400 text-xs inline-flex items-center gap-1.5">
                                <span class="inline-flex items-center justify-center w-5 h-5 rounded bg-white/10">
                                    <svg class="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                    </svg>
                                </span>
                                <strong class="text-gray-300">Protegido por reCAPTCHA</strong>
                            </p>
                            <p class="text-gray-500 text-xs flex flex-wrap items-center gap-x-1 gap-y-1">
                                <span>Se aplican la</span>
                                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Política de privacidad</a>
                                <span>y los</span>
                                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Términos de servicio</a>
                                <span>de Google.</span>
                            </p>
                        </div>
                    </form>
                </div>
                
                <div class="space-y-8">
                    <div class="card">
                        <h3 class="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                        
                        <div class="space-y-6">
                            <div class="flex items-center space-x-4">
                                <div class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="text-lg font-semibold text-white">Email</h4>

                                    <a href="mailto:adriamoyaduran787@gmail.com"><p class="text-gray-400">adriamoyaduran787@gmail.com</p></a>
                                </div>
                            </div>
                            
                            <div class="flex items-center space-x-4">
                                <div class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="text-lg font-semibold text-white">Ubicación</h4>
                                    <p class="text-gray-400">Figueres, Girona</p>
                                </div>
                            </div>
                            
                            <div class="flex items-center space-x-4">
                                <div class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="text-lg font-semibold text-white">Teléfono</h4>
                                    <a href="tel:+34620123638"><p class="text-gray-400">  +34 620 12 36 38</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <h3 class="text-2xl font-bold text-white mb-6">Sígueme</h3>
                        
                        <div class="flex space-x-4">
                            <a href="#" class="w-12 h-12 min-w-[44px] min-h-[44px] bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors" aria-label="Twitter (enlace externo)">
                                <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            
                            <a href="#" class="w-12 h-12 min-w-[44px] min-h-[44px] bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors" aria-label="LinkedIn (enlace externo)">
                                <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            
                            <a href="#" class="w-12 h-12 min-w-[44px] min-h-[44px] bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors" aria-label="GitHub (enlace externo)">
                                <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import ParticlesBackground from '@/Components/ParticlesBackground.vue';

function getSiteKey() {
    if (typeof window === 'undefined') return '';
    return window.__RECAPTCHA_SITE_KEY || import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';
}

const loading = ref(false);
const errorMessage = ref('');
const successMessage = ref('');
const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
});

function getRecaptchaToken() {
    return new Promise((resolve, reject) => {
        const siteKey = getSiteKey();
        if (!siteKey) {
            reject(new Error('reCAPTCHA no está configurado. Recarga la página.'));
            return;
        }
        if (!window.grecaptcha) {
            reject(new Error('reCAPTCHA aún no ha cargado. Espera un momento y vuelve a intentarlo.'));
            return;
        }
        window.grecaptcha.ready(() => {
            window.grecaptcha.execute(siteKey, { action: 'contact' })
                .then((token) => {
                    if (!token || typeof token !== 'string' || token.length < 10) {
                        reject(new Error('No se pudo obtener la verificación. Recarga la página e inténtalo de nuevo.'));
                    } else {
                        resolve(token);
                    }
                })
                .catch(reject);
        });
    });
}

const submitForm = async () => {
    errorMessage.value = '';
    successMessage.value = '';
    loading.value = true;

    try {
        const token = await getRecaptchaToken();
        if (!token) {
            errorMessage.value = 'No se pudo completar la verificación de reCAPTCHA. Recarga la página e inténtalo de nuevo.';
            loading.value = false;
            return;
        }
        const { data } = await window.axios.post(route('contact.send'), {
            name: form.value.name,
            email: form.value.email,
            subject: form.value.subject,
            message: form.value.message,
            'g-recaptcha-response': token,
        }, {
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        });

        form.value = { name: '', email: '', subject: '', message: '' };
        successMessage.value = data.message || '¡Mensaje enviado con éxito!';
        setTimeout(() => { successMessage.value = ''; }, 6000);
    } catch (err) {
        const data = err.response?.data;
        let msg = 'Error al enviar. Inténtalo de nuevo.';
        if (err.message && !err.response) {
            msg = err.message;
        } else if (data?.message) {
            msg = data.message;
        }
        if (data?.errors && typeof data.errors === 'object') {
            const firstError = Object.values(data.errors).flat().find(Boolean);
            if (firstError) msg = firstError;
        }
        errorMessage.value = msg;
    } finally {
        loading.value = false;
    }
};

</script>
