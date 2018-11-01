import React from 'react';

const Comment = props => {
  return (
    <div>
      <p>{props.comment.author}</p>
      <p>{props.comment.createdAt}</p>
      <p>{props.comment.body}</p>
    </div>
  );
};

// might need two types, one for creator and one for not.
// Creator has blue stripe on left of container

export default Comment;
