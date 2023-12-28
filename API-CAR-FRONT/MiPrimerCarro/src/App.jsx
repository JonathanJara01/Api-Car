import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const ruta = 'http://localhost:5000/apiCar';

const App = () => {
  const [infoCars, setInfoCars] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await axios.get(ruta);
        setInfoCars(response.data);
      } catch (error) {
        console.error('Error al obtener datos:', error.message);
      }
    };

    obtenerDatos();
  }, []);

  return (
    <div>
      {infoCars.map((car) => (
        <div key={car.id}>
          <h1>Id: {car.id}</h1>
          <h1>Marca: {car.marca}</h1>
          <h2>Modelo: {car.modelo}</h2>
          <h3>Color: {car.color}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default App;

