import React, { useState, useEffect, useRef } from 'react';

const JoinCTA = () => {
    const [activeCard, setActiveCard] = useState(0);
    const videoRef = useRef(null);

    const features = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: "Compliance center",
            subtitle: "All project, cost, and employee data in one simple view."
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Automatic qualified wages & cost mapping",
            subtitle: "Hours, wages, contractors, and expenses instantly IRS-categorized."
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            ),
            title: "Smart project management for R&D credits",
            subtitle: "Supports Internal Use Software, Dual Function projects, and all IRS R&D categories."
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            title: "One click form 6765 generation",
            subtitle: "Your complete IRS claim, ready in seconds."
        }
    ];

    // Auto-cycle through cards every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prev) => (prev + 1) % features.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [features.length]);

    // Use Intersection Observer to play video when visible (bypasses browser power-saving)
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        video.play().catch((error) => {
                            console.log('Video play attempt:', error.message);
                            // Fallback: try again after a short delay
                            setTimeout(() => {
                                video.play().catch(() => { });
                            }, 1000);
                        });
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.25 }
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleCardClick = (index) => {
        setActiveCard(index);
    };

    return (
        <section className="py-20 px-6 pb-32 bg-[#0D4A63]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-plus-jakarta">
                        Join 2,100+ companies that scaled faster using our system
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        innoscripta brings all your R&D data, people, costs, and documentation together so you can file your R&D credits confidently, automatically, and without audit stress.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Video/Animation */}
                    <div className="relative rounded-3xl overflow-hidden border-8 border-white/20 bg-white/10 shadow-2xl backdrop-blur-sm aspect-video">
                        <video
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                console.error('Video error:', e);
                                console.error('Video element:', videoRef.current);
                            }}
                            onLoadedData={() => console.log('Video loaded successfully')}
                            onCanPlay={() => console.log('Video can play')}
                        >
                            <source src="/videos/dashboard-demo.mp4" type="video/mp4" />
                            <div className="w-full h-full flex items-center justify-center text-white">
                                Video not supported
                            </div>
                        </video>
                    </div>

                    {/* Feature Cards */}
                    <div className="flex flex-col gap-4 h-full" style={{ aspectRatio: '16/9' }}>
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-xl border transition-all duration-500 cursor-pointer ${activeCard === index
                                    ? 'bg-[#4AB8CC] border-[#4AB8CC] shadow-lg'
                                    : 'bg-[#0A384C] border-white/10 hover:border-white/20 hover:scale-[1.01] hover:brightness-105'
                                    }`}
                                onClick={() => handleCardClick(index)}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`shrink-0 transition-colors ${activeCard === index ? 'text-white' : 'text-[#4AB8CC]'}`}>
                                        {feature.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-white font-bold text-base mb-1">
                                            {feature.title}
                                        </h3>
                                        {/* Subtitle with smooth max-height transition */}
                                        <div
                                            className={`overflow-hidden transition-all duration-500 ${activeCard === index ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            <p className="text-white/90 text-sm mt-2">
                                                {feature.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinCTA;
