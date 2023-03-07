import './App.css';
import Header from './components/Header'
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home'
import Contact from './components/Pages/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Icon /> */}
      {/* <Home />         */}
      <Contact/>
    </div>
  );
}

export default App;
