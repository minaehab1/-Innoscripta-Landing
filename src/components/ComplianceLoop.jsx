import React from 'react';

const ComplianceLoop = () => {
    const steps = [
        {
            number: "1",
            title: "Discover & Map",
            description: "We import your projects, costs, and roles on Day 1. Everything aligns to IRS's Frascati rules automatically.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
            )
        },
        {
            number: "2",
            title: "Continuous Evidence",
            description: "Your engineers simply log their work in Clusterix. Time tracking, milestone notes, and cost allocation happen in the background. No reconstruction needed.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            number: "3",
            title: "Compliance Check",
            description: "Our internal auditor view flags gaps before they become problems. Expert team polishes your claim narrative from an IRS perspective.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    The Compliance Loop That Changes Everything
                </h2>
                <p className="text-white/80 text-xl max-w-3xl mx-auto">
                    What if R&D documentation happened BY DEFAULT as your teams worked not as a year-end burden?
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="relative group">
                        {/* Notification Bubble - Top Left */}
                        <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#0B2433] border-2 border-[#94BA5D] flex items-center justify-center z-20 shadow-[0_0_15px_rgba(148,186,93,0.4)] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_25px_rgba(148,186,93,0.6)]">
                            <span className="text-white font-bold">{step.number}</span>
                        </div>

                        {/* Card Content */}
                        <div className="h-full p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#94BA5D]/30">
                            <div className="flex flex-row items-start gap-6">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-lg bg-[#94BA5D]/20 flex items-center justify-center text-[#94BA5D] shrink-0">
                                    {step.icon}
                                </div>

                                {/* Text */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#94BA5D] transition-colors">{step.title}</h3>
                                    <p className="text-white text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Result Box - Styled to match "Our Way" card */}
            <div className="mt-10 relative z-10 p-6 md:p-8 rounded-2xl text-center bg-white/10 border border-[#94BA5D]/50 backdrop-blur-md shadow-[0_0_30px_rgba(148,186,93,0.2)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none"></div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4">The result?</h3>
                    <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
                        IRS-ready documentation in 10 days, not 6 months. Up to <span className="font-bold text-[#94BA5D]">35%</span> more eligible costs captured. Hundreds of hours returned to innovation, not administration.
                    </p>

                    <div className="border-t border-white/10 pt-6">
                        <p className="text-[#94BA5D] font-bold text-sm tracking-wide uppercase mb-2">This isn't theory</p>
                        <p className="text-white text-sm">
                            2,100+ European companies already use Clusterix. They stay an average 2.9 years with &lt;2% churn. Because continuous compliance actually works.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComplianceLoop;
