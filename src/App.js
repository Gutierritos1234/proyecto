import './App.css';
import Backlog from "./Componentes/Backlog";


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>App Maver</h1>
  
      <Backlog
      alias= "Menu principal"
      esfuerzo= ""
      actividad= ""
      condiciones= ""
      
      />
      <Backlog
      alias= "Catalogo de comida"
      esfuerzo= ""
      actividad= ""
      condiciones= ""
      />

<Backlog
      alias= "Catalogo de tareas"
      esfuerzo= ""
      actividad= ""
      
      
      />

<Backlog
      alias= "Catalogo de fondo"
      esfuerzo= ""
      actividad= ""
      
      
      />

<Backlog
      alias= "Apartado de avisos"
      esfuerzo= ""
      actividad= ""
      
      
      />

<Backlog
      alias= "Apartado de derecho a bono"
      esfuerzo= ""
      actividad= ""
     />
   </div>
    </div>  );
    
}

export default App;