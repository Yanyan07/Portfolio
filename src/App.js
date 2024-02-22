import './App.css';
import Title from './components/main/Title';
import About from './components/main/About';
import Project from './components/main/Project';
import Contact from './components/main/Contact';

export default function App() {

  return (
    <div className="container">
      <Title />
      <About /> 
      <Project />
      <Contact />
    </div>
  );
  
}

