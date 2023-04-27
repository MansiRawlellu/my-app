import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
//import About from './Components/About';
function App() {
  const [mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    const setTimeout=(()=>{
      setAlert(null)
    },3000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showAlert('This is dark mode','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("This is light mode","success")

    }
  }
  return (
    <>
      <Navbar title="TextUtility" abouttitle="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container'>
        <Textform heading="Text Area" showAlert={showAlert} mode={mode}/></div>
      
      {/* <div className="container my-4">
        <About/>
      </div> */}
    </>
  );
}

export default App;
