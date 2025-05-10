import React from 'react';
import { useTheme, DecadeType } from '@/context/ThemeContext';
import { decadeTracks, Track } from '@/data/tracks';

// Define the type for decade-specific content
interface DecadeContent {
    title: string;
    subtitle: string;
    description: string;
}
const Home: React.FC = () => {
    // Access the current decade from our theme context
    const { currentDecade } = useTheme();

    const tracks = decadeTracks[currentDecade];

    // Decade-specific content
    const decadeContent: Record<DecadeType, DecadeContent> = {
        '1950s': {
            title: "Rock 'n' Roll Rebellion",
            subtitle: 'Classic tunes that started it all',
            description:
                "Transport your guests back to the birth of rock 'n' roll with our authentic 50s sound. From Chuck Berry to Elvis Presley, we recreate the music that changed the world.",
        },
        '1960s': {
            title: 'Psychedelic Revolution',
            subtitle: 'Peace, love, and unforgettable music',
            description:
                'Experience the sounds of Hendrix, The Beatles, and the Summer of Love. Our 60s repertoire captures the spirit of a generation that redefined music forever.',
        },
        '1970s': {
            title: 'Disco Dynamite',
            subtitle: 'Get down and boogie',
            description:
                "Turn your reception into Studio 54 with our authentic disco sound. From ABBA to the Bee Gees, we'll keep your dance floor packed all night long.",
        },
        '1980s': {
            title: 'Neon Nights',
            subtitle: 'Big hair, big sound',
            description:
                "Synth-pop, new wave, and hair metal - our 80s set brings the energy of MTV's golden era to your special day.",
        },
        '1990s': {
            title: 'Alternative Edge',
            subtitle: 'When music got real',
            description:
                'From grunge to Britpop, our 90s selections capture the raw energy and authenticity that defined the decade.',
        },
        '2000s': {
            title: 'Digital Fusion',
            subtitle: 'Where genres collide',
            description:
                'Pop punk, R&B, indie rock - the 2000s had it all, and so do we. Our millennial playlist bridges the gap between classic and contemporary.',
        },
        '2010s': {
            title: 'Minimalist Pulse',
            subtitle: 'Modern classics for modern celebrations',
            description:
                'From Adele to Arctic Monkeys, our 2010s collection features the songs that will be remembered for generations.',
        },
        '2020s': {
            title: 'Hybrid Reality',
            subtitle: "Tomorrow's classics today",
            description:
                "The newest hits with timeless appeal - our contemporary selections showcase the best of today's music scene.",
        },
    };

    const content = decadeContent[currentDecade];

    return (
        <div className="max-w-4xl mx-auto">
            <section className="text-center mb-12">
                {/* <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
                <p className="text-xl italic">{content.subtitle}</p> */}
            </section>

            {/* <section className="mb-12">
                <div className="rounded-lg p-6 border border-gray-800">
                    <h2 className="text-2xl font-semibold mb-4">
                        Welcome To Bold As Love
                    </h2>
                    <p className="mb-4">
                        With our unique decade-themed approach, we customize
                        each performance to match your musical tastes.
                    </p>
                    <p className="mb-4">{content.description}</p>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                        Book Now
                    </button>
                </div>
            </section> */}

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">
                    Tracks from the {currentDecade}
                </h2>
                <div className="rounded-lg border border-grey-800">
                    <ul className="divide-y">
                        {tracks.map((track, index) => (
                            <li
                                key={index}
                                className="px-4 py-3 hover:bg[#161b22] transistion-colors">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="font-medium">
                                            {track.title}
                                        </span>
                                        <p className="text-gray-400 text-sm">
                                            {track.artist}
                                        </p>
                                    </div>
                                    <div className="text-gray-500"></div>
                                    {/* Optional: Play button or icon here */}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="text-center mt-4">
                    <button className="px-4 py-2 bg-[#233a86b3] text-white rounded-md hover:bg-[#2ea043] transition-colors">
                        View All Tracks
                    </button>
                </div>
            </section>

            {/* <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Featured Performances</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800 p-4 rounded-lg shadow">
                        <div className="h-40 bg-gray-700 rounded mb-2"></div>
                        <h3 className="font-bold">O'Neils - Blackheath</h3>
                        <p>Saturday 7th December, 8pm</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow">
                        <div className="h-40 bg-gray-700 rounded mb-2"></div>
                        <h3 className="font-bold">The Ivy House</h3>
                        <p>Friday 13th January, 9pm</p>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default Home;
