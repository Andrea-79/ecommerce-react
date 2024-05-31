import './App.css'
import { Button }  from  'antd'
import Navbar from './components/navbar/navbar'
import ItemListContainer from './containers/itemListContainer/itemListContainer'

function App() {
 
  return(
    <div>
      < Navbar/>
      <ItemListContainer greeting={'Hola'}/>
      
    </div>
  )
}

export default App