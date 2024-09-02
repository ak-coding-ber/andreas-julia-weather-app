export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);

    const formElements = event.target.elements;
    const isForGoodWeather = formElements.isForGoodWeather.checked;
    const activityName = formElements.name.value;

    // console.log(isForGoodWeather, activityName);

    const data = {
      name: activityName,
      isForGoodWeather: isForGoodWeather,
    };

    onAddActivity(data);

    // console.log(data);

    event.target.reset();
    event.target.name.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form__title">Add New Activity</h2>
      <div className="form__fields">
        <div className="form__field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
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
          {/* <Button type="submit">Create</Button> */}
        </div>
      </div>
    </form>
  );
}
