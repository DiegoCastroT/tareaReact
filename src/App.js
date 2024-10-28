// App.js
import React from 'react';
import Saludo from './saludo'; 
import Despedida from './despedida'; 
import Coche from './coches';
import './coche.css'; 

const App = () => {

  // Importar el saludo
  const mostrarSaludo = false; 
  const nombreUsuario = "Diego"; 

  // Guardar los coches en un array
  const coches = [
    { Matricula: '1425BTY', Marca: 'Peugeot', Modelo: '3008', Tipo: 'híbrido' },
    { Matricula: '1762MNY', Marca: 'Mercedes', Modelo: 'EQS', Tipo: 'Diesel' },
    { Matricula: '9882TPK', Marca: 'Renault', Modelo: '4 E-Tech', Tipo: 'Eléctrico' },
    { Matricula: '6634TRV', Marca: 'Volkswagen', Modelo: 'Golf', Tipo: 'Gasolina' },
    { Matricula: '2285RPL', Marca: 'Toyota', Modelo: 'RAV4', Tipo: 'híbrido' },
    { Matricula: '1782PRT', Marca: 'Peugeot', Modelo: '5008', Tipo: 'diesel' },
  ];

  
  return (
    <div>
      {mostrarSaludo ? (
        <Saludo nombre={nombreUsuario} />
      ) : (
        <Despedida nombre={nombreUsuario} />
      )}
      <div>
        {coches.map((coche, index) => (
          <Coche
            key={index}
            matricula={coche.Matricula}
            marca={coche.Marca}
            modelo={coche.Modelo}
            tipo={coche.Tipo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
