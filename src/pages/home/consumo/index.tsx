import { UserAgent, UserAgentProvider } from '@quentin-sommer/react-useragent';
import React from 'react';

const Consumo: React.FC = () => {
    return (
        <div className='consumo-page'>
            <div>CONSUMO</div>
            <UserAgentProvider ua={window.navigator.userAgent}>
                <div>
                    <UserAgent windows>
                        <p>es windows</p>
                    </UserAgent>
                </div>
            </UserAgentProvider>
        </div>
    );
};

export default Consumo;
