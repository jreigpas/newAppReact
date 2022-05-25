import React, { Suspense, useState } from 'react';
import './index.scss';
import { ButtonPrimary, Spinner, useTheme } from '@telefonica/mistica';
const TabsHome = React.lazy(() => import('../../components/tabsHome'));

const Home: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { colors } = useTheme();

    const [msgNative, setMsgNative] = useState('xxx');
    const [msgReact, setMsgReact] = useState('sin mensaje');

    //Envia texto a la parte nativa
    const sendToNative = () => {
        window.Android.getFromAndroid(msgReact);
    };

    const handleInputChange = (event: any) => {
        setMsgReact(event.target.value);
    };

    //Recoger texto de la parte nativa
    window.changeText = function (msg: string) {
        setMsgNative(msg);
    };

    return (
        <div className='home-page'>
            <Suspense fallback={<Spinner size={'24px'} color={colors.warning} />}>
                <TabsHome selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} colors={colors}></TabsHome>
                <div className='home-page__buttonPrimary'>
                    <div className='home-page__buttonPrimary__msg'>
                        Mensaje que recibimos de la parte nativa: {msgNative}
                    </div>
                    <form onSubmit={sendToNative}>
                        <label>
                            <input type='text' name='mensajeEnviar' onChange={handleInputChange} />
                        </label>
                        <button type='submit' className='w3-button w3-blue'>
                            Enviar a Nativo
                        </button>
                    </form>
                    <ButtonPrimary to={'/home/consumo'}> Ir a consumo </ButtonPrimary>
                </div>
            </Suspense>
        </div>
    );
};

export default Home;
