import React from 'react';
import moment from 'moment';
import styles from '../../dist/style.css';
import Replies from './Replies';

const Comment = (props) => {
  const { comment } = props;
  const profilePictureURL = comment.profilePicture;
  const timeAgo = moment(comment.createdAt).fromNow();
  let creatorLogo;
  let greenBarSpan;
  if (comment.authorIsCreator) {
    creatorLogo = <img src="https://i.postimg.cc/Pr8qdjjH/Creator-Logo.png" alt="creatorlogo" className={styles.creatorLogo} />;
    greenBarSpan = <span className={styles.greenbar} />;
  }
  return (
    <div>
      <div className={styles.commentBlock}>
        {greenBarSpan}
        <span>
          <div className={styles.authorPicAndTime}>
            <span>
              <img className={styles.profilePicture} src={profilePictureURL} alt="profilepic" />
            </span>
            <span>
              <p className={styles.authorName}>{comment.author}</p>
              <p className={styles.timeago}>
                about&nbsp;
                {timeAgo}
              </p>
            </span>
            <span>
              {creatorLogo}
            </span>
          </div>
          <p className={styles.commentBody}>{comment.body}</p>
        </span>
      </div>
      <Replies replies={comment.replies} />
    </div>
  );
};

// might need two types, one for creator and one for not.
// Creator has blue stripe on left of container

export default Comment;
