import React, { useState } from 'react';

const Testimonials = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const testimonials = [
        {
            company: "LEICA BIOSYSTEMS",
            videoId: "5rh5gk5TT_A",
            thumbnail: "/images/testimonials/leica.webp",
            quote: "For me, it was the perfect combination of technology and personal consulting. The application process was much easier and faster than I had expected. The collaboration with innoscripta was efficient and always personal. (...) It was a true partnership.",
            name: "Paul Hertfelder",
            title: "Senior Manager R&D",
            companyName: "Leica Biosystems Nussloch GmbH"
        },
        {
            company: "RAPA",
            videoId: "kg1TS1pvoYY",
            thumbnail: "/images/testimonials/rapa.webp",
            quote: "At first, the topic of the research allowance was surrounded by many question marks for us. The complexity of the application process honestly put us off. (...) innoscripta showed us that funding does not have to be a bureaucratic nightmare.",
            name: "Rocco Kemnitz",
            title: "HR Business Partner",
            companyName: "RAPA"
        }
    ];

    const currentTestimonial = testimonials[activeTab];

    const handleTabChange = (index) => {
        setActiveTab(index);
        setIsPlaying(false); // Reset playing state when switching tabs
    };

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    return (
        <section className="py-20 px-6 bg-[#0B2433]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-plus-jakarta">
                        What Our Customers Say
                    </h2>
                    <p className="text-white max-w-3xl mx-auto text-lg">
                        Explore our success stories and see how we drive innovation, streamline operations, and help businesses achieve their goals with our cutting-edge solutions.
                    </p>
                </div>

                {/* Company Tabs */}
                <div className="flex gap-4 mb-8 max-w-4xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <button
                            key={index}
                            onClick={() => handleTabChange(index)}
                            className={`flex-1 py-4 px-6 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 ${activeTab === index
                                ? 'bg-[#4AB8CC] text-white shadow-lg'
                                : 'bg-white text-[#4AB8CC] hover:bg-gray-100'
                                }`}
                        >
                            {testimonial.company}
                        </button>
                    ))}
                </div>

                {/* Testimonial Content */}
                <div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: Video */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900">
                            {!isPlaying ? (
                                // Thumbnail with play button
                                <div
                                    className="relative w-full h-full cursor-pointer group"
                                    onClick={handlePlayClick}
                                >
                                    <img
                                        src={currentTestimonial.thumbnail}
                                        alt={`${currentTestimonial.company} testimonial`}
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
                                    src={`https://www.youtube.com/embed/${currentTestimonial.videoId}?autoplay=1`}
                                    title={`${currentTestimonial.company} Testimonial`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            )}
                        </div>

                        {/* Right: Quote */}
                        <div className="text-white">
                            <div className="mb-6">
                                <svg className="w-12 h-12 text-[#4AB8CC] opacity-50 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p className="text-xl md:text-2xl leading-relaxed mb-6">
                                    {currentTestimonial.quote}
                                </p>
                            </div>
                            <div className="border-t border-white/20 pt-6">
                                <p className="font-bold text-lg">{currentTestimonial.name}</p>
                                <p className="text-white">{currentTestimonial.title}</p>
                                <p className="text-white text-sm mt-1">{currentTestimonial.companyName}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
