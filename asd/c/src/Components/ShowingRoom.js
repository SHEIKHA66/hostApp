import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import pic1 from "./pic1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import pic4 from "./pic4.jpg";
import pic5 from "./pic5.jpg";
import pic6 from "./pic6.jpg";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ShowingRoom = () => {
  const stud = useSelector((state) => state.studs.stud); // Logged-in user details

  return (
    <div class="container">
      <div className="form-header">
        <p>
          Welcome, <strong>{stud.name}</strong>!
        </p>
      </div>
      <div>
        {" "}
        <h1 className="text-center"> Showing Room</h1>
      </div>
      <br></br>
      <div class="row">
        <div class="col-md-4">
          <img src={pic1} class="card-img-top" alt=".."></img>
          <div class="card-body">
            <p class="card-text">
              <h2>Apartment number: 1</h2>
              <br></br>
              Number of rooms: 3<br></br>
              Quadruple room( 30 ORM)
              <br></br>
              single room( 50 ORM)
              <br></br>
              Triple Room(30)
              <br></br>A bathroom for each room and a shared kitchen{" "}
            </p>
          </div>
        </div>

        <div class="col-md-4">
          <img src={pic2} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-text">
              <h2>Apartment number: 2</h2>
              <br></br>
              Number of rooms: 2<br></br>
              Quintuple room (25)
              <br></br>
              Triple Room(30)
              <br></br>A bathroom for each room and a shared kitchen{" "}
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <img src={pic3} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-text">
              <h2>Apartment number: 3</h2>
              <br></br>
              Number of rooms: 3<br></br>
              Quintuple room (25)
              <br></br>
              Triple Room(30)
              <br></br>
              single room( 50 ORM)
              <br></br>
              It has a shared bathroom and kitchen
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <img src={pic4} class="card-img-top" alt=".."></img>
          <div class="card-body">
            <p class="card-text">
              <h2>Apartment number: 4</h2>
              <br></br>
              Number of rooms: 2<br></br>
              Quadruple room( 30 ORM)
              <br></br>
              single room( 50 ORM)
              <br></br>A bathroom for each room and a shared kitchen{" "}
            </p>
          </div>
        </div>

        <div class="col-md-4">
          <img src={pic5} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-text">
              <h2>Apartment number: 5</h2>
              <br></br>
              Number of rooms: 2<br></br>
              Quintuple room (25)
              <br></br>
              Triple Room(30)
              <br></br>
              It has a shared bathroom and kitchen
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <img src={pic6} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-text">
              <h2>Apartment number: 6</h2>
              <br></br>
              Number of rooms: 2<br></br>
              Quadruple room( 30 ORM)
              <br></br>
              single room( 50 ORM)
              <br></br>
              It has a shared bathroom and kitchen
            </p>
          </div>
        </div>
      </div>
      <div>
        <Link to={`/studpage`} className="nav-link">
          <button className="btn btn-success">Previous</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowingRoom;
