import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavLogo from '@/components/svgs/NavLogo';

const Navigation: React.FC = () => {
    const router = useRouter();
    const isHomePage = router.pathname === '/';

    // Smooth scrolling function for homepage
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 0;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset + headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav
            className={`font-open-sans ${
                isHomePage
                    ? 'fixed left-0 right-0 top-0 z-20 bg-black/15 backdrop-blur-sm ' +
                      'border-b border-white/20 px-4 py-4'
                    : 'border-b border-gray-800 bg-[#0a0c10] px-4 py-4'
            }`}
        >
            <div className="container mx-auto flex items-center justify-between pl-2 pr-4">
                {/* Logo */}
                {isHomePage ? (
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="-ml-10 text-white transition-colors hover:text-gray-300"
                    >
                        <NavLogo className="h-8 md:h-10" />
                    </button>
                ) : (
                    <Link
                        href="/"
                        className="-ml-10 text-white transition-colors hover:text-gray-300"
                    >
                        <NavLogo className="h-8 md:h-10" />
                    </Link>
                )}

                {/* Navigation Links */}
                <div className="hidden space-x-6 md:flex">
                    {isHomePage ? (
                        // Homepage: smooth scroll to sections
                        <>
                            <button
                                onClick={() => scrollToSection('hero')}
                                className="text-white transition-colors hover:text-gray-300"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="text-white transition-colors hover:text-gray-300"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('services')}
                                className="text-white transition-colors hover:text-gray-300"
                            >
                                Services
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-white transition-colors hover:text-gray-300"
                            >
                                Contact
                            </button>
                            <Link
                                href="/music"
                                className="text-white transition-colors hover:text-gray-300"
                            >
                                Music
                            </Link>
                            <Link
                                href="/gallery"
                                className="text-white transition-colors hover:text-gray-300"
                            >
                                Gallery
                            </Link>
                        </>
                    ) : (
                        // Other pages: regular navigation
                        <>
                            <Link
                                href="/"
                                className="text-white transition-colors hover:text-gray-300"
                            >
                                Home
                            </Link>
                            <Link
                                href="/music"
                                className="text-white transition-colors hover:text-gray-300"
                            >
                                Music
                            </Link>
                            <Link
                                href="/about"
                                className="text-white transition-colors hover:text-gray-300"
                            >
                                About
                            </Link>
                            <Link
                                href="/services"
                                className="text-white transition-colors hover:text-gray-300"
                            >
                                Services
                            </Link>
                            <Link
                                href="/gallery"
                                className="text-white transition-colors hover:text-gray-300"
                            >
                                Gallery
                            </Link>
                            <Link
                                href="/contact"
                                className="text-white transition-colors hover:text-gray-300"
                            >
                                Contact
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile menu button */}
                <button className="text-white md:hidden">Menu</button>
            </div>
        </nav>
    );
};

export default Navigation;
