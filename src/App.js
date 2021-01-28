import './App.css';
import Navbar from './components/Navbar/Navbar';
import FirstBlock from './components/Banner/Banner';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Project2 from './components/Projects/Project2';

function App() {
  return (
    <div className="app">
      <Navbar />
      <FirstBlock />
      <Intro />
      <Projects />
      <Project2 />
    </div>
  );
}

export default App;
