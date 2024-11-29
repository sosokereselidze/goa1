import { useState } from "react";

const App = () => {
  const [names, setNames] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.nameInput.value.trim();
    const updatedNames = [...names, name].filter(Boolean);

    setNames(updatedNames);
    event.target.reset();
  };

  const handleDelete = (indexToDelete) => {
    const updatedNames = names.filter((_, index) => index !== indexToDelete);
    setNames(updatedNames);
  };

  return (
    <div>
      <h1>Name List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nameInput" placeholder="Enter name" />
        <button type="submit">Add Name</button>
      </form>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            <span>{name}</span>
            <button type="button" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
