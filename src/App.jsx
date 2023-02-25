import './App.css'
import Encabezado from './components/Encabezado'
import Formulario from './components/Formulario'
import Registros from './components/Registros'

function App() {

  return (
    <div className="App">
      <Encabezado/>
      <div className="cuerpo">
        <Formulario/>
        <Registros/>
      </div>
    </div>
  )
}

export default App
