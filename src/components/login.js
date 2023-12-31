import React, {useState} from 'react'

export const Login = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [state, setState] = useState('')
    const [ret, setRet] = useState('')
    /*para Tarea*/

    const usuarioReal = 'Rafa'
    const passwordReal = "topSecret"

    /*const onChangeUser = (e) => {
        setUser(e.target.value)
    }
    const onChangePass = (e) => {
        setPassword(e.target.value)
    }*/

    const onChange = (e) => {
        if(e.target.name === 'user'){
            setUser(e.target.value)
        }
        else if(e.target.name === 'pass'){
            setPassword(e.target.value)
        }
    }

  return (
    <>
        <div>Login</div>
        <form action=''>
            <p>User : {user}</p>
            <p>Password : {password}</p>
            <p>State : {state}</p>
            <div>
                <label htmlFor="user">Usuarios</label>
                <input type="text" name="user" id="user" 
                    value={user} 
                    onChange={onChange}/>
            </div>
            <div>
                <label htmlFor="pass">Password</label>
                <input type="password" name='pass' id='pass'
                    onChange={onChange}/>
            </div>

            <button type='submit' onClick={()=>{
                if({user}.value === usuarioReal.name && 
                    {password}.value === passwordReal.name){
                    setState('Bienvenido Rafa')
                    setRet(true)
                }
                else{
                    setState('Usuario Desconocido')
                    setRet(false)
                }}}>Iniciar Sesión</button>
        </form>
    </>
  );
}
