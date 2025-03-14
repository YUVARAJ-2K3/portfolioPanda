import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import { ThemeProvider } from "./components/ThemeContext";
import Project from './components/Project';
import Skills from './components/Skills';

function App() {
  return (
    
    <div className="App">
      <ThemeProvider>
      <Header/>
      <Home/>
      <Aboutme/>
      <Project/>
      <Skills/>
      </ThemeProvider>
    </div>
  );
}

export default App;
