import { Link, NavLink } from "react-router-dom"; 
import Logo from "../assets/logo.png"
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Logo" />
        <span>Profile</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Login</NavLink>
        <NavLink to="/signup" className="link">Logout</NavLink>
      </nav>
    </header>
  )
}