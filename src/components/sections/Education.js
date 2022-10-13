export default function AddEducation({ preview, info, onChange, del }) {
  switch (preview) {
    case true:
      return (
        <section className="education-prev">
          {info.education.length !== 0 && <h2>{info.educationTitle}</h2>}
          {info.education.length !== 0 &&
            info.education.map((item) => (
              <div>
                <p>
                  <span>{item.school} </span> <span> - {item.degree}</span>
                </p>
                <p>
                  <span>{item.city} - </span>

                  <span>
                    {item.start} - {item.end}
                  </span>
                </p>
                <p>{item.description}</p>
              </div>
            ))}
        </section>
      );
    default:
      return info.education.map((item) => (
        <section className="education" key={item.id}>
          <label htmlFor="ed-school">
            School
            <input
              placeholder="School"
              id="ed-school"
              value={item.school !== '' ? item.school : ''}
              onChange={(e) => {
                onChange(e, item.id, 'school');
              }}
            />
          </label>
          <label htmlFor="ed-degree">
            Degree
            <input
              placeholder="Degree"
              id="ed-degree"
              value={item.degree !== '' ? item.degree : ''}
              onChange={(e) => {
                onChange(e, item.id, 'degree');
              }}
            />
          </label>
          <div className="start-end">
            <p>Start & End Date</p>
            <input
              type="date"
              id="start"
              value={item.start !== '' ? item.start : ''}
              onChange={(e) => {
                onChange(e, item.id, 'start');
              }}
            />
            <input
              type="date"
              id="end"
              value={item.end !== '' ? item.end : ''}
              onChange={(e) => {
                onChange(e, item.id, 'end');
              }}
            />
          </div>
          <label htmlFor="ed-city">
            City
            <input
              placeholder="City"
              id="ed-city"
              value={item.city !== '' ? item.city : ''}
              onChange={(e) => {
                onChange(e, item.id, 'city');
              }}
            />
          </label>
          <label htmlFor="ed-desc" className="ed-desc">
            Description
            <textarea
              placeholder="Education Description(Optional)"
              rows={3}
              id="ed-desc"
              value={item.description !== '' ? item.description : ''}
              onChange={(e) => {
                onChange(e, item.id, 'description');
              }}
            />
          </label>
          <button
            type="button"
            id="delete"
            onClick={() => {
              del('education', item.id);
            }}
          >
            <i className="fa-solid fa-trash" /> Delete
          </button>
        </section>
      ));
  }
}
