import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/header';
import Lista from './pages/Lista';
//import ListaFavoritos from './pages/ListaFavoritos';
//import Erro from './pages/Erro';

function RotasApp() {
    
    return (
        <BrowserRouter>
        <Header />
            <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/filme/:id" element={ <Lista/> } />
            {/*<Route path="/lista" element={ <ListaFavoritos/> } />
            <Route path="*" element={ <Erro/>} />*/}
            </Routes>
        </BrowserRouter>
    )
}

export default RotasApp;
