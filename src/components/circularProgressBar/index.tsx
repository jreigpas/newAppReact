import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import './index.scss';

export interface TabsHomeData {
    percentage: number;
}

export const CircularProgressBar: React.FC<TabsHomeData> = ({ percentage }: TabsHomeData) => {
    return (
        <CircularProgressbar
            className='tabs-home__wrapper-circular__bar'
            strokeWidth={10}
            value={percentage}
            styles={buildStyles({
                rotation: 0,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',
                textSize: '16px',
                pathTransitionDuration: 0.5,
                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',
                // Colors
                pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
            })}
        />
    );
};
export default CircularProgressBar;
