import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginad } from "../Features/AdminSlice";

const Loginad = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  // const user = useSelector((state) => state.users.user);
  //const isSuccess = useSelector((state) => state.users.isSuccess);
  //const isError = useSelector((state) => state.users.isError);

  const admin = useSelector((state) => state.admins.admin);
  const isSuccessa = useSelector((state) => state.admins.isSuccess);
  const isErrora = useSelector((state) => state.admins.isError);

  const navigate = useNavigate();

  useEffect(() => {
    if (isErrora) {
      navigate("/loginad");
    }
    if (isSuccessa) {
      navigate("/adminpage"); //adminpage
    } else {
      navigate("/loginad");
    }
  }, [admin, isErrora, isSuccessa, navigate]);

  /*
  useEffect(() => {
    if (isError || isErrora) {
      // If login fails, stay on the login page
      navigate("/loginad");
    } else if (isSuccess || isSuccessa) {
      // Check if admin or user data exists and navigate accordingly
      if (admin && admin.email) {
        navigate("/Adpage"); // Navigate to admin page if logged in as admin
      } else if (user && user.email) {
        navigate("/profile"); // Navigate to user page if logged in as user
      }
    }
  }, [user, admin, isError, isSuccess, isErrora, isSuccessa, navigate]);
*/
  const handleLogin = () => {
    const studData = {
      email: email,
      password: password,
    };
    dispatch(loginad(studData));
  };

  return (
    <div>
      <Container>
        <h1>Login as Admin</h1>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                //onClick={handleLogin}
              >
                Login
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Loginad;

/*

 <p className="smalltext">
                No Account? <Link to="/registerA">Sign Up</Link>
              </p>
*/
