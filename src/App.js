
import './App.css';
 import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
 import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
 


function App() {
  const[mode,setMode] = useState('dark');
  const[alert,setAlert] = useState(null);
 const showAlert = (message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500)
 }
  const toogelMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor='#042743';
      showAlert("light mode has been enabled","success");
    }else {
      setMode('dark');
      document.body.style.backgroundColor='white';
      showAlert("dark mode has been enabled","success");
    }
  }
  return (
    <>
    <div>

<Router>
<Navbar title="TextUtils" aboutText="About" mode={mode} toogelMode={toogelMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
    <Route path="/about"
    element={<About />}/>
    <Route path="/"
    element = {<TextForm heading="Enter the text for analyze" mode={mode} showAlert={showAlert}/>}/>
    </Routes>
    </div>
  </Router>

</div>
    </>
  );
}

export default App;
