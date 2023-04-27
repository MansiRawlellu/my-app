import React, { useState } from 'react';
export default function Textform(props) {
    const[text,SetText]=useState('')
    const handleUpperCase=()=>{
        SetText(text.toUpperCase())
        props.showAlert("Converted to upperCase","success")
    }
    const handleOnChange=(event)=>{
        SetText(event.target.value)
    }
    const handleLowerCase=()=>{
        SetText(text.toLowerCase());
        props.showAlert("Converted to LowerCase","success")
    }
    const handleClearText=()=>{
        SetText('')
        props.showAlert("Text cleared","success")
    }
    return (
        <>
            <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <label htmlFor="mytext" className="form-label">Enter your text to analyze below</label>
                <textarea className="form-control" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'grey'}} value={text} onChange={handleOnChange} id="mytext" rows="8"></textarea>
            </div>
        
            <button type="button" className="btn btn-outline-primary mx-2" onClick={handleUpperCase}>Convert to upperCase</button>
            <button type="button" className="btn btn-outline-success mx-2" onClick={handleLowerCase}>Convert to lowerCase</button>
            <button type="button" className="btn btn-outline-danger mx-2" onClick={handleClearText}>Clear Text</button>

            <div className="count my-3" style={{color:props.mode==='light'?'black':'white'}}>
                <h1>
                    Your text summary
                </h1>
                <p>
                    Number of words are {text.split(" ").length} and characters are {text.length}
                </p>
                <h1>Time taken to read the words is {0.008 * text.split(" ").length}</h1>
                
                <h1>Text Preview: </h1>
                <p>{text}</p>
            </div>
       
       
        </>
    )
}