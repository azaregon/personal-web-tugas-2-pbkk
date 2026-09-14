import React from 'react';
import MainLayout from '@/Layouts/MainLayout';

export default function KalkulatorIpk({ ip1, ip2, total, rataRata, isValid }) {
    return (
        <MainLayout>
            <div className="max-w-xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-8 mt-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Kalkulator IPK Portofolio</h2>

                {!isValid ? (
                    <div className="bg-red-50 text-red-700 p-4 rounded-lg text-sm font-medium text-center">
                        Error: Nilai IP harus berada pada rentang 0.00 hingga 4.00!
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-100">
                                <span className="text-xs text-slate-500 block mb-1">IP Semester 1</span>
                                <span className="text-xl font-bold text-slate-800">{ip1}</span>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-100">
                                <span className="text-xs text-slate-500 block mb-1">IP Semester 2</span>
                                <span className="text-xl font-bold text-slate-800">{ip2}</span>
                            </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg text-center">
                            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">Rata-Rata IPK</span>
                            <span className="text-4xl font-extrabold text-blue-900">{rataRata}</span>
                        </div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
}