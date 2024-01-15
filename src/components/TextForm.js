import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
   // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText); // Use newText variable instead of passing "newText" string
    props.showAlert("Converted to uppercase!","success")
}
const handleLoClick = () => {
 // console.log("Uppercase was clicked: " + text);
  let newText = text.toLowerCase();
  setText(newText); // Use newText variable instead of passing "newText" string
  props.showAlert("Converted to lowercase!","success")
}
const handleClearClick = () => {
  // Assuming 'text' is the state you want to clear
  let clearedText = "";
  setText(clearedText);
  props.showAlert("Text cleared!", "success");
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
}

const handleDownloadClick = () => {
  let newText = ('');
  setText(newText); // Use newText variable instead of passing "newText" string
  props.showAlert("Converted to Download Text","success")
}

const handleOnChange = (event) => {
   // console.log("onChange");
    setText(event.target.value);
}

const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#193854'}}>
        <h1>
     {props.heading} 
    </h1>
<div className="mb-3">
<textarea className="form-control"   value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#193854'}} id="myBox"   rows="8"></textarea>
</div>

<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleDownloadClick}>Download Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>


<div className="container my-3" style={{color: props.mode==='dark'?'white':'#193854'}}>
  <h1>Your text summary</h1>
  <p> {text.split (" ").length} words and {text.length}  characters</p>
  <p> { 0.008 * text.split (" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:" Enter something in the textboxabove to preview it here "}</p>
</div>
    </div>
    </>
  )
}
