import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { uid } from "uid";
/**
 * Currently, the list displays all activities, regardless of whether they are good or bad weather activities. The main purpose of the app, however, is to show activities depending on the current (good / bad) weather fetched from an API, so the list needs to be filtered.



Note: For reasons of simplicity (i.e. it will be replaced in the next task anyway), 
we will use a hard coded variable to imitate good or bad weather for now.

Filter the activities for those whose key isForGoodWeather is equal to the global isGoodWeather variable.
Instead of all activities, pass the filtered activities to the List component.
In the List component, add a headline depending on the global isGoodWeather variable.
 */

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(data) {
    setActivities([...activities, { id: uid(), ...data }]);
  }
  const isGoodWeather = false;
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  console.log("Filter :", filteredActivities);
  //console.log("Activities :", activities);

  return (
    <>
      <List isGoodWeather={isGoodWeather} activities={filteredActivities} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
