import Axios from "axios";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const UpdateStudent = () => {
  const [studId, setstudId] = useState("");
  const [studName, setstudName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [responseMsg, setresponseMsg] = useState("");

  let { Sid } = useParams();

  const updateStudent = () => {
    Axios.put(`http://localhost:3001/updates/${Sid}`, {
      studId: studId,
      studName: studName,
      email: email,
      password: password,
      dept: selectedOption,
    })
      .then((res) => {
        setresponseMsg(res.data.msg);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Axios.get(`http://localhost:3001/getStudent/${Sid}`)
      .then((response) => {
        setstudId(response.data.result.studId);
        setstudName(response.data.result.studName);
        setemail(response.data.result.email);
        setpassword(response.data.result.password);
        setSelectedOption(response.data.result.dept);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td colSpan={2}>
              <h1>Student information</h1>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Student ID:</td>
            <td>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setstudId(e.target.value)}
                value={studId}
              />
            </td>
          </tr>

          <tr>
            <td>Student Name:</td>
            <td>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setstudName(e.target.value)}
                value={studName}
              />
            </td>
          </tr>

          <tr>
            <td>College Email:</td>
            <td>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setemail(e.target.value)}
                value={email}
              />
            </td>
          </tr>

          <tr>
            <td>Password:</td>
            <td>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
              />
            </td>
          </tr>

          <tr>
            <td>Department:</td>
            <td>
              <select
                className="form-control"
                onChange={(e) => setSelectedOption(e.target.value)}
                value={selectedOption}
              >
                <option value="it">it</option>
                <option value="business">business</option>
                <option value="other">other</option>
              </select>
            </td>
          </tr>

          <tr>
            <td colSpan="2" style={{ textAlign: "center" }}>
              <button className="btn btn-info" onClick={updateStudent}>
                Update
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div>{responseMsg}</div>

      <div>
        <Link to={`/managestud`} className="nav-link">
          <button className="btn btn-success">Previous</button>
        </Link>
      </div>
    </div>
  );
};

export default UpdateStudent;
