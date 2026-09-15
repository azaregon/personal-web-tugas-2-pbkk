import React, { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';

export default function KalkulatorIpk({ ip1 = '', ip2 = '', total = 0, rataRata = null, isValid = true }) {
    const [semester1, setSemester1] = useState(ip1 ?? '');
    const [semester2, setSemester2] = useState(ip2 ?? '');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        const valIp1 = Number.parseFloat(semester1);
        const valIp2 = Number.parseFloat(semester2);

        if (!Number.isFinite(valIp1) || !Number.isFinite(valIp2)) {
            setError('Masukkan nilai IPK pada kedua field semester.');
            setResult(null);
            return;
        }

        if (valIp1 < 0 || valIp1 > 4 || valIp2 < 0 || valIp2 > 4) {
            setError('Nilai IP harus berada pada rentang 0.00 hingga 4.00. Periksa kembali kedua input semester.');
            setResult(null);
            return;
        }

        const rataRata = roundToTwo((valIp1 + valIp2) / 2);
        setResult({
            ip1: valIp1,
            ip2: valIp2,
            rataRata,
        });
        setError('');
    }

    return (
        <MainLayout title="Kalkulator IPK">
            <div className="max-w-md mx-auto">
                <h2 className="font-['Fraunces'] text-2xl font-semibold text-[#101B3D] mb-6 text-center">
                    Kalkulator IPK Portofolio
                </h2>

                {error ? (
                    <div className="bg-[#FBEEEC] border border-[#E8B4AB] text-[#9A3E30] rounded-2xl px-6 py-5 text-sm leading-relaxed mb-4">
                        {error}
                    </div>
                ) : null}

                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#E4E8F0] shadow-[0_10px_30px_rgba(16,27,61,0.06)] p-6 space-y-4">
                    <div className="space-y-2">
                        <label className="block text-xs font-semibold text-[#6B7488] uppercase tracking-wide">
                            Semester 1
                        </label>
                        <input
                            type="number"
                            min="0"
                            max="4"
                            step="0.01"
                            value={semester1}
                            onChange={(event) => setSemester1(event.target.value)}
                            className="w-full rounded-xl border border-[#E4E8F0] px-4 py-3 text-[#101B3D] outline-none focus:border-[#1B8F82] focus:ring-2 focus:ring-[#1B8F82]/20"
                            placeholder="Masukkan IPK semester 1"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-xs font-semibold text-[#6B7488] uppercase tracking-wide">
                            Semester 2
                        </label>
                        <input
                            type="number"
                            min="0"
                            max="4"
                            step="0.01"
                            value={semester2}
                            onChange={(event) => setSemester2(event.target.value)}
                            className="w-full rounded-xl border border-[#E4E8F0] px-4 py-3 text-[#101B3D] outline-none focus:border-[#1B8F82] focus:ring-2 focus:ring-[#1B8F82]/20"
                            placeholder="Masukkan IPK semester 2"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-[#101B3D] text-white px-5 py-3 font-semibold transition hover:bg-[#1B2B57]"
                    >
                        Hitung Rata-rata
                    </button>
                </form>

                {result ? (
                    <div className="bg-white rounded-2xl border border-[#E4E8F0] shadow-[0_10px_30px_rgba(16,27,61,0.06)] overflow-hidden mt-5">
                        <div className="grid grid-cols-2">
                            <div className="px-6 py-6 text-center border-r border-b border-[#E4E8F0]">
                                <p className="text-xs text-[#6B7488] mb-1">Semester 1</p>
                                <p className="font-['IBM_Plex_Mono'] text-2xl text-[#101B3D]">{result.ip1}</p>
                            </div>
                            <div className="px-6 py-6 text-center border-b border-[#E4E8F0]">
                                <p className="text-xs text-[#6B7488] mb-1">Semester 2</p>
                                <p className="font-['IBM_Plex_Mono'] text-2xl text-[#101B3D]">{result.ip2}</p>
                            </div>
                        </div>
                        <div className="px-6 py-8 text-center bg-gradient-to-br from-[#101B3D] to-[#1B2B57]">
                            <p className="text-xs text-[#8C9AC2] mb-2">Rata-rata IPK</p>
                            <p className="font-['Fraunces'] text-5xl font-semibold text-[#D9A441]">{result.rataRata}</p>
                        </div>
                    </div>
                ) : null}
            </div>
        </MainLayout>
    );
}

function roundToTwo(value) {
    return Math.round((value + Number.EPSILON) * 100) / 100;
}
