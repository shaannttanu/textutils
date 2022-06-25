import React,{useState} from 'react'


export default function TextArea(props) {

    let fs={
        fontStyle:'italic'
    }
    const[text,setText]=useState('Enter text here');

    const handleUpClick=(event)=>{
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLcClick=(event)=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleReset=(event)=>{
        setText("");
    }
    const handleSpChar=(event)=>{
        setText(text.replace(/[^a-zA-Z ]/g, ""));
    }

    const handleCopy=(event)=>{
        let text=document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
  return (
    <>
    <div className="mb-3 my-3">
        <h3>{props.heading}</h3>
        <textarea style={{backgroundColor:props.mode==='dark'?'#403f3fe8':'white' , color:
        props.mode==='dark'?'white':'black'}} value={text} placeholder="Enter text here" className="form-control" id="myBox" rows="6" onChange={handleOnChange}></textarea>
        <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='light'?'primary':'light'} m-1 btn-sm`} onClick={handleUpClick}>To UpperCase</button>
        <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='light'?'primary':'light'} m-1 btn-sm`} onClick={handleLcClick}>To LowerCase</button>
        <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='light'?'primary':'light'} m-1 btn-sm float-end`} onClick={handleReset}>Reset</button>
        <button disabled={text.length===0} className={`btn btn-outline-${props.mode==='light'?'primary':'light'} m-1 btn-sm`} onClick={handleCopy}>Copy</button>
        <button disabled={text.length===0}  className={`btn btn-outline-${props.mode==='light'?'primary':'light'} m-1 btn-sm`} onClick={handleSpChar}>Remove Special Char</button>
    </div>
    <div className="mb-3 my-2">
        <h5>Details : </h5>
        <p id="p1">Words : {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} &nbsp; &nbsp; Characters : {text.length}</p>
        <p id="p2">Time to read : {0.008*(text.split(/\s+/).filter((element)=>{return element.length!==0}).length)} minutes</p>
        <h3>Preview</h3>
        <p style={fs}>{text.length>0?text:"Enter Text in the TextBox above"}</p>
    </div>
    </>
  )
}
