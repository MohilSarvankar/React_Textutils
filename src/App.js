import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#070427";
      document.body.style.color = "white";
      showAlert("Dark mode enabled successfully.", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode enabled successfully.", "success");
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Textutils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert} />}/>
          <Route exact path="/about" element={<About mode={mode}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
