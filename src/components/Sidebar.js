export default function Sidebar({ changePrev }) {
  return (
    <div className="sidebar">
      <section>
        <h2>INSTRUCTIONS</h2>
        <ol>
          <li>Select a Template</li>
          <li>
            <p>Fill the inputs you deem necessary</p>
            <ul>
              <li>Blank fields will be ommited</li>
              <li>Titles are editable (e.g. Experience, Education)</li>
            </ul>
          </li>
          <li>Enable preview mode</li>
          <li>Download the PDF</li>
        </ol>
      </section>
      <section>
        <h2>TEMPLATES</h2>
        <div>DEFAULT</div>
        <div>FIRST JOB</div>
      </section>
      <section>
        <h2>DOWNLOAD</h2>
        <div>
          <button type="button" onClick={changePrev} id="toggle-btn">
            <i className="fa-solid fa-toggle-off" />
            PREVIEW MODE
          </button>
        </div>
        <div>
          <button type="button" id="download-btn">
            <i className="fa-solid fa-download" />
            DOWNLOAD PDF
          </button>
        </div>
      </section>
    </div>
  );
}
