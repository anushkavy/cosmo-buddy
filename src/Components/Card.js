import { FaMapMarkerAlt } from "react-icons/fa";

import cosmos from "../Images/cosmos.png";
export default function Card({ data }) {
  const date = new Date(data.dateTime);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  let ampm;
  if (hours > 12) {
    ampm = "PM";
  } else if (hours === 12) {
    ampm = "Noon";
  } else {
    ampm = "AM";
  }
  return (
    <div className="card">
      <img src={cosmos} alt="Cosmos" className="card-image" />
      <div className="card-content">
        <h3 className="card-title black">{data.eventTitle}</h3>
        <span className="card-author black fw400 fs16">{data.authorName}</span>
        <span className="card-location black fw400 fs16">
          <FaMapMarkerAlt /> {data.fullAdd}
        </span>
        <span className="card-date fw400 fs16">
          {`${date.getDate()} ${date.toLocaleString("en-EN", {
            month: "long",
          })} ${date.getFullYear()}, ${hours > 12 ? hours - 12 : hours}${
            minutes === 0 ? "" : ":" + minutes
          } ${ampm}`}
        </span>
      </div>
    </div>
  );
}
