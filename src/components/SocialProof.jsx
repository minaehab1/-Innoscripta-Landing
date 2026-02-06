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
        <div className="flex flex-col items-center gap-2">

            {/* CTA and Scarcity Container - Synced Width */}
            <div className="flex flex-col w-max gap-2">
                {cta && <div className="w-full">{cta}</div>}

                {/* Loading Bar Section */}
                <div className="flex items-center justify-between gap-3 w-full px-1">
                    <span className="text-[#94BA5D] font-mono text-[10px] md:text-xs font-bold tracking-widest uppercase text-nowrap">
                        Signups Closing Soon
                    </span>

                    {/* Segmented Loading Bar */}
                    <div className="h-4 md:h-5 border border-[#94BA5D] rounded p-0.5 flex gap-0.5 bg-black/20 shrink-0">
                        {segments.map((_, i) => (
                            <div
                                key={i}
                                className={`w-1.5 md:w-2 h-full bg-[#94BA5D] rounded-[1px] ${
                                    // Last segment flickers
                                    i === segments.length - 1 ? 'animate-pulse opacity-70' : ''
                                    }`}
                            ></div>
                        ))}
                        {/* Empty slot for visual effect of "loading" */}
                        <div className="w-1.5 md:w-2 h-full bg-transparent"></div>
                    </div>
                </div>
            </div>

            {/* Social Trust Section */}
            <div className="flex items-center gap-3">
                {/* Avatars Stack */}
                <div className="flex -space-x-3">
                    {/* Using colored placeholders to resemble the original image without external assets */}
                    <Avatar color="bg-blue-100" />
                    <Avatar color="bg-green-100" />
                    <Avatar color="bg-yellow-100" />
                    <Avatar color="bg-red-100" />
                    <Avatar color="bg-purple-100" />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
            </div>

            {/* Trust Text */}
            <p className="text-gray-400 text-xs font-mono font-medium tracking-wide">
                Trusted By <span className="font-bold text-white">2100+</span> Founders
            </p>
        </div>
    );
};

export default SocialProof;
