import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './gastos.css'
function AgregarPresupuesto() {
  const navigate = useNavigate();
  //
  const [categoria, setCategoria] = useState('')
  const [monto, setMonto] = useState(0)
  const [fecha, setFecha] = useState('')
  //

  const handlePresupuesto = () => {
    let actual;
    event.preventDefault();
    if (!monto || isNaN(monto)) {
      console.error('Monto debe ser un número válido.');
      return;
    }
  
    if (!fecha) {
      console.error('Fecha no puede estar vacía.');
      return;
    }
  
    const ingreso = {
      categoria: 'Ingreso',
      monto: parseFloat(monto),
      fecha: fecha
    };
    const saldoRecuperado = JSON.parse(localStorage.getItem('saldo') || 0);

    
    localStorage.setItem('saldo', JSON.stringify(saldoRecuperado + ingreso.monto));
    const tablaActualizada = JSON.parse(localStorage.getItem('tablaGastos')) || [];
    tablaActualizada.push(ingreso);
    localStorage.setItem('tablaGastos', JSON.stringify(tablaActualizada));
    console.log('Ingreso guardado exitosamente:', ingreso);
    navigate('/');
  };
    
  
  const clear = () =>{
    event.preventDefault();
    setFecha('');
    setMonto(0);
  }
  return (
    <div className='agregarIngresos'>
    <div id='containerIngreso' className='borde box4'>
    <form action="" className='formDatos'>
            <h1>Agregar Ingreso</h1>
            
            <label htmlFor="usuario" autoFocus>Categoria:</label>
            <select name="categoria" id="">
              <option value="">Ingreso</option>
            </select>
            <label htmlFor="contrasena">Monto:</label>
            <input 
              value={monto}
              type="number" 
              name='monto' 
              className='' 
              placeholder='MXN'
              onChange={(e) => setMonto(e.target.value)} 

            />
            <label htmlFor="contrasena">Fecha:</label>
            <input 
              value={fecha}
              type="date" 
              name='date' 
              className='' 
              onChange={(e) => setFecha(e.target.value)} 

            />

            <button id='sentIngreso' type="submit" className='borde' onClick={handlePresupuesto}>+ Agregar</button>
            <button className='limpiarCampos borde' onClick={clear}>Limpiar campos</button>
          </form>
    </div>
  </div>
  )
}

export default AgregarPresupuesto
