import React from 'react';
import MainLayout from '@/Layouts/MainLayout';

export default function AgentIdea({ tema }) {
    return (
        <MainLayout>
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-8 mt-6">
                <div className="flex items-center space-x-2 text-indigo-600 mb-2">
                    <span className="text-xl">🤖</span>
                    <span className="text-xs font-bold tracking-wider uppercase">Proyeksi Ide Akhir Semester</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Platform Agentic AI</h2>
                
                <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-5 mb-6">
                    <span className="text-xs text-indigo-500 uppercase font-semibold tracking-wider block mb-1">Tema Terpilih</span>
                    <h3 className="text-xl font-bold text-indigo-900">{tema}</h3>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">
                    Sistem ini dirancang menggunakan agen cerdas otonom yang dapat melakukan eksekusi tugas multi-step untuk otomatisasi alur kerja riset dan manajemen berkas akademis.
                </p>
            </div>
        </MainLayout>
    );
}