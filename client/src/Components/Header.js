import { Navbar, Nav, NavItem, Navlink, NavLink } from "reactstrap";
import logo from "../Images/a.jpeg";
import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { logout } from "../Features/StudSlice.js";

import { logoutad } from "../Features/AdminSlice.js";

import { FaHome, FaUserAlt, FaSignOutAlt, FaBus } from "react-icons/fa";

const Header = () => {
  //const logged = useSelector((state) => state.users.logged);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    dispatch(logout());
    await new Promise((resolve) => setTimeout(resolve, 100));
    navigate("/"); // كانت تودي للهوم
  };

  /*
  const handleLogoutad = async () => {
    dispatch(logoutad());
    await new Promise((resolve) => setTimeout(resolve, 100));
    navigate("/");
  };
*/
  return (
    <>
      <Navbar className="header">
        <header className="header">
          <h1>Welcome to</h1>
          <h2>Housing Administration for Female Students</h2>
        </header>
        <Nav>
          <NavItem>
            <Link to="/both">Login</Link>
          </NavItem>

          <NavItem>
            <Link to="/dev">Developers</Link>
          </NavItem>

          <NavItem>
            <img src={logo} className="logo" />
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;

/*


 <NavItem>
            <Link to="/">
              <FaHome id="/" />
            </Link>
          </NavItem>

   <NavItem>
            <Link onClick={handleLogoutad}>LogoutAd</Link>
          </NavItem>



        <NavItem>
            <Link to="/adminpage">show admin</Link>
          </NavItem>

             <NavItem>
            <Link to="/stud">stud ahare</Link>
          </NavItem>

          <NavItem>
            <Link to="/studdata">stud ahare</Link>
          </NavItem>

          <NavItem>
            <Link to="/managestud">Managestud</Link>
          </NavItem>

          <NavItem>
            <Link to="/view">view</Link>
          </NavItem>

          <NavItem>
            <Link to="/hostel">hostel</Link>
          </NavItem>

 <NavItem>
            <Link to="/studpage">Student Page</Link>
          </NavItem>

        



          
          <NavItem>
            <Link to="/bus">
              <FaBus id="/bus" />
              Bus Timing
            </Link>
          </NavItem>

          <NavItem>
            <Link to="/manage">Manage Bus timing</Link>
          </NavItem>

          <NavItem>
            <Link to="/shop">Shopping times and Trip</Link>
          </NavItem>

          <NavItem>
            <Link to="/rooms">Show the rooms</Link>
          </NavItem>

          <NavItem>
            <Link to="/login">Login</Link>
          </NavItem>

          <NavItem>
            <Link to="/profile">Profile</Link>
          </NavItem>

          <NavItem>
            <Link onClick={handleLogout}>Logout</Link>
          </NavItem>
          */
