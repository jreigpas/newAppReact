import '../../App';
import React, { useState } from 'react';
import TabsHome from '../../components/tabsHome';
import { ButtonPrimary, useTheme } from '@telefonica/mistica';

const Home: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { colors } = useTheme();
    // const goToConsumo = useCallback(() => {
    //     navigate('/consumo');
    // }, []);

    return (
        <div className='home-page'>
            <TabsHome selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} colors={colors}></TabsHome>
            <ButtonPrimary to={'/home/consumo'}> Ir a consumo </ButtonPrimary>
        </div>
    );
};

export default Home;
