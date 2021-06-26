import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks';

const taskList = ['Estudar React', 'Revisar Jest', 'Refatorar projetos antigos', 'Organizar repositório no Github', 'Atualizar o Linkedin'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {taskList.map((task) => <Tasks taskItem={task}/>)}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
