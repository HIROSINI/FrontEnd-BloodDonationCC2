import React from "react";
import "./Sam1.css";
/* import rectangle42 from "./assets/rectangle42.svg";
import image17 from "./assets/image17.png";
import vector from "./assets/vector.svg"; */
const App = () => {
  return (
    <div className="mac-book-pro-16-19">
      <div className="image-25">
        <div className="flex-container">
          <div className="rectangle-52">
            <span className="based-on-electricity">
              Based on Electricity Problems
            </span>
          </div>
          <div className="vector" />
        </div>
        <div className="flex-container-1">
          <div className="rectangle-42" />
          <input
            className="cat-absolute-container"
            placeholder="add Your Complaints/ Description About The Problem Here"
            type="text"
          />
        </div>
        <div className="rectangle-40">
          <div className="image-17" />
          <span className="add-image">add image</span>
        </div>
        <button className="rectangle-41">
          <span className="submit">submit</span>
        </button>
      </div>
    </div>
  );
};
export default App;