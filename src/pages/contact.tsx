import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-xl italic text-gray-300">
                    Let's discuss how we can make your event unforgettable
                </p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Form */}
                <section className="border border-gray-800 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="eventDate" className="block text-sm font-medium mb-2">
                                Event Date
                            </label>
                            <input
                                type="date"
                                id="eventDate"
                                name="eventDate"
                                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="eventType" className="block text-sm font-medium mb-2">
                                Event Type
                            </label>
                            <select
                                id="eventType"
                                name="eventType"
                                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                            <label htmlFor="venue" className="block text-sm font-medium mb-2">
                                Venue/Location
                            </label>
                            <input
                                type="text"
                                id="venue"
                                name="venue"
                                placeholder="e.g., The Ivy House, London"
                                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Tell us about your event, preferred music style, guest count, etc."
                                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </section>

                {/* Contact Information */}
                <section className="space-y-6">
                    <div className="border border-gray-800 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-medium text-lg mb-1">Email</h3>
                                <p className="text-gray-300">bookings@boldaslove.com</p>
                            </div>
                            <div>
                                <h3 className="font-medium text-lg mb-1">Phone</h3>
                                <p className="text-gray-300">+44 (0) 7123 456789</p>
                            </div>
                            <div>
                                <h3 className="font-medium text-lg mb-1">Social Media</h3>
                                <p className="text-gray-300">@boldaslove.music</p>
                            </div>
                        </div>
                    </div>

                    <div className="border border-gray-800 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Quick Response</h2>
                        <p className="text-gray-300 mb-4">
                            We typically respond to booking inquiries within 24 hours.
                            For urgent requests, please call us directly.
                        </p>
                        <div className="bg-gray-800/50 p-4 rounded-md">
                            <h3 className="font-medium mb-2">Booking Timeline</h3>
                            <p className="text-sm text-gray-300">
                                We recommend booking at least 3-6 months in advance
                                for weddings, though we can sometimes accommodate
                                shorter notice for other events.
                            </p>
                        </div>
                    </div>

                    <div className="border border-gray-800 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Coverage Area</h2>
                        <p className="text-gray-300 mb-3">
                            We're based in London and regularly perform throughout:
                        </p>
                        <ul className="text-gray-300 space-y-1">
                            <li>• Greater London</li>
                            <li>• South East England</li>
                            <li>• Home Counties</li>
                            <li>• UK-wide by arrangement</li>
                        </ul>
                    </div>
                </section>
            </div>

            {/* Additional CTA Section */}
            <section className="text-center mt-12 bg-gray-800/30 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Ready to Book Bold As Love?</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Don't let your special day pass without the perfect soundtrack.
                    Get in touch today and let's start planning an unforgettable musical experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="tel:+447123456789"
                        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                        Call Now
                    </a>
                    <a
                        href="mailto:bookings@boldaslove.com"
                        className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-colors font-medium"
                    >
                        Email Us
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Contact;
