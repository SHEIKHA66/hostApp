import Axios from "axios";
import { useState } from "react";
import { userSchemaValidation } from "../Validations/UserValidations";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Row, Col, Form } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Studentdata = () => {
  const stud = useSelector((state) => state.studs.stud); // Logged-in user details

  const [studId, setstudId] = useState("");
  const [studName, setstudName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [responseMsg, setresponseMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation),
  });

  const onSubmit = (data) => {
    console.log("Form Data", data);
  };

  const addStudent = () => {
    Axios.post("http://localhost:3001/addStudent", {
      studId: studId,
      studName: studName,
      email: email,
      password: password,
      dept: selectedOption,
    })
      .then((res) => {
        setresponseMsg(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="form-header">
        <p>
          Welcome, <strong>{stud.name}</strong>!
        </p>
      </div>
      <Container>
        <h1>Filling College Information</h1>
        <Row className="formrow">
          <Col className="columndiv1" md={6}>
            <Form onSubmit={handleSubmit(onSubmit)} className="div-form">
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
                        id="id"
                        type="text"
                        className="form-control"
                        onChange={(e) => setstudId(e.target.value)}
                        // {...register("id")}
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
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>Department:</td>
                    <td>
                      <select
                        className="form-control"
                        onChange={(e) => setSelectedOption(e.target.value)}
                      >
                        <option value="it">it</option>
                        <option value="business">business</option>
                        <option value="other">other</option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td colSpan={2} style={{ textAlign: "center" }}>
                      <button className="btn btn-info" onClick={addStudent}>
                        Add
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Form>
          </Col>
          <Col md={6}>{responseMsg}</Col>
        </Row>
        <div>
          <Link to={`/studpage`} className="nav-link">
            <button className="btn btn-success">Previous</button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Studentdata;
