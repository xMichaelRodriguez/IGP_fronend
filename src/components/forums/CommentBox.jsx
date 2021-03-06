import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import validator from 'validator';
import socketInstance from '../../helpers/Sockets';
import useForm from '../../hooks/useForm';
import { setError, uiRemoveError } from '../../actions/authActios';
import {
  startNewComment,
  startReplyOneComment,
} from '../../actions/forumsAction';

const CommentBox = ({ foroId, context, idReply }) => {
  const { user } = useSelector((state) => state.userForum);

  const { msgError } = useSelector((state) => state.error);
  const [formValue, handleInputChange, reset] = useForm({
    commentBox: '',
  });

  const dispatch = useDispatch();

  const { commentBox } = formValue;
  const handlerCommentBox = () => {
    if (isvalid()) {
      if (context === 'father') {
        socketInstance.emit(
          'comment-in-forum',
          { commentBox, userId: user.uid, forumId: foroId },
          (data) => {
            dispatch(startNewComment(data.comment, foroId));
            reset();
          },
        );
      } else {
        socketInstance.emit(
          'reply-comment',
          { commentBox, user: user.uid, commentId: foroId },
          (data) => {
            dispatch(startReplyOneComment(data));
            reset();
          },
        );

        reset();
      }
    }
  };
  const isvalid = () => {
    if (validator.isEmpty(commentBox)) {
      dispatch(setError('Escriba un comentario!'));
      return false;
    }

    dispatch(uiRemoveError());
    return true;
  };
  return (
    <div className='row mt-5 mb-3'>
      <div className='col-md-12'>
        <div className='form-group needs-validation'>
          <label htmlFor='inputUserName'>Tu Comentario</label>
          <textarea
            type='text'
            className={`form-control  ${
              msgError.includes('comentario!') ? 'is-invalid' : ''
            } `}
            id='inputUserName'
            name='commentBox'
            value={commentBox}
            onChange={handleInputChange}
            rows='5'
          ></textarea>
          {msgError.includes('comentario!') && (
            <small className='invalid-feedback'>{msgError}</small>
          )}
        </div>
      </div>
      <div className='col-md-12'>
        <button
          className='btn primary '
          type='button'
          onClick={handlerCommentBox}
        >
          Comentar
        </button>
      </div>
    </div>
  );
};
CommentBox.propTypes = {
  foroId: PropTypes.string,
  setCommentOfForum: PropTypes.func,
  commentOfForum: PropTypes.array,
};
export default CommentBox;
