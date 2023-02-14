import './App.css';
import Backlog from "./Componentes/Backlog";
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Backlog</h1>
      <Backlog
      alias= "Sprint 1 TC1 Como: Menu principal"
      esfuerzo= "120"
      actividad= "Quiero: Debe tener un Menú principal para poder redirigir a cada función de la aplicación , con el logo de la empresa y paleta de colores acorde a los colores de la empresa."
      condiciones= "Condiciones: Se debe colocar el logo de la empresa y elegir la paleta de colores adecuadas en la ventana principal de la app (8H), Se debe diseñar la apariencia de la ventana principal de la app(8H), se debe diseñar el menu de la ventana principal de la app(8H), se debeb diseñar los conectores del menu principal con las demas secciones de la app(8H)"
      
      />
      <Backlog
      alias= "Sprint 1 TC2 Como: Catalogo de comida"
      esfuerzo= "120"
      actividad= "Quiero: Debe tener un catalogo completo de los menus de comida semanales"
      condiciones= "Condiciones: Se debe diseñar la apariencia de la ventana del catalogo de comida(8H), Se debe diseñar de tabla semanal de comida con menu responsivo(8H), se debe Colocar menu en tabla de opciones por seleccion, para que la actualizacion de menus, no se realice de manera manual(8H)"
      />

<Backlog
      alias= "Sprint 2 TC3 Como: Catalogo de tareas"
      esfuerzo= "120"
      actividad= "Debe tener un catalogo completo de las areas existentes con un recuadro para indicar si son acreedoras de bono"
      
      
      />

<Backlog
      alias= "Sprint 2 TC4 Catalogo de fondo"
      esfuerzo= "120"
      actividad= "Debe tener un apartado para una calculadora para calculo de fondo de ahorro"
      
      
      />

<Backlog
      alias= "Sprint 3 TC5 Apartado de avisos"
      esfuerzo= "120"
      actividad= "Debe tener un apartado de avisos"
      
      
      />

<Backlog
      alias= "Sprint 3 TC6 Apartado de derecho a bono"
      esfuerzo= "120"
      actividad= "Debe tener un apartado para ver si tiene derecho el personal catorcenal a bono"
      
      
      />


    </div>
    </div>
  );




  
}

export default App;