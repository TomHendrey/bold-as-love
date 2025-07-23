import React from 'react';

const Services: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Our Services</h1>
                <p className="text-xl italic text-gray-300">
                    Everything you need to make your celebration unforgettable
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-colors">
                    <h3 className="text-2xl font-semibold mb-4">Wedding Receptions</h3>
                    <p className="text-gray-300 mb-4">
                        Our signature service - creating the perfect atmosphere for your special day
                        with music spanning multiple decades.
                    </p>
                    <ul className="text-gray-300 space-y-2">
                        <li>• Ceremony music</li>
                        <li>• Cocktail hour entertainment</li>
                        <li>• Reception dancing</li>
                        <li>• Special requests welcome</li>
                    </ul>
                </div>

                <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-colors">
                    <h3 className="text-2xl font-semibold mb-4">Corporate Events</h3>
                    <p className="text-gray-300 mb-4">
                        Professional entertainment for company parties, launches, and celebrations.
                    </p>
                    <ul className="text-gray-300 space-y-2">
                        <li>• Company parties</li>
                        <li>• Product launches</li>
                        <li>• Award ceremonies</li>
                        <li>• Team building events</li>
                    </ul>
                </div>

                <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-colors">
                    <h3 className="text-2xl font-semibold mb-4">Private Parties</h3>
                    <p className="text-gray-300 mb-4">
                        Bringing the party to your private celebrations with our full decade experience.
                    </p>
                    <ul className="text-gray-300 space-y-2">
                        <li>• Birthday parties</li>
                        <li>• Anniversary celebrations</li>
                        <li>• Holiday parties</li>
                        <li>• Special occasions</li>
                    </ul>
                </div>

                <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-colors">
                    <h3 className="text-2xl font-semibold mb-4">Venue Performances</h3>
                    <p className="text-gray-300 mb-4">
                        Regular performances at pubs, clubs, and entertainment venues.
                    </p>
                    <ul className="text-gray-300 space-y-2">
                        <li>• Pub gigs</li>
                        <li>• Club performances</li>
                        <li>• Festival appearances</li>
                        <li>• Regular residencies</li>
                    </ul>
                </div>
            </section>

            <section className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Ready to Book?</h2>
                <p className="text-gray-300 mb-6">
                    Contact us to discuss your event and create a customized musical experience.
                </p>
                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Get A Quote
                </button>
            </section>
        </div>
    );
};

export default Services;
