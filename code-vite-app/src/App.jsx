import './App.css'
import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import ItemListContainer from './containers/itemListContainer/itemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  const [categoria, setCategoria] = useState('todos')
            
  return(
    
    <>
    <BrowserRouter>
    < Navbar handleCategoria={setCategoria}/>

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/contacto' element={<contacto />} />

        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App