import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <svg width="32" height="32" viewBox="0 0 28 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.44 33.29C16.01 30.72 10.98 29.15 5.61 28.71L6.50 30.72C6.62 30.97 6.85 31.17 7.13 31.21C11.64 31.83 15.93 33.39 19.66 35.65L20.61 33.89C20.72 33.68 20.64 33.42 20.44 33.30Z" fill="url(#grad1)" />
                            <path d="M3.51 24.72L5.50 28.68L7.05 28.82C7.38 28.85 7.78 28.88 8.24 28.90C8.96 28.95 9.69 28.98 10.42 28.98C14.16 28.98 17.82 28.29 21.15 27.08C21.34 27.01 21.49 26.86 21.59 26.68L24.39 21.07C25.16 19.54 25.74 17.92 26.09 16.24C26.23 15.58 26.32 14.93 26.32 14.40C26.32 5.67 16.92 -1.05 7.85 4.35C6.42 5.19 5.29 6.45 4.37 7.81C1.81 11.60 1.94 16.23 3.59 19.62L6.36 25.12C5.04 24.95 4.41 24.86 3.94 24.79C3.66 24.75 3.42 24.57 3.30 24.32L1.49 20.70C0.55 18.78 0 16.65 0 14.40C0 4.04 11.18 -3.91 21.69 2.04C23.63 3.14 25.51 4.95 26.69 7.06C29.22 11.59 29.18 16.27 27.56 20.05L24.84 25.44L23.26 28.60C23.17 28.77 23.02 28.91 22.84 28.98C19.00 30.52 14.81 31.37 10.42 31.37C9.32 31.37 8.23 31.32 7.16 31.21C6.89 31.19 6.65 31.02 6.52 30.77L3.51 24.72Z" fill="#0A607E" />
                            <defs>
                                <linearGradient id="grad1" x1="20.94" y1="34.93" x2="6.91" y2="29.33" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" />
                                    <stop offset="0.99" stopColor="#0A607E" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div>
                            <span className="text-lg font-bold text-primary-blue-dark font-sans">innoscripta</span>
                        </div>
                    </Link>
                    <div className="flex gap-4">
                        <Link to="/lander">
                            <Button variant="primary" className="text-xs py-2 px-4">Try for free</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
