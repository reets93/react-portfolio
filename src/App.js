import './App.css';
import Header from './components/Header/header'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Projects from './Pages/Projects/Projects'
import Wrapper from './components/Wrapper/Wrapper';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Wrapper>
            <Projects />
          </Wrapper>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
