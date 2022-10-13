import React from 'react';
import FormHeader from './sections/FormHeader';
import AddEducation from './sections/Education';
import AddExperience from './sections/Experience';
import AddDescription from './sections/Description';
import Skills from './sections/Skills';
import Languages from './sections/Languages';
import AddExtra from './Extra';

export default function Resume({
  info,
  onChange,
  changeEd,
  changeExp,
  addNew,
  del,
  changeSkill,
  changeLanguage,
}) {
  return (
    <div className="main">
      <form className="resume">
        <FormHeader info={info} onChange={onChange} />
        <section className="form-body">
          <AddDescription info={info} onChange={onChange} />
          <AddField
            info={info}
            onChange={changeExp}
            field="Experience"
            addNew={addNew}
            del={del}
          />
          <AddField
            info={info}
            onChange={changeEd}
            field="Education"
            addNew={addNew}
            del={del}
          />
          <AddField
            info={info}
            onChange={changeSkill}
            field="Skill"
            addNew={addNew}
            del={del}
          />
          <AddField
            info={info}
            onChange={changeLanguage}
            field="Language"
            addNew={addNew}
            del={del}
          />
          <AddExtra info={info} onChange={onChange} />
        </section>
      </form>
    </div>
  );
}

function AddField({ field, info, onChange, addNew, del }) {
  switch (field) {
    case 'Experience':
      return (
        <section>
          <h2 contentEditable="true">{field}</h2>
          <AddExperience info={info} onChange={onChange} del={del} />
          <button
            type="button"
            className="more-btn"
            onClick={() => {
              addNew('experience');
            }}
          >
            <i className="fa-solid fa-square-plus" />
            <span>Add More</span>
          </button>
        </section>
      );
    case 'Education':
      return (
        <section>
          <h2 contentEditable="true">{field}</h2>
          <AddEducation info={info} onChange={onChange} del={del} />
          <button
            type="button"
            className="more-btn"
            onClick={() => {
              addNew('education');
            }}
          >
            <i className="fa-solid fa-square-plus" />
            <span>Add More</span>
          </button>
        </section>
      );
    case 'Skill':
      return (
        <section>
          <h2 contentEditable="true">{field}</h2>
          <Skills info={info} onChange={onChange} del={del} />
          <button
            type="button"
            className="more-btn"
            onClick={() => {
              addNew('skill');
            }}
          >
            <i className="fa-solid fa-square-plus" />
            <span>Add More</span>
          </button>
        </section>
      );
    case 'Language':
      return (
        <section>
          <h2 contentEditable="true">{field}</h2>
          <Languages info={info} onChange={onChange} del={del} />
          <button
            type="button"
            className="more-btn"
            onClick={() => {
              addNew('language');
            }}
          >
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
