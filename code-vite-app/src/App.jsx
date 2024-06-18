import './App.css';
import Navbar from './components/navbar/navbar';
import ItemListContainer from './containers/itemListContainer/itemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:idCategory' element={<ItemListContainer />} />
                    <Route path='/product/:idProduct' element={<ItemDetailContainer />} />
                    <Route path='/contacto' element={<Contacto />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
