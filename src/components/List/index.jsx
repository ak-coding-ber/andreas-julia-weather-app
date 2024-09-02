import "./List.css";

export default function List({ activities, isGoodWeather }) {
  console.log(activities);

  return (
    <>
      <h2>
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad wheather outside! Here's what you can do now: "}
      </h2>
      <ul className="activities-list">
        {activities.map((activity) => (
          <li key={activity.id} className="activity-list__item">
            <h3>{activity.name}</h3>
          </li>
        ))}
      </ul>
    </>
  );
}
