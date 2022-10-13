import React from 'react';
import FormHeader from './sections/FormHeader';
import AddEducation from './sections/Education';
import AddExperience from './sections/Experience';
import AddDescription from './sections/Description';
import Skills from './sections/Skills';

export default class Resume extends React.Component {
  render() {
    return (
      <div className="main">
        <form className="resume">
          <FormHeader />
          <section className="form-body">
            <AddDescription />
            <AddField field="Experience" />
            <AddField field="Education" />
            <AddField field="Skill" />
          </section>
        </form>
      </div>
    );
  }
}

function AddField({ field }) {
  switch (field) {
    case 'Experience':
      return (
        <section>
          <h2 contentEditable="true">{field}</h2>
          <AddExperience />
          <button type="button" className="more-btn">
            <i className="fa-solid fa-square-plus" />
            <span>Add More</span>
          </button>
        </section>
      );
    case 'Education':
      return (
        <section>
          <h2 contentEditable="true">{field}</h2>
          <AddEducation />
          <button type="button" className="more-btn">
            <i className="fa-solid fa-square-plus" />
            <span>Add More</span>
          </button>
        </section>
      );
    case 'Skill':
      return (
        <section>
          <h2 contentEditable="true">{field}</h2>
          <Skills />
          <button type="button" className="more-btn">
            <i className="fa-solid fa-square-plus" />
            <span>Add More</span>
          </button>
        </section>
      );
    default:
      return (
        <section>
          <h2 contentEditable="true">{field}</h2>
          <button type="button" className="more-btn">
            <i className="fa-solid fa-square-plus" />
            <span>Add More</span>
          </button>
        </section>
      );
  }
}
