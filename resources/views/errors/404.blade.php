<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>404 - Página no encontrada | {{ config('app.name') }}</title>
    <link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}?v=2">
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600,700&display=swap" rel="stylesheet">
    <style>
        * { box-sizing: border-box; }
        body {
            margin: 0;
            min-height: 100vh;
            font-family: 'Figtree', system-ui, sans-serif;
            background: #1a1a1a;
            color: #e5e7eb;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
            text-align: center;
        }
        .container { max-width: 28rem; }
        .code {
            font-size: 6rem;
            font-weight: 700;
            line-height: 1;
            color: rgb(14 136 168);
            margin-bottom: 0.5rem;
        }
        h1 {
            font-size: 1.5rem;
            font-weight: 600;
            margin: 0 0 0.5rem;
            color: #fff;
        }
        p {
            color: #9ca3af;
            margin: 0 0 1.5rem;
            line-height: 1.5;
        }
        a {
            display: inline-block;
            background: rgb(14 136 168);
            color: #fff;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            text-decoration: none;
            font-weight: 500;
            transition: opacity 0.2s;
        }
        a:hover { opacity: 0.9; }
    </style>
</head>
<body>
    <div class="container">
        <div class="code">404</div>
        <h1>Página no encontrada</h1>
        <p>El enlace que has seguido no existe o ha sido movido.</p>
        <a href="{{ url('/') }}">Volver al inicio</a>
    </div>
</body>
</html>
