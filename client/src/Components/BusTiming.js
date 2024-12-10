import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const BusTiming = () => {
  const adminn = useSelector((state) => state.admins.admin); // Logged-in user details

  const [busId, setbusId] = useState("");
  const [day, setday] = useState("");
  const [busFi, setbusFi] = useState("");
  const [busS, setbusS] = useState("");
  const [busT, setbusT] = useState("");
  const [busFo, setbusFo] = useState("");
  const [responseMsg, setresponseMsg] = useState("");

  const addBus = () => {
    Axios.post("http://localhost:3001/addBus", {
      busId: busId,
      day: day,
      busFi: busFi,
      busS: busS,
      busT: busT,
      busFo: busFo,
    })
      .then((res) => {
        setresponseMsg(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bustiming-form">
      <div className="form-header">
        <p>
          Welcome, <strong>{adminn.name}</strong>!
        </p>
      </div>
      <h1 className="display-6">Bus Timeing</h1>
      <table className="table table-striped">
        <tbody>
          <tr>
            <td>Bus ID:</td>
            <td>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setbusId(e.target.value);
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Day:</td>
            <td>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setday(e.target.value);
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>First Time:</td>
            <td>
              <input
                type="time"
                className="form-control"
                onChange={(e) => {
                  setbusFi(e.target.value);
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Second Time:</td>
            <td>
              <input
                type="time"
                className="form-control"
                onChange={(e) => {
                  setbusS(e.target.value);
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Third Time:</td>
            <td>
              <input
                type="time"
                className="form-control"
                onChange={(e) => {
                  setbusT(e.target.value);
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Fourth Time:</td>
            <td>
              <input
                type="time"
                className="form-control"
                onChange={(e) => {
                  setbusFo(e.target.value);
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{ textAlign: "center" }}>
              <button className="btn btn-info" onClick={addBus}>
                ADD
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>{responseMsg}</div>

      <div>
        <Link to={`/adminpage`} className="nav-link">
          <button className="btn btn-success">Previous</button>
        </Link>
      </div>
    </div>
  );
};

export default BusTiming;
