import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Lista from './pages/lista';
import Header from './components/header'
import Erro from './pages/Erro';
import ListaFavoritos from './pages/ListaFavoritos';

function RotasApp() {
    
    return (
        <BrowserRouter>
        <Header />
            <Routes>
            <Route path="/" element={ <home/> } />
            <Route path="/filme/:id" element={ <lista/> } />
            <Route path="/lista" element={ <ListaFavoritos/> } />
            <Route path="*" element={ <Erro/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RotasApp;