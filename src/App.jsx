import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(data) {
    setActivities([...activities, { id: uid(), ...data }]);
  }

  useEffect(() => {
    console.log(activities);
  }, [activities]);

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
