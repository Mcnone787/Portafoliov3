<?php

return [
    'is_service_enabled' => true,
    // Vacío = no comprobar hostname (evita ERROR_HOSTNAME con Cloudflare/proxy). Opcional: RECAPTCHA_HOSTNAME=adriamd.com
    'host_name' => env('RECAPTCHA_HOSTNAME', ''),
    'secret_key' => env('RECAPTCHA_V3_SECRET_KEY', env('RECAPTCHA_SECRET_KEY', '')),
    'site_key' => env('RECAPTCHA_V3_SITE_KEY', env('VITE_RECAPTCHA_SITE_KEY', '')),

    'inline' => false,
    'background_badge_display' => true,
    'background_mode' => true,
    'is_score_enabled' => true,

    'setting' => [
        [
            'action' => 'contact',
            'threshold' => 0.5,
            'score_comparison' => true,
        ],
    ],

    'skip_ips' => [],
    'options' => [],
    'api_js_url' => 'https://www.google.com/recaptcha/api.js',
    'site_verify_url' => 'https://www.google.com/recaptcha/api/siteverify',
    'language' => 'es',
];
