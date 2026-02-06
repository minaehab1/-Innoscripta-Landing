import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = 'px-6 py-3 font-bold text-sm uppercase tracking-wide rounded-[6.25rem] transition-all duration-300';

    const variants = {
        primary: 'bg-warning-green text-white hover:bg-warning-green-dark',
        secondary: 'bg-primary-blue-dark text-white hover:bg-primary-bg',
        outline: 'border-2 border-primary-blue-dark text-primary-blue-dark bg-transparent hover:bg-primary-blue-dark hover:text-white',
        'outline-white': 'border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary-blue-dark',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
