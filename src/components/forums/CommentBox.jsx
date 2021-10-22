import React from 'react'
import { useSelector } from 'react-redux'
import { socketInstance } from '../../helpers/Sockets'
import { useForm } from '../../hooks/useForm'

export const CommentBox = ({
  foroId,
  setCommentOfForum,
  commentOfForum,
}) => {
  const { user } = useSelector((state) => state.userForum)
  const [formValue, handleInputChange, reset] = useForm({
    commentBox: '',
  })

  const { commentBox } = formValue
  const handlerCommentBox = () => {
    socketInstance.emit(
      'comment-in-forum',
      { commentBox, userId: user.uid, forumId: foroId },
      (data) => {
        setCommentOfForum([...commentOfForum, data.comment])
        reset()
      }
    )
  }
  return (
    <div className='row mt-5 mb-3'>
      <div className='col-md-12'>
        <div className='form-group'>
          <label htmlFor='inputUserName'>
            Tu Comentario
          </label>
          <textarea
            type='text'
            className='form-control'
            id='inputUserName'
            name='commentBox'
            value={commentBox}
            onChange={handleInputChange}
            rows='5'
          ></textarea>
        </div>
      </div>
      <div className='col-md-12'>
        <button
          className='btn btn-outline-primary'
          type='button'
          onClick={handlerCommentBox}
        >
          Comentar
        </button>
      </div>
    </div>
  )
}
