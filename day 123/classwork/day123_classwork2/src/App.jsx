import { useState, useEffect } from 'react';

function DocumentClickCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const handleDocumentClick = () => {
      increment();
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>document click count: {count}</h1>
      <p>click anywhere</p>
    </div>
  );
}

export default DocumentClickCounter;
