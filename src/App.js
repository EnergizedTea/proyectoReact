import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import {Alumnos} from './components/alumnos';

const amigos = ['Diego', 'Victor' , 'Naomi', 'Leon']

function App() {
  // let sesion = true
  const[sesion, setSesion] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Header title="Hola" color="green"/>
          <Header/>
          <Header title="Adios"color="purple"/>
      {sesion === true ? 
        <>
        <Alumnos amigos={amigos}/>
        <button onClick={()=>{setSesion(false)}}>Cerrar Sesión</button>
        <Header title="Bienvenido" color ="blue"/>
        <p>Genial!</p>
        </>
        :
        <>
          <p>No has iniciado sesion....</p>
          <button onClick={()=>{setSesion(true)}}>Iniciar Sesión</button>
        </>
    }
    </header>
    </div>
  );
}

export default App;
