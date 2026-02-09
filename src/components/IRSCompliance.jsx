import React, { useState } from 'react';

const IRSCompliance = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    return (
        <section className="py-24 px-6 bg-[#0B2433]">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left: Text Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-plus-jakarta leading-tight">
                            The joy of complete IRS compliance starts here
                        </h2>

                        <p className="text-xl text-white mb-8 font-semibold">
                            Automated and accurate R&D documentation
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="shrink-0 w-6 h-6 rounded-full bg-[#94BA5D]/20 flex items-center justify-center mt-1">
                                    <svg className="w-4 h-4 text-[#94BA5D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-white text-lg">
                                    Capture up to 30 percent of qualified costs
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="shrink-0 w-6 h-6 rounded-full bg-[#94BA5D]/20 flex items-center justify-center mt-1">
                                    <svg className="w-4 h-4 text-[#94BA5D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-white text-lg">
                                    Every project stays compliant and audit ready
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: YouTube Video */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900">
                        {!isPlaying ? (
                            // Thumbnail with play button
                            <div
                                className="relative w-full h-full cursor-pointer group"
                                onClick={handlePlayClick}
                            >
                                <img
                                    src="/images/irs-compliance-thumbnail.webp"
                                    alt="IRS Compliance Video"
                                    className="w-full h-full object-cover"
                                />
                                {/* Play button overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                                    <div className="w-20 h-20 rounded-full bg-[#4AB8CC] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                                        <svg
                                            className="w-10 h-10 text-white ml-1"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // YouTube iframe when playing
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/QNl7PhUvIFY?autoplay=1"
                                title="IRS Compliance Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IRSCompliance;
