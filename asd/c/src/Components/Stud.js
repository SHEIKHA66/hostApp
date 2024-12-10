import { Col, Container, Row } from "reactstrap";
import user from "../Images/user.png";

import { useSelector } from "react-redux";
import ShareNote from "./ShareNote";
import Notes from "./Notes";
import { Link } from "react-router-dom";

import Location from "./Location";

const Stud = () => {
  //const email = useSelector((state) => state.studs.stud.email);
  //const name = useSelector((state) => state.studs.stud.name);

  const adminn = useSelector((state) => state.admins.admin); // Logged-in user details
  const email = useSelector((state) => state.admins.admin.email);
  const name = useSelector((state) => state.admins.admin.name);
  return (
    <div>
      <h1>Add Note</h1>
      <div className="form-header">
        <p>
          Welcome, <strong>{adminn.name}</strong>!
        </p>
      </div>

      <Container>
        <img src={user} className="userImage" />
        <p>{name}</p>

        <p>{email}</p>
        <Row>
          <Col md={3}>
            <Location />
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col md={9}>
            <ShareNote />
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col md={9}>
            <Notes />
          </Col>
        </Row>
        <div>
          <Link to={`/adminpage`} className="nav-link">
            <button className="btn btn-success">Previous</button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Stud;
