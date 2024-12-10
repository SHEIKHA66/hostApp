import { useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Row, Col } from "reactstrap";
import newtime from "../Images/newtime.jpeg";
import manage from "../Images/manag.jpeg";
import write from "../Images/write.jpeg";
import admin from "../Images/admin.jpeg";
import view from "../Images/view.jpeg";
import manag from "../Images/manage.jpeg";

import { logoutad } from "../Features/AdminSlice.js";
import { useDispatch } from "react-redux";

const AdminPage = () => {
  const adminn = useSelector((state) => state.admins.admin); // Logged-in user details

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutad = async () => {
    dispatch(logoutad());
    await new Promise((resolve) => setTimeout(resolve, 100));
    navigate("/both");
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <div className="form-header">
        <p>
          Welcome, <strong>{adminn.name}</strong>!
        </p>
      </div>

      <Row>
        <Col md={3}>
          <div className="card">
            <img src={newtime} className="card-img-top" alt="..." />
            <div className="card-body">
              <a href="/bus" className="btn btn-warning">
                Add New Time for bus
              </a>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="card">
            <img src={manage} className="card-img-top" alt="..." />
            <div className="card-body">
              <a href="/manage" className="btn btn-warning">
                Manage Bus Time
              </a>
            </div>
          </div>
        </Col>

        <Col md={3}>
          <div className="card">
            <img src={write} className="card-img-top" alt="..." />
            <div className="card-body">
              <button type="button" class="btn btn-warning">
                <Link to="/stud">Write Notes</Link>
              </button>
            </div>
          </div>
        </Col>

        <Col md={3}>
          <div className="card">
            <img src={admin} className="card-img-top" alt="..." />
            <div className="card-body">
              <button type="button" class="btn btn-warning">
                <Link to="/registerA">Write Notes</Link>
              </button>
              <a href="/registerA" className="btn btn-warning">
                Add New Admin
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <div className="card">
            <img src={view} className="card-img-top" alt="..." />
            <div className="card-body">
              <a href="/view" className="btn btn-warning">
                View Student information
              </a>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="card">
            <img src={manag} className="card-img-top" alt="..." />
            <div className="card-body">
              <a href="/managestud" className="btn btn-warning">
                Manage Student information
              </a>
            </div>
          </div>
        </Col>
      </Row>

      <div>
        <button type="button" class="btn btn-outline-danger">
          <Link onClick={handleLogoutad}>LogOut</Link>
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
