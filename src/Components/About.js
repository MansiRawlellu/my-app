import React from 'react'

export default function About(props) {
   
    // const [myStyle,setMyStyle]=useState({
    //     color:"black",
    //     backgroundColor:"white"
    // })//if dark then white and if white then dark
     //const [btntext,setBtnText]=useState('Enable dark mode')
    // const handleMode=()=>{
    //     if(myStyle.color==="white"){
    //        setMyStyle({
    //             color:"black",
    //             backgroundColor:"white"
    //         })
    //         setBtnText("Enable Dark mode")
    //     }
    //     else{
    //        setMyStyle({
    //        color:"white",
    //     backgroundColor:"black"
    //     })
    //     setBtnText("Enable Light mode")

    // }
    // }
    let myStyle={
      color:props.mode==='dark'?'white':'black',
      backgroundColor:props.mode==='dark'?'black':'white',
     

    }
  return (
    <div className="container" style={myStyle}>
        <h1>About us</h1>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" >
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This utility will help you to analyze your text,convert to upperCase,lowerCase and also clear the text</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free To Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>It a free of cost web utility </strong>
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatibilitsy</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This will work on all browsers and can be used to manipulate texts</strong>
      </div>
    </div>
  </div>
</div>
{/* <div className='container my-3'>
<button type="button" className="btn btn-outline-secondary" onClick={handleMode}>{btntext}</button>
</div> */}
</div>
    
  )
}
