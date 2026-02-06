import React from 'react';

const TrustBar = ({ theme = 'light' }) => {
    const isDark = theme === 'dark';
    const containerClass = isDark
        ? "bg-transparent border-t border-white/10"
        : "bg-white border-y border-slate-100/10";

    const logoClass = `h-8 md:h-10 w-auto transition-all duration-500 ${isDark
        ? "text-white opacity-80"
        : "text-slate-400 opacity-50 grayscale hover:grayscale-0"
        }`;

    // Company logos from https://us.innoscripta.com/en
    const companies = [
        { name: "BREUNINGER", url: "https://d2tg0v9rmbhfb2.cloudfront.net/images/companies-slider/breuninger.svg" },
        { name: "Electrolux", url: "https://d2tg0v9rmbhfb2.cloudfront.net/images/companies-slider/electrolux.svg" },
        { name: "Atlas Copco", url: "https://d2tg0v9rmbhfb2.cloudfront.net/images/companies-slider/atlas-copco.svg" },
        { name: "ING", url: "https://d2tg0v9rmbhfb2.cloudfront.net/images/companies-slider/ing.svg" },
        { name: "Wella", url: "https://d2tg0v9rmbhfb2.cloudfront.net/images/companies-slider/wella.svg" },
        { name: "About You", url: "https://d2tg0v9rmbhfb2.cloudfront.net/images/companies-slider/about-you.svg" },
        { name: "Becker", url: "https://d2tg0v9rmbhfb2.cloudfront.net/images/companies-slider/becker.svg" },
        { name: "BorgWarner", url: "https://d2tg0v9rmbhfb2.cloudfront.net/images/companies-slider/borgwarner.svg" },
        { name: "Ströer", url: "https://d2tg0v9rmbhfb2.cloudfront.net/images/companies-slider/stroer-media.svg" },
        { name: "Ingersoll Rand", url: "https://d2tg0v9rmbhfb2.cloudfront.net/images/companies-slider/ingersoll-rand.svg" },
        { name: "Daikin", url: "https://d2tg0v9rmbhfb2.cloudfront.net/images/companies-slider/daikin.svg" },
        { name: "Dynapac", url: "https://d2tg0v9rmbhfb2.cloudfront.net/images/companies-slider/dynapac.svg" },
        { name: "Leica Biosystems", url: "https://d2tg0v9rmbhfb2.cloudfront.net/images/companies-slider/leica-biosystems.svg" },
        { name: "RAPA", url: "https://d2tg0v9rmbhfb2.cloudfront.net/images/companies-slider/rapa.svg" },
        { name: "Kahl", url: "https://d2tg0v9rmbhfb2.cloudfront.net/images/companies-slider/kahl.svg" },
    ];

    const Logos = () => (
        <>
            {companies.map((company, index) => (
                <div key={index} className="flex items-center justify-center min-w-[150px]">
                    <img
                        src={company.url}
                        alt={`${company.name} Logo`}
                        className={logoClass}
                        loading="lazy"
                    />
                </div>
            ))}
        </>
    );

    return (
        <section className={`py-8 overflow-hidden relative ${containerClass}`}>
            {/* Mask for fading edges - Positioned absolute to the full width section */}
            <div className={`absolute inset-y-0 left-0 w-24 z-20 bg-gradient-to-r ${isDark ? 'from-[#0B2433] to-transparent' : 'from-white to-transparent'}`}></div>
            <div className={`absolute inset-y-0 right-0 w-24 z-20 bg-gradient-to-l ${isDark ? 'from-[#0B2433] to-transparent' : 'from-white to-transparent'}`}></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex gap-16 animate-infinite-scroll w-max hover:[animation-play-state:paused] items-center">
                    {/* Duplicate logos multiple times for seamless infinite scroll on wide screens */}
                    <Logos />
                    <Logos />
                    <Logos />
                    <Logos />
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
