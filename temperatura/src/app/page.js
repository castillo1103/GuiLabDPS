"use client";
import React, { useState } from 'react';
import './Temperatura.css';

function TemperatureConverter() {
  const [temperature, setTemperature] = useState('');
  const [conversion, setConversion] = useState('CelsiusToFahrenheit');
  const [result, setResult] = useState('');

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  };

  const handleConversionChange = (e) => {
    setConversion(e.target.value);
  };

  const convertTemperature = () => {
    let convertedTemp;
    if (conversion === 'CelsiusToFahrenheit') {
      convertedTemp = (temperature * 9) / 5 + 32;
    } else {
      convertedTemp = ((temperature - 32) * 5) / 9;
    }
    setResult(convertedTemp.toFixed(2));
  };

  const clearFields = () => {
    setTemperature('');
    setConversion('CelsiusToFahrenheit');
    setResult('');
  };

  return (
    <div className="converter-container">
      <h1>Conversor de Temperatura</h1>
      <div className="input-container">
        <input
          type="number"
          value={temperature}
          onChange={handleTemperatureChange}
          placeholder="Ingresa la temperatura"
        />
        <select onChange={handleConversionChange} value={conversion}>
          <option value="CelsiusToFahrenheit">Celsius a Fahrenheit</option>
          <option value="FahrenheitToCelsius">Fahrenheit a Celsius</option>
        </select>
      </div>
      <button onClick={convertTemperature}>Convertir</button>
      <button onClick={clearFields} className="clear-btn">Limpiar</button>
      {result && (
        <div className="result">
          <h3>Resultado: {result}°</h3>
          
        </div>
      )}
      
      
    </div>
    
  );
}

export default TemperatureConverter;
