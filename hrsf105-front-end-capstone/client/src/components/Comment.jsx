import React from 'react';

const Comment = (props) => {
  if (props.comment.authorIsCreator) {
    const authorSpan = 
    <span>
      {props.comment.author}
      <img className="creatorimage" src="../dist/CreatorLogo.png"></img>
    </span>;
    //display Creator logo after author name
  } else {
    //display only author name
    const authorSpan = <span>{props.comment.author}</span>;
  }
  return (
    <div class="commentBlock">
      <p>{authorSpan}</p>
      <p>{props.comment.createdAt}</p>
      <p>{props.comment.body}</p>
    </div>
  );
};

// might need two types, one for creator and one for not.
// Creator has blue stripe on left of container

export default Comment;
