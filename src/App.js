import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
// import AboutUs from "./Components/AboutUs";
import Alert from "./Components/Alert";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleDarkMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000007";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f4f4f4";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="MyTextUtils" mode={Mode} toggleMode={toggleDarkMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<AboutUs />} />
            <Route
              exact path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Enter The Text Below To Analyze"
                  mode={Mode}
                />
              }
            />
          </Routes> */}
          <Textform
                  showAlert={showAlert}
                  heading="Enter The Text Below To Analyze"
                  mode={Mode}
                />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
