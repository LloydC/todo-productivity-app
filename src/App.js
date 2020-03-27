import React, {useState} from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './App.css';
// import firebase from './firebase';
import TaskList from './components/TaskList.jsx';
import AddTaskForm from './components/AddTaskForm'

function App() {
  const today = new Date();
  const month = today.getUTCMonth() + 1; //months from 1-12
  const today2 = today.getUTCDate();
  const year = today.getUTCFullYear();
  const currentDay = `${today2}/${month <10 ? "0"+ month : month}/${year}`
// Need to build a function for line 8-12

  const [day, setDay] = useState(undefined);
  const modifiers = { 
    sundays: { daysOfWeek: [0] },
  }
  const modifiersStyles = {
    sundays: {
      color: '#ffc107',
      backgroundColor: '#fffdee',
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Todo Productivity App</h3>
        <p>It is {new Date().toLocaleTimeString()}.</p>
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
          <p><b>{currentDay} </b></p>
        )}
          <TaskList/>
          <AddTaskForm/>
        </div>
        <div className="gap">
          <DayPicker onDayClick={setDay} 
                    selectedDays={day} 
                    className="calendar"
                      modifiers={modifiers}
                      modifiersStyles={modifiersStyles}
                    />
        </div>
      </div>
      
      <footer className="App-footer">
        Made with <span role="img" aria-label="love">&#129505;</span>   by King Code
      </footer>
    </div>
  );
}

export default App;
