import React from 'react';
import Button from './Button';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary-bg via-primary-blue-dark to-teal-blue overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-teal-blue rounded-full blur-[120px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="animate-fadeIn">
                        <p className="text-warning-green font-semibold tracking-wide uppercase text-sm mb-4">
                            Revolutionize your R&D funding workflow
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 font-display">
                            Capture <span className="text-warning-green">more R&D credits</span>, documented by default
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                            Capture up to <span className="font-bold text-white">35%</span> more eligible costs, <span className="font-bold text-white">reduce IRS audit risk</span>, and save hundreds of hours with the US's first software driven R&D tax compliance platform.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button variant="primary" className="shadow-xl px-8 py-4 text-base bg-gradient-to-r from-warning-green to-teal-blue border-none hover:brightness-110">
                            Get Started • It's Free
                        </Button>
                    </div>
                </div>

                <div className="relative hidden md:block">
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4">
                        <div className="aspect-video bg-dark-blue/50 rounded-xl flex items-center justify-center">
                            <span className="text-white/50">Dashboard Preview / Video Placeholder</span>
                        </div>
                    </div>

                    {/* Floating elements decoration */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-warning-green rounded-full blur-2xl opacity-20"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
