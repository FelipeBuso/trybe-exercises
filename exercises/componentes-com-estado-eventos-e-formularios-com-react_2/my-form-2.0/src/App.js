import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Form</h1>
        <form className="form">
          <div className="personal-field">
            <label>
              <input type="text"  name="input-name" maxLength="40" required="true" placeholder="Digite seu nome" />
            </label>
            <label>
              <input type="text" name="input-email" maxLength="50" required="true" placeholder="Digite seu email" />
            </label>
            <label>
              <input type="text" name="input-cpf" maxLength="11" required="true" placeholder="Digite seu cpf" />
            </label>
            <label>
              <input type="text" name="input-adress" maxLength="200" required="true" placeholder="Digite seu endereço" />
            </label>
            <label>
              <input type="text" name="input-city" maxLength="28" required="true" placeholder="Digite sua cidade" />
            </label>
            <label>
              <select name="input-uf" required="true" >Estado:
                <option value="São Paulo">São Paulo</option>
                <option value="Minas Gerais">Minas Gerais</option>
                <option value="Amazonas">Amazonas</option>
              </select>
            </label>
            <label>
              <input type="radio" name="tipo" required="true" value="casa" />Casa
            </label>
            <label>
              <input type="radio" name="tipo" required="true" value="Apartamento" />Apartamento
            </label>
          </div>
          <div className="last-job">
            <label>
              <textarea heigth="100px" name="input-cv" maxLength="40" required="true" placeholder="resumo do cv"/>
            </label>
            <label>
              <input type="text" name="input-job" maxLength="500" required="true" placeholder="Descrição do cargo"/>
            </label>
          </div>
          <button classname="submit" type="submit">Enviar</button>

        </form>
      </div>
    );
  }
}

export default App;
