import React from 'react';

const Avatar = ({ color }) => (
    <div className={`w-8 h-8 rounded-full border-2 border-[#0B2433] bg-gray-300 overflow-hidden relative ${color}`}>
        <svg className="w-full h-full text-gray-500 fill-current" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
    </div>
);

const SocialProof = ({ cta }) => {
    // Generate dummy segments for the loading bar
    const segments = Array(10).fill(0);

    return (
        <div className="flex flex-col items-center gap-4 w-full">

            {/* CTA and Scarcity Container - Synced Width */}
            <div className="flex flex-col w-full max-w-xs gap-3 items-center">
                {cta && <div className="w-full shadow-2xl rounded-[6.25rem]">{cta}</div>}

                {/* Trust Text */}
                <div className="flex flex-col items-center gap-1.5 mt-2">
                    <p className="text-gray-400 text-[10px] md:text-xs font-sans font-medium tracking-wide flex items-center gap-2 whitespace-nowrap">
                        Limited spots available <span className="text-gray-500 px-2">✦</span> Trusted By 2100+ Founders
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SocialProof;
