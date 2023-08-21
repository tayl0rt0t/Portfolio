import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <li className="mx-10 my-10 dec list-none flex space-x-9 ">
      <Link to="/" >
        <ul className="text-xl  ">Home</ul>
      </Link>
      <Link to="/about">
        <ul className="text-xl">About</ul>
      </Link>
      <Link to="/work">
        <ul className="text-xl">Work</ul>
      </Link>
      <Link to="/contact">
        <ul className="text-xl">Contact</ul>
      </Link>
    </li>
  );
}
