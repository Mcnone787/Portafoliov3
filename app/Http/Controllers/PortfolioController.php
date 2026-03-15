<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function home()
    {
        return Inertia::render('Home');
    }

    public function sendMessage(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:1000',
            'recaptcha_token' => 'required|string',
        ]);

        $secret = config('services.recaptcha.secret');
        if ($secret) {
            $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
                'secret' => $secret,
                'response' => $request->recaptcha_token,
            ]);

            $body = $response->json();
            if (! ($body['success'] ?? false)) {
                return response()->json([
                    'message' => 'Error de verificación. Inténtalo de nuevo.',
                ], 422);
            }

            $score = $body['score'] ?? 0;
            $threshold = (float) config('services.recaptcha.score_threshold', 0.5);
            if (isset($body['score']) && $score < $threshold) {
                return response()->json([
                    'message' => 'No hemos podido verificar que no eres un robot. Inténtalo de nuevo.',
                ], 422);
            }
        }

        return response()->json([
            'message' => 'Mensaje enviado con éxito',
        ]);
    }
}
