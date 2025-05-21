import React, { useState } from 'react';
import './App.css'; // We'll style this in App.css

function App() {
  const [student, setStudent] = useState({
    id: 'ST12345',
    name: 'Rupert Jackey',
    course: 'Mathematics',
    image: 'meh.jpg' // Placeholder profile image
  });

  const courses = ['Mathematics', 'Physics', 'Chemistry', 'Biology'];

  const handleCourseChange = (e) => {
    setStudent({ ...student, course: e.target.value });
  };

  return (
    <div className="app-container">
      <div className="id-card">
        <img src={student.image} alt="Student" className="profile-pic" />
        <div className="info">
          <h2>{student.name}</h2>
          <p><strong>ID:</strong> {student.id}</p>
          <label>
            <strong>Course:</strong>
            <select value={student.course} onChange={handleCourseChange}>
              {courses.map((course, index) => (
                <option key={index} value={course}>{course}</option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
