//1
import React, { useState } from 'react';

function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', minHeight: '100vh' }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeSwitcher;

//2
// function CharacterLimit() {
//   const [text, setText] = useState('');
//   const charLimit = 100;

//   const handleChange = (e) => {
//     setText(e.target.value);
//   };

//   const remainingChars = charLimit - text.length;

//   return (
//     <div>
//       <textarea 
//         value={text} 
//         onChange={handleChange} 
//         maxLength={charLimit} 
//         placeholder={`Type up to ${charLimit} characters...`} 
//       />
//       {remainingChars <= 20 && remainingChars > 0 && (
//         <p style={{ color: 'red' }}>Warning: {remainingChars} characters remaining</p>
//       )}
//     </div>
//   );
// }

// export default CharacterLimit;


//3
// function ColorPicker() {
//   const [color, setColor] = useState('#000000');

//   const handleChangeColor = (e) => {
//     setColor(e.target.value);
//   };

//   return (
//     <div>
//       <input type="color" value={color} onChange={handleChangeColor} />
//       <div style={{ width: '100px', height: '100px', backgroundColor: color, marginTop: '10px' }}>
//         <p style={{ color: '#fff', textAlign: 'center', lineHeight: '100px' }}>{color}</p>
//       </div>
//     </div>
//   );
// }

// export default ColorPicker;


//4
// function Timer() {
//   const [seconds, setSeconds] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let interval;
//     if (isRunning) {
//       interval = setInterval(() => {
//         setSeconds(prev => prev + 1);
//       }, 1000);
//     } else if (!isRunning && seconds !== 0) {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);
//   }, [isRunning, seconds]);

//   const handleStartStop = () => {
//     setIsRunning(!isRunning);
//   };

//   const handleReset = () => {
//     setIsRunning(false);
//     setSeconds(0);
//   };

//   return (
//     <div>
//       <h1>{seconds} seconds</h1>
//       <button onClick={handleStartStop}>{isRunning ? 'Pause' : 'Start'}</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// }

// export default Timer;
