import React from 'react';
// import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './index.scss';

const Splash: React.FC = () => {
    //const navigate = useNavigate();

    // const goToHome = useCallback(() => {
    //     navigate('/home');
    // }, []);

    // useEffect(() => {
    //     // Wait for 3 seconds
    //     setTimeout(() => {
    //         goToHome();
    //     }, 1000000);
    // }, []);
    return (
        <div className='splash'>
            <ReactPlayer
                className='react-player fixed-bottom'
                url='assets/splash.mp4'
                width='100%'
                height='100%'
                playing={true}
                controls={false}
            />
        </div>
    );
};

export default Splash;
