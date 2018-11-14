import React from 'react';
import $ from 'jquery';
import List from './List';
import Post from './Post';
import styles from '../../dist/style.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
    };
  }

  // either project id === 44 by default or whatever you passed in from the the address bar
  componentDidMount() {
    const splitURL = window.location.href.split('/');
    const projectId = typeof splitURL[splitURL.length - 1] === 'number' ? splitURL[splitURL.length - 1] : 44;
    $.get(`http://commentsmodule-env.28xqpexbcv.us-east-2.elasticbeanstalk.com/projects/${projectId}/comments`, (data) => {
      this.setState({
        commentList: JSON.parse(data)[0].comments,
      });
    });
  } // get a url, respond with comments array (for that particular project);

  render() {
    return (
      <div className={styles.everything}>
        <div>
          <Post />
          <List list={this.state.commentList} />
        </div>
      </div>
    );
  }
}

export default App;
