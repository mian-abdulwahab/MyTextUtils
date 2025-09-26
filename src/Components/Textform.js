import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);
  // text = "New text"; wrong way to change the state
  // setText("New text"); correct way to change the state

  const handleUpperClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    updateText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleLowerClick = () => {
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    updateText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleClearClick = () => {
    // console.log("Clear text was clicked" + text);
    let newText = "";
    updateText(newText);
    props.showAlert("Cleared Text!", "success");
  };
  const updateText = (newText) => {
    setHistory([...history, text]);
    setText(newText);
    setFuture([]);
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    updateText(event.target.value);
  };
  const handleUndoClick = () => {
    if (history.length === 0) return;
    const previousText = history[history.length - 1];
    const newHistory = history.slice(0, history.length - 1);
    setHistory(newHistory);
    setFuture([text, ...future]);
    setText(previousText);
    props.showAlert("Undid last action", "success");
  };
  const handleRedoClick = () => {
    if (future.length === 0) return;
    const nextText = future[0];
    const newFuture = future.slice(1);
    setFuture(newFuture);
    setHistory([...history, text]);
    setText(nextText);
    props.showAlert("Redid last action", "success");
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="6"
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "#f8f9fa",
              color: props.mode === "dark" ? "white" : "#212529",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpperClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary"
          onClick={handleUndoClick}
          disabled={history.length === 0}
        >
          Undo
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleRedoClick}
          disabled={future.length === 0}
        >
          Redo
        </button>
        <button className="btn btn-danger" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters &nbsp;
          &nbsp; + &nbsp; &nbsp; {0.008 * text.split(" ").length} Minutes To
          Read
        </p>
        <h2>Text Preview</h2>
        <p>{text.length > 0 ? text : "Enter The Text Above To Preview"}</p>
      </div>
    </>
  );
}
