import React from 'react';

const Post = () => {
  const login = <strong>Log in.</strong>;
  return (
    <div>
      <p>
        Only backers can post comments.&nbsp;
        {login}
      </p>
    </div>
  );
};

export default Post;
