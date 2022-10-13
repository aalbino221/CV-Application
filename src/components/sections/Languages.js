export default function Languages({ preview, info, onChange, del }) {
  switch (preview) {
    case true:
      return (
        <section className="languages">
          {info.languages.length !== 0 && (
            <div>
              <h2>{info.languagesTitle}</h2>
              <ul>
                {info.languages.map((item) => (
                  <li key={item.id}>{item.str}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      );
    default:
      return info.languages.map((item) => (
        <section className="languages">
          <input
            placeholder="Language here"
            id="language"
            value={item.str !== '' ? item.str : ''}
            onChange={(e) => {
              onChange(e, item.id, 'str');
            }}
          />
          <button
            type="button"
            id="delete"
            onClick={() => {
              del('languages', item.id);
            }}
          >
            <i className="fa-solid fa-trash" /> Delete
          </button>
        </section>
      ));
  }
}
