import { Button } from "antd"
import CartWidget from "../cartwidget/cartwidget"
const Navbar = () => {
    return(
        <div>
            <p> Mi Ecommerce </p>
            <Button> Inicio </Button>
            <Button> Catalogo </Button>
            <Button> Contacto </Button>
            <CartWidget />
        </div>
       
    )
}

export default Navbar