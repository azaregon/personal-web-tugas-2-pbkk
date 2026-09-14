import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Link } from '@inertiajs/react';

export default function MahasiswaDetail({ nrp, status }) {
    return (
        <MainLayout>
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-8 mt-6">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-blue-100 text-blue-700 font-bold rounded-full flex items-center justify-center text-xl">
                        MHS
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Detail Mahasiswa</h2>
                        <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                            {status}
                        </span>
                    </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 space-y-3 mb-6">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="text-sm text-slate-500">NRP Mahasiswa</span>
                        <span className="font-mono font-bold text-slate-800">{nrp}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="text-sm text-slate-500">Departemen</span>
                        <span className="font-semibold text-slate-800">Teknik Informatika ITS</span>
                    </div>
                </div>

                <Link href={route('home')} className="text-sm font-semibold text-blue-600 hover:underline">
                    &larr; Kembali ke Home
                </Link>
            </div>
        </MainLayout>
    );
}