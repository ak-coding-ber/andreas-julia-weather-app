import "./List.css";

export default function List({ activities }) {
  console.log(activities);

  return (
    <>
      <h2>Your animals:</h2>
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
