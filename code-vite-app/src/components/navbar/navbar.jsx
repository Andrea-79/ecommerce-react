import CartWidget from "../cartwidget/cartwidget"
import './navbar.css'

const Navbar = ({handleCategoria}) => {
    const cambiarCategoria = (categoria) => {
        handleCategoria(categoria)
}
    return(
        <div className="navbar">
            <Link to={'/Ecommerce'}>
            <h1 onClick={() => cambiarCategoria('todos')}> Ecommerce </h1>
            </Link>
            <Link to={'/category/Electronica'}>
            <p onClick={() => cambiarCategoria('electronics')}> Electronica </p>
            </Link>
            <div className="navbar-others">
            <ul className="navbar">
                <Link to={'/Contacto'}>
                     <li className="navbar"> Contacto </li>
                </Link>
            </ul>

            <CartWidget />
            </div>
        </div>
       


    )
}

export default Navbar