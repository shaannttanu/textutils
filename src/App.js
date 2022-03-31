
import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar'
import TextArea from './Components/TextArea';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleDark = (event) => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      document.title = 'TextUtils(Dark)';

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';

    }
  }
  return (
    <>
      <Router>
        <NavBar title="TextUtils" about="About" mode={mode} toggleDark={toggleDark} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextArea heading="Text Converter" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
