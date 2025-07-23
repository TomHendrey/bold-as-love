import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavLogo from '@/components/svgs/NavLogo';

const Navigation: React.FC = () => {
    const router = useRouter();
    const isHomePage = router.pathname === '/';

    return (
        <nav className={`font-open-sans ${isHomePage
            ? 'absolute top-0 left-0 right-0 z-20 bg-black/15 drop-blur-sm border-b border-white/20 px-4 py-4'
            : 'bg-[#0a0c10] border-b border-gray-800 px-4 py-4'
            }`
        } >
            <div className='container mx-auto flex justify-between items-center pl-2 pr-4'>

                {/* logo/Band */}
                <Link href="/" className='text-white hover:text-gray-300 transition-colors -ml-10'>
                    <NavLogo className="h-8 md:h-10" />
                </Link>

                {/* Navigation Links */}
                <div className='hidden md:flex space-x-6'>

                    <Link href="/" className="text-white hover:text-gray-300 transition-colors">
                        Home

                    </Link>
                    <Link href="/music" className="text-white hover:text-gray-300 transition-colors">
                        Music
                    </Link>

                    <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
                        About
                    </Link>

                    <Link href="/services" className="text-white hover:text-gray-300 transition-colors">
                        Services
                    </Link>

                    <Link href="/gallery" className="text-white hover:text-gray-300 transition-colors">
                        Gallery
                    </Link>

                    <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
                        Contact
                    </Link>

                </div>

                {/* Mobile menu button (we'll build this later) */}
                <button className="md:hidden text-white">
                    Menu
                </button>

            </div>

        </nav >
    );
};

export default Navigation;
