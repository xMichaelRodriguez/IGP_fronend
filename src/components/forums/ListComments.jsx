import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { socketInstance } from '../../helpers/Sockets'

export const ListComments = ({
  commentOfForum,
  setCommentOfForum,
}) => {
  const { foroId } = useParams()
  useEffect(() => {
    socketInstance.emit('load-comments', foroId)

    socketInstance.on('comments-loaded', (data) => {
      setCommentOfForum([...data])
    })
    return () => {}
  }, [foroId, setCommentOfForum])
  return (
    <div className='row mt-5 '>
      <div className='col-md-12'>
        <ul className='list-group containerMessage mt-5 '>
          {commentOfForum !== []
            ? commentOfForum.map((comment) => (
                <li
                  className='list-group-item p-0 mb-0'
                  key={comment._id}
                >
                  <blockquote className='blockquote  p-3'>
                    <span className='mb-0 comment__title'>
                      {comment.user.name}
                    </span>
                    <footer className='blockquote-footer text-dark'>
                      <cite title='Source Title comment__content '>
                        {comment.comment}
                      </cite>
                    </footer>
                  </blockquote>
                </li>
              ))
            : ''}
        </ul>
      </div>
    </div>
  )
}
