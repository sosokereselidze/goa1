import React, { useState, useMemo } from 'react';

const factorial = (n) => {
  console.log('Calculating factorial...');
  if (n <= 0) return 1;
  return n * factorial(n - 1);
};

const MemoizedFactorial = () => {
  const [number, setNumber] = useState(1);

  const factorialResult = useMemo(() => factorial(number), [number]);

  return (
    <div>
      <h2>Factorial Calculator</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      />
      <p>Factorial of {number}: {factorialResult}</p>
    </div>
  );
};

export default MemoizedFactorial;