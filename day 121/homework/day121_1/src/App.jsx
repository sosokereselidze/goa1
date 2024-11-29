import { useState } from 'react'


function App() {
  const [text, setText] = useState('');
  const characterLimit = 100;
  const warningThreshold = 90;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ padding: '20px', width: '300px' }}>
      <textarea
        value={text}
        onChange={handleChange}
        maxLength={characterLimit}
        rows="4"
        cols="50"
        placeholder="Type here..."
        style={{
          width: '100%',
          boxSizing: 'border-box',
          resize: 'none',
        }}
      />
      <div style={{ position: 'relative', marginTop: '5px' }}>
        <span>
          {text.length}/{characterLimit} characters
        </span>
        {text.length >= warningThreshold && (
          <div
            style={{
              color: 'red',
              position: 'absolute',
              top: '0',
              right: '0',
            }}
          >
            Warning: Approaching limit!
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
