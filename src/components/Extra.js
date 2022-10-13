export default function AddExtra({ preview, info, onChange }) {
  switch (preview) {
    case true:
      return (
        <section>
          {info.extra !== '' && (
            <div>
              <h2>{info.extraTitle}</h2>
              <p>{info.extra}</p>
            </div>
          )}
        </section>
      );
    default:
      return (
        <section>
          <h2 contentEditable="true">Extra</h2>
          <textarea
            rows={3}
            placeholder="Extra here"
            value={info.extra !== '' ? info.extra : ''}
            onChange={(e) => {
              onChange(e, 'extra');
            }}
          />
        </section>
      );
  }
}
