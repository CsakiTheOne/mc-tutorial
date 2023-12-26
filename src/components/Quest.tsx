import React from 'react';
import './Quest.css';
import '../icons-minecraft-0.4.css';

interface QuestProps {
    icon: string;
    title: string;
    children: React.ReactNode;
}

const Quest: React.FC<QuestProps> = ({ icon, title, children }) => {
    return <details className="quest-advancement">
        <summary className="quest-header">
            <div className={'icon-minecraft icon-minecraft-' + icon}></div>
            <span className='quest-title'>{title}</span>
        </summary>
        <div className="quest-description">
            {children}
        </div>
    </details>;
};

export default Quest;
