import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#101B3D] to-[#1B2B57] flex items-center justify-center p-6 font-['Inter'] relative overflow-hidden">
            <Head>
                <title>Halaman tidak ditemukan</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=Inter:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#1B8F82]/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#D9A441]/10 blur-3xl" />

            <div className="relative max-w-sm text-center">
                <span className="inline-block text-xs font-semibold tracking-wide text-[#D9A441] mb-3">
                    Kesalahan Rute
                </span>
                <h1 className="font-['Fraunces'] text-6xl font-semibold text-white mb-3">404</h1>
                <div className="w-12 h-1 bg-[#1B8F82] rounded-full mx-auto mb-5" />
                <p className="text-[#C7CEE0] text-sm leading-relaxed mb-8">
                    URL yang Anda tuju tidak cocok dengan rute mana pun di dalam aplikasi.
                </p>
                <Link
                    href={route('home')}
                    className="inline-block bg-white text-[#101B3D] text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#D9A441] hover:text-white transition-colors"
                >
                    Kembali ke Home
                </Link>
            </div>
        </div>
    );
}
