import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.insertDiv = this.insertDiv.bind(this);
    
    this.state = {
      inputName: '',
      inputEmail: '',
      inputCpf: '',
      inputAdress: '',
      inputCity: '',
      inputState: '',
      inputType: '',
      inputCv: '',
      inputJob: '',
    };
  }

  handleChange(e) {
    const {target} = e;
    const {name, value} = target;

    this.setState({
      [name]: value,
    });
  }

  insertDiv() {
    const data = this.state;
    const element = <p> {data[0]}</p> ;
    // console.log(element);
    ReactDOM.render(element, document.getElementById('root'));
  }

  render() {
    return (
      <div className="App">
        <h1>Form</h1>
        <form className="form">
          <section className="sectionForm">
            <div className="personal-field">
              <label>
                <input type="text" onChange={this.handleChange} name="inputName" maxLength="40" required={true} value={this.state.inputName} placeholder="Digite seu nome" />
              </label>
              <label>
                <input type="text" onChange={this.handleChange} name="inputEmail" maxLength="50" value={this.state.inputEmail} required={true} placeholder="Digite seu email" />
              </label>
              <label>
                <input type="text" onChange={this.handleChange} name="inputCpf" maxLength="11" value={this.state.inputCpf} required={true} placeholder="Digite seu cpf" />
              </label>
              <label>
                <input type="text" onChange={this.handleChange} name="inputAdress" maxLength="200" value={this.state.inputAdress} required={true} placeholder="Digite seu endereço" />
              </label>
              <label>
                <input type="text" onChange={this.handleChange} name="inputCity" maxLength="28" value={this.state.inputCity} required={true} placeholder="Digite sua cidade" />
              </label>
              <label>
                <select onChange={this.handleChange} name="inputState" required={true} >Estado:
                  <option value="São Paulo">São Paulo</option>
                  <option value="Minas Gerais">Minas Gerais</option>
                  <option value="Amazonas">Amazonas</option>
                </select>
              </label>
              <label>
                <input type="radio" onChange={this.handleChange} name="inputType" required={true} value="casa" />Casa
              </label>
              <label>
                <input type="radio" onChange={this.handleChange} name="inputType" required={true} value="Apartamento" />Apartamento
              </label>
            </div>
            <div className="last-job">
              <label>
                <textarea heigth="100px" onChange={this.handleChange} name="inputCv" maxLength="40" value={this.state.inputCv} required={true} placeholder="resumo do cv"/>
              </label>
              <label>
                <input type="text" onChange={this.handleChange} name="inputJob" maxLength="500" value={this.state.inputJob} required={true} placeholder="Descrição do cargo"/>
              </label>
            </div>
          </section>
          <button className="submit" type="submit">Enviar</button>
          <p onClick={this.insertDiv}> Div </p>

        </form>
      </div>
    );
  }
}

export default App;
