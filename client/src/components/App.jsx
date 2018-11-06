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
    var projectId = 44;
    $.get(`http://localhost:3001/projects/${projectId}/comments`, (data) => {
      console.log('data[0].comments in get request: ', JSON.parse(data)[0]);
      this.setState({
        commentList: JSON.parse(data)[0].comments,
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
