import React, { useState, useEffect } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewStud = () => {
  const adminn = useSelector((state) => state.admins.admin); // Logged-in user details

  const [listOfStudents, setlistOfStudents] = useState([]);
  const [countRecords, setcountRecords] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:3001/managestud")
      .then((response) => {
        setlistOfStudents(response.data.students);
        setcountRecords(response.data.count);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="form-header">
        <p>
          Welcome, <strong>{adminn.name}</strong>!
        </p>
      </div>
      <h1>College Information for Student</h1>
      <table className="table table-striped">
        <thead>
          <th>Student ID</th>
          <th>Student Name</th>
          <th>College Email</th>
          <th>Department</th>
        </thead>
        <tbody>
          {listOfStudents.map((students) => (
            <tr>
              <td>{students.studId}</td>
              <td>{students.studName}</td>
              <td>{students.email}</td>
              <td>{students.dept}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Number of Students:{countRecords}</h3>
      </div>

      <div>
        <Link to={`/adminpage`} className="nav-link">
          <button className="btn btn-success">Previous</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewStud;
