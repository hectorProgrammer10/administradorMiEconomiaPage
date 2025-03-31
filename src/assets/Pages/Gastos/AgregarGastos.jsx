import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function AgregarGastos() {
  const navigate = useNavigate();
  //
  //upgrade
const [upgrade, setUpgrade] = useState(true)
  //
  const [remember, setRemember] = useState(false);
  const [categoria, setCategoria] = useState('Comida/Bebida')
  const [monto, setMonto] = useState(0)
  const [fecha, setFecha] = useState('')


  const btnRemember = {
    backgroundColor : remember ? 'green' : 'red',
    color: 'white',
    borderRadius : '5px'
  }

  //useefect
  useEffect(() => {
        const verificarPremium = localStorage.getItem('tokenDeAccessx');
        if(verificarPremium == null){
          setUpgrade(true);
        }
        else{
          setUpgrade(false);
        }
    },[])

  const onSubmit = () => {
    event.preventDefault();
    if (!monto || isNaN(monto)) {
      console.error('Monto debe ser un número válido.');
      return;
    }
  
    if (!fecha) {
      console.error('Fecha no puede estar vacía.');
      return;
    }
  
    const gasto = {
      categoria: categoria,
      monto: parseFloat(monto),
      fecha: fecha
    };
    const saldoRecuperado = JSON.parse(localStorage.getItem('saldo') || 0);

    
    localStorage.setItem('saldo', JSON.stringify(saldoRecuperado - gasto.monto));
    const tablaActualizada = JSON.parse(localStorage.getItem('tablaGastos')) || [];
    tablaActualizada.push(gasto);
    localStorage.setItem('tablaGastos', JSON.stringify(tablaActualizada));
    console.log('Ingreso guardado exitosamente:', gasto);
    navigate('/');
  }
  const handleRemenber = () =>{
    event.preventDefault();
    setRemember(!remember)
  }
  const handleUpgrade=()=>{
    event.preventDefault();
  }
  const clear = () =>{
    event.preventDefault();
    setFecha('');
    setMonto(0);
  }
  return (
    <div className='agregarGasto'>
    <div id='containerGasto' className='borde box4'>
    <form action="" className='formDatos'>
            <h1>Nuevo Gasto</h1>
            
            <label htmlFor="usuario" autoFocus>Categoria:</label>
            {upgrade ?
            <select name="categoria" id="" onChange={(e)=>setCategoria(e.target.value)}>
            <option value="Comida/Bebida">Comida/Bebida</option>
            <option value="Compras">Compras</option>
            <option value="Transportes">Transportes</option>
          </select>
          :
          <select name="categoria" id="" onChange={(e)=>setCategoria(e.target.value)}>
              <option value="Comida/Bebida">Comida/Bebida</option>
              <option value="Compras">Compras</option>
              <option value="Transportes">Transportes</option>
              <option value="Entretenimiento">Entretenimiento</option>
              <option value="Hogar">Hogar</option>
              <option value="Salud">Salud</option>
            </select>
            
            }
            <label htmlFor="contrasena">Monto:</label>
            <input 
              value={monto}
              type="number" 
              name='monto' 
              className='' 
              placeholder='MXN'
              onChange={(e)=>setMonto(e.target.value)}
            />
            <label htmlFor="contrasena">Fecha:</label>
            <input 
              value={fecha}
              type="date" 
              name='date' 
              className='' 
              onChange={(e)=>setFecha(e.target.value)}

            />
            <label style={{display: 'flex', alignItems:'center'}}>Recordatorio <p style={{fontSize : 'small'}}>(push notification)</p>:</label>
            {
              upgrade ?
              <button className='btnForm' style={btnRemember} onClick={handleUpgrade}>Desactivado</button>
              :
              <button className='btnForm' style={btnRemember} onClick={handleRemenber}>{remember ? 'Activado' : 'Desactivado'}</button>
            }
            <br />
            <button id='sentGasto' type="submit" className='borde' onClick={onSubmit}>+ Agregar</button>
            <button className='limpiarCampos borde' onClick={clear}>Limpiar campos</button>
          </form>
    </div>
  </div>
  )
}

export default AgregarGastos
