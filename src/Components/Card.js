import { FaMapMarkerAlt } from "react-icons/fa";

import cosmos from "../Images/cosmos.png";
export default function Card() {
  return (
    <div className="card">
      <img src={cosmos} alt="Cosmos" className="card-image" />
      <div className="card-content">
        <h3 className="card-title black">Stargazing in Cubbon Park</h3>
        <span className="card-author black fw400 fs16">By Anushka</span>
        <span className="card-location black fw400 fs16">
          <FaMapMarkerAlt /> Cubbon Park, Bangalore
        </span>
        <span className="card-date fw400 fs16">26th Aug 2024, 8:00pm IST</span>
      </div>
    </div>
  );
}
