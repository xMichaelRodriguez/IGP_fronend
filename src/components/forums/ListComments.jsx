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
          {commentsForum !== [] ? (
            commentsForum.map((comment, index) => (
              <ItemCommentList key={index} {...comment} />
            ))
          ) : (
            <div class='media'>
              <img src='...' class='mr-3' alt='...' />
              <div class='media-body'>
                <h5 class='mt-0'>Media heading</h5>
                <p>
                  Will you do the same for me? It's time to face the music I'm
                  no longer your muse. Heard it's beautiful, be the judge and my
                  girls gonna take a vote. I can feel a phoenix inside of me.
                  Heaven is jealous of our love, angels are crying from up
                  above. Yeah, you take me to utopia.
                </p>
              </div>
            </div>
          )}
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
