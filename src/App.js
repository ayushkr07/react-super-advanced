import logo from './logo.svg';
import './App.css';
import Greet from './1.components/1.functional/Greet'
import {Named} from './1.components/1.functional/Named'
import Functional from './1.components/1.functional/Functional';
import Functional1 from './1.components/1.functional/Functional1';
import Functionalone from './1.components/1.functional/Functionalone';
import Welcome from './1.components/2.class/Welcome';

// function Home(){
//   return <h1>This is home</h1>
// }

const Home = ()=><h1>Welcome to fat arrow home</h1>

function App() {
  return (
    <div>
    <h1>welcome to React App</h1>
    <h2>Come again</h2>
    <Greet />
    <Named/>
    <Functional/>
    <Functional1/>
    <Functionalone/>
    <Home/>
    <Welcome/>
    </div>
  );
}

export default App;
