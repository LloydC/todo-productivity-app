import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo Productivity App</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </header>
      
      <div className="container">
        <div className="first-section">
          <b>Next 7 days</b>
        </div>

        <div className="second-section">
          <p><b>Next 7 days</b></p>
          <p>Today</p>
          <span className="addTask">+ Add task</span>
          <p>Tomorrow</p>
          <span className="addTask">+ Add task</span>
        </div>
        <div className="gap">
          <DayPicker />;
        </div>
      </div>
      
      <footer className="App-footer">
        Made with <span role="img" aria-label="love">&#129505;</span>   by King Code
      </footer>
    </div>
  );
}

export default App;
