export default function Skills({ preview, info }) {
  switch (preview) {
    case true:
      return (
        <section className="skills">
          {info.skills.length !== 0 && (
            <div>
              <h2>{info.skillsTitle}</h2>
              <ul>
                {info.skills.map((item) => (
                  <li key={item.id}>{item.str}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      );
    default:
      return (
        <section className="skills">
          <input placeholder="Skill here" id="skill" />
        </section>
      );
  }
}
