import { Container, Row, Col, Form } from "reactstrap";
import { Button, Label, FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Features/StudSlice.js";
//import logo from "../Images/logo-t.png";

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const stud = useSelector((state) => state.studs.stud);
  const isSuccess = useSelector((state) => state.studs.isSuccess);
  const isError = useSelector((state) => state.studs.isError);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
    if (isSuccess) {
      navigate("/studpage"); // كانت تودي للهوم
    } else {
      navigate("/login");
    }
  }, [stud, isError, isSuccess]);

  const handleLogin = () => {
    const studData = {
      email: email,
      password: password,
    };
    dispatch(login(studData));
  };

  return (
    <div>
      <Container>
        <h1>Login as Student</h1>
        <Form>
          <Row>
            <Col md={3}></Col>
          </Row>

          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="eMail">Email</Label>
                <Input
                  id="eMail"
                  name="eMail"
                  placeholder="Enter email..."
                  type="email"
                  onChange={(e) => setemail(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Enter password..."
                  type="password"
                  onChange={(e) => setpassword(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <Button
                color="primary"
                className="button"
                onClick={() => handleLogin()}
              >
                Login
              </Button>

              <p className="smalltext">
                No Account? <Link to="/register">Sign Up</Link>
                <br></br>
              </p>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
