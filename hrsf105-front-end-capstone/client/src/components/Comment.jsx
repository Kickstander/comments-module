import React from 'react';
import moment from 'moment';

const Comment = (props) => {
  let authorSpan;
  if (props.comment.authorIsCreator) {
    authorSpan = (
      <span>
        {props.comment.author}
        <img className="creatorimage" src="../dist/CreatorLogo.png" alt="Creator Label"></img>
      </span>
    );
  } else {
    // display only author name
    authorSpan = <span>{props.comment.author}</span>;
  }
  return (
    <div className="commentBlock">
      <p className="authorName">{authorSpan}</p>
      <p className="timeago">about&nbsp;{moment(props.comment.createdAt).fromNow()}</p>
      <p className="commentBody">{props.comment.body}</p>
    </div>
  );
};

// might need two types, one for creator and one for not.
// Creator has blue stripe on left of container

export default Comment;
