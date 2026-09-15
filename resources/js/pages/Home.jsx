import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Link } from '@inertiajs/react';

export default function Home() {
    return (
        <MainLayout title="Home">
            <div className="space-y-10">
                <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#101B3D] to-[#1B2B57] px-8 py-12 sm:px-10">
                    <div className="absolute -right-10 -top-10 w-52 h-52 rounded-full bg-[#1B8F82]/20 blur-3xl" />
                    <div className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full bg-[#D9A441]/10 blur-3xl" />

                    <div className="relative">
                        <span className="inline-block text-xs font-semibold tracking-wide text-[#D9A441] mb-3">
                            PBKK Pertemuan 2
                        </span>
                        <h1 className="font-['Fraunces'] text-4xl sm:text-5xl font-semibold text-white leading-tight max-w-lg mb-4">
                            Portal Profil Akademis
                        </h1>
                        <div className="w-12 h-1 bg-[#1B8F82] rounded-full mb-5" />
                        <p className="text-[#C7CEE0] max-w-md leading-relaxed">
                            Sandbox untuk menguji arsitektur routing Laravel yang dipadukan dengan komponen UI React.
                        </p>
                    </div>
                </div>

                <div>
                    <h2 className="text-sm font-semibold text-[#6B7488] mb-4">Pintas navigasi</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        <Link
                            href={route('mahasiswa.detail', { nrp: '5025241142' })}
                            className="group bg-white rounded-2xl border border-[#E4E8F0] p-6 shadow-[0_10px_30px_rgba(16,27,61,0.06)] hover:shadow-[0_16px_38px_rgba(16,27,61,0.12)] hover:-translate-y-0.5 transition-all duration-200"
                        >
                            <div className="w-11 h-11 rounded-xl bg-[#1B8F82]/10 text-[#157567] flex items-center justify-center font-['Fraunces'] font-semibold mb-4">
                                ID
                            </div>
                            <h3 className="font-['Fraunces'] text-lg text-[#101B3D] mb-1">Profil Mahasiswa</h3>
                            <p className="text-sm text-[#6B7488]">Validasi regex, 10 digit NRP</p>
                        </Link>

                        <Link
                            href={route('agent.idea')}
                            className="group bg-white rounded-2xl border border-[#E4E8F0] p-6 shadow-[0_10px_30px_rgba(16,27,61,0.06)] hover:shadow-[0_16px_38px_rgba(16,27,61,0.12)] hover:-translate-y-0.5 transition-all duration-200"
                        >
                            <div className="w-11 h-11 rounded-xl bg-[#D9A441]/10 text-[#B9862A] flex items-center justify-center font-['Fraunces'] font-semibold mb-4">
                                AI
                            </div>
                            <h3 className="font-['Fraunces'] text-lg text-[#101B3D] mb-1">Ide Platform Agentic AI</h3>
                            <p className="text-sm text-[#6B7488]">Parameter opsional dan fallback</p>
                        </Link>

                        <Link
                            href={route('kalkulator.ipk')}
                            className="group bg-white rounded-2xl border border-[#E4E8F0] p-6 shadow-[0_10px_30px_rgba(16,27,61,0.06)] hover:shadow-[0_16px_38px_rgba(16,27,61,0.12)] hover:-translate-y-0.5 transition-all duration-200"
                        >
                            <div className="w-11 h-11 rounded-xl bg-[#D9A441]/10 text-[#B9862A] flex items-center justify-center font-['Fraunces'] font-semibold mb-4">
                                IPK
                            </div>
                            <h3 className="font-['Fraunces'] text-lg text-[#101B3D] mb-1">Kalkulator IPK</h3>
                            <p className="text-sm text-[#6B7488]">Hitung rata-rata dua semester</p>
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
