"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Navbar from '@/app/components/navbar';

type User = {
    email: string;
    password?: string;  // Şifre bilgisini de ekleyebilirsiniz, ama bu bilgi API'den gelmiyorsa eklemeyebilirsiniz.
    // Diğer özellikler burada tanımlanabilir, örneğin:
    // name: string;
    // age: number;
    // ...
};

export default function Login() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async () => {
        setError('');
        setLoading(true);

        try {
            const response = await axios.get('https://645e4f8b12e0a87ac0ed1b2d.mockapi.io/');
            const user: User | undefined = response.data.find((u: User) => u.email === email);

            if (user) {
                // Burada şifre kontrolü ekleyebilirsiniz eğer API şifre bilgisini döndürüyorsa.
                router.push('/pages/joblistening');
            } else {
                setError('Invalid email or password.');
            }
        } catch (e) {
            setError('An error occurred while trying to login.');
        } finally {
            setLoading(false);
        }
    };

    return (
    <div className='bg-white'>
        <Navbar/>
        <section className="flex justify-center items-center mt-8 bg-white">
            <div
                className="w-[600px] h-[400px] mb-[152px] mt-[152px] rounded border border-gray-300 bg-neutral-100"
                style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}
            >
                <div className="flex justify-center mt-3">
                    <h2 className="text-black mt-4 justify-center">Login</h2>
                </div>

                <div className="flex flex-col items-center justify-center mt-[20px]">
                    {/* Email Input */}
                    <label className="text-black w-[328px] h-[90px] mt-[24px]">
                        Email:
                        <input 
                            className='mt-2 w-full h-[48px] border border-black rounded px-[4px] text-black'
                            type="email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            disabled={loading}
                        />
                    </label>

                    {/* Password Input */}
                    <label className="text-black w-[328px] h-[90px] mt-[24px]">
                        Password:
                        <input 
                            className='mt-2 w-full h-[48px] border border-black rounded px-[4px] text-black'
                            type="password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            disabled={loading}
                        />
                    </label>
                </div>

                {/* Error Message */}
                {error && <p className="text-red-500 text-center mt-2">{error}</p>}

                <button 
                    onClick={handleLogin}
                    className="bg-black hover:bg-gray-800 text-white w-[568px] h-[48px] ml-[12px] mt-[24px] px-4 py-2 rounded p-4"
                    disabled={loading}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </div>
        </section>

    </div>
    );
}
