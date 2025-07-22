import React from 'react';

interface LogoGoldProps {
    className?: string;
}

const LogoGold: React.FC<LogoGoldProps> = ({ className = 'h-12' }) => {
    return (

        <img
            src="/images/logo-gold.svg"
            alt="Bold As Love - Neon Gold Logo"
            className={className}
        />
    );
};

export default LogoGold;
