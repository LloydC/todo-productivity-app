import React, {useState} from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './App.css';

function App() {

  const [day, setDay] = useState(undefined)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo Productivity App</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </header>
      
      <div className="container">
        <div className="first-section">
          <p><b>Next 7 days</b></p>
          <p>Today</p>
          <p>Tomorrow</p>
          <p>...</p>
        </div>

        <div className="second-section">
        {day ? (
          <p><b>{day.toLocaleDateString()}</b></p>
        ) : (
          <p><b>Current Day </b></p>
        )}
          
          <ul>
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
          </ul>
          <span className="addTask">+ Add task</span>
        </div>
        <div className="gap">
          <DayPicker onDayClick={setDay} selectedDays={day} className="calendar"/>;
        </div>
      </div>
      
      <footer className="App-footer">
        Made with <span role="img" aria-label="love">&#129505;</span>   by King Code
      </footer>
    </div>
  );
}

export default App;
