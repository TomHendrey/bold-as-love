import React, { ReactNode } from 'react';
import { useTheme } from '@/context/ThemeContext';
import DecadeSwitcher from '@/components/ui/DecadeSwitcher';
import Logo from '@/components/svgs/Logo';
import { useDecadeFonts } from '@/hooks/usDecadeFonts';

// children with type ReactNode allows the component to receive and render any valid React content
interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { theme, currentDecade } = useTheme();
    const fonts = useDecadeFonts();

    return (
        <div className={`min-h-screen bg-[#0d1117] text-white transition-colors duration-500`}>
            {/* Simple header with just navigation */}
            <header className={`p-4 bg-[#0a0c10] border-b border-gray-800`}>
                <div className="container mx-auto flex justify-end">
                    <nav className={`hidden md:block {fonts.body}`}>
                        {/* nav bar */}
                        <ul className="flex space-x-6">
                            <li>
                                <a href="/" className="hover:underline">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="hover:underline">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="hover:underline">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/gallery" className="hover:underline">
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="block md:hidden">
                        <button className="text-white">Menu</button>
                    </div>
                </div>
            </header>

            {/* Logo section */}
            <div className="flex justify-center py-8 overflow-visible">
                <Logo className="h-[28rem] overflow-visible " />
            </div>

            {/* Main content area */}
            <div className="py-4">
                <div className="container mx-auto">
                    <div className="mb-6">
                        <h2 className="text-5xl m-8 font-flash-back text-center neon-blue">Select A Decade</h2>
                        <DecadeSwitcher />
                        <div className="mx-auto max-w-4xl">
                            {/* <h1 className="text-4xl font-gloria-hallelujah m-12 text-center">Bold As Love</h1>

                            <p className="text-left text-2xl leading-relaxed font-audiowide mb-8">
                                Bold As Love is a premier wedding band that brings the best music from every era to your
                                special day. With our unique decade-themed approach, we create unforgettable
                                performances that perfectly match your musical tastes. Whether you want the raw energy
                                of 80s rock, the smooth grooves of 70s disco, or the timeless classics of the 60s, we
                                deliver an authentic experience that keeps your guests dancing all night long.
                            </p> */}
                        </div>
                    </div>
                    <main className={`p-4 ${theme.text} min-h-[80vh] font-inter`}>{children}</main>
                    <h1 className="text-4xl font-orbitron m-12 text-center">Orbitron - ORBITRON</h1>
                    <h1 className="text-4xl font-caveat m-12 text-center">Caveat - CAVEAT</h1>
                    <h1 className="text-4xl font-kalam m-12 text-center">Kalam - KALAM</h1>
                    <h1 className="text-4xl font-courgette m-12 text-center">Courgette - GOURGETTE</h1>
                    <h1 className="text-4xl font-mr-dafoe m-12 text-center">Mr Defoe - MR DEFOE</h1>
                    <h1 className="text-4xl font-russo-one m-12 text-center">Russo One - RUSSO ONE</h1>
                    <h1 className="text-3xl font-press-start m-12 text-center">Prees Start - PRESS START</h1>
                    <h1 className="text-4xl font-share-tech-mono m-12 text-center">
                        Share Tech Mono - SHARE TECH MONO
                    </h1>
                    <h1 className="text-4xl font-audiowide m-12 text-center">Audiowide - AUDIOWIDE</h1>
                    <p className=" text-4xl text-center m-12 font-inter font-light italic">Bold italic Inter text</p>
                    <p className="text-4xl text-center m-12 font-inter font-light">Light Inter text</p>
                    <h1 className=" text-5xl text-center m-12 font-dead-stock">Dead</h1>
                    <h1 className=" text-5xl text-center m-12 font-brat">Brat</h1>
                    <h1 className=" text-5xl text-center m-12 font-flash-back">Flash Back</h1>
                    <h1 className=" text-5xl text-center m-12 font-indelible">Indelible</h1>
                    <h1 className=" text-5xl text-center m-12 font-last-feast">Feast</h1>
                    <h1 className=" text-5xl text-center m-12 font-streamster">Streamster</h1>
                </div>
            </div>

            {/* Footer */}
            <footer className={`p-4 bg-[#0a0c10] border-t border-gray-800 ${fonts.body}`}>
                <div className="container mx-auto text-center">
                    <p>© {new Date().getFullYear()} Bold As Love Wedding Band</p>
                    <p className="text-sm mt-2">@boldaslove.music</p>
                </div>
            </footer>
        </div>
    );
};
export default Layout;
