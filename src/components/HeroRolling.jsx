import React, { useState, useEffect } from 'react';
import Button from './Button';
import SocialProof from './SocialProof';

const HeroRolling = ({ scrollToForm }) => {
    // Static part of the headline
    const staticTextBase = "Recover The Six Figures In R&D Credits You're Leaving On The Table";

    // Dynamic parts to cycle through
    const dynamicPhrases = [
        "...Without Pulling Engineers Into Meetings.",
        "...With Zero Upfront Cost.",
        "...Built Automatically From Your Jira Tickets.",
        "...Verified With German-Grade Rigor",
        "...Or You Pay Nothing."
    ];

    const [displayText, setDisplayText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing effect configuration
    const typingSpeed = 100;
    const deletingSpeed = 30;
    const pauseTime = 4000; // Time to pause after finishing typing a phrase

    useEffect(() => {
        const handleTyping = () => {
            const currentPhrase = dynamicPhrases[phraseIndex];

            if (isDeleting) {
                // Deleting text
                setDisplayText(prev => prev.substring(0, prev.length - 1));
            } else {
                // Typing text
                setDisplayText(currentPhrase.substring(0, displayText.length + 1));
            }

            // Determine if we should switch modes (typing <-> deleting)
            if (!isDeleting && displayText === currentPhrase) {
                // Finished typing, pause
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && displayText === '') {
                // Finished deleting, move to next
                setIsDeleting(false);
                setPhraseIndex((prev) => (prev + 1) % dynamicPhrases.length);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, phraseIndex, dynamicPhrases]);

    return (
        <section className="relative pt-24 pb-12 w-full text-center" style={{ backgroundImage: 'url(/images/hero-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-[#0B2433]/40"></div>
            <div className="relative z-10 px-6 max-w-5xl mx-auto">
                {/* Live Tag - Same as Lander.jsx */}
                <div className="flex justify-center mb-4">
                    <div className="flex items-center gap-2 border border-white/20 rounded-full bg-gradient-to-r from-white/10 to-white/5 py-2 px-5 backdrop-blur-md shadow-lg">
                        <div className="w-2 h-2 bg-[#4ade80] rounded-full animate-pulse shadow-[0_0_8px_#4ade80]"></div>
                        <span className="text-white font-sans text-xs md:text-sm font-medium">
                            An opportunity to maximize R&D tax credits
                        </span>
                    </div>
                </div>

                {/* Animated Headline */}
                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.2] mb-1 md:mb-6 text-white tracking-tight min-h-[200px] md:min-h-[160px]">
                    {staticTextBase}
                    <br />
                    <span className="text-[#94BA5D] block mt-2 text-xl md:text-4xl md:whitespace-nowrap h-[3.5rem] md:h-auto flex items-center justify-center">
                        <span className="text-center">
                            {displayText}
                            <span className="animate-pulse ml-1">|</span>
                        </span>
                    </span>
                </h1>

                {/* Video Placeholder - Reduced Size - Same as Lander.jsx */}
                <div className="relative max-w-2xl mx-auto mb-8 p-[8px] rounded-3xl bg-gradient-to-r from-slate-500/20 via-white/40 to-slate-500/20 bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite] group cursor-pointer transition-transform hover:scale-[1.01]">
                    {/* Video container with Wistia Embed */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl z-10 bg-transparent">
                        <wistia-player media-id="1jlfbxam90" aspect="1.7777777777777777"></wistia-player>
                    </div>
                </div>

                {/* CTA Stack - More Compact - Same as Lander.jsx */}
                <div className="flex flex-col items-center">
                    <div className="text-center mb-2">
                        <p className="text-[#94BA5D] uppercase text-[9px] font-semibold tracking-widest">limited spots available</p>
                    </div>

                    <SocialProof cta={
                        <a href="#apply-form" onClick={scrollToForm} className="flex justify-center items-center w-full bg-warning-green hover:bg-[#8AB860] text-white px-8 py-4 text-lg font-black tracking-wide shadow-[0_0_20px_rgba(148,186,93,0.3)] hover:shadow-[0_0_30px_rgba(148,186,93,0.5)] transition-all rounded-[6.25rem] md:w-full uppercase">
                            GET STARTED
                        </a>
                    } />
                </div>
            </div>
        </section>
    );
};

export default HeroRolling;
