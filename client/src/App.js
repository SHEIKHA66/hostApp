//import logo from './logo.svg';
import "./App.css";
import BusTiming from "./Components/BusTiming";
import Footer from "./Components/Footer";
import Home from "./Components/Home1";
import ManageBustiming from "./Components/ManageBustime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import UpdateBustiming from "./Components/UpdateBustiming";
import Shoping from "./Components/Shoping";
import ShowingRoom from "./Components/ShowingRoom";
import Register from "./Components/Register";
import Stud from "./Components/Stud";

import Login from "./Components/Login";
import { Container, Row } from "reactstrap";
import Header from "./Components/Header";
import Profile from "./Components/profile";
import StudPage from "./Components/StudPage";
import ShowBus from "./Components/ShowBus";
import AdminPage from "./Components/AdminPage";
import ShareNotes from "./Components/ShareNote";
import Notes from "./Components/Notes";
import Loginad from "./Components/Loginad";
import Adpage from "./Components/Adpageold";
import RegisterAdmin from "./Components/RegisterAdmin";
import Both from "./Components/Bothe";
import Studentdata from "./Components/Studentdata";
import ManageStudent from "./Components/Managestud";
import UpdateStudent from "./Components/UpdateStudent";
import ViewStud from "./Components/ViewStud";
import HostelForm from "./Components/HostelForm";
import Location from "./Components/Location";
import DevelopersPage from "./Components/Developer";

const App = () => {
  return (
    <Container>
      <Router>
        <Row>
          <Header />
        </Row>

        <Row className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/bus" element={<BusTiming />}></Route>
            <Route path="/manage" element={<ManageBustiming />}></Route>
            <Route path="/shop" element={<Shoping />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/Stud" element={<Stud />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/studpage" element={<StudPage />}></Route>
            <Route path="/showbus" element={<ShowBus />}></Route>
            <Route path="/adminpage" element={<AdminPage />}></Route>
            <Route path="/sharenot" element={<ShareNotes />}></Route>
            <Route path="/notes" element={<Notes />}></Route>
            <Route path="/registerA" element={<RegisterAdmin />}></Route>
            <Route path="/Adpage" element={<Adpage />}></Route>
            <Route path="/loginad" element={<Loginad />}></Route>
            <Route path="/both" element={<Both />}></Route>
            <Route path="/view" element={<ViewStud />}></Route>
            <Route path="/loc" element={<Location />}></Route>

            <Route path="/studdata" element={<Studentdata />}></Route>
            <Route path="/managestud" element={<ManageStudent />}></Route>
            <Route path="/hostel" element={<HostelForm />}></Route>
            <Route path="/dev" element={<DevelopersPage />}></Route>

            <Route path="/rooms" element={<ShowingRoom />}></Route>
            <Route path="/update/:Sid" element={<UpdateBustiming />}></Route>

            <Route path="/updates/:Sid" element={<UpdateStudent />}></Route>
          </Routes>
        </Row>

        <Row className="footer text-center">
          <Footer />
        </Row>
      </Router>
    </Container>
  );
};

export default App;

/*

<div className="header">
          <nav className="nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/bus" className="nav-link">
              Bus Timing
            </Link>
            <Link to="/manage" className="nav-link">
              Manage Bus timing
            </Link>
            <Link to="/shop" className="nav-link">
              Shopping times and Trip
            </Link>
            <Link to="/rooms" className="nav-link">
              Show the rooms
            </Link>

            <Link to="/login" className="nav-link">
              Login
            </Link>
          </nav>
        </div>

*/
