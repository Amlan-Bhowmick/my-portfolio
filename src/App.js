import logo from './logo.svg';
import './App.css';
import Header from '../src/Component/Header/Navbar.js';
import About from '../src/Component/About/About.js';
import Contact from './Component/ContactMe/ContactMe.js';
import Resume from './Component/Resume/Resume';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Resume/>
      <Contact/>
    </div>
  );
}

export default App;
