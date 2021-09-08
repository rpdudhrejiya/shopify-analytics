import React from 'react';
import { hot } from 'react-hot-loader';
import './Assets/styles/app.css';
import Sidebar from './Components/Sidebar'
function App() {
  return (
    <Sidebar/>
  );
}

export default hot(module)(App);