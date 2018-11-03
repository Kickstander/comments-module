import React from 'react';
import Reply from './Reply';

const Replies = (props) => {
  const { replies } = props;
  return (
    <div>
      {replies.map((element, index) => <Reply key={index} reply={element} />)}
    </div>
  );
};

export default Replies;
