import React, { Suspense, useState } from 'react';
import './index.scss';
import { ButtonPrimary, Spinner, useTheme } from '@telefonica/mistica';
const TabsHome = React.lazy(() => import('../../components/tabsHome'));

const Home: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { colors } = useTheme();

    // const goToConsumo = useCallback(() => {
    //     navigate('/consumo');
    // }, []);
    //const json = { Name: 'rocio', age: '28' };

    // const shareInSociaMedia = (json: any) => {
    //     MobileAppInterface.shareContent(json);
    // };

    // poner OnPress en ButtonPrimary onPress={shareInSociaMedia(json)

    return (
        <div className='home-page'>
            <Suspense fallback={<Spinner size={'24px'} color={colors.warning} />}>
                <TabsHome selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} colors={colors}></TabsHome>
                <div className='home-page__buttonPrimary'>
                    <ButtonPrimary to={'/home/consumo'}> Ir a consumo </ButtonPrimary>
                </div>
            </Suspense>
        </div>
    );
};

export default Home;
