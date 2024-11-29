import { useState, useEffect } from 'react';

function StateWatcher() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('soso');

  useEffect(() => {
    console.log('piece of state changed');
  }, [count, name]);

  
  const incrementCount = () => {
    setCount(count + 1);
  };

  const changeName = () => {
    setName(name === 'soso' ? 'luka' : 'soso');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Count: {count}</h1>
      <h1>Name: {name}</h1>
      <button onClick={incrementCount} style={{ marginRight: '10px' }}>
        Increment Count
      </button>
      <button onClick={changeName}>
        Change Name
      </button>
    </div>
  );
}

export default StateWatcher;