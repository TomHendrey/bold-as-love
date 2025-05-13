import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const TestBackground = () => {
    const { currentDecade } = useTheme();

    if (currentDecade !== '1980s') return null;

    return (
        <div
            className="fixed inset-0 overflow-hidden pointer-events-none"
            style={{ zIndex: -10 }}>
            {/* Stars */}
            <div className="absolute inset-0">
                <div className="absolute w-2 h-2 bg-white rounded-full top-[10%] left-[20%] opacity-70"></div>
                <div className="absolute w-2 h-2 bg-white rounded-full top-[30%] left-[80%] opacity-90"></div>
                <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-[15%] left-[50%] opacity-60"></div>
                <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-[25%] left-[10%] opacity-80"></div>
                <div className="absolute w-1 h-1 bg-white rounded-full top-[5%] left-[30%] opacity-60"></div>
                <div className="absolute w-2 h-2 bg-white rounded-full top-[18%] left-[70%] opacity-70"></div>
                <div className="absolute w-1 h-1 bg-white rounded-full top-[22%] left-[40%] opacity-50"></div>
                <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-[8%] left-[60%] opacity-80"></div>
            </div>

            {/* Mountains with pixelated look */}
            <div className="absolute bottom-[40vh] left-0 w-full">
                <svg viewBox="0 0 1440 160" className="w-full h-auto">
                    <path
                        d="M0,160 L0,100 L120,120 L240,60 L360,100 L480,40 L600,80 L720,20 L840,60 L960,40 L1080,80 L1200,20 L1320,60 L1440,20 L1440,160 Z"
                        fill="#333333"
                    />
                </svg>
            </div>

            {/* Horizon line with glow */}
            <div
                className="absolute bottom-[40vh] left-0 w-full h-[2px]"
                style={{
                    background:
                        'linear-gradient(to right, #f472b6, #9333ea, #f472b6)',
                    boxShadow: '0 0 15px 3px rgba(236, 72, 153, 0.8)',
                }}></div>

            {/* Grid floor */}
            <div className="absolute bottom-0 left-0 w-full h-[40vh]">
                <div
                    className="w-full h-full"
                    style={{
                        background:
                            'linear-gradient(to right, cyan 1px, transparent 1px) 0 0 / 40px 40px, linear-gradient(to bottom, cyan 1px, transparent 1px) 0 0 / 40px 40px',
                        transform: 'perspective(500px) rotateX(60deg)',
                        transformOrigin: 'center bottom',
                        opacity: 0.4,
                    }}></div>
            </div>
        </div>
    );
};

export default TestBackground;
