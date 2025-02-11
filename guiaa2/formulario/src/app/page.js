"use client";
import React, { Component } from 'react';
import './formulario.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
      errorMessage: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    if (username === 'camila' && password === 'contraseña1') {
      this.setState({ isLoggedIn: true, errorMessage: '' });
    } else {
      this.setState({ errorMessage: 'Credenciales incorrectas' });
    }
  };

  render() {
    const { username, password, isLoggedIn, errorMessage } = this.state;
    return (
      <div className="login-container">
        {!isLoggedIn ? (
          <form className="login-form" onSubmit={this.handleSubmit}>
            <h2>Iniciar Sesión</h2>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <div className="input-group">
              <label>Usuario:</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label>Contraseña:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <button type="submit" className="login-btn">
              Iniciar Sesión
            </button>
          </form>
        ) : (
          <div className="welcome-message">
            <h2>Bienvenido, {username}!</h2>
          </div>
        )}
      </div>
    );
  }
}

export default App;
