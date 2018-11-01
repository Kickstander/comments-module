import React from 'react';
import moment from 'moment';

const Comment = (props) => {
  const { comment } = props;
  const profilePictureURL = comment.profilePicture;
  const timeAgo = moment(comment.createdAt).fromNow();
  let creatorLogo;
  if (comment.authorIsCreator) {
    creatorLogo = <img src="https://i.postimg.cc/Pr8qdjjH/Creator-Logo.png" alt="creatorlogo" className="creatorLogo" />;
  }
  return (
    <div className="commentBlock">
      <div className="authorPicAndTime">
        <span>
          <img className="profilepicture" src={profilePictureURL} alt="profilepic" />
        </span>
        <span>
          <p className="authorName">{comment.author}</p>
          <p className="timeago">
            about&nbsp;
            {timeAgo}
          </p>
        </span>
        <span>
          {creatorLogo}
        </span>
      </div>
      <p className="commentBody">{comment.body}</p>
    </div>
  );
};

// might need two types, one for creator and one for not.
// Creator has blue stripe on left of container

export default Comment;
