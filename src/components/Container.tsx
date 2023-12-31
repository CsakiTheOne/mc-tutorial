import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div style={{ padding: '0 5vw' }}>
            {children}
        </div>
    );
};

export default Container;
