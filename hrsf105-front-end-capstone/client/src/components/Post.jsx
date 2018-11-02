import React from 'react';
import styles from '../../dist/style.css';

const Post = () => {
  const login = <strong>Log in.</strong>;
  return (
    <div className={styles.loginsection}>
      <p>
        Only backers can post comments.&nbsp;
        {login}
      </p>
    </div>
  );
};

export default Post;
