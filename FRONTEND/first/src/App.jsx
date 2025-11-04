import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import React from "react" 
import img from "./assets/download.jpg"
import Navbar from './components/Navbar.jsx';
import Card from './components/Card.jsx';
import Image from './components/Image.jsx';
import Button from './components/Button.jsx';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Card/>
      <Image/>
      <Button/>
    </div>
  )
}

export default App
