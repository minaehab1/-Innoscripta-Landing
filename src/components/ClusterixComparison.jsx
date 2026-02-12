import React from 'react';

const ClusterixComparison = () => {
    return (
        <section className="py-24 px-6 max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-raleway text-white mb-6">
                    Where Clusterix Shines
                </h2>
                <p className="text-white max-w-2xl mx-auto text-lg">
                    See the difference between the traditional manual approach and our automated platform.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
                {/* Competitor's Approach */}
                <div className="h-full p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-red-500/30 group relative overflow-hidden flex flex-col">
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold text-white mb-2">Competitor's approach</h3>
                        </div>

                        <div className="flex-grow flex flex-col gap-6">
                            {[
                                "Manual work",
                                "Do R&D work (nobody documenting anything properly)",
                                "Wait 6-12 months",
                                "Hire consultants",
                                "Try to reconstruct everything",
                                "Submit thin claim and Cross fingers",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 text-white">
                                    <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <span>{item}</span>
                                </div>
                            ))}

                            <div className="flex items-start gap-3 text-white">
                                <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <span>Pay <span className="font-bold text-white">25%</span> of whatever you get</span>
                            </div>
                        </div>

                        <div className="mt-8 bg-white/5 p-4 rounded-xl text-center border border-white/10">
                            <p className="text-white text-sm mb-1">You charge $2,000 =</p>
                            <p className="text-red-500 font-bold text-xl uppercase">$50/hour</p>
                        </div>
                    </div>
                </div>

                {/* Our Way - Lighter BG + Shine Effect */}
                <div className="h-full p-8 bg-white/10 border border-[#94BA5D]/50 rounded-2xl backdrop-blur-md shadow-[0_0_30px_rgba(148,186,93,0.2)] hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(148,186,93,0.4)] group relative overflow-hidden flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold text-white mb-2">Our Way</h3>
                        </div>

                        <div className="flex-grow flex flex-col gap-6">
                            {[
                                { title: "CAPTURE:", text: "Engineers log work in 30 seconds, Clusterix records WHO, WHAT, WHEN, WHY live." },
                                { title: "COMPLIANCE:", text: "Work auto-builds an IRS-ready audit trail, Compliance by Default™." },
                                { title: "AUDIT:", text: "We pre-vet every claim like IRS would and fix gaps fast." },
                                { title: "NARRATIVE:", text: "R&D experts craft the precise technical story IRS needs." },
                                { title: "DEFEND:", text: "We file and defend your claim, support included." },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 text-white">
                                    <svg className="w-5 h-5 text-[#94BA5D] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span><strong className="text-white">{item.title}</strong> {item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-white/5 p-4 rounded-xl text-center border border-white/10">
                            <p className="text-[#94BA5D] font-bold text-lg uppercase mb-1">No upfront costs</p>
                            <p className="text-white/70 text-sm">for using the platform</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClusterixComparison;
