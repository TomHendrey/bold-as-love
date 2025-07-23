import React from 'react';

const About: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">About Bold As Love</h1>
                <p className="text-xl italic text-gray-300">
                    The wedding band that brings decades of music to life
                </p>
            </section>

            <section className="mb-12">
                <div className="rounded-lg p-6 border border-gray-800">
                    <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                    <p className="mb-4 text-gray-300 leading-relaxed">
                        Bold As Love is more than just a wedding band - we're musical time travelers.
                        With our unique decade-themed approach, we transform your special day into
                        an unforgettable journey through the greatest music of all time.
                    </p>
                    <p className="mb-4 text-gray-300 leading-relaxed">
                        From the raw energy of 80s rock to the smooth grooves of 70s disco,
                        from the timeless classics of the 60s to today's chart-toppers,
                        we deliver authentic performances that keep your guests dancing all night long.
                    </p>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-800/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Professional Musicians</h3>
                    <p className="text-gray-300">
                        Each band member brings years of experience and passion for their craft,
                        ensuring every performance meets the highest standards.
                    </p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Personalized Experience</h3>
                    <p className="text-gray-300">
                        We work closely with couples to curate the perfect setlist that
                        reflects their musical taste and creates the ideal atmosphere.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
