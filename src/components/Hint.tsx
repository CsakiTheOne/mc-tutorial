import React, { ReactNode } from 'react';
import './Hint.css';

interface HintProps {
    children: ReactNode;
}

const Hint: React.FC<HintProps> = ({ children }) => {
    return <details className='hint'>
        <summary className='hint-title'>
            HINT
        </summary>
        <div>
            {children}
        </div>
    </details>;
};

export default Hint;
