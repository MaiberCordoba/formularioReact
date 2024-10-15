import logo from './logo.svg';
import './App.css';
import Mensaje1 from './componentes/Mensaje1';
import Saludo from './componentes/Saludo';
import Greting from './componentes/Greting';
import Calculadora from './componentes/Calculadora';



function App() {
  return (
    <>
    <h1 className='App'> titulo</h1>
    <Mensaje1/>
    <Saludo/>
    <Greting nombre = 'maiber'/>
    <Calculadora n1 ='3'  n2 = '5' op ='+' />
    <Calculadora n1 ='3'  n2 = '5' op ='-' />
    <Calculadora n1 ='3'  n2 = '5' op ='*' />
    <Calculadora n1 ='0'  n2 = '2' op ='/' />
    </>

  );
}

export default App;
