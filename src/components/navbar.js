import React from 'react';
import "./navbar.css";

class Navbar extends React.Component {

  /*state = {
  	logeado:false
  }*/

  render() {
    return (
      <div className="navbar">
          <MenuDefault />
      </div>
    )
  };
}

class MenuDefault extends React.Component {
  render() {
    return (
    
        <ul className="menuDefault">
          <li><a href="#">Categorías</a></li>
          <li><a href="#">Ofertas</a></li>
          <li><a href="#">Novedades</a></li>
        </ul>
    
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