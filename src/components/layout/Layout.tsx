import React, { ReactNode } from 'react';
import { useTheme } from '@/context/ThemeContext';
import DecadeSwitcher from '@/components/ui/DecadeSwitcher';
import Logo from '@/components/svgs/Logo';

// children with type ReactNode allows the component to receive and render any valid React content
interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { theme, currentDecade } = useTheme();

    return (
        <div className={`min-h-screen bg-gray-900 text-white transition-colors duration-500`}>
            {/* Simple header with just navigation */}
            <header className={`p-4 ${theme.primary}`}>
                <div className="container mx-auto flex justify-end">
                    <nav className="hidden md:block">
                        {/* nav bar */}
                        <ul className="flex space-x-6">
                            <li>
                                <a
                                    href="/"
                                    className="hover:underline">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="hover:underline">
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/services"
                                    className="hover:underline">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/gallery"
                                    className="hover:underline">
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="hover:underline">
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
            <div className="flex justify-center py-8">
                <Logo className="h-[34rem]" />
            </div>

            {/* Main content area */}
            <div className="py-4">
                <div className="container mx-auto">
                    <div className="mb-6">
                        <h2 className="text-center text-xl mb-2">Select A Decade</h2>
                        <DecadeSwitcher />
                    </div>
                    <main className={`p-4 ${theme.text}`}>{children}</main>
                </div>
            </div>

            {/* Footer */}
            <footer className={`p-4 ${theme.primary}`}>
                <div className="container mx-auto text-center">
                    <p>© {new Date().getFullYear()} Bold As Love Wedding Band</p>
                    <p className="text-sm mt-2">@boldaslove.music</p>
                </div>
            </footer>
        </div>
    );
};
export default Layout;
