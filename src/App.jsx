import './App.css'
import {CompWithProps} from './components/CompWithProps'
//import React from "react"
  const App = () => {
    return (
      <div>
        <h1>¡Mi Aplicación con React!</h1>
        <CompWithProps initialValue="Hola Mundo" />
      </div>
    );
  };
  
  export default App
