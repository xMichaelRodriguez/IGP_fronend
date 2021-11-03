import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { startForumDelete } from '../../actions/authActios';
import socketInstance from '../../helpers/Sockets';

const ListComments = ({ commentOfForum, setCommentOfForum }) => {
  const dispatch = useDispatch();
  const { foroId } = useParams();
  const { uid } = useSelector((state) => state.auth);
  useEffect(() => {
    socketInstance.emit('load-comments', foroId);

    socketInstance.on('comments-loaded', (data) => {
      setCommentOfForum([...data]);
    });
    return () => {
      setCommentOfForum([]);
    };
  }, [foroId, setCommentOfForum]);

  const handleDeleteComment = (id) => {
    dispatch(startForumDelete(id, foroId));
  };
  return (
    <div className='row mt-5 '>
      <div className='col-md-12'>
        <ul className='list-group containerMessage mt-5 '>
          {commentOfForum !== []
            ? commentOfForum.map((comment) => (
                <li className='list-group-item p-0 mb-0' key={comment._}>
                  <blockquote className='blockquote  p-3'>
                    <div className='row'>
                      <div className='col-md-8 mb-2'>
                        <span className='mb-0 comment__title'>
                          {comment.user.name}
                        </span>
                        <footer className='blockquote-footer text-dark'>
                          <cite title='Source Title comment__content '>
                            {comment.comment}
                          </cite>
                        </footer>
                      </div>
                      {uid ? (
                        <div className='col-md-4'>
                          <button
                            className='btn btn-outline-danger'
                            /* eslint no-underscore-dangle:0 */
                            onClick={() => handleDeleteComment(comment._id)}
                            type='button'
                          >
                            <FaTrash /> Eliminar
                          </button>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </blockquote>
                </li>
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
