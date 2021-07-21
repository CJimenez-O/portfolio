import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './componenets/navbar'
import Hero from './componenets/Hero'
import About from './componenets/About'

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Hero />
      <About />
    </BrowserRouter>
  );
}

export default App;
