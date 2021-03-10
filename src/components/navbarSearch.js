import React from 'react'

class NavbarSearch extends React.Component {
  constructor(props){
    super(props);
    //this.buscar = this.buscar.bind(this);
  }

  buscar(e){
    e.preventDefault();
    let texto = document.getElementById("search").value;
    alert("estoy buscando" + texto);
  }

  render() {
    return (
      <div className="container">
          <form>
            <div className="input-field">
              <input id="search" type="search" required/>
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
              
              <button className="btn-floating btn-large waves-effect waves-light red" onClick={(e) => this.buscar(e)}>Buscar</button>
            </div>
          </form>
      </div>
    )
  };
}

export default NavbarSearch