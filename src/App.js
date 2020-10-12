import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "./components/Container";
import Title from "./components/Title";

const App = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [tag, setTag] = useState("p");
  const [inputValue, setInputValue] = useState(1);
  const [includeHtml, setIncludeHtml] = useState("Yes");
  const [copiedCode, setCopiedCode] = useState(false);

  return (
    <div className="App">
      <Container>
        <Title />
      </Container>
    </div>
  );
};

export default App;