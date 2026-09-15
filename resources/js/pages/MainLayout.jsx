import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function MainLayout({ children, title }) {
    return (
        <div className="min-h-screen bg-[#F3F5F9] text-[#101B3D] font-['Inter']">
            <Head>
                <title>{title ? `${title} - Portal Akademis` : 'Portal Akademis'}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="h-1 bg-gradient-to-r from-[#1B8F82] to-[#D9A441]" />

            <header className="bg-white border-b border-[#E4E8F0]">
                <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
                    <Link href={route('home')} className="flex items-baseline gap-2.5">
                        <span className="font-['Fraunces'] text-lg font-semibold tracking-tight">ITS</span>
                        <span className="text-xs text-[#6B7488]">Teknik Informatika, Portal Akademis</span>
                    </Link>
                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#D9A441]/10 text-[#B9862A] border border-[#D9A441]/30">
                        PBKK Pertemuan 2
                    </span>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-10">{children}</main>

            <footer className="border-t border-[#E4E8F0] mt-16">
                <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between text-xs text-[#6B7488]">
                    <span>Sandbox routing Laravel + Inertia + React</span>
                    <span className="font-['IBM_Plex_Mono']">Departemen Teknik Informatika ITS</span>
                </div>
            </footer>
        </div>
    );
}
