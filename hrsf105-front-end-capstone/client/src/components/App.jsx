import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
    };
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      success: (data) => {
        this.setState({
          commentList: JSON.parse(data),
        });
      },
    });
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default App;
