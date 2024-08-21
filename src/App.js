import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import CreateEvent from "./Components/CreateEvent";
import { useState } from "react";

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

  function handleCreateToggle() {
    setToggleCreate((prevState) => !prevState);
  }

  return (
    <div className="App">
      <Navbar handleToggle={handleCreateToggle} />
      <Hero>
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        {toggleCreate ? (
          <CreateEvent
            handleToggle={handleCreateToggle}
            formData={formData}
            setFormData={setFormData}
          />
        ) : null}
      </Hero>
    </div>
  );
}

export default App;
