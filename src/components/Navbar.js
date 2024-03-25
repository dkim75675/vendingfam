import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-blue-500">
      <ul className="nav-list list-none flex flex-row justify-evenly py-4 ps-5 text-white">
        <Link className="nav-item" to="/">Home</Link>
        <Link className="nav-item" to="/AboutUs">About Us</Link>
        <Link className="nav-item" to="/Products">Product Page</Link>
        <Link className="nav-item" to="/EmailForm">Contact Us</Link>
      </ul>
  </nav>
  )
}

export default Navbar
