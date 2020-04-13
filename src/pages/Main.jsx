import React, {useState} from 'react';
import DayPicker from 'react-day-picker';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm'
import generateDay from '../helpers/generateDate'
import 'react-day-picker/lib/style.css';

export default function Main(){
    const currentDay = generateDay()
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
    return(
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
    );
}