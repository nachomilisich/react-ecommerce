import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;
