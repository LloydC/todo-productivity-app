import React from 'react';

export default function Navbar(){
    return (
        <header className="App-header">
            <h3>Todo Productivity App</h3>
            <p>It is {new Date().toLocaleTimeString()}.</p>
      </header>
    );
}