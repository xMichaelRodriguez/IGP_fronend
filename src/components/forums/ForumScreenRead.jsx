import moment from 'moment';
import React, { useEffect } from 'react';
import { FaRegClock, FaRegUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { uiRemoveError } from '../../actions/authActios';
import { startLoadingActiveForum } from '../../actions/forumsAction';
import socketInstance from '../../helpers/Sockets';
import CommentBox from './CommentBox.jsx';
import ListComments from './ListComments.jsx';

const ForumScreenRead = () => {
  const { user } = useSelector((state) => state.userForum);
  const { activeForum } = useSelector((state) => state.userForum);
  const dispatch = useDispatch();

  const { foroId } = useParams();
  useEffect(() => {
    socketInstance.emit('findById', { foroId }, (data) => {
      dispatch(startLoadingActiveForum(data.forum));
    });
  }, [foroId, dispatch]);

  const handleCleanInput = () => {
    dispatch(uiRemoveError());
  };
  return (
    <div className='container-fluid py-5'>
      <div className='container p-2 text-break'>
        {activeForum === null ? (
          <h3>No se Encontro EL Foro</h3>
        ) : (
          <>
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
                    {activeForum.theme}
                  </li>
                </ol>
              </nav>
            </div>

            <p className='h3'>{activeForum.theme}</p>
            <p className='lead mt-5' style={{ wordBreak: 'break-word' }}>
              {activeForum.content}
            </p>
            <div className='row mb-2'>
              <div className='col-md-4 mb-1'>
                <span className='font-weight-bolder border-bottom border-primary'>
                  <FaRegUser /> {activeForum.user?.name}
                </span>
              </div>
              <div className='col-md-4 mb-2'>
                <span className='text-muted '>
                  <FaRegClock /> {moment(activeForum.created).calendar()}
                </span>
              </div>
            </div>
            <hr />
            {Object.entries(user).length === 0 ? (
              <p className='text-primary'>
                Si quiere participar en este foro tiene que registrarse primero
              </p>
            ) : (
              <CommentBox foroId={foroId} context={'father'} />
            )}

            <ListComments />
          </>
        )}
      </div>
    </div>
  );
};
export default ForumScreenRead;
