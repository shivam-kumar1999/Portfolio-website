
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  return (
    <div className="App">


        <Navbar></Navbar>
         <Home></Home>
         <About></About>
         <Skills></Skills>
         <Work></Work>
        
    </div>
  );
}

export default App;
