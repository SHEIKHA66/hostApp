import React, { useState, useEffect } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useSelector } from "react-redux";

const ManageStudent = () => {
  const adminn = useSelector((state) => state.admins.admin); // Logged-in user details

  const [listOfStudents, setlistOfStudents] = useState([]);
  const [countRecords, setcountRecords] = useState(0);

  const deleteStudent = async (id) => {
    Axios.delete(`http://localhost:3001/deletes/${id}`).then((response) => {
      setlistOfStudents(
        listOfStudents.filter((val) => {
          return val._id != id;
        })
      );
      console.log(response);
      alert(response.data.msg);
      setcountRecords(response.data.count);
    });
  };

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
      <h1>Manage student</h1>
      <table className="table table-striped">
        <thead>
          <th>Student ID</th>
          <th>Student Name</th>
          <th>College Email</th>
          <th>Department</th>
          <th>Update</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {listOfStudents.map((students) => (
            <tr>
              <td>{students.studId}</td>
              <td>{students.studName}</td>
              <td>{students.email}</td>
              <td>{students.dept}</td>

              <td>
                <Link to={`/updates/${students._id}`} className="nav-link">
                  <button className="btn btn-info">Update</button>
                </Link>
              </td>

              <td>
                <button
                  id="removeBtn"
                  className="btn btn-warning"
                  onClick={() => deleteStudent(students._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Number of Records:{countRecords}</h3>
      </div>

      <div>
        <Link to={`/adminpage`} className="nav-link">
          <button className="btn btn-success">Previous</button>
        </Link>
      </div>
    </div>
  );
};

export default ManageStudent;
