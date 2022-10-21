import Background from './components/Background';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {LangProvider} from './LangContext';

function App() {
  return (
      <LangProvider>
        <div className="App">
          <Background />
          <Home />
          <Menu />
          <About />
          <Projects />
          <Contact />
        </div>
      </LangProvider>
  );
}

export default App;
