import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//css------
import './mainPage.css';
import '../Components/conponents.css';
import '../Fragments/fragments.css';
import '../css/secciones.css';
//---------------------

function MainPage() {
  const navigate = useNavigate();
  //useState--------------------
  //saldo
  const [saldo, setSaldo] = useState(0)
  //
  //upgrade
  const [upgrade, setUpgrade] = useState(true)
  //
  const [tablaGastos, setTablaGastos] = useState([]);
  const [loadingFirst, setLoadingFirst] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  //-----------------
  
  // Valores ficticios
  const [gasto1, setGasto1] = useState(0); 
  const [gasto2, setGasto2] = useState(0); 
  const [gasto3, setGasto3] = useState(0); 
  const [gasto4, setGasto4] = useState(0); 
  const [gasto5, setGasto5] = useState(0); 
  const [gasto6, setGasto6] = useState(0); 

  // Suma total
  const total = gasto1 + gasto2 + gasto3 + gasto4 + gasto5 + gasto6;

  // Porcentajes calculados
  const porcentaje1 = (gasto1 / total) * 100;
  const porcentaje2 = (gasto2 / total) * 100;
  const porcentaje3 = (gasto3 / total) * 100;
  const porcentaje4 = (gasto4 / total) * 100;
  const porcentaje5 = (gasto5 / total) * 100;
  const porcentaje6 = (gasto6 / total) * 100;

  //useEfe4c-----
  //pantallaInicio
  useEffect(() => {
    setIsLoading(true)
    setTimeout(()=>{
      setIsLoading(false)
      setLoadingFirst(true)
    }, 333)
  },[])
  //recuperarSaldo
  useEffect(() => {
    const saldoRecuperado = JSON.parse(localStorage.getItem('saldo'));

    if(saldoRecuperado == null){
      setSaldo(0);
    }
    else{
      setSaldo(saldoRecuperado)
    }
  },[])

  //tablaGastos----------------
  useEffect(() => {
    const gastos = JSON.parse(localStorage.getItem('tablaGastos')) || [];
    for(let i=0; i<gastos.length; i++){
      console.log(gastos[i].categoria)
      if(gastos[i].categoria == 'Comida/Bebida'){
        let suma = gasto1;
        suma= suma+gastos[i].monto;
        setGasto1(suma);
      }
      if(gastos[i].categoria == 'Compras'){
        let suma = gasto2;
        suma= suma+gastos[i].monto;
        setGasto2(suma);
      }
      if(gastos[i].categoria == 'Transportes'){
        let suma = gasto3;
        suma= suma+gastos[i].monto;
        setGasto3(suma);
      }
      if(gastos[i].categoria == 'Entretenimiento'){
        let suma = gasto4;
        suma= suma+gastos[i].monto;
        setGasto4(suma);
      }
      if(gastos[i].categoria == 'Hogar'){
        let suma = gasto5;
        suma= suma+gastos[i].monto;
        setGasto5(suma);
      }
      if(gastos[i].categoria == 'Salud'){
        let suma = gasto6;
        suma= suma+gastos[i].monto;
        setGasto6(suma);
      }
    }
    setTablaGastos(gastos);
  }, []);
  //-----------
//funciones()---------
const handlePresupuesto = () =>{
  navigate('/agregarPresupuesto');
}
const handleGasto = () =>{
  navigate('/agregarGastos')
}
const handleUpgrade=()=>{
  event.preventDefault();
  navigate('/login')
}
  //------

  return (
    <div className='body_main'>
      {loadingFirst ?
      <div className="canva_seccion">
      <div className="container_seccion">
        <div className="apartadoW_seccion imgPrincipal bordeR">
          <img id='imgPrincipal' src="imgPrincipal.png" alt="imgPrincipal" />
        </div>
        <div className="apartadoW_seccion borde2">
          <h3 className='tittleApartado'>Resumen:</h3>
          <div>Saldo de la cuenta: {saldo} $</div>
          <br />
          <h3 className='tittleApartado'>Gastos:</h3>
          <div className='barraEstado borde'>
            <div className='gasto1 barra' style={{ width: `${porcentaje1}%` }}></div>
            <div className='gasto2 barra' style={{ width: `${porcentaje2}%` }}></div>
            <div className='gasto3 barra' style={{ width: `${porcentaje3}%` }}></div>
            <div className='gasto4 barra' style={{ width: `${porcentaje4}%` }}></div>
            <div className='gasto5 barra' style={{ width: `${porcentaje5}%` }}></div>
            <div className='gasto6 barra' style={{ width: `${porcentaje6}%` }}></div>
          </div>
          <div>
            <ol>
              <li><div id='cat1' className='colorCategoriaLi borde2'></div>Comida/Bebidas</li>
              <li><div id='cat2' className='colorCategoriaLi borde2'></div>Compras</li>
              <li><div id='cat3' className='colorCategoriaLi borde2'></div>Transportes</li>
              {upgrade ? 
              <div>
                <button className='btnGastos' onClick={handleUpgrade}>Más categorias</button>
              </div>
              : 
              <>
              <li><div id='cat4' className='colorCategoriaLi borde2'></div>Entretinimiento</li>
              <li><div id='cat5' className='colorCategoriaLi borde2'></div>Hogar</li>
              <li><div id='cat6' className='colorCategoriaLi borde2'></div>Salud</li>
              </>
              }
            </ol>
          </div>
        </div>
        
        <div className="apartadoW_seccion borde2">
          <h3>Gestión de Gastos</h3>
          <button id='registrarGastos' className='btnGastos' onClick={handlePresupuesto}>Añadir Ingreso</button>
          <button id='' className='btnGastos' onClick={handleGasto}>Añadir Gastos</button>
        </div>

        <div className="apartadoW_seccion borde2">
      <h3>Historial:</h3>
      <div>
        <table>
          <thead>
            <tr>
              <th>Categoria</th>
              <th>Monto</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {tablaGastos.map((gasto, index) => (
              <tr key={index}>
                <td>{gasto.categoria}</td>
                <td>{gasto.monto} $</td>
                <td>{gasto.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

        {upgrade &&
          <div className="apartadoW_seccion">
          <button className='btnGastos' onClick={handleUpgrade}>UPGRADE</button>
        </div>
        }
        
      </div>
    </div>
    :
    <div className='canva_seccion'>
      <div className='pantallaFirst'>
        <h1>Bienvenido</h1>
        {isLoading && (
            <div className="">
              <div className="spinner"></div>
              <p>Cargando...</p>
            </div>
          )}
      </div>
    </div>
      }
      
    </div>
  );
}

export default MainPage;
