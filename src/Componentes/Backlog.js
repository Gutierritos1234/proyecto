import React from "react";
import "./hoja-estilo/Backlog.css";
function Backlog(props) {
    return (
        <div className="contenedor-backlog">
           
        
        <div className="Contenedor-texto-backlog">
            <p className="Primera-ficha"> {props.alias} </p>
            <p className="Esfuerzo"> Esfuerzo {props.esfuerzo} </p>
            <p className="Actividad-primera-ficha "> {props.actividad} </p> 
            <p className="Condiciones"> {props.condiciones} </p> 


        </div>
        </div>


    );
}
export default Backlog;