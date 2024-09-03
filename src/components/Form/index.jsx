import "./Form.css";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formElements = event.target.elements;
    const isForGoodWeather = formElements.isForGoodWeather.checked;
    const activityName = formElements.name.value;

    const data = {
      name: activityName,
      isForGoodWeather: isForGoodWeather,
    };

    onAddActivity(data);

    event.target.reset();
    event.target.name.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form__title">Add New Activity</h2>
      <div className="form__fields">
        <div className="form__field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            maxLength="50"
            placeholder="(max 50 characters)"
          />
        </div>
        <div className="entry-form__field">
          <label htmlFor="isForGoodWeather">Good-Weather Activity </label>
          <input
            type="checkbox"
            name="isForGoodWeather"
            id="isForGoodWeather"
          />
        </div>
        <div className="entry-form__button-wrapper">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}
