import React from 'react';

const StudentList = ({ students, onEditStudent, onDeleteStudent }) => {
  return (
    <div>
      <h3>Student List</h3>
      {students.map((student) => (
        <div key={student.id}>
          <span>{`${student.name} ${student.surname} - Age: ${student.age}, Group: ${student.group}`}</span>
          <button onClick={() => onDeleteStudent(student.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
