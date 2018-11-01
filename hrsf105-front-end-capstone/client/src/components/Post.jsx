import React from 'react';

const Post = () => {
  const login = <strong>Log in.</strong>;
  return (
    <div>
      <p id="loginsection">
        Only backers can post comments.&nbsp;
        {login}
      </p>
    </div>
  );
};

export default Post;
