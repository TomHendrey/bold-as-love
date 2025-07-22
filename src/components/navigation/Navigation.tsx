import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
    return (
        <nav className='bg-[#0a0c10] border-b border-r-gray-800 px-4 py-4'>
            <div className='container mx-auto flex justify-between intems-center'>

                {/* logo/Band */}
                <Link href="/" className='text-xl font-bold tec=xt-white hover:text-gray-300'>
                    Bold As Love
                </Link>

                {/* Navigation Links */}
                <div className='hidden md:flex space-x-6'>

                    <Link href="/" className="text-white hover:text-gray-300 transition-colors">
                        Home

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

        </nav>
    );
};

export default Navigation;
