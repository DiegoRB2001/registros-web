import React from 'react'
import '../styles/Formulario.css'

function Formulario() {
  return (
    <div className='contenedor-formulario'>
        <h2>Formulario</h2>
        <form>
          <div className="seccion-formulario">
          <label>Nombre</label>
            <input type="text" className='campo-formulario' placeholder='Ingresa tu nombre'/>
          </div>
          <div className="seccion-formulario">
          <label>Apellidos</label>
            <input type="text" className='campo-formulario' placeholder='Ingresa tus apellidos'/>
          </div>
          <div className="seccion-formulario">
          <label>Genero</label>
            <input type="text" className='campo-formulario' placeholder='Ingresa tu genero'/>
          </div>
          <div className="seccion-formulario">
          <label>Edad</label>
            <input type="text" className='campo-formulario' placeholder='Ingresa tu edad'/>
          </div>
          <div className="seccion-formulario">
          <label>Teléfono</label>
            <input type="text" className='campo-formulario' placeholder='Ingresa tu teléfono'/>
          </div>
            <input type="button" className="boton-enviar" value='Enviar'/>
        </form>
    </div>
  )
}

export default Formulario