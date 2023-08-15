"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import axios from 'axios';


type FormDataType = {
    name: string;
    surname: string;
    dateOfBirth: string;
    email: string;
    phone: string;
    address: Record<string, any>;  // Detaylarına göre güncelleyebilirsiniz.
    education: string[];
    languages: string[];
    skills: string[];
    experience: Record<string, any>[];  // Detaylarına göre güncelleyebilirsiniz.
    profilePicture: string;
    appliedJobs: Record<string, any>[];  // Detaylarına göre güncelleyebilirsiniz.
};

type FormKeys = keyof FormDataType;

export default function SignupForm() {
    const [currentPage, setCurrentPage] = useState(0);
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        dateOfBirth: '',
        email: '',
        phone: '',
        address: {},
        education: [],
        languages: [],
        skills: [],
        experience: [],
        profilePicture: '',
        appliedJobs: []
    });
    

    const handleInputChange = (key: FormKeys, value: any) => {
        setFormData(prevState => ({ ...prevState, [key]: value }));
    };
    
    const handleNext = async () => {
        if (currentPage < 2) {
            setCurrentPage(currentPage + 1);
        } else {
            try {
                const response = await axios.post('https://645e4f8b12e0a87ac0ed1b2d.mockapi.io/users', formData);
                if (response.status === 201) {
                    router.push('/pages/joblist');  // Başarılı bir kayıttan sonra yönlendirme yapılabilir.
                } else {
                    alert('Signup failed.');
                }
            } catch (error) {
                console.error('Signup error:', error);
                alert('An error occurred during signup.');
            }
        }
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
                            priority={true}
                        />
                    </div>
                    <h1 className="text-black mt-4 ml-[12rem] justify-center">HEADER</h1>
                    <h1 className="text-black mt-4 ml-[12rem] justify-end">{currentPage + 1}/3</h1>
                </div>

                <div className="flex flex-col items-center justify-center mt-[64px]">
                    {Object.keys(formData).slice(currentPage * 4, (currentPage + 1) * 4).map((key, index) => (
                        <label key={index} className="text-black w-[328px] h-[90px] mt-[24px]">
                            {key}:
                            <input 
                                type="text" 
                                value={formData[key as FormKeys] || ''} 
                                onChange={e => handleInputChange(key as FormKeys, e.target.value)}
                                className="mt-2 w-full h-[48px] border border-black rounded px-[4px]" 
                            />
                        </label>
                    ))}
                </div>

                <button 
                    onClick={handleNext}
                    className="bg-black hover:bg-black text-white w-[568px] h-[48px] ml-[12px] mt-[80px] px-4 py-2 rounded p-4"
                >
                    {currentPage === 2 ? 'Sign Up' : 'Next Step'}
                </button>
            </div>
        </section>
    );
}
