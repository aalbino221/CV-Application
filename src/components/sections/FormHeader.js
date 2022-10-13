export default function FormHeader({ preview, info, onChange }) {
  switch (preview) {
    case true:
      return (
        <section className="form-header">
          <div>
            {info.photo !== '' && (
              <div className="photo">
                <i className="fa-solid fa-user" />
              </div>
            )}
          </div>
          <div>
            <h1>{info.name}</h1>
            <p>{info.role}</p>
          </div>
          <div>
            {info.location !== '' && (
              <div>
                <i className="fa-sharp fa-solid fa-location-dot" />
                <p>{info.location}</p>
              </div>
            )}
            {info.phone !== '' && (
              <div>
                <i className="fa-sharp fa-solid fa-phone" />
                <p>{info.phone}</p>
              </div>
            )}
            {info.email !== '' && (
              <div>
                <i className="fa-solid fa-envelope" />
                <p>{info.email}</p>
              </div>
            )}
            {info.linkedin !== '' && (
              <div>
                <i className="fa-brands fa-linkedin" />
                <p>{info.linkedin}</p>
              </div>
            )}
            {info.github !== '' && (
              <div>
                <i className="fa-brands fa-github" />
                <p>{info.github}</p>
              </div>
            )}
          </div>
        </section>
      );
    default:
      return (
        <section className="form-header">
          <div className="photo">
            <i className="fa-solid fa-user" />
          </div>
          <div>
            <h1>
              <input
                placeholder="Name"
                value={info.name !== '' ? info.name : ''}
                onChange={(e) => {
                  onChange(e, 'name');
                }}
              />
            </h1>
            <input
              placeholder="Role"
              value={info.role !== '' ? info.role : ''}
              onChange={(e) => {
                onChange(e, 'role');
              }}
            />
          </div>
          <div>
            <div>
              <i className="fa-sharp fa-solid fa-location-dot" />
              <input
                placeholder="Location"
                value={info.location !== '' ? info.location : ''}
                onChange={(e) => {
                  onChange(e, 'location');
                }}
              />
            </div>
            <div>
              <i className="fa-sharp fa-solid fa-phone" />
              <input
                placeholder="Phone"
                value={info.phone !== '' ? info.phone : ''}
                onChange={(e) => {
                  onChange(e, 'phone');
                }}
              />
            </div>
            <div>
              <i className="fa-solid fa-envelope" />
              <input
                placeholder="Email"
                value={info.email !== '' ? info.email : ''}
                onChange={(e) => {
                  onChange(e, 'email');
                }}
              />
            </div>
            <div>
              <i className="fa-brands fa-linkedin" />
              <input
                placeholder="Linkedin"
                value={info.linkedin !== '' ? info.linkedin : ''}
                onChange={(e) => {
                  onChange(e, 'linkedin');
                }}
              />
            </div>
            <div>
              <i className="fa-brands fa-github" />
              <input
                placeholder="Github"
                value={info.github !== '' ? info.github : ''}
                onChange={(e) => {
                  onChange(e, 'github');
                }}
              />
            </div>
          </div>
        </section>
      );
  }
}
