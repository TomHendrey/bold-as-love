import { DecadeType } from '@/context/ThemeContext';

// Define interface for track structure
export interface Track {
    title: string;
    artist: string;
}

// Tracks for each decade
export const decadeTracks: Record<DecadeType, Track[]> = {
    '1950s': [
        { title: 'Rock Around the Clock', artist: 'Bill Haley & His Comets' },
        { title: 'Johnny B. Goode', artist: 'Chuck Berry' },
        { title: 'Jailhouse Rock', artist: 'Elvis Presley' },
        { title: 'Great Balls of Fire', artist: 'Jerry Lee Lewis' },
        { title: 'Tutti Frutti', artist: 'Little Richard' },
    ],
    '1960s': [
        { title: 'Purple Haze', artist: 'Jimi Hendrix' },
        { title: 'I Want to Hold Your Hand', artist: 'The Beatles' },
        { title: "(I Can't Get No) Satisfaction", artist: 'The Rolling Stones' },
        { title: 'Good Vibrations', artist: 'The Beach Boys' },
        { title: 'My Girl', artist: 'The Temptations' },
    ],
    '1970s': [
        { title: 'Bohemian Rhapsody', artist: 'Queen' },
        { title: "Stayin' Alive", artist: 'Bee Gees' },
        { title: 'Hotel California', artist: 'Eagles' },
        { title: 'Stairway to Heaven', artist: 'Led Zeppelin' },
        { title: 'Dancing Queen', artist: 'ABBA' },
    ],
    '1980s': [
        { title: 'Billie Jean', artist: 'Michael Jackson' },
        { title: "Sweet Child O' Mine", artist: "Guns N' Roses" },
        { title: 'Like a Prayer', artist: 'Madonna' },
        { title: 'Every Breath You Take', artist: 'The Police' },
        { title: "Livin' on a Prayer", artist: 'Bon Jovi' },
    ],
    '1990s': [
        { title: 'Smells Like Teen Spirit', artist: 'Nirvana' },
        { title: 'Wonderwall', artist: 'Oasis' },
        { title: 'No Scrubs', artist: 'TLC' },
        { title: 'Bitter Sweet Symphony', artist: 'The Verve' },
        { title: '...Baby One More Time', artist: 'Britney Spears' },
    ],
    '2000s': [
        { title: 'Hey Ya!', artist: 'OutKast' },
        { title: 'Mr. Brightside', artist: 'The Killers' },
        { title: 'Crazy In Love', artist: 'Beyoncé ft. Jay-Z' },
        { title: 'Seven Nation Army', artist: 'The White Stripes' },
        { title: 'Boulevard of Broken Dreams', artist: 'Green Day' },
    ],
    '2010s': [
        { title: 'Rolling in the Deep', artist: 'Adele' },
        { title: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars' },
        { title: 'Royals', artist: 'Lorde' },
        { title: 'Shape of You', artist: 'Ed Sheeran' },
        { title: 'Get Lucky', artist: 'Daft Punk ft. Pharrell Williams' },
    ],
    '2020s': [
        { title: 'Blinding Lights', artist: 'The Weeknd' },
        { title: 'Levitating', artist: 'Dua Lipa' },
        { title: 'drivers license', artist: 'Olivia Rodrigo' },
        { title: 'As It Was', artist: 'Harry Styles' },
        { title: 'Save Your Tears', artist: 'The Weeknd & Ariana Grande' },
    ],
};
