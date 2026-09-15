import React from 'react';
import { Link } from '@inertiajs/react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-10 max-w-md text-center">
                <h1 className="text-6xl font-extrabold text-red-500 mb-2">404</h1>
                <h2 className="text-xl font-bold text-slate-800 mb-2">Halaman Tidak Ditemukan</h2>
                <p className="text-sm text-slate-500 mb-6">
                    URL yang Anda tuju tidak cocok dengan rute mana pun di dalam aplikasi.
                </p>
                <Link 
                    href={route('home')}
                    className="inline-block bg-blue-900 text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-800 transition"
                >
                    Kembali ke Home
                </Link>
            </div>
        </div>
    );
}