import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const TestBackground = () => {
    const { currentDecade } = useTheme();

    if (currentDecade !== '1980s') return null;

    const gridAnimation = `
        @keyframes gridMove {
        from { transform: perspective(500px) rotateX(60deg) translateY(0); }
        to { transform: perspective(500px) rotateX(60deg) translateY(40px); }
        }
    `;

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* CSS Animation */}
            <style jsx>{gridAnimation}</style>

            {/* Stars */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Larger glowing stars */}
                <div
                    className="absolute w-2 h-2 bg-white rounded-full top-[10%] left-[20%] opacity-90"
                    style={{
                        boxShadow: '0 0 5px 2px rgba(255, 255, 255, 0.4)',
                    }}></div>
                <div
                    className="absolute w-3 h-3 bg-white rounded-full top-[30%] left-[80%] opacity-90"
                    style={{
                        boxShadow: '0 0 8px 3px rgba(255, 255, 255, 0.5)',
                    }}></div>
                <div
                    className="absolute w-1.5 h-1.5 bg-white rounded-full top-[15%] left-[50%] opacity-85"
                    style={{
                        boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.3)',
                    }}></div>
                <div
                    className="absolute w-2.5 h-2.5 bg-white rounded-full top-[25%] left-[10%] opacity-90"
                    style={{
                        boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.4)',
                    }}></div>
                <div className="absolute w-1 h-1 bg-white rounded-full top-[5%] left-[30%] opacity-80"></div>
                <div
                    className="absolute w-2 h-2 bg-white rounded-full top-[18%] left-[70%] opacity-90"
                    style={{
                        boxShadow: '0 0 5px 2px rgba(255, 255, 255, 0.4)',
                    }}></div>
                <div className="absolute w-1 h-1 bg-white rounded-full top-[22%] left-[40%] opacity-80"></div>
                <div
                    className="absolute w-1.5 h-1.5 bg-white rounded-full top-[8%] left-[60%] opacity-85"
                    style={{
                        boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.3)',
                    }}></div>

                {/* Additional stars for a fuller sky */}
                <div className="absolute w-1 h-1 bg-white rounded-full top-[12%] left-[35%] opacity-70"></div>
                <div className="absolute w-1 h-1 bg-white rounded-full top-[28%] left-[88%] opacity-75"></div>
                <div className="absolute w-1 h-1 bg-white rounded-full top-[3%] left-[55%] opacity-70"></div>
                <div className="absolute w-1 h-1 bg-white rounded-full top-[31%] left-[15%] opacity-75"></div>
                <div className="absolute w-1 h-1 bg-white rounded-full top-[7%] left-[75%] opacity-70"></div>
                <div className="absolute w-1 h-1 bg-white rounded-full top-[16%] left-[28%] opacity-60"></div>
            </div>

            {/* Enhanced mountains with gradient for better depth */}
            <div className="absolute bottom-[40vh] left-0 w-full pointer-events-none">
                <div className="relative">
                    {/* Back mountains (slightly lighter) */}
                    {/* <svg
                        viewBox="0 0 1440 180"
                        className="w-full h-auto absolute bottom-0">
                        <path
                            d="M0,180 L0,120 L180,140 L300,80 L480,110 L600,60 L720,100 L900,70 L1080,110 L1200,60 L1320,90 L1440,70 L1440,180 Z"
                            fill="#3a3a3a"
                        />
                    </svg> */}

                    {/* Front mountains (darker) */}
                    {/* <svg
                        viewBox="0 0 1440 160"
                        className="w-full h-auto relative">
                        <path
                            d="M0,160 L0,100 L120,120 L240,60 L360,100 L480,40 L600,80 L720,20 L840,60 L960,40 L1080,80 L1200,20 L1320,60 L1440,20 L1440,160 Z"
                            fill="#272727"
                        />
                    </svg> */}
                </div>
            </div>

            {/* Horizon line with enhanced glow */}
            <div
                className="absolute bottom-[38vh] left-0 w-full h-[3px] pointer-events-none opacity-20"
                style={{
                    // current
                    background:
                        'linear-gradient(to right, #f472b6, #4f46e5, #f472b6)', // Deep indigo middle
                    boxShadow: '0 0 20px 5px rgba(236, 72, 153, 0.9)', // Pink shadow

                    // Rich Blue
                    // background:
                    //     'linear-gradient(to right, #f472b6, #2563eb, #f472b6)', // Rich blue middle
                    // boxShadow: '0 0 20px 5px rgba(79, 70, 229, 0.9)', // Indigo shadow
                    // Cyan Accents
                    // background:
                    //     'linear-gradient(to right, #f472b6, #06b6d4, #f472b6)', // Cyan middle
                    // boxShadow: '0 0 20px 5px rgba(6, 182, 212, 0.9)', // Cyan shadow
                    // Blue to Pink
                    // background:
                    //     'linear-gradient(to right, #3b82f6, #ec4899, #3b82f6)', // Blue edges, pink middle
                    // boxShadow: '0 0 20px 5px rgba(59, 130, 246, 0.9)', // Blue shadow
                    // Cyan to purple
                    // background:
                    //     'linear-gradient(to right, #67e8f9, #9333ea, #67e8f9)', // Cyan edges, purple middle
                    // boxShadow: '0 0 20px 5px rgba(103, 232, 249, 0.9)', // Cyan shadow
                    //Neon Blue
                    // background:
                    //     'linear-gradient(to right, #38bdf8, #2563eb, #38bdf8)', // Light blue to deep blue
                    // boxShadow: '0 0 20px 5px rgba(56, 189, 248, 0.9)', // Light blue shad
                    // Pink-Cyan Blend
                    // background:
                    //     'linear-gradient(to right, #ec4899, #22d3ee, #ec4899)', // Pink to cyan
                    // boxShadow:
                    //     '0 0 20px 7px rgba(236, 72, 153, 0.7), 0 0 10px 3px rgba(34, 211, 238, 0.7)', // Dual shadow
                    // Deep Purple-Blue Fusion
                    // background:
                    //     'linear-gradient(to right, #c026d3, #1e40af, #c026d3)', // Fuchsia to deep blue
                    // boxShadow: '0 0 20px 5px rgba(192, 38, 211, 0.8)', // Fuchsia shadow
                }}></div>

            {/* Grid floor - static, extending to horizon */}
            <div className="absolute bottom-0 left-0 w-full h-[38vh] pointer-events-none">
                <div
                    className="w-full h-full"
                    style={{
                        background:
                            'linear-gradient(to right, rgba(25, 93, 251, 0.853) 1px, transparent 1px) 0 0 / 50px 50px, linear-gradient(to bottom, rgba(25, 93, 251, 0.853) 1px, transparent 1px) 0 0 / 50px 50px',
                        transform: 'perspective(400px) rotateX(70deg)',
                        transformOrigin: 'top center',
                        opacity: 0.25,
                        // animation: 'gridMove 30s infinite linear',
                    }}></div>
            </div>

            {/* Subtle overlay gradient for better depth perception */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(circle at center, transparent 1000%, rgba(0,0,0,0.4) 80%)',
                    opacity: 0.6,
                }}></div>
        </div>
    );
};

export default TestBackground;
