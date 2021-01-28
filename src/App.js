import './App.css';
import Navbar from './components/Navbar/Navbar';
import FirstBlock from './components/Banner/Banner';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="app">
      <Navbar />
      <FirstBlock />
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
