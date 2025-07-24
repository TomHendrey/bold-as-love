import Head from 'next/head';

import LogoGold from '@/components/svgs/logos/LogoGold';

const Home = () => {
    return (
        <>
            <Head>
                <title>Bold As Love - Wedding Band</title>
            </Head>
            <div className="min-h-screen text-white">
                <main>
                    <section
                        id="hero"
                        className="relative flex min-h-screen items-center justify-start px-8 lg:px-16"
                    >
                        {/* Background image */}
                        <div className="absolute inset-0">
                            <img
                                src="/images/band-hero-image5.jpg"
                                alt="professional full band image"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        {/* Content overlay */}
                        <div className="relative z-10 ml-16 lg:ml-60">
                            {/* Logo container - fixed width for consistent centering */}
                            <div className="mb-10 flex w-[490px] justify-center">
                                <LogoGold className="h-64 lg:h-80" />
                            </div>
                            {/* Text content - same max width */}
                            <div className="w-[490px] text-left">
                                <h1
                                    className="mb-8 font-stix-two-text text-3xl italic text-white lg:text-5xl"
                                    style={{ lineHeight: '1.2' }}
                                >
                                    The Soundtrack to Your Perfect Day...
                                </h1>
                                <p
                                    className="lg:text-1xl mb-12 w-[510px] font-open-sans text-xl leading-relaxed text-gray-200"
                                    style={{
                                        transform: 'scaleX(0.95)',
                                        transformOrigin: 'left',
                                    }}
                                >
                                    Bold As Love are a professional wedding and function band
                                    bringing decades of music to life for your celebration
                                </p>
                                <div className="text-center">
                                    <button
                                        className={
                                            'rounded-2xl border-2 border-white bg-gradient-to-r from-black/30 to-transparent' +
                                            ' px-8 py-4 font-stix-two-text text-3xl text-white transition-all duration-300 hover:bg-white' +
                                            'hover:text-gray-900'
                                        }
                                        style={{
                                            transform: 'scaleX(0.95)',
                                        }}
                                    >
                                        Get Your Quote
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* About Section - Updated with your existing content */}
                    <section
                        id="about"
                        className={
                            'flex min-h-screen scroll-mt-20 items-center justify-center ' +
                            'bg-[#0d1117] px-8 py-20 lg:px-16'
                        }
                    >
                        <div className="mx-auto max-w-4xl">
                            {/* Header */}
                            <div className="mb-16 text-center">
                                <h2 className="mb-4 font-stix-two-text text-4xl italic lg:text-5xl">
                                    About Bold As Love
                                </h2>
                                <p className="font-open-sans text-xl italic text-gray-300">
                                    The wedding band that brings decades of music to life
                                </p>
                            </div>

                            {/* Our Story */}
                            <div className="mb-16">
                                <div className="rounded-lg border border-gray-700/50 bg-gray-800/30 p-8">
                                    <h3 className="mb-6 font-stix-two-text text-2xl italic">
                                        Our Story
                                    </h3>
                                    <p className="mb-6 font-open-sans text-lg leading-relaxed text-gray-200">
                                        Bold As Love is more than just a wedding band - we're
                                        musical time travelers. With our unique decade-themed
                                        approach, we transform your special day into an
                                        unforgettable journey through the greatest music of all
                                        time.
                                    </p>
                                    <p className="font-open-sans text-lg leading-relaxed text-gray-200">
                                        From the raw energy of 80s rock to the smooth grooves of 70s
                                        disco, from the timeless classics of the 60s to today's
                                        chart-toppers, we deliver authentic performances that keep
                                        your guests dancing all night long.
                                    </p>
                                </div>
                            </div>

                            {/* Two column features */}
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                <div className="rounded-lg border border-gray-700/50 bg-gray-800/30 p-8">
                                    <h4 className="mb-4 font-stix-two-text text-xl italic">
                                        Professional Musicians
                                    </h4>
                                    <p className="font-open-sans leading-relaxed text-gray-200">
                                        Each band member brings years of experience and passion for
                                        their craft, ensuring every performance meets the highest
                                        standards.
                                    </p>
                                </div>
                                <div className="rounded-lg border border-gray-700/50 bg-gray-800/30 p-8">
                                    <h4 className="mb-4 font-stix-two-text text-xl italic">
                                        Personalized Experience
                                    </h4>
                                    <p className="font-open-sans leading-relaxed text-gray-200">
                                        We work closely with couples to curate the perfect setlist
                                        that reflects their musical taste and creates the ideal
                                        atmosphere.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section
                        id="services"
                        className={
                            'flex min-h-screen items-center justify-center px-8 py-20 lg:px-16 ' +
                            'scroll-mt-20 bg-gradient-to-b from-gray-900/50 to-[#0d1117]'
                        }
                    >
                        <div className="mx-auto max-w-5xl">
                            {/* Header */}
                            <div className="mb-16 text-center">
                                <h2 className="mb-4 font-stix-two-text text-4xl italic lg:text-5xl">
                                    Our Services
                                </h2>
                                <p className="font-open-sans text-xl italic text-gray-300">
                                    Everything you need to make your celebration unforgettable
                                </p>
                            </div>

                            {/* Services Grid */}
                            <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
                                <div className="rounded-lg border border-gray-700/50 bg-gray-800/30 p-8 transition-colors hover:border-gray-600/50">
                                    <h3 className="mb-4 font-stix-two-text text-2xl italic">
                                        Wedding Receptions
                                    </h3>
                                    <p className="mb-4 font-open-sans text-gray-200">
                                        Our signature service - creating the perfect atmosphere for
                                        your special day with music spanning multiple decades.
                                    </p>
                                    <ul className="space-y-2 font-open-sans text-gray-200">
                                        <li>• Ceremony music</li>
                                        <li>• Cocktail hour entertainment</li>
                                        <li>• Reception dancing</li>
                                        <li>• Special requests welcome</li>
                                    </ul>
                                </div>

                                <div className="rounded-lg border border-gray-700/50 bg-gray-800/30 p-8 transition-colors hover:border-gray-600/50">
                                    <h3 className="mb-4 font-stix-two-text text-2xl italic">
                                        Corporate Events
                                    </h3>
                                    <p className="mb-4 font-open-sans text-gray-200">
                                        Professional entertainment for company parties, launches,
                                        and celebrations.
                                    </p>
                                    <ul className="space-y-2 font-open-sans text-gray-200">
                                        <li>• Company parties</li>
                                        <li>• Product launches</li>
                                        <li>• Award ceremonies</li>
                                        <li>• Team building events</li>
                                    </ul>
                                </div>

                                <div className="rounded-lg border border-gray-700/50 bg-gray-800/30 p-8 transition-colors hover:border-gray-600/50">
                                    <h3 className="mb-4 font-stix-two-text text-2xl italic">
                                        Private Parties
                                    </h3>
                                    <p className="mb-4 font-open-sans text-gray-200">
                                        Bringing the party to your private celebrations with our
                                        full decade experience.
                                    </p>
                                    <ul className="space-y-2 font-open-sans text-gray-200">
                                        <li>• Birthday parties</li>
                                        <li>• Anniversary celebrations</li>
                                        <li>• Holiday parties</li>
                                        <li>• Special occasions</li>
                                    </ul>
                                </div>

                                <div className="rounded-lg border border-gray-700/50 bg-gray-800/30 p-8 transition-colors hover:border-gray-600/50">
                                    <h3 className="mb-4 font-stix-two-text text-2xl italic">
                                        Venue Performances
                                    </h3>
                                    <p className="mb-4 font-open-sans text-gray-200">
                                        Regular performances at pubs, clubs, and entertainment
                                        venues.
                                    </p>
                                    <ul className="space-y-2 font-open-sans text-gray-200">
                                        <li>• Pub gigs</li>
                                        <li>• Club performances</li>
                                        <li>• Festival appearances</li>
                                        <li>• Regular residencies</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="text-center">
                                <h3 className="mb-4 font-stix-two-text text-2xl italic">
                                    Ready to Book?
                                </h3>
                                <p className="mb-8 font-open-sans text-gray-200">
                                    Contact us to discuss your event and create a customized musical
                                    experience.
                                </p>
                                <button
                                    className={
                                        'rounded-2xl border-2 border-white bg-gradient-to-r from-black/30 ' +
                                        'to-transparent px-12 py-4 font-stix-two-text text-xl text-white' +
                                        'transition-all duration-300 hover:bg-white hover:text-gray-900'
                                    }
                                >
                                    Get A Quote
                                </button>
                            </div>
                        </div>
                    </section>
                    {/* Contact Section */}
                    <section
                        id="contact"
                        className={
                            'flex min-h-screen items-center justify-center px-8 py-20 ' +
                            'scroll-mt-20 bg-[#0d1117] lg:px-16'
                        }
                    >
                        <div className="mx-auto max-w-6xl">
                            {/* Header */}
                            <div className="mb-16 text-center">
                                <h2
                                    className={
                                        'mb-4 font-stix-two-text text-4xl italic lg:text-5xl'
                                    }
                                >
                                    Contact Us
                                </h2>
                                <p className="font-open-sans text-xl italic text-gray-300">
                                    Let's discuss how we can make your event unforgettable
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                                {/* Contact Form */}
                                <div
                                    className={
                                        'rounded-lg border border-gray-700/50 bg-gray-800/30 p-8'
                                    }
                                >
                                    <h3 className={'mb-6 font-stix-two-text text-2xl italic'}>
                                        Get In Touch
                                    </h3>
                                    <form className="space-y-4">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className={
                                                    'mb-2 block font-open-sans text-sm font-medium'
                                                }
                                            >
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                className={
                                                    'w-full border bg-gray-800 px-3 py-2 ' +
                                                    'rounded-md border-gray-700 focus:outline-none' +
                                                    'focus:ring-2 focus:ring-blue-500' +
                                                    'font-open-sans focus:border-transparent'
                                                }
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="email"
                                                className={
                                                    'mb-2 block font-open-sans text-sm font-medium'
                                                }
                                            >
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className={
                                                    'w-full border bg-gray-800 px-3 py-2 ' +
                                                    'rounded-md border-gray-700 focus:outline-none' +
                                                    'focus:ring-2 focus:ring-blue-500' +
                                                    'font-open-sans focus:border-transparent'
                                                }
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="eventDate"
                                                className={
                                                    'mb-2 block font-open-sans text-sm font-medium'
                                                }
                                            >
                                                Event Date
                                            </label>
                                            <input
                                                type="date"
                                                id="eventDate"
                                                name="eventDate"
                                                className={
                                                    'w-full border bg-gray-800 px-3 py-2 ' +
                                                    'rounded-md border-gray-700 focus:outline-none' +
                                                    'focus:ring-2 focus:ring-blue-500' +
                                                    'font-open-sans focus:border-transparent'
                                                }
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="eventType"
                                                className={
                                                    'mb-2 block font-open-sans text-sm font-medium'
                                                }
                                            >
                                                Event Type
                                            </label>
                                            <select
                                                id="eventType"
                                                name="eventType"
                                                className={
                                                    'w-full border bg-gray-800 px-3 py-2 ' +
                                                    'rounded-md border-gray-700 focus:outline-none' +
                                                    'focus:ring-2 focus:ring-blue-500' +
                                                    'font-open-sans focus:border-transparent'
                                                }
                                            >
                                                <option value="">Select an event type</option>
                                                <option value="wedding">Wedding</option>
                                                <option value="corporate">Corporate Event</option>
                                                <option value="private">Private Party</option>
                                                <option value="venue">Venue Performance</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="message"
                                                className={
                                                    'mb-2 block font-open-sans text-sm font-medium'
                                                }
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                placeholder="Tell us about your event, preferred music style, guest count, etc."
                                                className={
                                                    'w-full border bg-gray-800 px-3 py-2 ' +
                                                    'rounded-md border-gray-700 focus:outline-none' +
                                                    'focus:ring-2 focus:ring-blue-500' +
                                                    'resize-vertical font-open-sans focus:border-transparent'
                                                }
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className={
                                                'w-full bg-gradient-to-r from-black/30 px-6 py-3 ' +
                                                'rounded-2xl border-2 border-white to-transparent' +
                                                'font-stix-two-text text-lg text-white hover:bg-white' +
                                                'transition-all duration-300 hover:text-gray-900'
                                            }
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>

                                {/* Contact Information */}
                                <div className="space-y-6">
                                    <div
                                        className={
                                            'rounded-lg border border-gray-700/50 bg-gray-800/30 p-6'
                                        }
                                    >
                                        <h3 className={'mb-4 font-stix-two-text text-2xl italic'}>
                                            Contact Information
                                        </h3>
                                        <div className="space-y-4 font-open-sans">
                                            <div>
                                                <h4 className="mb-1 text-lg font-medium">Email</h4>
                                                <p className="text-gray-300">
                                                    bookings@boldaslove.com
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="mb-1 text-lg font-medium">Phone</h4>
                                                <p className="text-gray-300">+44 (0) 7123 456789</p>
                                            </div>
                                            <div>
                                                <h4 className="mb-1 text-lg font-medium">
                                                    Social Media
                                                </h4>
                                                <p className="text-gray-300">@boldaslove.music</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={
                                            'rounded-lg border border-gray-700/50 bg-gray-800/30 p-6'
                                        }
                                    >
                                        <h3 className={'mb-4 font-stix-two-text text-2xl italic'}>
                                            Coverage Area
                                        </h3>
                                        <p className="mb-3 font-open-sans text-gray-200">
                                            We're based in London and regularly perform throughout:
                                        </p>
                                        <ul className="space-y-1 font-open-sans text-gray-200">
                                            <li>• Greater London</li>
                                            <li>• South East England</li>
                                            <li>• Home Counties</li>
                                            <li>• UK-wide by arrangement</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer>
                    <p>Contact us for bookings</p>
                </footer>
            </div>
        </>
    );
};

export default Home;
