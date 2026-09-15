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
        $dataPath = base_path('resources/js/data/mahasiswa.json');
        $students = json_decode(file_get_contents($dataPath), true) ?? [];
        $match = collect($students)->firstWhere('nrp', $nrp);

        if (! $match) {
            return Inertia::render('NotFound');
        }

        return Inertia::render('MahasiswaDetail', [
            'nrp' => htmlspecialchars($nrp),
            'name' => $match['name'] ?? 'Mahasiswa ITS',
            'status' => $match['status'] ?? 'NRP ITS Valid (10 Digit)',
            'departemen' => $match['departemen'] ?? 'Teknik Informatika ITS',
        ]);
    }

    public function agentIdea(?string $tema = 'General Assistant Agent'): Response
    {
        $dataPath = base_path('resources/js/data/agent-idea.json');
        $data = json_decode(file_get_contents($dataPath), true) ?? [];
        $theme = $tema && $tema !== 'General Assistant Agent'
            ? htmlspecialchars($tema)
            : ($data['theme'] ?? 'General Assistant Agent');

        return Inertia::render('AgentIdea', [
            'tema' => $theme,
            'title' => $data['title'] ?? 'Platform Agentic AI',
            'description' => $data['description'] ?? 'Sistem ini dirancang menggunakan agen cerdas otonom yang dapat melakukan eksekusi tugas multi-step untuk otomatisasi alur kerja riset dan manajemen berkas akademis.',
            'subtitle' => $data['subtitle'] ?? 'Proyeksi ide akhir semester',
            'records' => $data['records'] ?? [],
        ]);
    }

    public function hitungIpk(?string $ip1 = null, ?string $ip2 = null): Response
    {
        $valIp1 = $ip1 !== null ? (float) $ip1 : null;
        $valIp2 = $ip2 !== null ? (float) $ip2 : null;

        $hasBothInputs = $ip1 !== null && $ip2 !== null;
        $isValid = $hasBothInputs
            ? ($valIp1 >= 0 && $valIp1 <= 4.0 && $valIp2 >= 0 && $valIp2 <= 4.0)
            : true;
        $total = $hasBothInputs ? $valIp1 + $valIp2 : 0;
        $rataRata = $hasBothInputs && $isValid ? round($total / 2, 2) : null;

        return Inertia::render('KalkulatorIpk', [
            'ip1' => $valIp1 ?? '',
            'ip2' => $valIp2 ?? '',
            'total' => $total,
            'rataRata' => $rataRata,
            'isValid' => $isValid,
        ]);
    }

    public function fallback(): Response
    {
        return Inertia::render('NotFound');
    }
}