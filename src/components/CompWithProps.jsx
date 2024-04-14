import { useState } from "react"

  export const CompWithProps = ({ initialValue }) => {
  const [inputText, setInputText] = useState(initialValue || '');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <h2>Componente con Props</h2>
      <div>
        <label htmlFor="textInput">Escribe algo:</label>
        <input 
          type="text" 
          id="textInput" 
          value={inputText} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <p>User: {inputText}</p>
      </div>
    </div>
  );
};

