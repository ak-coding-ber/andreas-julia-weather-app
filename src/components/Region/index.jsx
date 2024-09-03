import "./Region.css";

export default function Region({ onRegionTabClick }) {
  return (
    <>
      <section id="region-tabs">
        <button
          className="region-button"
          onClick={() => onRegionTabClick("europe")}
        >
          {" "}
          Europe
        </button>
        <button
          className="region-button"
          onClick={() => onRegionTabClick("arctic")}
        >
          Arctic
        </button>
        <button
          className="region-button"
          onClick={() => onRegionTabClick("sahara")}
        >
          Sahara
        </button>
        <button
          className="region-button"
          onClick={() => onRegionTabClick("rainforest")}
        >
          Rainforest
        </button>
      </section>
    </>
  );
}
