import React, { useState, useMemo, useCallback } from 'react';

const factorial = (n) => {
  console.log('Calculating factorial...');
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

const ChildButton = React.memo(({ handleClick, label }) => {
  console.log(`Rendering button: ${label}`);
  return <button onClick={handleClick}>{label}</button>;
});

const MemoExample = () => {
  const colors = [
    'Red', 'Blue', 'Green', 'Yellow', 'Purple', 
    'Orange', 'Pink', 'Teal', 'Cyan', 'Magenta'
  ];

  const [number, setNumber] = useState(1);  
  const [searchTerm, setSearchTerm] = useState('');
  const [count, setCount] = useState(0);  

  const factorialResult = useMemo(() => factorial(number), [number]);

  const filteredColors = useMemo(() => {
    console.log('Filtering colors...');
    return colors.filter((color) =>
      color.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      {}
      <div>
        <h2>Factorial Calculator</h2>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value) || 1)}
        />
        <p>Factorial of {number}: <strong>{factorialResult}</strong></p>
      </div>

      {}
      <div>
        <h2>Color Filter</h2>
        <input
          type="text"
          placeholder="Search colors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
          {filteredColors.map((color, index) => (
            <li key={index} style={{ color: color.toLowerCase() }}>
              {color}
            </li>
          ))}
        </ul>
      </div>

      {}
      <div style={{ marginBottom: '20px' }}>
        <h2>Increment Counter</h2>
        <p>Count: <strong>{count}</strong></p>
        <ChildButton handleClick={incrementCount} label="Increment Count" />
      </div>
    </div>
  );
};

export default MemoExample;
