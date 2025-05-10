// In src/styles/fonts.ts
import { DecadeType } from '@/context/ThemeContext';

export const decadeFonts: Record<
    DecadeType,
    { heading: string; body: string }
> = {
    '1950s': {
        heading: 'font-serif',
        body: 'font-sans',
    },
    '1960s': {
        heading: 'font-serif',
        body: 'font-sans',
    },
    '1970s': {
        heading: 'font-serif',
        body: 'font-sans',
    },
    '1980s': {
        heading: 'font-orbitron',
        body: 'font-righteous',
    },
    '1990s': {
        heading: 'font-serif',
        body: 'font-sans',
    },
    '2000s': {
        heading: 'font-serif',
        body: 'font-sans',
    },
    '2010s': {
        heading: 'font-serif',
        body: 'font-sans',
    },
    '2020s': {
        heading: 'font-sans',
        body: 'font-sans',
    },
};
