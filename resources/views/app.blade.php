<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Portafolio de Adrià Moya Duran — Desarrollador web full-stack. Laravel, Vue.js, proyectos y contacto.">
        <meta name="robots" content="index, follow">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ config('app.url') }}">
        <meta property="og:title" content="Adrià Moya — Portafolio">
        <meta property="og:description" content="Desarrollador web full-stack. Laravel, Vue.js y tecnologías modernas.">
        <meta property="og:locale" content="es_ES">

        <link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}?v=2">
        <link rel="alternate icon" type="image/x-icon" href="{{ asset('favicon.ico') }}">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
