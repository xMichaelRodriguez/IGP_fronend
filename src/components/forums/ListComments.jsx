import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import socketInstance from '../../helpers/Sockets';
import { startLoadingCommentsForum } from '../../actions/forumsAction';
import ItemCommentList from './ItemCommentList.jsx';

const ListComments = () => {
  const { commentsForum } = useSelector((state) => state.userForum);
  const dispatch = useDispatch();
  const { foroId } = useParams();
  useEffect(() => {
    socketInstance.emit('load-comments', foroId);

    socketInstance.on('comments-loaded', (data) => {
      dispatch(startLoadingCommentsForum(data));
    });
  }, [foroId, dispatch]);

  return (
    <div className='row mt-2 '>
      <div className='col-md-12 bg-light'>
        <ul className='list-grouplist-unstyled containerMessage'>
          {commentsForum !== []
            ? commentsForum.map((comment, index) => (
                <ItemCommentList key={index} {...comment} />
              ))
            : ''}
        </ul>
      </div>
    </div>
  );
};
ListComments.propTypes = {
  commentOfForum: PropTypes.array,
  setCommentOfForum: PropTypes.func,
};
export default ListComments;
