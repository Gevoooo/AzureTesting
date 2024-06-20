import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const fName = "John";
const lName = "Doe";
var luckyNum = Math.floor(Math.random() * 11);

function App() {
  return (
    <div>
      <h1>Hello {fName} {lName}!</h1>
      <h1>Refresh the page to get a new lucky number</h1>
      <p>Your lucky number is {luckyNum}</p>
    </div>
  );
}

export default App;
