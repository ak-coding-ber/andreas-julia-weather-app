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

  function handleAddActivity(data) {
    setActivities([...activities, { id: uid(), ...data }]);
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
        console.log("Weather :", data.isGoodWeather);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadWeather();
  }, []);

  console.log("Filter :", filteredActivities);
  //console.log("Activities :", activities);

  return (
    <>
      <List isGoodWeather={weather} activities={filteredActivities} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
