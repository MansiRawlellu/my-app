import React,{ useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Utility from './Components/Utility';

function App() {
  const [mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black'
      showAlert('This is dark mode','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("This is light mode","success")

    }
  }
  return (
    
    <Router>
      <Navbar title="TextUtility" abouttitle="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/home" element={<Textform heading="Text Area" showAlert={showAlert} mode={mode}/>} />
          <Route exact path="/TextUtility" element={<Utility mode={mode}/>}/>
        </Routes>
        </div>
        </Router>
    
  );
}

export default App;
