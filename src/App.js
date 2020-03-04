import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Todo Productivity App
      </header>
      
      <div className="container">
        <div className="first-section">
          <b>Next 7 days</b>
        </div>

        <div className="second-section">
          <p><b>Next 7 days</b></p>
          <p>Monday</p>
          <p>Tuesday</p>
          <p>Wednesday</p>
          <p>Thursday</p>
          <p>Friday</p>
          <p>Saturday</p>
          <p>Sunday</p>
        </div>
        <div className="gap">
          gap
        </div>
      </div>
      
      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
