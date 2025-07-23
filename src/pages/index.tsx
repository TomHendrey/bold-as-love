import Head from 'next/head';
import LogoGold from '@/components/svgs/logos/LogoGold';

const Home = () => {
    return (
        <>
            <Head>
                <title>Bold As Love - Wedding Band</title>
            </Head>
            <div className='min-h-screen bg-[#0d1117] text-white'>

                <main>
                    <section className="min-h-screen relative flex items-center justify-start px-8 lg:px-16">
                        {/* Background image */}
                        <div className="absolute inset-0">
                            <img
                                src="/images/band-hero-image5.jpg"
                                alt="professional full band image"
                                className="w-full h-full object-cover" />
                        </div>
                        {/* Content overlay */}
                        <div className="relative z-10 ml-16 lg:ml-60">
                            {/* Logo container - fixed width for consistent centering */}
                            <div className="mb-10 flex justify-center w-[490px]" >
                                <LogoGold className='h-64 lg:h-80' />
                            </div>
                            {/* Text content - same max width */}
                            <div className="text-left w-[490px]" >
                                <h1 className="font-stix-two-text text-3xl lg:text-5xl mb-8 text-white italic"
                                    style={{ lineHeight: '1.2' }}
                                >
                                    The Soundtrack to Your Perfect Day...
                                </h1>
                                <p className='font-open-sans text-xl lg:text-1xl text-gray-200 mb-12 w-[510px] leading-relaxed' style={{
                                    transform: 'scaleX(0.95)',
                                    transformOrigin: 'left'
                                }}>
                                    Bold As Love are a professional wedding and function band bringing decades of music to life for your celebration
                                </p>
                                <div className='text-center'>
                                    <button className="bg-gradient-to-r from-black/30 to-transparent border-2 border-white text-white px-8 py-4 rounded-2xl text-3xl font-stix-two-text hover:bg-white hover:text-gray-900 transition-all duration-300"
                                        style={{
                                            transform: 'scaleX(0.95)'
                                        }}>
                                        Get Your Quote
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                {/* <footer> */}
                {/*     <p>Contact us for bookings</p> */}
                {/* </footer> */}
            </div >
        </>
    )
};

export default Home;
