import Head from 'next/head';
//import Logo from '@/components/svgs/Logo';
import LogoGold from '@/components/svgs/logos/LogoGold';

const LandingPage = () => {
    return (
        <>
            <Head>
                <title>Bold As Love - Wedding Band</title>
            </Head>

            <div className='min-h-screen bg-[#0d1117] text-white'>
                <header>
                    <nav>Bold As Love Navigation</nav>
                </header>


                <main>
                    <section className="min-h-screen relative flex items-center justify-start px-8 lg:px-16">
                        {/* Background image */}
                        <div className="absolute inset-0">
                            <img
                                src="/images/band-hero-image.jpg"
                                alt="professional full band image"
                                className="w-full h-full object-cover" />
                        </div>

                        {/* Content overlay */}
                        <div className="relative z-10 text-left max-w-2xl ml-14 lg:ml-20">
                            {/* Logo */}
                            <div className="mb-12" style={{
                                // filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.8)) drop-shadow(0 0 40px rgba(251, 191, 36, 0.3)'
                            }}>
                                <LogoGold className='h-64 lg:h-80' />
                            </div>

                            {/* Text content */}
                            <h1 className="font-stix-two-text text-3xl lg:text-5xl mb-8 leading-tight text-white italic">
                                The Soundtrack to your perfect day ...
                            </h1>

                            <p className='font-open-sans text-xl lg:text-2xl text-gray-200 mb-12 font-light max-w-2xl' >
                                Professional Wedding Band bringing decades of music to life for your celebration
                            </p>

                            <button className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-amber-200 px-10 py-4 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-amber-300/30">
                                Get Your Quote
                            </button>
                        </div>
                    </section>
                </main>


                <footer>
                    <p>Contact us for bookings</p>
                </footer>
            </div>
        </>

    )
};

export default LandingPage;

