import React, { useState, useEffect } from 'react';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const localQuotes = [
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" }
  ];

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
      const randomLocalQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
      setQuote(randomLocalQuote.quote);
      setAuthor(randomLocalQuote.author);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <div className="quote-container">
        <h1>Quote Generator</h1>
        <p className="quote">"{quote}"</p>
        <p className="author">- {author}</p>
        <button onClick={fetchQuote}>New Quote</button>
      </div>
    </div>
  );
};

export default App;
