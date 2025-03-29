import React from 'react'

function Head() {
  const headStyle={
    backgroundColor : 'rgba(255,255,255,0.3)',
    color : 'rgba(255, 255, 255, 0.9)',
    padding : '1%'
 
  }
  const btnSalir={
    marginLeft: 'auto',
    width: '1.6rem',
    height: '60%',
    
  }
  const img={
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    // transform: clicked ? 'scale(1.1)' : 'scale(1)'
  }
  const containerImg={
    height: '60%',
    width: '1.6rem',
    cursor: 'pointer'
  }
  const titulo = {
    textAlign: 'center'
  }
  
  return (
    <div className='head_head' style={headStyle}>
      <div id='btnH_head' style={containerImg}><img src="/hamburguer.svg" alt="" style={img}/></div>
      <div className='head_titulo' style={titulo}>
        <h3>Administración de mi Economía</h3>
      </div>
      <div id='btnSalir_head'><img src="/salir.svg" alt="" style={btnSalir} /></div>
    </div>
  )
}


export default Head
