import React from 'react';
import FormHeader from './sections/FormHeader';
import AddEducation from './sections/Education';
import AddExperience from './sections/Experience';
import AddDescription from './sections/Description';
import Skills from './sections/Skills';
import Languages from './sections/Languages';
import AddExtra from './Extra';

export default function Preview({ info }) {
  return (
    <div className="main">
      <div className="resume">
        <FormHeader preview info={info} />
        <section className="form-body">
          <section>
            <AddDescription preview info={info} />
          </section>
          <section>
            <AddExperience preview info={info} />
          </section>
          <section>
            <AddEducation preview info={info} />
          </section>
          <section>
            <Skills preview info={info} />
          </section>
          <section>
            <Languages preview info={info} />
          </section>
          <AddExtra preview info={info} />
        </section>
      </div>
    </div>
  );
}
