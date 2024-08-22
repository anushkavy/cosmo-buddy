import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import CreateEvent from "./Components/CreateEvent";
import { useEffect, useState } from "react";
import { onSnapshot, addDoc } from "firebase/firestore";
import { eventsCollection } from "./firebase";
import Confetti from "react-confetti";

function App() {
  const [toggleCreate, setToggleCreate] = useState(false);
  const [formData, setFormData] = useState({
    eventTitle: "",
    eventDescription: "",
    authorName: "",
    authorEmail: "",
    city: "",
    fullAdd: "",
    dateTime: "",
    equipReq: "",
  });
  const [events, setEvents] = useState([]);
  const [eventSaved, setEventSaved] = useState(false);
  console.log("Events length", events.length);

  useEffect(() => {
    onSnapshot(eventsCollection, function (snapshot) {
      const eventsArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEvents(eventsArr);
    });
  }, []);

  if (eventSaved) {
    setTimeout(() => {
      setEventSaved((prevState) => !prevState);
    }, 3000);
  }

  function handleCreateToggle() {
    setToggleCreate((prevState) => !prevState);
  }

  async function createEvent(event) {
    event.preventDefault();
    const newEvent = {
      data: formData,
    };
    await addDoc(eventsCollection, newEvent);
    onSnapshot(eventsCollection, function (snapshot) {
      const eventsArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEvents(eventsArr);
    });

    setFormData({
      eventTitle: "",
      eventDescription: "",
      authorName: "",
      authorEmail: "",
      city: "",
      fullAdd: "",
      dateTime: "",
      equipReq: "",
    });

    handleCreateToggle();
    setEventSaved((prevState) => !prevState);
  }
  console.log(events);
  return (
    <div className="App">
      {eventSaved && <Confetti />};
      <Navbar handleToggle={handleCreateToggle} />
      <Hero>
        <div className="cards">
          {events.length === 0 ? (
            <h3 className="noevent white fw400">
              Events are yet to be scheduled.
            </h3>
          ) : (
            events.map((event) => {
              return <Card key={event.id} data={event.data} />;
            })
          )}
        </div>
        {toggleCreate ? (
          <CreateEvent
            handleToggle={handleCreateToggle}
            formData={formData}
            setFormData={setFormData}
            createEvent={createEvent}
          />
        ) : null}
      </Hero>
    </div>
  );
}

export default App;
