import React from 'react';
import Comment from './Comment.jsx';

const List = props => props.list.map(comment => <Comment comment={comment} />);

// in this component i map over the list passed down through props
// and pass each comment's info into the comment component

export default List;
