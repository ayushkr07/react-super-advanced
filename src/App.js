import logo from './logo.svg';
import './App.css';
import Greet from './1.components/1.functional/Greet'
import {Named} from './1.components/1.functional/Named'
import Functional from './1.components/1.functional/Functional';
import Functional1 from './1.components/1.functional/Functional1';

function App() {
  return (
    <div>
    <h1>welcome to React App</h1>
    <h2>Come again</h2>
    <Greet />
    <Named/>
    <Functional/>
    <Functional1/>
    </div>
  );
}

export default App;
