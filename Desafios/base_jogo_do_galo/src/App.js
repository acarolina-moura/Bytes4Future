import './App.css';
//Importar o jogo do galo
import { JogoDoGalo } from './components/JogoDoGalo';
import { Toggle } from './components/Toggle';


function App() {
  return (
    <div className="App">
      {/* Renderizar o JogoDoGalo */}
      <JogoDoGalo />
      {/* <Toggle /> */}

    </div>
  );
}


export default App;

