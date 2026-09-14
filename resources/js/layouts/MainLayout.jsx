import React from 'react';
import { Link } from '@inertiajs/react';

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
            {/* Header / Navbar */}
            <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <span className="bg-blue-600 text-xs font-bold px-2.5 py-1 rounded tracking-wider uppercase">ITS</span>
                        <h1 className="font-bold text-lg tracking-wide">Portal Akademis & Sandbox Routing</h1>
                    </div>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link href={route('home')} className="hover:text-blue-200 transition">Home</Link>
                        <Link href={route('dashboard.home')} className="hover:text-blue-200 transition">Dashboard</Link>
                        <Link href={route('mahasiswa.detail', { nrp: '5025201000' })} className="hover:text-blue-200 transition">Profil Mahasiswa</Link>
                        <Link href={route('agent.idea')} className="hover:text-blue-200 transition">Agentic AI</Link>
                        <Link href={route('kalkulator.ipk', { ip1: 3.75, ip2: 3.85 })} className="hover:text-blue-200 transition">Kalkulator IPK</Link>
                    </nav>
                </div>
            </header>

            {/* Content Container */}
            <main className="flex-1 max-w-6xl w-full mx-auto p-6">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-slate-200 py-4 text-center text-sm text-slate-500">
                <p>Departemen Teknik Informatika ITS &copy; 2026 — Pemrograman Berbasis Kerangka Kerja</p>
            </footer>
        </div>
    );
}