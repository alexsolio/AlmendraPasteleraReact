import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/IntemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Almendra Pastelera"} />
    </div>
  );
}

export default App;
