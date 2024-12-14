import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import pic1 from "./66.jpg";
import pic2 from "./2.jpg";
import pic3 from "./44.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const email = useSelector((state) => state.studs.stud.email);

  const stud = useSelector((state) => state.studs.stud); // Logged-in user details
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      navigate("/both");
    }
  }, [email, navigate]);

  return (
    <div className="home-container ">
      <div className="form-header">
        <h2>Hostel Form</h2>
        <p>
          Welcome, <strong>{stud.name}</strong>
        </p>
      </div>
      <div className="content">
        <aside className="sidebar">
          <div className="card">
            <h3>About Us</h3>
            <p>
              We provide housing information for female students, making it
              easier to choose suitable housing without the hassle of visiting
              multiple locations.
            </p>
          </div>

          <div className="card">
            <h3>Contact Us</h3>
            <div className="social-links">
              <a
                href="https://www.instagram.com/findmeah0me/?hl=ar"
                className="fa fa-instagram"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/1049577895093784/posts/2535572643160961/?locale=ar_AR"
                className="fa fa-facebook"
              >
                Facebook
              </a>
              <a href="https://www.google.com/maps" className="fa fa-google">
                Our Location
              </a>
              <a href="tel:99339328" className="fa fa-phone">
                99339328
              </a>
            </div>
          </div>

          <div className="card">
            <h3>Housing Owner</h3>
            <p>
              Name: Muhammad Ali Obaid Al-Omari
              <br />
              <a href="tel:95360530" className="fa fa-phone">
                95360530
              </a>
            </p>
          </div>
        </aside>

        <main className="carousel-container">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={pic1}
                  className="d-block w-100"
                  alt="Housing Image 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={pic2}
                  className="d-block w-100"
                  alt="Housing Image 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={pic3}
                  className="d-block w-100"
                  alt="Housing Image 3"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </main>
      </div>
      <div>
        <Link to={`/studpage`} className="nav-link">
          <button className="btn btn-success">Previous</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
