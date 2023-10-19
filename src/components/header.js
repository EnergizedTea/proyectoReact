/*function Header({title,color}) {
    return <h1 style={{color : color ? color : 'white'}}>{title ? title : "there's nothing we can do"}</h1>
  }
  
  ahora los componentes las creamos como constantes*/

/*La funcion de tipo flecha es vital*/
const Header = ({title, color}) => {
    return <h1 style={{color : color ? color : 'white'}}>{title ? title : "there's nothing we can do"}</h1>
}

export default Header;