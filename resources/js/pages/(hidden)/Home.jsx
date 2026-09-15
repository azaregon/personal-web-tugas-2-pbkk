import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Link } from '@inertiajs/react';

export default function Home() {
    return (
        <MainLayout>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 max-w-3xl mx-auto mt-6">
                <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    PBKK Pertemuan 2
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
                    Selamat Datang di Portal Profile Akademis 🟦
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                    Aplikasi ini merupakan sandbox untuk menguji arsitektur routing Laravel yang dipadukan dengan komponen UI modern React.
                </p>

                <div className="border-t border-slate-100 pt-6">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Pintas Navigasi Uji Rute</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link 
                            href={route('mahasiswa.detail', { nrp: '5025201000' })}
                            className="p-4 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-md transition bg-slate-50 hover:bg-white"
                        >
                            <span className="font-semibold text-blue-900 block">Profil Mahasiswa &rarr;</span>
                            <span className="text-xs text-slate-500">Uji validasi Regex (10 Digit NRP)</span>
                        </Link>
                        <Link 
                            href={route('agent.idea')}
                            className="p-4 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-md transition bg-slate-50 hover:bg-white"
                        >
                            <span className="font-semibold text-blue-900 block">Ide Platform Agentic AI &rarr;</span>
                            <span className="text-xs text-slate-500">Uji parameter opsional & fallback</span>
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}