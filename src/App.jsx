import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { uid } from "uid";

const isGoodWeather = true;

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(data) {
    setActivities([...activities, { id: uid(), ...data }]);
  }

  // console.log(activities);

  return (
    <>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
