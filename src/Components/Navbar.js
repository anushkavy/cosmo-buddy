import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export default function Navbar({ handleToggle }) {
  return (
    <nav className="white">
      <h1>COSMOBUDDY</h1>
      <div className="nav-btns fw400 fs16">
        <Link className="white">Explore Events</Link>
        <Link>
          <button
            className="nav-createBtn black fw400 fs16"
            onClick={handleToggle}
          >
            <FaPlus />
            <span>Create Event</span>
          </button>
        </Link>
      </div>
    </nav>
  );
}
