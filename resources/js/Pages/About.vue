<template>
    <Head title="Sobre mí - Portfolio" />
    
    <div class="min-h-screen bg-gray-900">
        <nav class="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm border-b border-primary/20 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <h1 class="text-primary font-bold text-xl">Portfolio</h1>
                    </div>
                    
                    <div class="hidden sm:flex sm:items-center sm:space-x-8">
                        <a href="/" class="nav-link">Inicio</a>
                        <a href="/proyectos" class="nav-link">Proyectos</a>
                        <a href="/sobre-mi" class="nav-link active">Sobre mí</a>
                        <a href="/contacto" class="nav-link">Contacto</a>
                    </div>
                </div>
            </div>
        </nav>

        <section class="pt-16 py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-4xl sm:text-5xl font-bold text-white mb-6">
                    Sobre <span class="text-primary">Mí</span>
                </h1>
                <p class="text-xl text-gray-400 max-w-2xl mx-auto">
                    Conoce más sobre mi experiencia, habilidades y pasión por el desarrollo web
                </p>
            </div>
        </section>

        <section class="py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="text-center lg:text-left">
                        <div class="w-64 h-64 mx-auto lg:mx-0 bg-gray-900-lighter rounded-full flex items-center justify-center mb-8">
                            <svg class="w-32 h-32 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                        <h2 class="text-2xl font-bold text-white mb-4">Desarrollador Full-Stack</h2>
                        <p class="text-gray-400 mb-6">
                            Apasionado por crear soluciones web innovadoras y experiencias de usuario excepcionales.
                        </p>
                        <div class="flex justify-center lg:justify-start gap-4">
                            <button class="btn-primary">Descargar CV</button>
                            <button class="btn-outline">Contactar</button>
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

        <section class="py-20 bg-gray-900-light">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center mb-12">Habilidades Técnicas</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-4">Frontend</h3>
                        <div class="space-y-3">
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400">Vue.js</span>
                                <div class="w-24 bg-gray-900-lighter rounded-full h-2">
                                    <div class="bg-primary h-2 rounded-full" style="width: 90%"></div>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400">React</span>
                                <div class="w-24 bg-gray-900-lighter rounded-full h-2">
                                    <div class="bg-primary h-2 rounded-full" style="width: 85%"></div>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400">TailwindCSS</span>
                                <div class="w-24 bg-gray-900-lighter rounded-full h-2">
                                    <div class="bg-primary h-2 rounded-full" style="width: 95%"></div>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400">JavaScript</span>
                                <div class="w-24 bg-gray-900-lighter rounded-full h-2">
                                    <div class="bg-primary h-2 rounded-full" style="width: 88%"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-4">Backend</h3>
                        <div class="space-y-3">
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400">Laravel</span>
                                <div class="w-24 bg-gray-900-lighter rounded-full h-2">
                                    <div class="bg-primary h-2 rounded-full" style="width: 92%"></div>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400">PHP</span>
                                <div class="w-24 bg-gray-900-lighter rounded-full h-2">
                                    <div class="bg-primary h-2 rounded-full" style="width: 90%"></div>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400">Node.js</span>
                                <div class="w-24 bg-gray-900-lighter rounded-full h-2">
                                    <div class="bg-primary h-2 rounded-full" style="width: 80%"></div>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400">MySQL</span>
                                <div class="w-24 bg-gray-900-lighter rounded-full h-2">
                                    <div class="bg-primary h-2 rounded-full" style="width: 85%"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <h3 class="text-xl font-semibold text-white mb-4">Herramientas</h3>
                        <div class="space-y-3">
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400">Git</span>
                                <div class="w-24 bg-gray-900-lighter rounded-full h-2">
                                    <div class="bg-primary h-2 rounded-full" style="width: 88%"></div>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400">Docker</span>
                                <div class="w-24 bg-gray-900-lighter rounded-full h-2">
                                    <div class="bg-primary h-2 rounded-full" style="width: 75%"></div>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400">AWS</span>
                                <div class="w-24 bg-gray-900-lighter rounded-full h-2">
                                    <div class="bg-primary h-2 rounded-full" style="width: 70%"></div>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-gray-400">Linux</span>
                                <div class="w-24 bg-gray-900-lighter rounded-full h-2">
                                    <div class="bg-primary h-2 rounded-full" style="width: 82%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-center mb-12">Experiencia Profesional</h2>
                
                <div class="space-y-8">
                    <div class="card">
                        <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                                <h3 class="text-xl font-semibold text-white mb-2">Desarrollador Full-Stack Senior</h3>
                                <p class="text-primary mb-2">TechCorp Solutions</p>
                                <p class="text-gray-400">2022 - Presente</p>
                            </div>
                            <div class="mt-4 md:mt-0">
                                <p class="text-gray-400">
                                    Liderando el desarrollo de aplicaciones web complejas, mentoría de desarrolladores junior 
                                    y arquitectura de soluciones escalables.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                                <h3 class="text-xl font-semibold text-white mb-2">Desarrollador Backend</h3>
                                <p class="text-primary mb-2">Digital Innovations</p>
                                <p class="text-gray-400">2020 - 2022</p>
                            </div>
                            <div class="mt-4 md:mt-0">
                                <p class="text-gray-400">
                                    Desarrollo de APIs RESTful, integración de servicios de terceros y optimización 
                                    de bases de datos para aplicaciones de alto tráfico.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                                <h3 class="text-xl font-semibold text-white mb-2">Desarrollador Frontend</h3>
                                <p class="text-primary mb-2">WebStudio Pro</p>
                                <p class="text-gray-400">2019 - 2020</p>
                            </div>
                            <div class="mt-4 md:mt-0">
                                <p class="text-gray-400">
                                    Creación de interfaces de usuario modernas y responsivas, implementación de 
                                    animaciones y optimización de rendimiento frontend.
                                </p>
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
</script>
