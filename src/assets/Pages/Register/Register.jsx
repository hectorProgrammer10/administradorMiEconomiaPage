import React from 'react'
import './register.css'
import '../../../../public/secciones.css'
function Register() {
  return (
    <div className='register_register'>
      <div className='seccion_canva bordeRed'>

        <div className='seccion_container box bordeR '>
          <div className="apartado_seccion">
          <label>Correo institucional (líder del proyecto):<span>*</span></label>
            <input type="text" className='borde2' placeholder='matricula@carrera.upchiapas.edu.mx'/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
