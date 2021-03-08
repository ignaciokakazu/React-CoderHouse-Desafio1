import Navbar from './components/navbar.js';
import Products from './components/products.js';
import Search from './components/search.js';
//import NavbarSearch from './components/NavbarSearch.js';
import React from 'react'; //cuando se define un React.component tiene que estar


function App() {
  return (
    <>
    <Navbar/>
    <Search/>
    <Products/>
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
