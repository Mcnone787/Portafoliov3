<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use TimeHunter\LaravelGoogleReCaptchaV3\Facades\GoogleReCaptchaV3;

class PortfolioController extends Controller
{
    public function home()
    {
        return Inertia::render('Home');
    }

    public function sendMessage(Request $request)
    {
        $recaptchaToken = $request->input('g-recaptcha-response') ?: $request->input('recaptcha_token');

        $request->merge(['g-recaptcha-response' => $recaptchaToken]);

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:1000',
            'g-recaptcha-response' => 'required|string',
        ], [
            'name.required' => 'El nombre es obligatorio.',
            'email.required' => 'El email es obligatorio.',
            'email.email' => 'Introduce un email válido.',
            'subject.required' => 'El asunto es obligatorio.',
            'message.required' => 'El mensaje es obligatorio.',
            'g-recaptcha-response.required' => 'Debes completar la verificación de reCAPTCHA. Recarga la página e inténtalo de nuevo.',
        ]);

        $verified = GoogleReCaptchaV3::setAction('contact')
            ->verifyResponse($recaptchaToken, $request->getClientIp());

        if (! $verified->isSuccess()) {
            return response()->json([
                'message' => $verified->getMessage() ?: 'La verificación reCAPTCHA ha fallado. Comprueba que las claves (site key y secret key) sean correctas y que el dominio esté autorizado en Google reCAPTCHA.',
                'errors' => ['g-recaptcha-response' => [$verified->getMessage() ?: 'Verificación reCAPTCHA no válida.']],
            ], 422);
        }

        return response()->json([
            'message' => 'Mensaje enviado con éxito',
        ]);
    }
}
