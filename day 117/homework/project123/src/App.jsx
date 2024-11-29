import React, { useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Paragraph
      </button>
      {isVisible && (
        <p>This is a paragraph that can be shown or hidden.</p>
      )}
    </div>
  );
}

export default App;