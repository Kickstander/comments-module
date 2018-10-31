import React from 'react';
import $ from 'jquery';
import List from './List.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
    };
  }

  componentDidMount() {
    $.get('/comments', (data) => {
        console.log('ajax data: ', JSON.parse(data));
        this.setState({
          commentList: JSON.parse(data),
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <List list={this.state.commentList} />
      </div>
    );
  }
}

export default App;
