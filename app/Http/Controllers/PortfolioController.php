<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
        ]);

        // Aquí puedes agregar la lógica para enviar el email
        // Por ejemplo, usando Laravel Mail
        
        return response()->json([
            'message' => 'Mensaje enviado con éxito'
        ]);
    }
}
