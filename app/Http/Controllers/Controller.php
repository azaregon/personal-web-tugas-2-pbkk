<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AkademikController extends Controller
{
    public function home(): Response
    {
        return Inertia::render('Home');
    }

    public function dashboard(): Response
    {
        return Inertia::render('Dashboard');
    }

    public function mahasiswaDetail(string $nrp): Response
    {
        return Inertia::render('MahasiswaDetail', [
            'nrp' => htmlspecialchars($nrp),
            'status' => 'NRP ITS Valid (10 Digit)'
        ]);
    }

    public function agentIdea(?string $tema = 'General Assistant Agent'): Response
    {
        return Inertia::render('AgentIdea', [
            'tema' => htmlspecialchars($tema)
        ]);
    }

    public function hitungIpk($ip1, $ip2): Response
    {
        $valIp1 = (float) $ip1;
        $valIp2 = (float) $ip2;

        $isValid = ($valIp1 >= 0 && $valIp1 <= 4.0 && $valIp2 >= 0 && $valIp2 <= 4.0);
        $total = $valIp1 + $valIp2;
        $rataRata = $isValid ? round($total / 2, 2) : 0;

        return Inertia::render('KalkulatorIpk', [
            'ip1' => $valIp1,
            'ip2' => $valIp2,
            'total' => $total,
            'rataRata' => $rataRata,
            'isValid' => $isValid
        ]);
    }

    public function fallback(): Response
    {
        return Inertia::render('NotFound');
    }
}