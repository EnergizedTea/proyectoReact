import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import {Alumnos} from './components/alumnos';
import {Login} from './components/login';

const amigos = ['Diego', 'Victor' , 'Naomi', 'Leon']

function App() {
  // let sesion = true
  const[sesion, setSesion] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
          <Header title="Mi Primer Proyecto de React" color="cyan"/>
          <img src={logo} className="App-logo" alt="logo" />
          {/*<Header/>
            <Header title="Adios"color="purple"/>*/}
      {sesion === true ? 
        <>
        <Login/>
        <button onClick={()=>{setSesion(false)}}>Cerrar Sesión</button>
        <Header title="Bienvenido" color ="cyan"/>
        <Alumnos amigos={amigos}/>  
        <p>Genial!</p>
        </>
        :
        <>
          <p>No has iniciado sesion....</p>
          <Login/>
          <button onClick={()=>{setSesion(true)}}>Iniciar Sesión</button>
        </>
    }
    </header>
    </div>
  );
}

export default App;
