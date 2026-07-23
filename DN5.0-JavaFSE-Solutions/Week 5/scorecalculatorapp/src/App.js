import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Score Calculator</h1>
      </header>
      <main className="App-main">
        <CalculateScore
          Name="Steffe"
          School="D.A.V Public School"
          Total={284}
          goal={3}
        />
      </main>
    </div>
  );
}

export default App;
