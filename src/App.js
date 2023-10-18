import logo from './logo.svg';
import './App.css';
import { buildQueries } from '@testing-library/react';

let sesion = true

const amigos = ['Diego', 'Victor' , 'Naomi', 'Leon']


function indeAmis({amigo, index}){
  return  <li key = {index}>{amigo}</li>
}

function Header({title,color}) {
  return <h1 style={{color : color ? color : 'white'}}>{title ? title : "there's nothing we can do"}</h1>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Header title="Hola" color="green"/>
          <Header/>
          <Header title="Adios"color="purple"/>
      </header>
      {sesion === true ? 
        <>
        
        <Header title="Bienvenido" color ="blue"/>
        <p>Genial!</p>
        <ul>
          {amigos.map((amigo, index) => {
            {/*esto es un fragmento*/}
            return <li key = {index}>{amigo}</li>
          })}
        </ul>
        </>
        :
        <p>No has iniciado sesion....</p>
    }
    </div>
  );
}

export default App;
