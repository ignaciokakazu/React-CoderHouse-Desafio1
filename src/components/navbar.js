import React from 'react';
import CartWidget from "./cartwidget.js";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
  	nombre:"Nombre del usuario",
    }
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper indigo black">
          <a href="#" className="brand-logo center">Carrito de compras</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="sass.html">Categorías</a></li>
            <li><a href="badges.html">Ofertas</a></li>
            <li><a href="collapsible.html">Novedades</a></li>
          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><CartWidget/></li>
            <li>{this.state.nombre}</li>            
          </ul>
        </div>
      </nav>
    )
  };
}

export default Navbar

/*function Navbar() {
  return (
    <div className="navbar">
      <ul className="menuDefault">
        <li>Categorías</li>
        <li>Ofertas</li>
      </ul>
      <ul className="menuUsuario">
        <li>Usuario</li>
      </ul>
    </div>
  )
}*/

//en clase
//componente Productos props 
//constante con productos = id producto, nombre, descripcion, imagen
//para acceder a las props de una clase, va con this.props.nombre


//export default Navbar