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
    const projectId = typeof splitURL[4] === 'number' ? splitURL[4] : 44;
    $.get(`http://54.219.134.204:8081/projects/${projectId}`, (data) => {
      this.setState({
        commentList: data
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
