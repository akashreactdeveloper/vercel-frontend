import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const { fetchUserDetails } = useContext(Context);

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const dataResponse = await fetch(SummaryApi.signIN.url, {
            method: SummaryApi.signIN.method,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const dataApi = await dataResponse.json();

        if (dataApi.success) {
            toast.success(dataApi.message);
            navigate('/home');
            fetchUserDetails();
        }

        if (dataApi.error) {
            toast.error(dataApi.message);
        }
    };

    return (
        <section id='login' className='bg-gradient-to-br from-purple-400 to-indigo-600 min-h-screen flex items-center'>
            <div className='mx-auto container px-4'>
                <div className='bg-white p-8 max-w-md mx-auto rounded-lg shadow-lg'>
                    <h2 className='text-3xl text-center font-semibold text-gray-800 mb-6'>Login</h2>
                    <form className='space-y-4' onSubmit={handleOnSubmit}>
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                                Email
                            </label>
                            <input
                                id='email'
                                type='email'
                                placeholder='Enter Email'
                                name='email'
                                value={data.email}
                                onChange={handleOnChange}
                                required
                                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                            />
                        </div>
                        <div>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                                Password
                            </label>
                            <div className='relative'>
                                <input
                                    id='password'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Enter Password'
                                    name='password'
                                    value={data.password}
                                    onChange={handleOnChange}
                                    required
                                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                                />
                                <div
                                    className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer'
                                    onClick={() => setShowPassword(prev => !prev)}
                                >
                                    {showPassword ? <FaEyeSlash className='h-5 w-5' /> : <FaEye className='h-5 w-5' />}
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <Link to='/forgot-password' className='text-sm text-gray-600 hover:underline'>
                                Forgot Password?
                            </Link>
                            <button
                                type='submit'
                                className='bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition-all hover:scale-105'
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <p className='mt-4 text-sm text-gray-600'>
                        Don't have an account?{' '}
                        <Link to='/signup' className='text-indigo-600 hover:text-indigo-800 hover:underline'>
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;
