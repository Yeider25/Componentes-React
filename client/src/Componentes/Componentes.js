import React from "react";
import Saludo from "../Componentes/Saludo";
import Lista from "../Componentes/ListadeTarjeta";
import Boton from "../Componentes/Boton";

const Componentes = ({data}) => (
    <React.Fragment>
    
    <Saludo
    username="Yeider"
    />
    <Lista
    exercises={data}
    />
   <Boton/>
   </React.Fragment>
)
export default Componentes