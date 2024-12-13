import { Container, Row, Col, Button } from "reactstrap";
import { userSchemaValidation } from "../Validations/UserValidations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { useState } from "react";
import {
  addStud,
  deleteStud,
  updateStud,
  registerAdmin,
} from "../Features/AdminSlice.js";

import { useNavigate } from "react-router-dom";

const RegisterAdmin = () => {
  const adminn = useSelector((state) => state.admins.admin); // Logged-in user details
  //Retrieve the current value of the state and assign to it a variable
  const studList = useSelector((state) => state.admins.value);

  //create the state variables
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  //For form validation using react-hook-form
  const {
    register,
    handleSubmit, // Submit the form when this is called
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation), //Associate your Yup validation schema using the resolver
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle form submission
  const onSubmit = (data) => {
    try {
      const studData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      console.log("Form Data", data); // You can handle the form submission here
      alert("Validation all good!");
      //use the useDispatch hook to dispatch an action, passing as paramater the userData
      dispatch(registerAdmin(studData));
      navigate("/adminpage"); //redirect to login component
    } catch (error) {
      console.log("Error.");
    }
  };

  const handleDelete = (email) => {
    dispatch(deleteStud(email));
  };

  const handleUpdate = (email) => {
    const studData = {
      name: name, //create an object with the values from the state variables
      email: email,
      password: password,
    };
    dispatch(updateStud(studData)); //use the useDispatch hook to dispatch an action, passing as parameter the userData
  };

  return (
    <Container fluid>
      <div className="form-header">
        <p>
          Welcome, <strong>{adminn.name}</strong>!
        </p>
      </div>
      <h1>Add Admin</h1>

      <Row className="formrow">
        <Col className="columndiv1" lg="6">
          <form className="div-form" onSubmit={handleSubmit(onSubmit)}>
            <section className="form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  {...register("name", {
                    onChange: (e) => setname(e.target.value),
                  })}
                />
                <p className="error">{errors.name?.message}</p>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    onChange: (e) => setemail(e.target.value),
                  })}
                />
                <p className="error">{errors.email?.message}</p>
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    onChange: (e) => setpassword(e.target.value),
                  })}
                />
                <p className="error">{errors.password?.message}</p>
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  {...register("confirmPassword", {
                    onChange: (e) => setconfirmPassword(e.target.value),
                  })}
                />
                <p className="error">{errors.confirmPassword?.message}</p>
              </div>
              <Button color="primary" className="button">
                Register
              </Button>
            </section>
          </form>
        </Col>
        <Col className="columndiv2" lg="6"></Col>
      </Row>
      <div>
        <Link to={`/adminpage`} className="nav-link">
          <button className="btn btn-success">Previous</button>
        </Link>
      </div>
    </Container>
  );
};

export default RegisterAdmin;

/*

<Row>
        <Col md={6}>
          List of Users
          <table>
            <tbody>
              {userList.map((user) => (
                <tr key={user.email}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>

                  <td>
                    <Button onClick={() => handleDelete(user.email)}>
                      Delete User
                    </Button>
                  </td>

                  <td>
                    <Button onClick={() => handleUpdate(user.email)}>
                      Update User
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>

      */
