import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Componente (props){

    const {titulo, parrafo} = props;
    console.log(props);
    
    //Simplicar metodo para declarar variables
    return (
    <div>
      <h1>{titulo}</h1>
      <p>{parrafo}</p>
    </div>
    );
}
//root.render(<Componente titulo="Titulo Dinamico" parrafo="Parrafo dinamico" />);
root.render(<App />);

