import React from 'react';
import $ from 'jquery';
import List from './List';
import Post from './Post';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
    };
  }

  componentDidMount() {
    $.get('http://localhost:3001/comments', (data) => {
      this.setState({
        commentList: JSON.parse(data),
      });
    });
  }

  render() {
    return (
      <div>
        <Post />
        <List list={this.state.commentList} />
      </div>
    );
  }
}

export default App;
