import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import Layout from '@/components/layout/Layout';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import {
    Inter, // Default text font for site
    Orbitron, // Nice 80's
    Caveat, // thin clean 80s
    Kalam, // thin clean 80s
    Courgette, // 60's
    Mr_Dafoe, // slanted 80s
    Archivo_Black, //// Round cassette tape style
    Russo_One, // Nice Elegant thick 80's
    Press_Start_2P, // Arcade style
    Share_Tech_Mono, // Nice 80's mono spaced
    Audiowide, // Elegant 80s Art Deco style
} from 'next/font/google';

// font configurations
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // All weights
    style: ['normal', 'italic'], // Both normal and italic
});

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' });
const kalam = Kalam({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-kalam',
});
const courgette = Courgette({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-courgette',
});

const mrDafoe = Mr_Dafoe({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-mr-dafoe',
});

// Round cassette tape style
const archivoBlack = Archivo_Black({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-archivo-black',
});

// Nice Elegant thick 80's
const russoOne = Russo_One({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-russo-one',
});

// Arcade style
const pressStart = Press_Start_2P({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-press-start',
});

// Nice 80's mono spaced
const shareTechMono = Share_Tech_Mono({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-share-tech-mono',
});

// Elegant 80s Art Deco style
const audiowide = Audiowide({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-audiowide',
});

function MyApp({ Component, pageProps }: AppProps) {

    const router = useRouter();

    return (
        <main
            className={`
                ${inter.variable}
                ${orbitron.variable} 
                ${caveat.variable}
                ${kalam.variable}
                ${courgette.variable}
                ${mrDafoe.variable}
                ${archivoBlack.variable} 
                ${russoOne.variable} 
                ${pressStart.variable} 
                ${shareTechMono.variable} 
                ${audiowide.variable}`}>

            <ThemeProvider>
                {router.pathname === '/landing' ? (
                    <Component {...pageProps} />
                ) : (
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                )}
            </ThemeProvider>

        </main>
    );
}
export default MyApp;
