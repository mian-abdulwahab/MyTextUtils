// import React from "react";
import { useState } from "react";

export default function AboutUs(props) {
//   const [myStyle, setMyStyle] = useState({
//     color: "black",
//     backgroundColor: "white",
//   });
let myStyle = {
    color : props.mode === 'dark' ? 'white' : 'black',
    backgroundColor : props.mode === 'dark' ? '#000b15ff' : 'white',
  };
  // const [btnText, setBtnText] = useState("Enable Dark Mode");


  return (
    <>
      <div className="container" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Browser Compatible
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browsers such as
                Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count
                characters in facebook, blog, books, excel document, pdf document,
                essays, etc.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Free to Use
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils is a free character counter tool that provides instant
                character count & word count statistics for a given text. TextUtils
                reports the number of words and characters. Thus it is suitable for
                writing text with word/ character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                TextUtils Features
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils is a utility which can be used to manipulate your text in the way you want. It can convert your text to uppercase, lowercase, clear the text, undo and redo the changes you made in the text.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
