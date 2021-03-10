import Navbar from './components/navbar.js';
import ItemListContainer from './components/itemlistcontainer.js';
import NavbarSearch from './components/navbarSearch.js';
import React from 'react'; //cuando se define un React.component tiene que estar


function App() {
  return (
    <>
    <Navbar/>
    <NavbarSearch/>
    <ItemListContainer greeting="hola nombre de usuario"/>
      
    
    
    </>
  )
};

//const App = () => <div> Componente <Navbar/></div>
//o bien

/*
  class App extends React.Component {
  render() {
      return <div>Componenete <Navbar/></div>
    }
  }

*/
export default App;
