import React, { useState, useEffect } from 'react';

function JokesPage() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
      const data = await response.json();
      setJoke(data.joke || 'No joke found.');
    } catch (error) {
      setJoke('Failed to load joke');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-semibold mb-6">Here’s your Random Joke:</h1>
      {loading ? (
        <div className="text-xl text-gray-600">Loading...</div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md text-center">
          <p className="text-xl font-medium">{joke}</p>
        </div>
      )}
      <button
        className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
        onClick={fetchJoke}
      >
        Next Joke
      </button>
    </div>
  );
}

export default JokesPage;
