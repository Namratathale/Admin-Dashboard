import React, { useState, useMemo } from 'react';
import Papa from 'papaparse';

const Users = ({ students }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Memoized filtering logic to improve performance
  const filteredStudents = useMemo(() => {
    return students.filter(student => {
      // Check if any of the main fields include the search term
      const matchesSearch = 
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.collegeId.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Check if the coupon type matches the selected filter
      const matchesFilter = 
        filterType === 'all' || 
        student.couponType.toLowerCase() === filterType;

      return matchesSearch && matchesFilter;
    });
  }, [students, searchTerm, filterType]);

  // Function to format the date string into a readable format
  const formatDateTime = (isoString) => {
    if (!isoString) return 'N/A';
    // Options to format the date and time for the Indian locale
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    };
    return new Date(isoString).toLocaleString('en-IN', options);
  };

  // Function to handle exporting the current view to a CSV file
  const handleExport = () => {
    // Map the filtered data to a more readable format for the CSV
    const dataToExport = filteredStudents.map(s => ({
      Name: s.name,
      CollegeID: s.collegeId,
      Email: s.email,
      Phone: s.phone,
      CouponType: s.couponType,
      CouponCode: s.couponCode || 'N/A',
      Status: s.used ? 'Used' : 'Active',
      RegisteredOn: formatDateTime(s.createdAt),
    }));

    const csv = Papa.unparse(dataToExport);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'student_data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="tab-content">
      <div className="table-controls">
        <input
          type="text"
          placeholder="Search by name, email, or College ID..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
          className="filter-select"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All Coupon Types</option>
          <option value="individual">Individual</option>
          <option value="team">Team</option>
        </select>
        <button className="action-button" onClick={handleExport}>
          <i className="fas fa-file-csv"></i> Export CSV
        </button>
      </div>

      <div className="table-container">
        <table className="students-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>College ID</th>
              <th>Email</th>
              <th>Coupon Type</th>
              <th>Status</th>
              <th>Registered On</th> {/* <-- NEW COLUMN */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td>{student.collegeId}</td>
                  <td>{student.email}</td>
                  <td>{student.couponType}</td>
                  <td>
                    <span className={`status-badge ${student.used ? 'used' : 'active'}`}>
                      {student.used ? 'Used' : 'Active'}
                    </span>
                  </td>
                  <td>{formatDateTime(student.createdAt)}</td> {/* <-- NEW DATA CELL */}
                  <td>
                    <a href={`mailto:${student.email}`} className="action-link" title={`Email ${student.name}`}>
                      <i className="fas fa-envelope"></i>
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-data-cell">No students found.</td> {/* <-- Updated colSpan */}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

