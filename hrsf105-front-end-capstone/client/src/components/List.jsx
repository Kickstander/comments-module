import React from 'react';
import Comment from './Comment';

const List = props => (
  <div>
    {props.list.map(element => <Comment comment={element} />)}
  </div>
);

export default List;
