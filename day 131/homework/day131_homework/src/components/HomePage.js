import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-200">
      <h1 className="text-4xl font-semibold mb-4">Welcome to the Joke Generator!</h1>
      <p className="text-lg mb-6">Click the button below to get random jokes!</p>
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
        onClick={() => navigate('/jokes')}
      >
        Get Jokes
      </button>
    </div>
  );
}

export default HomePage;
