import React from 'react';
import Button from '../components/Button';
import TrustBar from '../components/TrustBar';
import Stats from '../components/Stats';
import FeatureCard from '../components/FeatureCard';

const Home = () => {
    const features = [
        {
            title: 'Maximum Funding',
            description: 'Securing on average 40% more funding than when applying independently.',
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: 'Save Time',
            description: 'Reduce administrative workload by up to 80% with our software.',
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: 'Audit Security',
            description: 'GoBD compliant documentation and expert support.',
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        }
    ];

    return (
        <div className="bg-slate-50 font-sans">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-[#000] overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <video
                        src="https://framerusercontent.com/assets/wecEpfpiZY6wHWcQcoa4isEY.mp4"
                        loop
                        muted
                        autoPlay
                        playsInline
                        className="w-full h-full object-cover opacity-60"
                    ></video>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-bg/90 via-primary-blue-dark/80 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="animate-fadeIn">
                            <p className="text-white font-poppins text-sm tracking-wide mb-4">
                                Revolutionize your R&D funding workflow
                            </p>
                            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 font-poppins">
                                Capture <span className="text-white">more R&D credits</span>, documented by default
                            </h1>
                            <p className="text-lg text-white/90 leading-relaxed max-w-xl font-poppins">
                                Capture up to <span className="font-bold">35%</span> more eligible costs, <span className="font-bold">reduce IRS audit risk</span>, and save hundreds of hours with the <span className="font-bold">US's first</span> software driven R&D tax compliance platform.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a href="https://innoscriptaa.framer.website/contact">
                                <Button variant="primary" className="shadow-xl px-8 py-4 text-base bg-gradient-to-r from-[#98E1FB] via-[#51B0D3] to-[#2186AB] border-none text-white hover:brightness-110 rounded-full font-poppins font-medium">
                                    GET STARTED • IT'S FREE
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Right side spacer or additional visual if needed */}
                    <div className="hidden md:block"></div>
                </div>
            </section>

            <TrustBar />

            <Stats />

            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-dark-blue mb-4 font-poppins">Why Innoscripta?</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-poppins">
                            We combine expert knowledge with cutting-edge software to maximize your R&D potential.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-primary-bg text-center px-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-poppins">
                        Ready to optimize your R&D funding?
                    </h2>
                    <p className="text-xl text-white/80 font-poppins max-w-2xl mx-auto">
                        Join hundreds of innovative companies using Innoscripta to secure their future.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button variant="primary" className="text-lg px-8 py-4 shadow-xl hover:scale-105 bg-warning-green text-dark-blue">
                            Apply Now
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
