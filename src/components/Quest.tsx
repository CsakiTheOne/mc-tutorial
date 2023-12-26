import React from 'react';
import './Quest.css';
import '../icons-minecraft-0.4.css';

interface QuestProps {
    icon: string;
    title: string;
    children: React.ReactNode;
}

const Quest: React.FC<QuestProps> = ({ icon, title, children }) => {
    return (
        <div className="advancement">
            <div className="header">
                <div className={'icon-minecraft icon-minecraft-' + icon}></div>
                <span className='title'>{title}</span>
            </div>
            <div className="description">
                {children}
            </div>
        </div>
    );
};

export default Quest;
