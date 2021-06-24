import './App.css';
import pokemons from './data';
import Header from './components/Header';
import Pokedex from './components/Pokedex';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Pokedex pokemons={ pokemons } />
      <Footer />
    </div>
  );
}

export default App;
