import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { uid } from "uid";
import { useState, useEffect } from "react";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState(false);
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState("");

  function handleAddActivity(data) {
    setActivities([...activities, { id: uid(), ...data }]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather
  );

  async function loadWeather() {
    try {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      if (!response.ok) {
        console.log("error response");
      } else {
        setWeather(data.isGoodWeather);
        setIcon(data.condition);
        setTemp(data.temperature);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadWeather();
    const intervalId = setInterval(() => {
      loadWeather();
    }, 5000);
    // clear the interval via cleanup function to prevent having multiple timers running that were not stopped
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h1 id="icon">
        {icon} {temp}°C
      </h1>

      <List
        isGoodWeather={weather}
        activities={filteredActivities}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
