import React from "react";
export default function Utility(props){
    return(
    <>
         <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>This is a TextUtility to manipulate text</h1>
         </div>
    </>
    )
    
}