import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Region from "./components/Region";
import { uid } from "uid";
import { useState, useEffect } from "react";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState(false);
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState("");
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("europe");

  function handleAddActivity(data) {
    setActivities([...activities, { id: uid(), ...data }]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  function handleRegionTabClick(clickedRegion) {
    setLocation(clickedRegion);
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather
  );

  async function loadWeather(location) {
    try {
      const response = await fetch(
        `https://example-apis.vercel.app/api/weather/${location}`
      );
      const data = await response.json();
      if (!response.ok) {
        console.log("error response");
      } else {
        setWeather(data.isGoodWeather);
        setIcon(data.condition);
        setTemp(data.temperature);
        // signal that the data fetch is complete and the page can be rendered
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadWeather(location);
    const intervalId = setInterval(() => {
      loadWeather(location);
    }, 5000);
    // clear the interval via cleanup function to prevent having multiple timers running that were not stopped
    return () => clearInterval(intervalId);
  }, [location]);

  return (
    <>
      {loading ? (
        <p>Loading Weather Information...</p>
      ) : (
        <>
          <h1 id="icon">
            {icon} {temp}°C
          </h1>
          <Region location={location} onRegionTabClick={handleRegionTabClick} />
          <List
            isGoodWeather={weather}
            activities={filteredActivities}
            onDeleteActivity={handleDeleteActivity}
          />
          <Form onAddActivity={handleAddActivity} />
        </>
      )}
    </>
  );
}

export default App;
