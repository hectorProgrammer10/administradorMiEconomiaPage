import React from 'react'

function Head() {
  const headStyle={
    backgroundColor : 'rgba(255,255,255,1)',
 
  }
  const btnSalir={
    marginLeft: 'auto',
    width: '10rem',
    height: '100%',
    
  }
  const img={
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    // transform: clicked ? 'scale(1.1)' : 'scale(1)'
  }
  const containerImg={
    height: '80%',
    width: '2rem',
    cursor: 'pointer'
  }
  const titulo = {
    textAlign: 'center'
  }
  
  return (
    <div className='head_head' style={headStyle}>
      <div id='btnH_head'>=</div>
      <div className='head_titulo' style={titulo}>
        <h3>Administración de mi Economía</h3>
      </div>
      <div id='btnSalir_head'>--</div>
    </div>
  )
}


export default Head
