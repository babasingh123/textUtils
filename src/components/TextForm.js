import React, { useState } from 'react'



export default function TextForm(props) {
    const [text , setText] = useState('Exter text here') ;
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Upper case","success");
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Lower case","success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Clear","success");
    }
    
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
      
  return (
    <>
<div className="container" style={{color: props.mode==='white'?'black':'grey'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} id="myBox" style={{ backgroundColor: 'grey' }} onChange={handleOnChange}rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upperCase</button>
  <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to upperCase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
  <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
  </div>
  <div className="container my-3" style={{color: props.mode==='white'?'black':'grey'}}>
    <h2>your text summary</h2>
    <p>{text.split(" ").length} this is number of words - {text.length}</p>
    <p>{text.split(" ").length*0.008} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
  </>
  )
}
