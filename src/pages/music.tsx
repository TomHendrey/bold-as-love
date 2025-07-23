import React from 'react';
import { useTheme, DecadeType } from '@/context/ThemeContext';
import { decadeTracks, Track } from '@/data/tracks';
import DecadeSwitcher from '@/components/ui/DecadeSwitcher';
import Logo from '@/components/svgs/Logo';
import EightiesBackground from '@/components/backgrounds/EightiesBackground';

// Define the type for decade-specific content
interface DecadeContent {
    title: string;
    subtitle: string;
    description: string;
}

const Music: React.FC = () => {
    // Access the current decade from our theme context
    const { currentDecade } = useTheme();

    const tracks = decadeTracks[currentDecade];

    // Function to get decade-specific styling
    const getDecadeStyles = () => {
        if (currentDecade === '1980s') {
            return {
                headerClass: 'font-russo-one text-2xl mb-6 tracking-wider',
                decadeNumberClass: 'font-russo-one neon-blue text-[#67e8f9]',
                decadeSuffixClass:
                    'font-russo-one neon-blue text-[#67e8f9] text-lg',
                // More subtle container that lets the grid show through
                trackListClass:
                    ' rounded-lg border border-[#67e8f9]/20 overflow-hidden ' +
                    'bg-[#0a0e14]/60 backdrop-blur-[2px] transition-all duration-700',
                // Enhanced typography for better readability
                trackItemClass:
                    'px-6 py-5 transition-colors border-b border-[#67e8f9]/10 ' + // Increased vertical padding
                    'hover:bg-[#67e8f9]/5',
                trackTitleClass:
                    'font-semibold text-lg text-white tracking-wide',
                trackArtistClass: 'text-[#f9a8d4]/70 ml-2', // Added margin-left, removed margin-top
            };
        }

        // Default styling for other decades
        return {
            headerClass: 'font-inter text-2xl font-semibold mb-6',
            decadeNumberClass: 'font-inter',
            decadeSuffixClass: 'font-inter',
            trackListClass: 'rounded-lg border border-gray-800',
            trackItemClass:
                'px-4 py-4 hover:bg-[#161b22] transition-colors border-b border-gray-800/50', // More padding
            trackTitleClass: 'font-medium',
            trackArtistClass: 'text-gray-400 ml-2', // Added margin-left, removed margin-top
        };
    };

    // Get the styles based on current decade
    const styles = getDecadeStyles();

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
        <>
            <EightiesBackground />

            {/* Logo section */}
            <div className="flex justify-center py-8 overflow-visible">
                <Logo className="h-[22rem] overflow-visible" />
            </div>
            {/* Decade Switcher Section */}
            <div className="mb-12">
                <h2 className="text-6xl m-8 font-flash-back text-center neon-blue">
                    Select A Decade
                </h2>
                <DecadeSwitcher />
            </div>

            {/* Track Listings */}
            <div>
                <section className="mb-12">
                    <h2 className={`${styles.headerClass} max-w-4xl mx-auto`}>
                        Tracks from the{' '}
                        {currentDecade === '1980s' ? (
                            <>
                                <span className={styles.decadeNumberClass}>
                                    {currentDecade.slice(0, 4)}
                                </span>
                                <span className={styles.decadeSuffixClass}>s</span>
                            </>
                        ) : (
                            <span>{currentDecade}</span>
                        )}
                    </h2>

                    <div
                        className={`${styles.trackListClass} max-w-4xl mx-auto`}
                        style={
                            currentDecade === '1980s'
                                ? {
                                    boxShadow:
                                        '0 0 15px rgba(103, 232, 249, 0.05), inset 0 0 20px rgba(103, 232, 249, 0.02)',
                                }
                                : {}
                        }>
                        <ul>
                            {tracks.map((track, index) => (
                                <li key={index} className={styles.trackItemClass}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className={styles.trackTitleClass}>
                                                {track.title}
                                            </div>
                                            <div
                                                className={styles.trackArtistClass}>
                                                <span className="mx-2 opacity-70">
                                                    ·
                                                </span>{' '}
                                                {track.artist}{' '}
                                                {/* Centered dot with spacing */}
                                            </div>
                                        </div>
                                        {currentDecade === '1980s' && (
                                            <div className="text-[#67e8f9]/20">
                                                ♪
                                            </div>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Music;
