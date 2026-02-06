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
        <section className="py-24 px-6 max-w-5xl mx-auto">
            <div className="text-center mb-20 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold font-raleway text-white">
                    The Compliance Loop That Changes Everything
                </h2>
                <p className="text-white/80 text-xl max-w-3xl mx-auto font-open-sans">
                    What if R&D documentation happened BY DEFAULT as your teams worked not as a year-end burden?
                </p>
            </div>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-[20px] md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#94BA5D] via-white/20 to-transparent -translate-x-1/2"></div>

                <div className="space-y-16">
                    {steps.map((step, index) => (
                        <div key={index} className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start relative ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Number Bubble */}
                            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0B2433] border-2 border-[#94BA5D] flex items-center justify-center z-10 shadow-[0_0_20px_rgba(148,186,93,0.3)]">
                                <span className="text-white font-bold">{step.number}</span>
                            </div>

                            {/* Content Side */}
                            <div className="flex-1 pl-16 md:pl-0 md:text-right pr-0 md:pr-12">
                                <div className={`p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm transition-transform hover:-translate-y-1 duration-300 ${index % 2 !== 0 ? 'md:text-left md:ml-12' : ''}`}>
                                    <div className={`mb-4 inline-block p-3 rounded-lg bg-[#94BA5D]/20 text-[#94BA5D] ${index % 2 !== 0 ? '' : 'md:ml-auto'}`}>
                                        {step.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 font-montserrat tracking-tight">{step.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
                                </div>
                            </div>

                            {/* Empty spacer for opposite side */}
                            <div className="flex-1 hidden md:block"></div>
                        </div>
                    ))}
                </div>

                {/* Result Box */}
                <div className="mt-20 relative z-10 bg-gradient-to-br from-[#0D4A63] to-[#0A384C] p-8 md:p-12 rounded-2xl border border-white/10 text-center shadow-2xl">
                    <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">The result?</h3>
                    <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
                        IRS-ready documentation in 10 days, not 6 months. Up to <span className="font-bold text-[#94BA5D]">35%</span> more eligible costs captured. Hundreds of hours returned to innovation, not administration.
                    </p>

                    <div className="border-t border-white/10 pt-6">
                        <p className="text-[#94BA5D] font-bold text-sm tracking-wide uppercase mb-2">This isn't theory</p>
                        <p className="text-gray-400 text-sm">
                            2,100+ European companies already use Clusterix. They stay an average 2.9 years with &lt;2% churn. Because continuous compliance actually works.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComplianceLoop;
