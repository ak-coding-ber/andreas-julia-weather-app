import "./List.css";

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h2>
        {isGoodWeather
          ? "The weather is awesome! Enjoy one of those activities:"
          : "Bad wheather outside! Here's what you can do now: "}
      </h2>
      <ul className="activities-list">
        {activities.map((activity) => (
          <li key={activity.id} className="activity-list__item">
            <h3 className="activity-name">{activity.name}</h3>
            <button
              className="delete-button"
              onClick={() => onDeleteActivity(activity.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
