import React, { useEffect } from 'react';
import Button from '../components/Button';
import TrustBar from '../components/TrustBar';
import ClusterixComparison from '../components/ClusterixComparison';
import ComplianceLoop from '../components/ComplianceLoop';
import SocialProof from '../components/SocialProof';
import Testimonials from '../components/Testimonials';
import JoinCTA from '../components/JoinCTA';
import IRSCompliance from '../components/IRSCompliance';
import HeroRolling from '../components/HeroRolling';

const LanderRolling = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const scrollToForm = (e) => {
        if (e) e.preventDefault();
        const element = document.getElementById('apply-form-target');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-[#0B2433] min-h-screen text-white font-sans selection:bg-warning-green selection:text-dark-blue overflow-x-hidden">
            {/* Navbar Placeholder specific for Lander */}
            <nav className="absolute top-0 left-0 right-0 z-30 p-4 flex justify-between items-center w-full px-6">
                <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img src="/images/innoscripta-logo-white.a085a8e8.svg" alt="innoscripta" className="h-8 w-auto" />
                    </div>
                    <Button variant="primary" onClick={scrollToForm} className="bg-warning-green !text-white text-[9px] px-2 py-1 md:text-sm md:px-5 md:py-2.5 uppercase font-bold tracking-wider hover:brightness-110 transition-all">GET STARTED</Button>
                </div>
            </nav>

            {/* Hero Section - Above the Fold Optimization */}
            <HeroRolling scrollToForm={scrollToForm} />

            {/* Trusted By - Dark Theme & Marquee */}
            <TrustBar theme="dark" />

            {/* Typeform Embed Section */}
            <section id="apply-form" className="w-full relative z-10 py-12" style={{ background: 'linear-gradient(to bottom, transparent, #0D4A63 15%, #0D4A63 85%, transparent)' }}>
                <div className="max-w-4xl mx-auto px-4 relative flex justify-center">
                    {/* Scroll Target Anchor - Offset for valid sticky header */}
                    <div className="absolute top-[80px] left-0 w-full h-px opacity-0 pointer-events-none" id="apply-form-target"></div>

                    {/* Restored White Card Container */}
                    <div className="relative max-w-xl w-full bg-white rounded-xl overflow-hidden shadow-2xl h-[750px]">
                        <div data-tf-live="01KGST86NXFXZBFR1PG48K1TG8" style={{ height: '100%', width: '100%' }}></div>
                    </div>
                </div>
            </section>

            {/* Clusterix Comparison (Restored) */}
            <ClusterixComparison />

            {/* Compliance Loop (Restored) */}
            <ComplianceLoop />

            {/* Testimonials Section */}
            <Testimonials />

            {/* Join CTA Section */}
            <JoinCTA />

            {/* IRS Compliance Section */}
            <IRSCompliance />

            {/* CTA Section */}
            <section className="py-20 text-center px-6 border-t border-white/10 bg-[#0D2B3E]">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Automate?</h2>
                    <Button variant="primary" onClick={scrollToForm} className="bg-warning-green hover:bg-[#8AB860] !text-white px-10 py-4 text-lg font-bold shadow-2xl">
                        Apply Now
                    </Button>
                </div>
            </section>

            {/* Company Info Footer */}
            <footer className="py-8 px-6 bg-[#0B2433] border-t border-white/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-white text-sm">
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>innoscripta SE, Arnulfstraße 60, 80335 München</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href="tel:+498925555353" className="hover:text-[#2B98C4] transition-colors">+49 (0) 89 255553537</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="mailto:info@innoscripta.com" className="hover:text-[#2B98C4] transition-colors">info@innoscripta.com</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LanderRolling;
