import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define types
export type DecadeType =
    | '1950s'
    | '1960s'
    | '1970s'
    | '1980s'
    | '1990s'
    | '2000s'
    | '2010s'
    | '2020s';

interface ThemeColors {
    background: string;
    text: string;
    primary: string;
}

interface ThemeContextType {
    currentDecade: DecadeType;
    changeDecade: (decade: DecadeType) => void;
    theme: ThemeColors;
    decades: DecadeType[];
}

interface ThemeProviderProps {
    children: ReactNode;
}

// Define available decades
const decades: DecadeType[] = [
    '1950s',
    '1960s',
    '1970s',
    '1980s',
    '1990s',
    '2000s',
    '2010s',
    '2020s',
];

// Themes with basic color schemes
const decadeThemes: Record<DecadeType, ThemeColors> = {
    '1950s': {
        background: 'bg-gray-900',
        text: 'text-gray-100',
        primary: 'bg-gray-800',
    },
    '1960s': {
        background: 'bg-gray-900',
        text: 'text-purple-100',
        primary: 'bg-gray-800',
    },
    '1970s': {
        background: 'bg-gray-900',
        text: 'text-yellow-100',
        primary: 'bg-gray-800',
    },
    '1980s': {
        background: 'bg-gray-900',
        text: 'text-blue-100',
        primary: 'bg-gray-800',
    },
    '1990s': {
        background: 'bg-gray-900',
        text: 'text-green-100',
        primary: 'bg-gray-800',
    },
    '2000s': {
        background: 'bg-gray-900',
        text: 'text-gray-100',
        primary: 'bg-gray-800',
    },
    '2010s': {
        background: 'bg-gray-900',
        text: 'text-indigo-100',
        primary: 'bg-gray-800',
    },
    '2020s': {
        background: 'bg-gray-900',
        text: 'text-pink-100',
        primary: 'bg-gray-800',
    },
};

// Create context with initial null value and type assertion
export const ThemeContext = createContext<ThemeContextType | null>(null);

// Theme provider component
export function ThemeProvider({ children }: ThemeProviderProps) {
    const [currentDecade, setCurrentDecade] = useState<DecadeType>('2020s');

    const changeDecade = (decade: DecadeType) => {
        setCurrentDecade(decade);
    };

    return (
        // Use JSX element syntax for the provider
        React.createElement(
            ThemeContext.Provider,
            {
                value: {
                    currentDecade,
                    changeDecade,
                    theme: decadeThemes[currentDecade],
                    decades,
                },
            },
            children
        )
    );
}

// Custom hook for using thenme context
export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
