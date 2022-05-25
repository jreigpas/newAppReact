import { UserAgent, UserAgentProvider } from '@quentin-sommer/react-useragent';
import React from 'react';

const Consumo: React.FC = () => {
    console.log('useragent', window.navigator.userAgent);
    return (
        <div className='consumo-page'>
            <div>CONSUMO</div>
            <UserAgentProvider ua={window.navigator.userAgent}>
                <div>
                    <UserAgent mobile>
                        <p>es mobile</p>
                    </UserAgent>
                    <UserAgent ios>
                        <p>es ios</p>
                    </UserAgent>
                    <UserAgent android>
                        <p>es android</p>
                    </UserAgent>
                    <UserAgent windows>
                        <p>es windows</p>
                    </UserAgent>
                    <UserAgent mac>
                        <p>es mac</p>
                    </UserAgent>
                    <UserAgent computer>
                        <p>es computer</p>
                    </UserAgent>
                </div>
            </UserAgentProvider>
        </div>
    );
};

export default Consumo;
