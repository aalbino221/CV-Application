import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: false,
      template: 1,
    };
    this.changePreview = this.changePreview.bind(this);
  }

  componentDidMount() {
    this.setState({ preview: false });
  }

  changePreview() {
    this.setState({ preview: true });
  }

  render() {
    return (
      <div>
        <Header />
        <Sidebar changePrev={this.changePreview} />
      </div>
    );
  }
}
