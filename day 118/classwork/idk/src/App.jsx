// import Personinfo from "./components/Personinfo.jsx"

// function App() {
//   return (
//     <>
//       <Personinfo name="soso" lastname="kereselidze" email="soso.kereselidze1@gmail.com"/>
//     </>
//   )  
// }

// export default App

import React, { useState } from 'react';

function ColorChange() {
  const [color, setColor] = useState('');
  const [paragraphColor, setParagraphColor] = useState('black');

  const handleInputChange = (event) => {
    setColor(event.target.value);
  };

  const handleButtonClick = () => {
    setParagraphColor(color);
  };

  return (
    <div>
      <input
        type="text"
        value={color}
        onChange={handleInputChange}
        placeholder="Enter a color"
      />
      <button onClick={handleButtonClick}>
        change color
      </button>
      <p style={{ color: paragraphColor }}>
        soso kereselidze 123
      </p>
    </div>
  );
}

export default ColorChange;
