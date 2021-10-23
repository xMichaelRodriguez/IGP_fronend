import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { FaClock } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { socketInstance } from '../../helpers/Sockets'
import { CommentBox } from './CommentBox'
import { ListComments } from './ListComments'

export const ForumScreenRead = () => {
  const { user } = useSelector((state) => state.userForum)

  const [forum, setForum] = useState({})
  const [commentOfForum, setCommentOfForum] = useState([])
  const { foroId } = useParams()
  useEffect(() => {
    socketInstance.emit('findById', { foroId }, (data) => {
      setForum(data.forum)
    })
    return () => {
      setForum([])
    }
  }, [foroId])
  return (
    <div className='container-fluid py-5'>
      <div className='container p-5 bg-light'>
        {forum === {} && <h3>no se encontro el foro</h3>}
        <Link className='btn btn-link' to='/foros'>
          volver
        </Link>

        <div className='d-flex justify-content-between'>
          <p className='h3'>{forum.theme}</p>
          <span className='text-muted '>
            <FaClock /> {moment(forum.created).calendar()}
          </span>
        </div>

        <p className='lead mt-5'>{forum.content}</p>
        <ListComments
          commentOfForum={commentOfForum}
          setCommentOfForum={setCommentOfForum}
        />
        {Object.entries(user).length === 0 ? (
          <h5 className='text-danger'>
            Si quiere participar en este foro tiene que
            registrarse primero
          </h5>
        ) : (
          <CommentBox
            setCommentOfForum={setCommentOfForum}
            commentOfForum={commentOfForum}
            foroId={foroId}
          />
        )}
      </div>
    </div>
  )
}
