//IMPORTACIONES:
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navContainer">
      <h4>La Frida Crochet</h4>
      <ul className="containerCategorias">
        <li>Nuestros Productos</li>
        <li>Ofertas x Tiempo Limitado</li>
        <li>Contacto</li>
      </ul>

      <CartWidget color="violet" size="40px" />
    </div>
  );
};

export default Navbar;
