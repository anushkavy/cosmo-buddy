import { FaTimes } from "react-icons/fa";

export default function CreateEvent({
  handleToggle,
  formData,
  setFormData,
  createEvent,
}) {
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  return (
    <div className="create-event-bg">
      <div className="create-event-main">
        <button onClick={handleToggle}>
          <FaTimes className="faTimes" />
        </button>
        <h3 className="create-event-heading">Create Event</h3>

        <form onSubmit={createEvent}>
          <div className="create-event-form-inputs">
            <div className="create-event-form-labelInput">
              <label htmlFor="eventTitle">Event Title</label>
              <input
                type="text"
                id="eventTitle"
                onChange={handleChange}
                name="eventTitle"
                value={formData.eventTitle}
              />
            </div>

            <div className="create-event-form-labelInput">
              <label htmlFor="eventDescription">Event Description</label>
              <textarea
                type="text"
                id="eventDescription"
                onChange={handleChange}
                name="eventDescription"
                value={formData.eventDescription}
              />
            </div>

            <div className="create-event-form-labelInput">
              <label htmlFor="authorName">Your Name</label>
              <input
                type="text"
                id="authorName"
                onChange={handleChange}
                name="authorName"
                value={formData.authorName}
              />
            </div>

            <div className="create-event-form-labelInput">
              <label htmlFor="authorEmail">Email</label>
              <input
                type="email"
                id="authorEmail"
                onChange={handleChange}
                name="authorEmail"
                value={formData.authorEmail}
              />
            </div>

            <div className="create-event-form-labelInput">
              <label htmlFor="city">City</label>
              <br />
              <select
                id="city"
                value={formData.city}
                onChange={handleChange}
                name="city"
              >
                <option value="Delhi" defaultValue="none">
                  Delhi
                </option>
                <option value="Bangalore">Bangalore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Pune">Pune</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Lucknow">Lucknow</option>
              </select>
            </div>

            <div className="create-event-form-labelInput">
              <label htmlFor="fullAdd">Address</label>
              <textarea
                type="text"
                id="fullAdd"
                onChange={handleChange}
                name="fullAdd"
                value={formData.fullAdd}
              />
            </div>

            <div className="create-event-form-labelInput">
              <label htmlFor="dateTime">Date & Time</label>
              <input
                type="datetime-local"
                id="dateTime"
                onChange={handleChange}
                name="dateTime"
                value={formData.dateTime}
              />
            </div>

            <div className="create-event-form-labelInput">
              <label htmlFor="equipReq">Equipment(s) Required</label>
              <textarea
                type="text"
                id="equipReq"
                onChange={handleChange}
                name="equipReq"
                value={formData.equipReq}
              />
            </div>
          </div>
          <button
            type="submit"
            className="create-event-saveBtn fs16 fw400 white"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
