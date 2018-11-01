import React from 'react';
import Comment from './Comment';

const List = (props) => {
  const { list } = props;
  return (
    <div className="backgroundDiv">
      {list.map(element => <Comment comment={element} />)}
    </div>
  );
};

export default List;
