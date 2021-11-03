import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { FaRegClock, FaRegUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { uiRemoveError } from '../../actions/authActios';
import socketInstance from '../../helpers/Sockets';
import CommentBox from './CommentBox.jsx';
import ListComments from './ListComments.jsx';

const ForumScreenRead = () => {
  const { user } = useSelector((state) => state.userForum);

  const dispatch = useDispatch();
  const [forum, setForum] = useState({});
  const [commentOfForum, setCommentOfForum] = useState([]);
  const { foroId } = useParams();
  useEffect(() => {
    socketInstance.emit('findById', { foroId }, (data) => {
      setForum(data.forum);
    });
    return () => {
      setForum([]);
    };
  }, [foroId]);

  const handleCleanInput = () => {
    dispatch(uiRemoveError());
  };
  return (
    <div className='container-fluid py-5'>
      <div className='container p-2 text-break'>
        {forum === {} && <h3>no se encontro el foro</h3>}

        <div className='row mb-2'>
          <nav aria-label='breadcrumb' onClick={handleCleanInput}>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link to='/'>Inicio</Link>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                <Link to='/foros'> Foros</Link>
              </li>
              <li className='breadcrumb-item active ' aria-current='page'>
                {forum.theme}
              </li>
            </ol>
          </nav>
        </div>

        <p className='h3'>{forum.theme}</p>
        <p className='lead mt-5' style={{ wordBreak: 'break-word' }}>
          {forum.content}
        </p>
        <div className='row mb-2'>
          <div className='col-md-4'>
            <span className='font-weight-bolder border-bottom border-primary'>
              <FaRegUser /> {forum.user?.name}
            </span>
          </div>
          <div className='col-md-4'>
            <span className='text-muted '>
              <FaRegClock /> {moment(forum.created).calendar()}
            </span>
          </div>
        </div>
        {Object.entries(user).length === 0 ? (
          <h5 className='text-danger'>
            Si quiere participar en este foro tiene que registrarse primero
          </h5>
        ) : (
          <CommentBox
            setCommentOfForum={setCommentOfForum}
            commentOfForum={commentOfForum}
            foroId={foroId}
          />
        )}

        <ListComments
          commentOfForum={commentOfForum}
          setCommentOfForum={setCommentOfForum}
        />
      </div>
    </div>
  );
};
export default ForumScreenRead;
