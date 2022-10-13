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
        name: 'Nome',
        role: 'Ocupação',
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
            school: 'Cotil (Unicamp) ',
            degree: 'Técnico em Desenvolvimento de Sistemas',
            city: 'Limeira',
            start: '02-2022',
            end: '12-2023',
            description: '- Programação',
          },
        ],
        skillsTitle: 'Skills',
        skills: [{ id: uniqid(), str: 'Trabalhar com React' }],
      },
    };
    this.changePreview = this.changePreview.bind(this);
  }

  changePreview() {
    this.setState({ preview: true });
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
            <Resume />
            <Footer />
          </div>
        );
    }
  }
}
