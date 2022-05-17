import './App.scss';
import Home from './pages/home';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './pages/splash/index';
import Profile from './pages/profile/index';
import Soporte from './pages/soporte/index';
import Facturas from './pages/facturas/index';
import Explora from './pages/explora/index';
import Consumo from './pages/home/consumo/index';

const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Splash />} />
            <Route path='/home' element={<Home />} />
            <Route path='/home/consumo' element={<Consumo />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/soporte' element={<Soporte />} />
            <Route path='/facturas' element={<Facturas />} />
            <Route path='/explora' element={<Explora />} />
        </Routes>
    </BrowserRouter>
);

export default App;
