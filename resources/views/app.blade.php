<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="description" content="Portafolio de Adrià Moya Duran, desarrollador web full-stack en Girona. Laravel, Vue.js, proyectos y contacto. Más de 5 años creando aplicaciones web modernas.">
        <meta name="robots" content="index, follow">
        <meta name="author" content="Adrià Moya Duran">
        <meta name="referrer" content="strict-origin-when-cross-origin">
        <meta name="theme-color" content="#0f172a">
        <link rel="canonical" href="{{ url()->current() }}">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:title" content="Adrià Moya — Portafolio">
        <meta property="og:description" content="Portafolio de Adrià Moya Duran. Desarrollador web full-stack con Laravel, Vue.js y tecnologías modernas. Proyectos y contacto en Girona.">
        <meta property="og:site_name" content="Adrià Moya — Portafolio">
        <meta property="og:locale" content="es_ES">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Adrià Moya — Portafolio">
        <meta name="twitter:description" content="Portafolio de Adrià Moya Duran. Desarrollador web full-stack con Laravel, Vue.js. Proyectos y contacto.">

        <link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}?v=2">
        <link rel="alternate icon" type="image/x-icon" href="{{ asset('favicon.ico') }}">

        <script type="application/ld+json">
        {
            "@@context": "https://schema.org",
            "@@graph": [
                {
                    "@@type": "Person",
                    "name": "Adrià Moya Duran",
                    "url": "{{ config('app.url') }}",
                    "jobTitle": "Desarrollador web full-stack",
                    "description": "Desarrollador web full-stack. Laravel, Vue.js y tecnologías modernas.",
                    "image": "{{ config('app.url') }}/images/profile.jpg",
                    "address": { "@@type": "PostalAddress", "addressLocality": "Figueres", "addressRegion": "Girona" }
                },
                {
                    "@@type": "WebSite",
                    "name": "Adrià Moya — Portafolio",
                    "url": "{{ config('app.url') }}",
                    "description": "Portafolio de Adrià Moya Duran — Desarrollador web full-stack. Laravel, Vue.js, proyectos y contacto.",
                    "author": { "@@type": "Person", "name": "Adrià Moya Duran" },
                    "inLanguage": "es-ES"
                }
            ]
        }
        </script>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net" crossorigin>
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        <a href="#main-content" class="skip-link">Saltar al contenido principal</a>
        <main id="main-content" role="main">
            @inertia
        </main>

        @php
            $recaptchaEnabled = config('googlerecaptchav3.is_service_enabled') && config('googlerecaptchav3.site_key')
                && class_exists(\TimeHunter\LaravelGoogleReCaptchaV3\Facades\GoogleReCaptchaV3::class);
        @endphp
        @if($recaptchaEnabled)
        <script>window.__RECAPTCHA_SITE_KEY = @json(config('googlerecaptchav3.site_key'));</script>
        {!! \TimeHunter\LaravelGoogleReCaptchaV3\Facades\GoogleReCaptchaV3::init() !!}
        <style>
        .grecaptcha-badge{
            bottom:7% !important;
        }
        </style>
        @endif
    </body>
</html>
