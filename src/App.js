import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import {Alumnos} from './components/alumnos';

let sesion = true

const amigos = ['Diego', 'Victor' , 'Naomi', 'Leon']

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
        <Alumnos amigos={amigos}/>
        <Header title="Bienvenido" color ="blue"/>
        <p>Genial!</p>
        
        </>
        :
        <p>No has iniciado sesion....</p>
    }
    </div>
  );
}

export default App;
