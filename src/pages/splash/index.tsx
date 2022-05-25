// import MobileDetect from 'mobile-detect';
import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './index.scss';

const Splash: React.FC = () => {
    // const navigate = useNavigate();

    // const goToHome = useCallback(() => {
    //     navigate('/home');
    // }, []);

    //add OnEnded at <ReactPlayer> </ReactPlayer>'goToHome'

    const [playing, setPlaying] = useState<boolean>(false);

    useEffect(() => {
        setPlaying(true);
    }, []);

    return (
        <div className='splash'>
            <ReactPlayer
                className='react-player fixed-bottom'
                url='assets/splash.mp4'
                width='100%'
                height='100%'
                playing={playing}
                volume={0}
            />
        </div>
    );
};

export default Splash;
