import "../styles/Navbar.css";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="EMPOWER IT Logo" />

        <div className="logo-text">
          <h2>Christ The King Engineering College</h2>
          <p>Department of Information Technology</p>
        </div>
      </div>

      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#faculty">Faculty</a></li>
        <li><a href="#students">Students</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;