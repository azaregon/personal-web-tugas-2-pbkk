import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import agentIdeaData from '../data/agent-idea.json';

export default function AgentIdea({ tema, title, description, subtitle, records = [] }) {
    const content = agentIdeaData;
    const resolvedTheme = tema || content.theme;
    const resolvedTitle = title || content.title;
    const resolvedDescription = description || content.description;
    const resolvedSubtitle = subtitle || content.subtitle;
    const resolvedRecords = records.length ? records : (content.records ?? []);

    return (
        <MainLayout title="Ide Proyek">
            <div className="max-w-3xl mx-auto space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-[#D9A441]/10 text-[#B9862A] flex items-center justify-center text-xl">
                        🤖
                    </div>
                    <div>
                        <p className="text-xs text-[#6B7488]">{resolvedSubtitle}</p>
                        <h2 className="font-['Fraunces'] text-3xl font-semibold text-[#101B3D] leading-tight">
                            {resolvedTitle}
                        </h2>
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-[#E4E8F0] shadow-[0_10px_30px_rgba(16,27,61,0.06)] p-7">
                    <p className="text-xs text-[#6B7488] mb-2">Tema terpilih</p>
                    <p className="font-['Fraunces'] text-xl text-[#101B3D] mb-5">{resolvedTheme}</p>
                    <div className="w-10 h-1 bg-[#1B8F82] rounded-full mb-5" />
                    <p className="text-[15px] leading-relaxed text-[#3A4560]">
                        {resolvedDescription}
                    </p>

                    {resolvedRecords.length > 0 ? (
                        <div className="mt-8 border-t border-[#E4E8F0] pt-6">
                            <p className="text-xs text-[#6B7488] mb-4">Records Agentic AI</p>
                            {resolvedRecords.map((record, index) => (
                                <div key={index} className="rounded-2xl border border-[#E4E8F0] bg-[#F8F9FC] p-5">
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <p className="font-['Fraunces'] text-lg font-semibold text-[#101B3D]">
                                                {record.name ?? 'Agent'}
                                            </p>
                                            <p className="text-xs text-[#6B7488] mt-1">
                                                {record.role ?? 'Agent Assistant'}
                                            </p>
                                        </div>
                                        <span className="rounded-full bg-[#D9A441]/10 px-3 py-1 text-[11px] font-semibold text-[#B9862A]">
                                            {record.status ?? 'ready'}
                                        </span>
                                    </div>
                                    <p className="text-[15px] leading-relaxed text-[#3A4560] mt-4">
                                        {record.objective}
                                    </p>
                                    {record.workflow?.length ? (
                                        <ul className="mt-4 space-y-2 text-[14px] text-[#3A4560]">
                                            {record.workflow.map((step, stepIndex) => (
                                                <li key={stepIndex} className="flex items-start gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-[#1B8F82] mt-2" />
                                                    <span>{step}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
            </div>
        </MainLayout>
    );
}
