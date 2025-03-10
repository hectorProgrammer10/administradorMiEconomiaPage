import React from 'react'
import './login.css'
function Login() {
  return (
    <div className='todoLgoin'>
      <div id='logoLogin'>
        <div className='login'>
          <div id='form' className='bo3 bordeR'>
            <form action="" className='formDatos'>
              <label htmlFor="usuario" autoFocus>Usuario:</label>
              <input 
                type="text" 
                name='usuario' 
                className='' 
                
              />
              <label htmlFor="contrasena">Contraseña:</label>
              <input 
                type="password" 
                name='contrasena' 
                className='' 


              />
              <button type="submit" className='borde'>Entrar</button>
            </form>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Login
