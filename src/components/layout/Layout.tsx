import React, { ReactNode } from 'react';
import { useTheme } from '@/context/ThemeContext';
import DecadeSwitcher from '@/components/ui/DecadeSwitcher';

import Navigation from '@/components/navigation/Navigation';
import { useRouter } from 'next/router';

// children with type ReactNode allows the component to receive and render any valid React content
interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { theme, currentDecade } = useTheme();
    const router = useRouter();
    const isHomePage = router.pathname === '/';

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
            <main className="container mx-auto p-4">
                {children}
            </main>


            {/* Footer */}
            <footer
                className={`p-4 bg-[#0a0c10] border-t border-gray-800 font-inter`}>
                <div className="container mx-auto text-center">
                    <p>
                        © {new Date().getFullYear()} Bold As Love Wedding Band
                    </p>
                    <p className="text-sm mt-2">@boldaslove.music</p>
                </div>
            </footer>
        </div >
    );
};
export default Layout;
