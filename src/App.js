/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unused-state */
import React, { useState } from 'react';
import uniqid from 'uniqid';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Preview from './components/Preview';

export default function App() {
  const [resume, setResume] = useState({
    preview: false,
    // template: 1,
    info: {
      photo: 'as',
      name: 'André Luiz',
      role: 'Estudante',
      location: 'Paulínia, SP',
      phone: '(19)98870-4489',
      email: 'aalbino221@gmail.com',
      linkedin: 'andreluiz',
      github: 'aalbino221',
      descriptionTitle: 'Description',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quis cupiditate tempore asperiores voluptatibus unde eligendi accusantium animi ipsum, error atque odio. Ex laudantium corrupti blanditiis reprehenderit voluptatem, voluptates accusamus, mollitia numquam autem a, itaque ipsum voluptatum doloremque. Similique, nobis?',
      experienceTitle: 'Experience',
      jobs: [
        {
          id: uniqid(),
          company: 'Vulcano',
          location: 'Paulínia,SP',
          role: 'Estagiário',
          start: '05-2019',
          end: '07-2021',
          description:
            '- Buscar amostras, fazer certificados nos computadores e analisar amostras',
        },
      ],
      educationTitle: 'Education',
      education: [
        {
          id: uniqid(),
          school: 'Cotil (Unicamp) ',
          degree: 'Técnico em Desenvolvimento de Sistemas',
          city: 'Limeira',
          start: '02-2022',
          end: '12-2023',
          description: '- Programação',
        },
        {
          id: uniqid() + 1,
          school: 'ETEP - Escola Técnica de Paulínia ',
          degree: 'Técnico em Química',
          city: 'Paulinia',
          start: '02-2015',
          end: '12-2017',
          description: '- Quimica',
        },
      ],
      skillsTitle: 'Skills',
      skills: [{ id: uniqid(), str: 'Trabalhar com React' }],
      languagesTitle: 'Languages',
      languages: [{ id: uniqid(), str: 'Inglês: Avançado' }],
      extraTitle: 'Extra',
      extra: 'Curso Odin Project',
    },
  });

  function onChange(e, field) {
    const { info } = resume;
    setResume({
      info: {
        ...info,
        [`${field}`]: e.target.value,
      },
    });
  }

  function changeEd(e, id, field) {
    const { info } = resume;
    const { education } = info;
    setResume({
      info: {
        ...info,
        education: education.map((item) => {
          if (item.id === id) {
            item[`${field}`] = e.target.value;
          }
          return item;
        }),
      },
    });
  }

  function changeExp(e, id, field) {
    const { info } = resume;
    const { jobs } = info;
    setResume({
      info: {
        ...info,
        jobs: jobs.map((item) => {
          if (item.id === id) {
            item[`${field}`] = e.target.value;
          }
          return item;
        }),
      },
    });
  }

  function changeSkill(e, id, field) {
    const { info } = resume;
    const { skills } = info;
    setResume({
      info: {
        ...info,
        skills: skills.map((item) => {
          if (item.id === id) {
            item[`${field}`] = e.target.value;
          }
          return item;
        }),
      },
    });
  }

  function changeLanguage(e, id, field) {
    const { info } = resume;
    const { languages } = info;
    setResume({
      info: {
        ...info,
        languages: languages.map((item) => {
          if (item.id === id) {
            item[`${field}`] = e.target.value;
          }
          return item;
        }),
      },
    });
  }

  function del(type, id) {
    const { info } = resume;
    setResume({
      info: {
        ...info,
        [`${type}`]: info[`${type}`].filter((item) => item.id !== id),
      },
    });
  }

  function addNew(type) {
    const { info } = resume;
    const { jobs, education, skills, languages } = info;
    switch (type) {
      case 'experience':
        setResume({
          info: {
            ...info,
            jobs: [
              ...jobs,
              {
                id: uniqid(),
                company: '',
                location: '',
                role: '',
                start: '',
                end: '',
                description: '',
              },
            ],
          },
        });
        break;
      case 'education':
        setResume({
          info: {
            ...info,
            education: [
              ...education,
              {
                id: uniqid(),
                school: '',
                degree: '',
                city: '',
                start: '',
                end: '',
                description: '',
              },
            ],
          },
        });
        break;
      case 'skill':
        setResume({
          info: {
            ...info,
            skills: [
              ...skills,
              {
                id: uniqid(),
                str: '',
              },
            ],
          },
        });
        break;
      case 'language':
        setResume({
          info: {
            ...info,
            languages: [
              ...languages,
              {
                id: uniqid(),
                str: '',
              },
            ],
          },
        });
        break;
      default:
        break;
    }
  }

  function changePreview() {
    const { preview } = resume;
    if (preview) setResume({ preview: false });
    else setResume({ preview: true });
  }

  const { preview, info } = resume;

  switch (preview) {
    case true:
      return (
        <div className="App">
          <Header />
          <Sidebar changePrev={() => changePreview} />
          <Preview info={info} />
          <Footer />
        </div>
      );
    default:
      return (
        <div className="App">
          <Header />
          <Sidebar changePrev={() => changePreview} />
          <Resume
            info={info}
            onChange={() => onChange}
            changeEd={() => changeEd}
            changeExp={() => changeExp}
            addNew={() => addNew}
            del={() => del}
            changeSkill={() => changeSkill}
            changeLanguage={() => changeLanguage}
          />
          <Footer />
        </div>
      );
  }
}
