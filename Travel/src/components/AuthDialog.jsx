import React, { useState } from 'react';
import { assets } from '../assets/assets';

const AuthDialog = ({ isVisible, onClose }) => {
    const [isSignup, setIsSignup] = useState(true);

    if (!isVisible) return null;

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='flex bg-white rounded-lg shadow-lg w-full max-w-4xl'>
                {/* Left Side: Image */}
                <div className='w-1/2'>
                    <img
                        src={assets.authimage} // Update this to the correct path
                        alt="Authentication"
                        className='w-full h-full object-cover rounded-l-lg'
                    />
                </div>

                {/* Right Side: Form */}
                <div className='w-1/2 p-6 relative'>
                    <button
                        onClick={onClose}
                        className='absolute top-2 right-2 text-gray-500 hover:text-gray-800'
                    >
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                        </svg>
                    </button>
                    <h2 className='text-2xl font-semibold mb-6'>{isSignup ? 'Signup' : 'Login'}</h2>
                    <form className='space-y-6'>
                        {/* Email Field */}
                        <div className='flex flex-col'>
                            <label className='text-sm font-medium text-gray-700 mb-2'>Email</label>
                            <input
                                type='email'
                                className='block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3'
                                placeholder='Your email'
                            />
                        </div>

                        {/* Password Field */}
                        <div className='flex flex-col'>
                            <label className='text-sm font-medium text-gray-700 mb-2'>Password</label>
                            <input
                                type='password'
                                className='block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3'
                                placeholder='Your password'
                            />
                        </div>

                        {/* Confirm Password Field for Signup */}
                        {isSignup && (
                            <div className='flex flex-col'>
                                <label className='text-sm font-medium text-gray-700 mb-2'>Confirm Password</label>
                                <input
                                    type='password'
                                    className='block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3'
                                    placeholder='Confirm your password'
                                />
                            </div>
                        )}

                        <button
                            type='submit'
                            className='w-full py-3 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 transition duration-300'
                        >
                            {isSignup ? 'Signup' : 'Login'}
                        </button>
                    </form>

                    {/* Toggle Text */}
                    <p className='mt-6 text-sm text-gray-600'>
                        {isSignup ? (
                            <>Already have an account? <button onClick={() => setIsSignup(false)} className='text-indigo-600 font-medium hover:underline'>Login</button></>
                        ) : (
                            <>Don't have an account? <button onClick={() => setIsSignup(true)} className='text-indigo-600 font-medium hover:underline'>Signup</button></>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthDialog;
