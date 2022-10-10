export default function Sidebar({ changePrev }) {
  return (
    <div>
      <section>
        <h1>INSTRUCTIONS</h1>
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
        <h1>TEMPLATES</h1>
        <div>DEFAULT</div>
        <div>FIRST JOB</div>
      </section>
      <section>
        <h1>DOWNLOAD</h1>
        <div>
          <button type="button" onClick={changePrev}>
            OK
          </button>
          PREVIEW MODE
        </div>
        <div>DOWNLOAD PDF</div>
      </section>
    </div>
  );
}
