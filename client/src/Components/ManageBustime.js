import React, { useState, useEffect } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as ENV from "../config";

const ManageBustiming = () => {
  const adminn = useSelector((state) => state.admins.admin); // Logged-in user details

  const [listOfBus, setlistOfBus] = useState([]);
  const [countRecords, setcountRecords] = useState(0);

  const deleteBus = async (id) => {
    Axios.delete(`${ENV.SERVER_URL}/delete/${id}`).then((response) => {
      //Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setlistOfBus(
        listOfBus.filter((val) => {
          return val._id != id;
        })
      );
      console.log(response);
      alert(response.data.msg);
      setcountRecords(response.data.count);
    });
  };

  useEffect(() => {
    Axios.get(`${ENV.SERVER_URL}/manage`)
      //Axios.get("http://localhost:3001/manage")
      .then((response) => {
        setlistOfBus(response.data.buses);
        setcountRecords(response.data.count);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="listtimetable">
      <div className="form-header">
        <p>
          Welcome, <strong>{adminn.name}</strong>!
        </p>
      </div>
      <h1>Manage Bus Time</h1>
      <table className="table table-striped">
        <thead>
          <th>Bus ID</th>
          <th>Day</th>
          <th>First Time</th>
          <th>Second Time</th>
          <th>Third Time</th>
          <th>Fourth Time</th>
          <th>Update</th>
          <th>Delete</th>
        </thead>

        <tbody>
          {listOfBus.map((buses) => (
            <tr>
              <td>{buses.busId}</td>
              <td>{buses.day}</td>
              <td>{buses.busFi}</td>
              <td>{buses.busS}</td>
              <td>{buses.busT}</td>
              <td>{buses.busFo}</td>
              <td>
                <Link to={`/update/${buses._id}`} className="nav-link">
                  <button className="btn btn-info">Update</button>
                </Link>
              </td>

              <td>
                <button
                  id="removeBtn"
                  className="btn btn-warning"
                  onClick={() => deleteBus(buses._id)}
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

export default ManageBustiming;
