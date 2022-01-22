import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Task = (...value) => {
  const lista = []
  value.forEach((valor) => {
    lista.push(<li>{valor}</li>);
  })
  return lista;
}

const listaDeTarefa = [
  'estudar React',
  'ajudar o Vagner',
  'fazer o Anki',
  'estilizar e adicionar funçõe no projeto de carrinho'
]

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
