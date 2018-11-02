import React from 'react';
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
