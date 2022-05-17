import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getO2Skin, ThemeConfig, ThemeContextProvider } from '@telefonica/mistica';

const misticaTheme: ThemeConfig = {
    skin: getO2Skin(),
    i18n: { locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES' },
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <ThemeContextProvider theme={misticaTheme}>
        <App />
    </ThemeContextProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
