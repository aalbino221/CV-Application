export default function AddExperience({ preview, info, onChange, del }) {
  switch (preview) {
    case true:
      return (
        <section className="experience-prev">
          {info.jobs.length !== 0 && <h2>{info.experienceTitle}</h2>}
          {info.jobs.length !== 0 &&
            info.jobs.map((item) => (
              <div>
                <p>
                  <span>{item.company}</span>
                  <span> - {item.location}</span>
                </p>
                <p>
                  <span>{item.role}</span> -{' '}
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
      return info.jobs.map((item) => (
        <section className="experience" key={item.id}>
          <label htmlFor="job-position">
            Job Position
            <input
              placeholder="Your position here"
              id="job-position"
              value={item.role !== '' ? item.role : ''}
              onChange={(e) => {
                onChange(e, item.id, 'role');
              }}
            />
          </label>
          <label htmlFor="job-company">
            Company
            <input
              placeholder="Company name"
              id="job-company"
              value={item.company !== '' ? item.company : ''}
              onChange={(e) => {
                onChange(e, item.id, 'company');
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
          <label htmlFor="job-city">
            City
            <input
              placeholder="City"
              id="job-city"
              value={item.location !== '' ? item.location : ''}
              onChange={(e) => {
                onChange(e, item.id, 'location');
              }}
            />
          </label>
          <label htmlFor="job-desc" className="job-desc">
            Description
            <textarea
              placeholder="Job Description(Optional)"
              rows={3}
              id="job-desc"
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
              del('jobs', item.id);
            }}
          >
            <i className="fa-solid fa-trash" /> Delete
          </button>
        </section>
      ));
  }
}
