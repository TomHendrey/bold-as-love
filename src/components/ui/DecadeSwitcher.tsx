import React from 'react';

import { useTheme, DecadeType } from '@/context/ThemeContext';

// React.FC is a TypeScript type that stands for "Function Component" - it ensures this function returns a React element.
const DecadeSwitcher: React.FC = () => {
    const { currentDecade, changeDecade, decades } = useTheme();

    // In DecadeSwitcher for button colors
    const decadeStyles = {
        '1950s': 'text-red-400 border border-red-400',
        '1960s': 'text-purple-400 border border-purple-400',
        '1970s': 'text-yellow-400 border border-yellow-400',
        '1980s': 'text-blue-400 border border-blue-400',
        '1990s': 'text-green-400 border border-green-400',
        '2000s': 'text-gray-400 border border-gray-400',
        '2010s': 'text-indigo-400 border border-indigo-400',
        '2020s': 'text-pink-400 border border-pink-400',
    };

    // Function for rendering buttons

    const renderDecadeButton = (decade: DecadeType) => {
        // Determine base button style based on current theme

        const baseButtonStyle =
            'border border-gray-700 bg-[#0d1117] text-gray-300 w-[120px] h-[56px] rounded-md flex items-center justify-center transition-all';

        // Determine selected button style based on current theme
        const selectedButtonStyle =
            currentDecade === '1980s'
                ? 'border-2 z-10 border-pink-400 bg-pink-900/25 text-pink-300 shadow-[0_0_15px_rgba(236,72,153,0.8),0_0_30px_rgba(236,72,153,0.5)] animate-[neonPulse_2s_ease-in-out_infinite]'
                : `bg-[#161b22] ${decadeStyles[decade]}`;

        // Button JSX
        return (
            <button
                key={decade}
                onClick={() => changeDecade(decade)}
                className={`px-8 py-4 rounded-md transition-all ${baseButtonStyle} ${
                    currentDecade === decade ? selectedButtonStyle : ''
                }`}>
                {decade}
            </button>
        );
    };

    return (
        <div className="flex flex-wrap gap-2 justify-center p-4">
            {decades.map(renderDecadeButton)}
        </div>
    );
};

export default DecadeSwitcher;
