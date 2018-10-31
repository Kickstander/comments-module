import React from 'react';
import $ from 'jquery';
import List from './List.jsx';
import Post from './Post.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
    };
  }

  componentDidMount() {
    $.get('/comments', (data) => {
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
