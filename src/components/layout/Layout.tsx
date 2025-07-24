import React, { ReactNode } from 'react';
import { useTheme } from '@/context/ThemeContext';
import DecadeSwitcher from '@/components/ui/DecadeSwitcher';

import Navigation from '@/components/navigation/Navigation';
import { useRouter } from 'next/router';
import NavLogo from '@/components/svgs/NavLogo';

// children with type ReactNode allows the component to receive and render any valid React content
interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { theme, currentDecade } = useTheme();
    const router = useRouter();
    const isHomePage = router.pathname === '/';

    // Smooth scrolling
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    if (isHomePage) {
        // Home page: just Navigation + children (no container/footer)
        return (
            <div className="min-h-screen bg-[#0d1117] text-white">
                <Navigation />
                {children}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0d1117] text-white">
            <Navigation />
            <main className="container mx-auto p-4">{children}</main>

            {/* Footer */}
            <footer className={`border-t border-gray-800 bg-[#0a0c10] p-4 font-inter`}>
                <div className="container mx-auto text-center">
                    <p>© {new Date().getFullYear()} Bold As Love Wedding Band</p>
                    <p className="mt-2 text-sm">@boldaslove.music</p>
                </div>
            </footer>
        </div>
    );
};
export default Layout;
