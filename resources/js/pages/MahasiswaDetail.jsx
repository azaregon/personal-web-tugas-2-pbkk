import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Link } from '@inertiajs/react';
import mahasiswaData from '../data/mahasiswa.json';

export default function MahasiswaDetail({ nrp, name, status, departemen }) {
    const match = mahasiswaData.find((student) => student.nrp === nrp) ?? {
        nrp,
        name,
        status,
        departemen,
    };

    return (
        <MainLayout title="Detail Mahasiswa">
            <div className="max-w-md mx-auto">
                <div className="rounded-[28px] overflow-hidden bg-white border border-[#E4E8F0] shadow-[0_10px_30px_rgba(16,27,61,0.08)]">
                    <div className="relative bg-gradient-to-br from-[#101B3D] to-[#1B2B57] px-8 py-8 overflow-hidden">
                        <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[#1B8F82]/20 blur-2xl" />
                        <div className="relative flex items-center gap-4">
                            <div className="w-16 h-16 shrink-0 rounded-full border-2 border-[#D9A441] flex items-center justify-center font-['Fraunces'] text-lg font-semibold text-[#D9A441]">
                                TI
                            </div>
                            <div>
                                <p className="text-[11px] text-[#8C9AC2] font-['IBM_Plex_Mono']">Kartu Mahasiswa</p>
                                <h2 className="font-['Fraunces'] text-2xl font-semibold text-white leading-tight">
                                    {match.departemen || departemen || 'Teknik Informatika'}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="px-8 py-7">
                        <div className="flex items-start justify-between gap-4 mb-6">
                            <div>
                                <p className="text-xs text-[#6B7488] mb-1">Nama Mahasiswa</p>
                                <p className="font-['Fraunces'] text-2xl font-semibold text-[#101B3D]">
                                    {match.name || name || 'Mahasiswa ITS'}
                                </p>
                                <p className="text-xs text-[#6B7488] mt-3 mb-1">Nomor Registrasi Pokok</p>
                                <p className="font-['IBM_Plex_Mono'] text-3xl font-medium tracking-wide text-[#101B3D]">
                                    {match.nrp || nrp}
                                </p>
                            </div>
                            <span className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#1B8F82]/10 text-[#157567] border border-[#1B8F82]/20 whitespace-nowrap">
                                {match.status || status}
                            </span>
                        </div>

                        <div className="flex justify-between items-center border-t border-[#E4E8F0] pt-4">
                            <span className="text-xs text-[#6B7488]">Institut Teknologi Sepuluh Nopember</span>
                            <Link
                                href={route('home')}
                                className="text-xs font-semibold text-[#101B3D] hover:text-[#1B8F82] transition-colors"
                            >
                                &larr; Kembali
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
