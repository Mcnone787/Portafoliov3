<template>
    <Head title="Proyectos - Portfolio" />
    
    <div class="min-h-screen bg-gray-900">
        <nav class="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm border-b border-primary/20 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <h1 class="text-primary font-bold text-xl">Portfolio</h1>
                    </div>
                    
                    <div class="hidden sm:flex sm:items-center sm:space-x-8">
                        <a href="/" class="nav-link">Inicio</a>
                        <a href="/proyectos" class="nav-link active">Proyectos</a>
                        <a href="/sobre-mi" class="nav-link">Sobre mí</a>
                        <a href="/contacto" class="nav-link">Contacto</a>
                    </div>
                </div>
            </div>
        </nav>

        <section class="pt-16 py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-4xl sm:text-5xl font-bold text-white mb-6">
                    Mis <span class="text-primary">Proyectos</span>
                </h1>
                <p class="text-xl text-gray-400 max-w-2xl mx-auto">
                    Una colección de proyectos que demuestran mis habilidades y experiencia en desarrollo web
                </p>
            </div>
        </section>

        <section class="py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="card group">
                        <div class="relative overflow-hidden rounded-lg mb-4">
                            <div class="w-full h-48 bg-gray-900-lighter flex items-center justify-center">
                                <svg class="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold text-white mb-2">E-commerce Platform</h3>
                        <p class="text-gray-400 mb-4">Plataforma completa de comercio electrónico con sistema de pagos, gestión de inventario y panel de administración.</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">Laravel</span>
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">Vue.js</span>
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">MySQL</span>
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">Stripe</span>
                        </div>
                        <div class="flex gap-2">
                            <button class="btn-primary text-sm">Ver Demo</button>
                            <button class="btn-outline text-sm">Código</button>
                        </div>
                    </div>

                    <div class="card group">
                        <div class="relative overflow-hidden rounded-lg mb-4">
                            <div class="w-full h-48 bg-gray-900-lighter flex items-center justify-center">
                                <svg class="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold text-white mb-2">Task Management App</h3>
                        <p class="text-gray-400 mb-4">Aplicación de gestión de tareas con interfaz moderna, colaboración en tiempo real y análisis de productividad.</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">React</span>
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">Node.js</span>
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">MongoDB</span>
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">Socket.io</span>
                        </div>
                        <div class="flex gap-2">
                            <button class="btn-primary text-sm">Ver Demo</button>
                            <button class="btn-outline text-sm">Código</button>
                        </div>
                    </div>

                    <div class="card group">
                        <div class="relative overflow-hidden rounded-lg mb-4">
                            <div class="w-full h-48 bg-gray-900-lighter flex items-center justify-center">
                                <svg class="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold text-white mb-2">Blog Platform</h3>
                        <p class="text-gray-400 mb-4">Plataforma de blog con sistema de comentarios, gestión de usuarios y editor de contenido rico.</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">Laravel</span>
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">Alpine.js</span>
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">PostgreSQL</span>
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">Redis</span>
                        </div>
                        <div class="flex gap-2">
                            <button class="btn-primary text-sm">Ver Demo</button>
                            <button class="btn-outline text-sm">Código</button>
                        </div>
                    </div>

                    <div class="card group">
                        <div class="relative overflow-hidden rounded-lg mb-4">
                            <div class="w-full h-48 bg-gray-900-lighter flex items-center justify-center">
                                <svg class="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold text-white mb-2">Weather Dashboard</h3>
                        <p class="text-gray-400 mb-4">Dashboard meteorológico con datos en tiempo real, gráficos interactivos y pronósticos detallados.</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">Vue.js</span>
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">Chart.js</span>
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">OpenWeather API</span>
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">PWA</span>
                        </div>
                        <div class="flex gap-2">
                            <button class="btn-primary text-sm">Ver Demo</button>
                            <button class="btn-outline text-sm">Código</button>
                        </div>
                    </div>

                    <div class="card group">
                        <div class="relative overflow-hidden rounded-lg mb-4">
                            <div class="w-full h-48 bg-gray-900-lighter flex items-center justify-center">
                                <svg class="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold text-white mb-2">Portfolio Website</h3>
                        <p class="text-gray-400 mb-4">Sitio web de portafolio personal con diseño moderno, animaciones suaves y optimización SEO.</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">Laravel</span>
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">Vue.js</span>
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">TailwindCSS</span>
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">Inertia.js</span>
                        </div>
                        <div class="flex gap-2">
                            <button class="btn-primary text-sm">Ver Demo</button>
                            <button class="btn-outline text-sm">Código</button>
                        </div>
                    </div>

                    <div class="card group">
                        <div class="relative overflow-hidden rounded-lg mb-4">
                            <div class="w-full h-48 bg-gray-900-lighter flex items-center justify-center">
                                <svg class="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                        </div>
                        <h3 class="text-xl font-semibold text-white mb-2">API REST Service</h3>
                        <p class="text-gray-400 mb-4">Servicio API RESTful con autenticación JWT, documentación automática y testing completo.</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">Laravel</span>
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">JWT</span>
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">Swagger</span>
                            <span class="bg-primary/40 text-cyan-100 px-2 py-1 rounded text-sm">PHPUnit</span>
                        </div>
                        <div class="flex gap-2">
                            <button class="btn-primary text-sm">Ver Demo</button>
                            <button class="btn-outline text-sm">Código</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
</script>
