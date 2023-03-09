import './App.css';
import Header from './components/Header/header'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home'
import Contact from './components/Pages/Contact/Contact'
import Projects from './components/Pages/Projects/Projects'
import Wrapper from './components/Wrapper/Wrapper';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <img src="https://uc7a778120ab7b09dbb556e70416.previews.dropboxusercontent.com/p/thumb/AB1tEpTQVLTw2kQBHCYeF5dfXrLPGxKVO9Xyv2_rVIRekIZaQ4PvegOyPSDXp0Jshn04TvMC8fqNP1Bir3qmGBlXZGJqYn5ycHNEfKaNg4D8vwg4_ewtXK8T65NeVe0AHOem2jomP9n9DwAhYQMckz_S38_-nHELQQ34oXMZlaTAIPDpNu0W95K8ku0q8ib_rQNubr5m-FvMI181A-MSb4jBShXl7OULRcEFqLcxTiMkSh_gB6DQpx7a-t8g6rYd3D5A6fm5heZes2-inHzIvzAxr4ccDa8TbNYrwLPsVsJvHsL294E_uwUssQVTF-AG2U5EsMfwfrfsDazEj2ZMEBBDZoycpavtXeaZ7PQ8uD-OANQw7aYYFSGGkMqhGfCbWpDoITobu3GIEfexkiz9OleNSgD2AZef71YEgkp6nDyFMQ/p.png" alt="icon"/> */}
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
