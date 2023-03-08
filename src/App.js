import './App.css';
import Header from './components/Header'
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Pages/Home/Home'
// import Contact from './components/Pages/Contact/Contact'
import Projects from './components/Pages/Projects/Projects'


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Icon /> */}
      {/* <Home />         */}
      {/* <Contact/> */}
      <Projects />
    </div>
  );
}

export default App;
