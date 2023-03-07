import './App.css';
import Header from './components/Header'
// import Icon from ''
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Icon /> */}
      <Home />        
    </div>
  );
}

export default App;
