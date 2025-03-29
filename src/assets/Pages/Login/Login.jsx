import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'
function Login() {

  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const data = {
      username: usuario,
      password: contrasena
    };
    try {
      const response = await fetch(import.meta.env.VITE_API_SING, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem('tokenDeAccessx', result.accessToken);
        navigate('/');
      } else {
        alert(result.message || 'Error en el inicio de sesión', 'error');
      }
    } catch (error) {
      alert('Error en el servidor', error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className='todoLgoin'>
      <div id='containerLogin' className='borde box4'>
      <form action="" className='formDatos'>
              <h1>Iniciar Sesión</h1>
              <div className='avisoLogin'><p>¿Es tu primera vez? <a href="/register">Crear cuenta</a></p></div>
              <label htmlFor="usuario" autoFocus>Usuario:</label>
              <input 
                type="text" 
                name='usuario' 
                className='' 
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)} 
              />
              <label htmlFor="contrasena">Contraseña:</label>
              <input 
                type="password" 
                name='contrasena' 
                className='' 
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)} 
              />
              <button id='sentLogin' type="submit" className='borde' onClick={onSubmit}>Iniciar sesión</button>
            </form>
      </div>
    </div>
  )
}

export default Login
