import React from 'react';

const FeatureCard = ({ title, description, icon }) => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-warning-green to-teal-blue">
                {icon || (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </div>
            <h4 className="text-lg font-bold text-dark-blue mb-2 font-display">{title}</h4>
            <p className="text-sm text-white leading-relaxed min-h-[3rem]">{description}</p>
        </div>
    );
};

export default FeatureCard;
