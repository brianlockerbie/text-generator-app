import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [tag, setTag] = useState("p");
  const [inputValue, setInputValue] = useState(1);
  const [includeHtml, setIncludeHtml] = useState("Yes");
  const [copiedCode, setCopiedCode] = useState(false);

  return (
    <div className="App">
      <h1>Welcome</h1>
    </div>
  );
};

export default App;