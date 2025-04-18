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

    // Button JSX
    return (
        <div className="flex flex-wrap gap-2 justify-center p-4">
            {decades.map((decade) => (
                <button
                    key={decade}
                    onClick={() => changeDecade(decade)}
                    className={`px-8 py-4 rounded-md transition-all ${
                        currentDecade === decade ? `bg-[#161b22] ${decadeStyles[decade]}` : `bg-[#0d1117] text-gray-300 hover:bg-[#161b22] border border-gray-700`
                    }`}>
                    {decade}
                </button>
            ))}
        </div>
    );
};
export default DecadeSwitcher;
