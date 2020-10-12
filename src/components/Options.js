import React from "react";

const Options = () => {
  return (
    <div className="options">
      <div className="wrapper">
        <div className="optionsContainer">
          <div className="paragraphs">
            <p>Paragraphs:</p>
            <input type="text" />
          </div>
          <div className="tags">
            <p>Tags:</p>
            <select>
              <option value="p">&lt;p&gt;</option>
              <option value="h1"></option>
              <option value="h2"></option>
              <option value="h3"></option>
              <option value="h4"></option>
              <option value="h5"></option>
              <option value="h6"></option>
              <option value="span"></option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
