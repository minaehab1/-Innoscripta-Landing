import React from 'react';

const Stats = () => {
    const stats = [
        { value: '40%', label: 'more funding', description: 'than when applying independently' },
        { value: '80%', label: 'less effort', description: 'administrative workload reduction' },
        { value: '35%', label: 'tax credit', description: 'for eligible R&D personnel costs' },
        { value: '100+', label: 'experts', description: 'funding specialists on your side' }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group hover:-translate-y-2 transition-transform duration-300">
                            <p className="text-5xl font-bold text-warning-green mb-2">{stat.value}</p>
                            <p className="text-lg font-bold text-dark-blue mb-1">{stat.label}</p>
                            <p className="text-sm text-white max-w-[200px] mx-auto">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
