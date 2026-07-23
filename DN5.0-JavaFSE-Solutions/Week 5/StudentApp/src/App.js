import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Management Portal</h1>
      </header>
      <main className="App-container">
        <Home />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
