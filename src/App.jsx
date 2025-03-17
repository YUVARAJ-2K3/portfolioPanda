import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import { ThemeProvider } from "./components/ThemeContext";
import Project from './components/Project';
import Skills from './components/Skills';
import Certificates from './components/certification';
import Internships from "./components/internships";
import Contact from "./components/Contacts";
function App() {
  return (
    
    <div className="App">
      <ThemeProvider>
      <Header/>
      <Home/>
      <Aboutme/>
      <Project/>
      <Skills/>
      <Certificates/>
      <Internships/>
      <Contact/>
      </ThemeProvider>
    </div>
  );
}

export default App;
