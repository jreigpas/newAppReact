import '../../App';
import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';

const Splash: React.FC = () => {
    const navigate = useNavigate();

    const goToHome = useCallback(() => {
        navigate('/home');
    }, []);

    useEffect(() => {
        // Wait for 3 seconds
        setTimeout(() => {
            goToHome();
        }, 10000);
    }, []);
    return (
        <div className='splash'>
            <ReactPlayer
                className='react-player fixed-bottom'
                url='assets/O2_Patrocinio_music.mp4'
                width='375px'
                height='667px'
                loop={true}
                playing={true}
            />
        </div>
    );
};

export default Splash;
