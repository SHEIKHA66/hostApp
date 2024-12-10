import React, { useState, useEffect } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ShowBus = () => {
  const stud = useSelector((state) => state.studs.stud); // Logged-in user details

  const [listOfBus, setlistOfBus] = useState([]);
  const [countRecords, setcountRecords] = useState(0);

  const deleteBus = async (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
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
    Axios.get("http://localhost:3001/manage")
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
          Welcome, <strong>{stud.name}</strong>!
        </p>
      </div>
      <h1>Show Bus Time</h1>
      <table className="table table-striped">
        <thead>
          <th>Bus ID</th>
          <th>Day</th>
          <th>First Time</th>
          <th>Second Time</th>
          <th>Third Time</th>
          <th>Fourth Time</th>
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
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <Link to={`/studpage`} className="nav-link">
          <button className="btn btn-success">Previous</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowBus;
