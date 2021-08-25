import './App.css';

function App() {
  const texto = ['testando React', 'Aprendendo react', 'JSX', '#VQV'];
  const Task = (value) => {
      return (
        <ul>
          {value.map((element) => (
              <li>{element}</li>
            ))
          }
        </ul>
      );
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {Task(texto)}

        </div>
      </header>
    </div>
  );
}

export default App;
