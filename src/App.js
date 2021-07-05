import logo from './logo.svg';
import './App.css';
import Greet from './1.components/1.functional/Greet'
import {Named} from './1.components/1.functional/Named'
import Functional from './1.components/1.functional/Functional';
import Functional1 from './1.components/1.functional/Functional1';
import Functionalone from './1.components/1.functional/Functionalone';
// import Welcome from './1.components/2.class/Welcome';
import Welcome from './3.props/Welcome';
import Greeting from './3.props/Greeting';
import Counter from './4.state/Counter.js';
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
    <h1>This is function</h1>
    <Greeting name="Ayush" skill="full">This is message</Greeting>
    <Greeting name="Ayush Mishra" skill="backend"/>
    <Greeting name="Ayushi" skill="HR"/>
    <h1>This is class</h1>
    <Welcome name="Ayush" skill="full">This is message</Welcome>
    <Welcome name="Ayush Mishra" skill="backend"/>
    <Welcome name="Ayushi" skill="HR"/>

    <Counter/>
    
  
    </div>
  );
}

export default App;
