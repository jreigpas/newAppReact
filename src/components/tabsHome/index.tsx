import { Box, Tabs } from '@telefonica/mistica';
import React from 'react';
import './index.scss';
import CircularProgressBar from '../circularProgressBar/index';

export interface TabsHomeData {
    selectedIndex: number;
    setSelectedIndex: any;
    colors: any;
    //onClick: Function;
}

export const TabsHome: React.FC<TabsHomeData> = ({ selectedIndex, setSelectedIndex, colors }: TabsHomeData) => {
    return (
        <div className='tabs-home'>
            <div
                style={{
                    backgroundColor: colors.white,
                    height: '75vh',
                    overflow: 'hidden !important',
                    paddingTop: '56px',
                }}
            >
                <div
                    style={{
                        backgroundColor: 'white',
                        overflow: 'hidden !important',
                    }}
                >
                    <Box>
                        <Tabs
                            selectedIndex={selectedIndex}
                            onChange={setSelectedIndex}
                            tabs={[
                                {
                                    text: 'Tab1',
                                    // icon: <IconAcademicLight size={'24px'} color={colors.warning} />,
                                },
                                {
                                    text: 'Tab2',
                                },
                                {
                                    text: 'Tab3',
                                },
                            ]}
                        />
                        <div className='tabs-home__wrapper-circular'>
                            <CircularProgressBar percentage={60} />
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    );
};
export default TabsHome;
