'use client'

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Frame() {
    const [currentPage, setCurrentPage] = useState(0);

    const labels = [
        ['Label', 'Label', 'Label', 'Label'],
        ['Label', 'Label', 'Label', 'Label'],
        ['Label', 'Label', 'Label', 'Label'],
    ];

    const handleNext = () => {
        if (currentPage < 2) setCurrentPage(currentPage + 1);
    }

    const handlePrevious = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    }

    return (
        <section className="flex justify-center items-center mt-8">
            <div
                className="w-[600px] h-[720px] mb-[152px] mt-[152px] rounded border border-gray-300 bg-neutral-100"
                style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}
            >
                <div className="flex">
                    <div className="flex justify-start text-black mt-3 ml-4" onClick={handlePrevious} style={{ cursor: currentPage === 0 ? 'not-allowed' : 'pointer' }}>
                        <Image
                            src="/chevron-left.svg"
                            alt="chevron-left"
                            width={46}
                            height={46}
                        />
                    </div>
                    <h1 className="text-black mt-4 ml-[12rem] justify-center">HEADER</h1>
                    <h1 className="text-black mt-4 ml-[12rem] justify-end">{currentPage + 1}/3</h1>
                </div>

                <div className="flex flex-col items-center justify-center mt-[64px]">
                    {labels[currentPage].map((label, index) => (
                        <label key={index} className="text-black w-[328px] h-[90px] mt-[24px]">
                            {label}:
                            <input type="text" className="mt-2 w-full h-[48px] border border-black rounded px-[4px]" />
                        </label>
                    ))}
                </div>

                <button onClick={handleNext}
                    disabled={currentPage === 2}
                    className="bg-black hover:bg-black text-white w-[568px] h-[48px] ml-[12px] mt-[80px] px-4 py-2 rounded p-4">
                    Next Step
                </button>
            </div>
        </section>
    );
}
