import React, { useState, useEffect } from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(savedStudents);
  }, []);

  const updateLocalStorage = (newStudents) => {
    localStorage.setItem('students', JSON.stringify(newStudents));
    setStudents(newStudents);
  };

  const handleAddStudent = (student) => {
    updateLocalStorage([...students, student]);
  };

  const handleEditStudent = (updatedStudent) => {
    const newStudents = students.map((s) =>
      s.id === updatedStudent.id ? updatedStudent : s
    );
    updateLocalStorage(newStudents);
  };

  const handleDeleteStudent = (id) => {
    const newStudents = students.filter((s) => s.id !== id);
    updateLocalStorage(newStudents);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login'); 
  };

  return (
    <div>
      <h2>Admin Page</h2>
      <button onClick={handleLogout}>Logout</button>
      <StudentForm onAddStudent={handleAddStudent} />
      <StudentList
        students={students}
        onEditStudent={handleEditStudent}
        onDeleteStudent={handleDeleteStudent}
      />
    </div>
  );
};

export default AdminPage;
