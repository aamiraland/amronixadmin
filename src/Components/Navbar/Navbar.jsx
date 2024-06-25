import "./Navbar.css";
import navlogo from "../../assets/Navlogo.png";
import navProfile from "../../assets/hero.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="" className="nav-logo" />
      <img src={navProfile} alt="" className="nav-profile" />
    </div>
  );
};

export default Navbar;
