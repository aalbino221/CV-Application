export default function AddExperience({ preview, info }) {
  switch (preview) {
    case true:
      return (
        <section className="experience-prev">
          {info.jobs.length &&
            info.jobs.map((item) => (
              <div>
                <h2>{info.experienceTitle}</h2>
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
      return (
        <section className="experience">
          <label htmlFor="job-position">
            Job Position
            <input placeholder="Your position here" id="job-position" />
          </label>
          <label htmlFor="job-company">
            Company
            <input placeholder="Company name" id="job-company" />
          </label>
          <div className="start-end">
            <p>Start & End Date</p>
            <input type="date" id="start" />
            <input type="date" id="end" />
          </div>
          <label htmlFor="job-city">
            City
            <input placeholder="City" id="job-city" />
          </label>
          <label htmlFor="job-desc" className="job-desc">
            Description
            <textarea
              placeholder="Job Description(Optional)"
              rows={3}
              id="job-desc"
            />
          </label>
          <button type="button" id="delete">
            <i className="fa-solid fa-trash" /> Delete
          </button>
        </section>
      );
  }
}
