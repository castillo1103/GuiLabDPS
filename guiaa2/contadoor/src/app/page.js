"use client";

import { useState } from "react";
import './Counter.css'; // Asegúrate de que la ruta esté correcta

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Contador</h2>
        <p className="count">{count}</p>
        <div className="button-container">
          <button 
            onClick={() => setCount(count - 1)} 
            className="button button-minus"
          >
            -
          </button>
          <button 
            onClick={() => setCount(count + 1)} 
            className="button button-plus"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

