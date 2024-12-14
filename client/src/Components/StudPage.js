import { useSelector } from "react-redux";

import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { Row, Col } from "reactstrap";
import time from "../Images/time.jpeg";
import room from "../Images/room.jpeg";
import note from "../Images/note.jpeg";
import schedual from "../Images/schedual.jpeg";
import info from "../Images/info.jpeg";
import cal from "../Images/call.jpeg";
import loc from "../Images/loc.jpeg";
import host from "../Images/host.jpeg";

import { logout } from "../Features/StudSlice.js";

import { useDispatch } from "react-redux";

const StudPage = () => {
  const stud = useSelector((state) => state.studs.stud); // Logged-in user details

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    dispatch(logout());
    await new Promise((resolve) => setTimeout(resolve, 100));
    navigate("/both"); // كانت تودي للهوم
  };

  return (
    <div>
      <h1>Student Page</h1>
      <div className="form-header">
        <p>
          Welcome, <strong>{stud.name}</strong>!
        </p>
      </div>

      <Row>
        <Col md={3}>
          <div className="card">
            <img src={room} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"></h5>

              <a href="/rooms" className="btn btn-warning">
                Show Rooms
              </a>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="card">
            <img src={time} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"></h5>

              <a href="/showbus" className="btn btn-warning">
                Show Bus Time
              </a>
            </div>
          </div>
        </Col>

        <Col md={3}>
          <div className="card">
            <img src={note} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"></h5>

              <a href="/notes" className="btn btn-warning">
                Important Note
              </a>
            </div>
          </div>
        </Col>

        <Col md={3}>
          <div className="card">
            <img src={schedual} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"></h5>

              <a href="/shop" className="btn btn-warning">
                Shopping Schedual
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <div className="card">
            <img src={info} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"></h5>

              <a href="/studdata" className="btn btn-warning">
                Filling college information
              </a>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="card">
            <img src={cal} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"></h5>

              <button type="button" class="btn btn-warning">
                <Link to="/hostel">Calculate </Link>
              </button>
            </div>
          </div>
        </Col>

        <Col md={3}>
          <div className="card">
            <img src={loc} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"></h5>

              <button type="button" class="btn btn-warning">
                <Link to="/loc">your Location</Link>
              </button>
            </div>
          </div>
        </Col>

        <Col md={3}>
          <div className="card">
            <img src={host} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"></h5>

              <button type="button" class="btn btn-warning">
                <Link to="/">About our Hostel</Link>
              </button>
            </div>
          </div>
        </Col>
      </Row>

      <div>
        <button type="button" class="btn btn-outline-danger">
          <Link onClick={handleLogout}>Logout</Link>
        </button>
      </div>
    </div>
  );
};

export default StudPage;
