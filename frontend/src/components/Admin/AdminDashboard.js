import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li><Link to="/admin/add-question">Add Question</Link></li>
        <li><Link to="/admin/manage-users">Manage Users</Link></li>
        <li><Link to="/admin/create-exam">Create Exam</Link></li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
