import React from 'react';

const Gallery: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Gallery</h1>
                <p className="text-xl italic text-gray-300">
                    Capturing moments from our performances
                </p>
            </section>

            {/* Placeholder for now - we'll add real images later */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                        <div className="text-center text-gray-400">
                            <p className="text-lg mb-2">Photo {item}</p>
                            <p className="text-sm">Coming Soon</p>
                        </div>
                    </div>
                ))}
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="border border-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Recent Performances</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-300">The Ivy House</span>
                            <span className="text-gray-500 text-sm">Jan 2024</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-300">O'Neils Blackheath</span>
                            <span className="text-gray-500 text-sm">Dec 2023</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-300">The George Tavern</span>
                            <span className="text-gray-500 text-sm">Nov 2023</span>
                        </div>
                    </div>
                </div>

                <div className="border border-gray-800 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Video Highlights</h3>
                    <div className="aspect-video bg-gray-800 rounded flex items-center justify-center">
                        <div className="text-center text-gray-400">
                            <p className="text-lg mb-2">Performance Video</p>
                            <p className="text-sm">Coming Soon</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
