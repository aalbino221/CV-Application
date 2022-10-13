export default function FormHeader({ preview, info }) {
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
            <h1 contentEditable="true">Name</h1>
            <p contentEditable="true">Role</p>
          </div>
          <div>
            <div>
              <i className="fa-sharp fa-solid fa-location-dot" />
              <input placeholder="Location" />
            </div>
            <div>
              <i className="fa-sharp fa-solid fa-phone" />
              <input placeholder="Phone" />
            </div>
            <div>
              <i className="fa-solid fa-envelope" />
              <input placeholder="Email" />
            </div>
            <div>
              <i className="fa-brands fa-linkedin" />
              <input placeholder="Linkedin" />
            </div>
            <div>
              <i className="fa-brands fa-github" />
              <input placeholder="Github" />
            </div>
          </div>
        </section>
      );
  }
}
