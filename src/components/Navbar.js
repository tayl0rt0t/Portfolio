import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <li className="mx-10 dec list-none flex space-x-9">
      <Link to="/">
        <ul>Home</ul>
      </Link>
      <Link to="/about">
        <ul>About</ul>
      </Link>
      <Link to="/work">
        <ul>Work</ul>
      </Link>
      <Link to="/contact">
        <ul>Contact</ul>
      </Link>
    </li>
  );
}
