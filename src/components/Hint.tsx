import React, { ReactNode } from 'react';
import './Hint.css';

interface HintProps {
    title?: string;
    children: ReactNode;
}

const Hint: React.FC<HintProps> = ({ title = 'HINT', children }) => {
    return <details className='hint'>
        <summary className='hint-title'>
            {title}
        </summary>
        <div>
            {children}
        </div>
    </details>;
};

export default Hint;
