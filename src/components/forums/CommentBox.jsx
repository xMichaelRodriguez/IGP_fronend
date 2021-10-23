import React from 'react'
import { useSelector } from 'react-redux'
import { socketInstance } from '../../helpers/Sockets'
import { useForm } from '../../hooks/useForm'

import validator from 'validator'
import { useDispatch } from 'react-redux'
import {
  setError,
  uiRemoveError,
} from '../../actions/authActios'
export const CommentBox = ({
  foroId,
  setCommentOfForum,
  commentOfForum,
}) => {
  const { user } = useSelector((state) => state.userForum)
  const { msgError } = useSelector((state) => state.error)
  const [formValue, handleInputChange, reset] = useForm({
    commentBox: '',
  })

  const dispatch = useDispatch()

  const { commentBox } = formValue
  const handlerCommentBox = () => {
    if (isvalid()) {
      socketInstance.emit(
        'comment-in-forum',
        { commentBox, userId: user.uid, forumId: foroId },
        (data) => {
          setCommentOfForum([
            ...commentOfForum,
            data.comment,
          ])
          reset()
        }
      )
    }
  }
  const isvalid = () => {
    if (validator.isEmpty(commentBox)) {
      dispatch(setError('Escriba un comentario!'))
      return false
    }

    dispatch(uiRemoveError())
    return true
  }
  return (
    <div className='row mt-5 mb-3'>
      <div className='col-md-12'>
        <div className='form-group needs-validation'>
          <label htmlFor='inputUserName'>
            Tu Comentario
          </label>
          <textarea
            type='text'
            className={`form-control  ${
              msgError.includes('comentario!')
                ? 'is-invalid'
                : ''
            } `}
            id='inputUserName'
            name='commentBox'
            value={commentBox}
            onChange={handleInputChange}
            rows='5'
          ></textarea>
          {msgError.includes('comentario!') && (
            <small className='invalid-feedback'>
              {msgError}
            </small>
          )}
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
