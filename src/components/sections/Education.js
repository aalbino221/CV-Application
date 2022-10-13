export default function AddEducation({ preview, info }) {
  switch (preview) {
    case true:
      return (
        <section className="education-prev">
          {info.education.length !== 0 &&
            info.education.map((item) => (
              <div>
                <h2>{info.educationTitle}</h2>
                <p>
                  <span>{item.school} </span> <span> - {item.degree}</span>
                </p>
                <p>
                  {item.start} - {item.end}
                </p>
                <p>{item.description}</p>
              </div>
            ))}
        </section>
      );
    default:
      return (
        <section className="education">
          <label htmlFor="ed-school">
            School
            <input placeholder="School" id="ed-school" />
          </label>
          <label htmlFor="ed-degree">
            Degree
            <input placeholder="Degree" id="ed-degree" />
          </label>
          <div className="start-end">
            <p>Start & End Date</p>
            <input type="date" id="start" />
            <input type="date" id="end" />
          </div>
          <label htmlFor="ed-city">
            City
            <input placeholder="City" id="ed-city" />
          </label>
          <label htmlFor="ed-desc" className="ed-desc">
            Description
            <textarea
              placeholder="Education Description(Optional)"
              rows={3}
              id="ed-desc"
            />
          </label>
          <button type="button" id="delete">
            <i className="fa-solid fa-trash" /> Delete
          </button>
        </section>
      );
  }
}
