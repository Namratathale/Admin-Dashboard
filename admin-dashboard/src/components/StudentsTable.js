import React, { useState } from 'react';

const StudentsTable = ({ students }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.collegeId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name, email, or College ID..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="table-container">
        <table className="students-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>College ID</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Coupon Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.collegeId}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.couponType}</td>
                <td>
                  <span className={`status-badge ${student.used ? 'used' : 'active'}`}>
                    {student.used ? 'Used' : 'Active'}
                  </span>
                </td>
              </tr>
            ))
            ) : (
                <tr>
                    <td colSpan="6" style={{textAlign: 'center', color: '#888'}}>
                        No students found matching your search.
                    </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsTable;

