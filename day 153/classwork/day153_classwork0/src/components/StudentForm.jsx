import React, { useState } from 'react';

const StudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [group, setGroup] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { id: Date.now(), name, surname, age, group };
    onAddStudent(newStudent);
    setName('');
    setSurname('');
    setAge('');
    setGroup('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Group"
        value={group}
        onChange={(e) => setGroup(e.target.value)}
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
