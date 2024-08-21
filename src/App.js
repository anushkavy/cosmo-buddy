import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import CreateEvent from "./Components/CreateEvent";
import { useEffect, useState } from "react";
import { onSnapshot, addDoc } from "firebase/firestore";
import { eventsCollection } from "./firebase";

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
  console.log("Events data debug", events);

  useEffect(() => {
    onSnapshot(eventsCollection, function (snapshot) {
      const eventsArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEvents(eventsArr);
    });
  }, []);

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
    handleCreateToggle();
  }

  return (
    <div className="App">
      <Navbar handleToggle={handleCreateToggle} />
      <Hero>
        <div className="cards">
          {events.map((event) => {
            return <Card key={event.id} data={event.data} />;
          })}
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
