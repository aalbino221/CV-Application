/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unused-state */
import React from 'react';
import uniqid from 'uniqid';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Preview from './components/Preview';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
    this.changePreview = this.changePreview.bind(this);
    this.onChange = this.onChange.bind(this);
    this.changeEd = this.changeEd.bind(this);
    this.changeExp = this.changeExp.bind(this);
    this.addNew = this.addNew.bind(this);
    this.del = this.del.bind(this);
    this.changeSkill = this.changeSkill.bind(this);
  }

  onChange(e, field) {
    const { info } = this.state;
    this.setState({
      info: {
        ...info,
        [`${field}`]: e.target.value,
      },
    });
  }

  changeEd(e, id, field) {
    const { info } = this.state;
    const { education } = info;
    this.setState({
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

  changeExp(e, id, field) {
    const { info } = this.state;
    const { jobs } = info;
    this.setState({
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

  changeSkill(e, id, field) {
    const { info } = this.state;
    const { skills } = info;
    this.setState({
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

  changeLanguage(e, id, field) {
    const { info } = this.state;
    const { languages } = info;
    this.setState({
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

  del(type, id) {
    const { info } = this.state;
    this.setState({
      info: {
        ...info,
        [`${type}`]: info[`${type}`].filter((item) => item.id !== id),
      },
    });
  }

  addNew(type) {
    const { info } = this.state;
    const { jobs, education, skills, languages } = info;
    switch (type) {
      case 'experience':
        this.setState({
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
        this.setState({
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
        this.setState({
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
        this.setState({
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

  changePreview() {
    const { preview } = this.state;
    if (preview) this.setState({ preview: false });
    else this.setState({ preview: true });
  }

  render() {
    const { preview, info } = this.state;
    switch (preview) {
      case true:
        return (
          <div className="App">
            <Header />
            <Sidebar changePrev={this.changePreview} />
            <Preview info={info} />
            <Footer />
          </div>
        );
      default:
        return (
          <div className="App">
            <Header />
            <Sidebar changePrev={this.changePreview} />
            <Resume
              info={info}
              onChange={this.onChange}
              changeEd={this.changeEd}
              changeExp={this.changeExp}
              addNew={this.addNew}
              del={this.del}
              changeSkill={this.changeSkill}
              changeLanguage={this.changeLanguage}
            />
            <Footer />
          </div>
        );
    }
  }
}
