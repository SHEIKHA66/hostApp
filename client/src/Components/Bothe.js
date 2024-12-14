import { Col, Nav, Navbar, NavItem, Row } from "reactstrap";
import adminp from "../Images/adminp.jpeg";
import student from "../Images/student.jpeg";
import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import { Link } from "react-router-dom";

const Both = () => {
  return (
    <div>
      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Login as Admin</h5>
              <div>
                <img src={adminp} className="card-img-top" alt="..." />
              </div>
            </div>
            <a href="/loginad" class="btn btn-primary">
              Login
            </a>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Login as Student</h5>
              <div>
                <img src={student} className="card-img-top" alt="..." />
              </div>
            </div>

            <a href="/login" class="btn btn-primary">
              Login
            </a>

            <a href="/register" class="btn btn-primary">
              Sing Up
            </a>
            <div>
              <Navbar>
                <Nav>
                  <NavItem>
                    <Link to="/register">tttttt</Link>
                  </NavItem>
                </Nav>
              </Navbar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Both;
