import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import Quote from './pages/Quotes';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/about" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

export default App;
