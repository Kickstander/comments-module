import React from 'react';
import styles from '../../dist/style.css';
import Reply from './Reply';

const Replies = (props) => {
  const { replies } = props;
  return (
    <div>
      {replies.map(element => <Reply reply={element} />)}
    </div>
  );
};

export default Replies;
