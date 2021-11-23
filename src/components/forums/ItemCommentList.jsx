import React from 'react';
import CommentFather from './CommentFather.jsx';

const ItemCommentList = ({ commentFather, replyComments }) => {
  return (
    <div>
      <CommentFather
        commentFather={commentFather}
        replyComments={replyComments}
      />
    </div>
  );
};
export default ItemCommentList;
