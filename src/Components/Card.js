import { FaMapMarkerAlt } from "react-icons/fa";

import cosmos from "../Images/cosmos.png";
import { useState } from "react";
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

  const [readMore, setReadMore] = useState(false);

  function handleToggle() {
    setReadMore((prevState) => !prevState);
  }

  const btnTxt = readMore ? "Collapse" : "Expand";

  return (
    <div className="card">
      <img src={cosmos} alt="Cosmos" className="card-image" />
      <div className="card-content">
        <h3 className="card-title black">{data.eventTitle}</h3>
        <span className="card-author black fw400 fs16">
          By {data.authorName}
        </span>
        <span className="card-location black fw400 fs16">
          <FaMapMarkerAlt /> {data.city}
        </span>
        {readMore && (
          <>
            <h4 className="black card-heads">Address:</h4>
            <span className="card-location black fw400 fs16">
              {data.fullAdd}
            </span>
            <h4 className="black card-heads">Details:</h4>
            <span className="card-desc black fw400 fs16">
              {data.eventDescription}
            </span>
            <h4 className="black card-heads">OP Contact:</h4>
            <span className="card-email black fw400 fs16">
              {data.authorEmail}
            </span>
            <h4 className="black card-heads">Equipments you might need: </h4>
            <span className="card-equip black fw400 fs16">{data.equipReq}</span>
          </>
        )}
        <span className="card-date fw400 fs16">
          {`${date.getDate()} ${date.toLocaleString("en-EN", {
            month: "long",
          })} ${date.getFullYear()}, ${hours > 12 ? hours - 12 : hours}${
            minutes === 0 ? "" : ":" + minutes
          } ${ampm}`}
        </span>

        <button
          onClick={handleToggle}
          className="card-readmore-btn white fw400"
        >
          {btnTxt}
        </button>
      </div>
    </div>
  );
}
