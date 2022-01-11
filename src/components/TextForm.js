import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
    
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        // console.log("Uppercase button was clicked", text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase.","success");
    }

    const handleLowClick = () => {
        // console.log("Lowercase button was clicked", text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase.","success");
    }

    const handleClearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared.","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces.","success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard.","success");
    }

    let formStyle = {
        backgroundColor: props.mode==="dark"?"#373649":"white",
        color: props.mode==="dark"?"white":"black",
    }

    return (
        <>
        <div className='container my-3'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBOx" className="form-label">Enter Text Below</label>
                <textarea className="form-control" placeholder='Enter text here' value={text} style={formStyle} onChange={handleOnChange} id="myBOx" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleClearText}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter some text in the textbox above to preview it here."}</p>
        </div>
        </>
    )
}
