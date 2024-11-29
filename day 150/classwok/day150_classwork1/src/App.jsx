import React, { useState, useMemo } from 'react';

const colors = ['Blue', 'Black', 'Orange', 'Red', 'Green', 'Yellow'];

const FilteredColors = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredList = useMemo(() => {
    console.log('Filtering colors...');
    return colors.filter((color) =>
      color.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div>
      <h2>Color Filter</h2>
      <input
        type="text"
        placeholder="Search color..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredList.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredColors;