import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={ <ItemListContainer/>} />
      <div className="App">
      <header className="App-header">
        <ItemListContainer/>
      </header>
    </div>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
