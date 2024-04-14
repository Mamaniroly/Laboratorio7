import { useState } from "react"

    export function Button() {
        const mostrarValorAleatorio = () => {
          const valorAleatorio = Math.floor(Math.random() * 100) + 1;
          alert("El valor aleatorio es: " + valorAleatorio);
        };
      
        return (
          <div>
            <h1>Generador de Valor Aleatorio</h1>
            <button onClick={mostrarValorAleatorio}>Mostrar Valor Aleatorio</button>
          </div>
        );
      }
//}
