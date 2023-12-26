import React from 'react';

interface McIconProps {
    icon: string;
}

const McIcon: React.FC<McIconProps> = ({ icon }) => {
    return <span className={'icon-minecraft icon-minecraft-' + icon}></span>;
};

export default McIcon;
