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
      this.setState({
        commentList: JSON.parse(data)[0].comments,
      });
    });
  }

  render() {
    return (
      <div className="everything">
        <Post />
        <List list={this.state.commentList} />
      </div>
    );
  }
}

export default App;
