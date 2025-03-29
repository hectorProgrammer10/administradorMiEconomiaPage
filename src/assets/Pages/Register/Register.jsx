import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './register.css'
import '../../../assets/css/secciones.css'
function Register() {

  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [correo, setCorreo] = useState('');
  const [nombre, setNombre] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const data = {
      username: usuario,
      password: contrasena,
      email : correo,
      nombre : nombre
    };
    try {
      const response = await fetch(import.meta.env.VITE_API_SUP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        navigate('/login');
      } else {
        alert(result.message || 'Error al registrar', error);
      }
    } catch (error) {
      alert('Error en el servidor', error);
    } finally {
      setIsLoading(false);
    }
    }
    
  return (
    <div className='register_register'>
      <div id='containerRegister' className='borde box4'>
      <form action="" className='formDatos'>
              <h1>Crear cuenta</h1>
              
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
              <label htmlFor="contrasena">Email:</label>
              <input 
                type="text" 
                name='email' 
                className='' 
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}

              />
              <label htmlFor="contrasena">Nombre completo:</label>
              <input 
                type="text" 
                name='name' 
                className='' 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}

              />
              <label htmlFor="contrasena">Costo:</label>
              <div className='borde costoForm'>56.99$</div>
              <button id='sentRegister' type="submit" className='borde' onClick={onSubmit}>Crear Cuenta</button>
              <div className='avisoRegister'><p><a href="/login">¿Ya tienes cuenta?</a></p></div>
            </form>
      </div>
    </div>
  )
}

export default Register
