import Swal from 'sweetalert2';
import socketInstance from '../helpers/Sockets';
import types from '../types/types';
import { uiCloseModal } from './uiActions';

export const startLoginForum = (data) => {
  return (dispatch) => {
    if (data.user === null) {
      Swal.fire({
        title: 'Error',
        text: data.msg,
        icon: 'error',
      });
    } else {
      const { name, _id: uid } = data.user;

      sessionStorage.setItem('user', JSON.stringify({ name, uid }));
      dispatch(forumAddUser({ name, uid }));
    }
  };
};

export const startLoadingForumUser = () => {
  return (dispatch) => {
    const user = sessionStorage.getItem('user') || '';
    if (user !== '') {
      const userParsed = JSON.parse(user);
      const { name, uid } = userParsed;
      dispatch(forumAddUser({ name, uid }));
    } else {
      dispatch(defaultForumUser());
    }
  };
};

const forumAddUser = (user, uid) => ({
  type: types.userLoginForum,
  payload: { user, uid },
});
const defaultForumUser = () => ({
  type: types.defaultForumUser,
});

export const StartActiveForum = (forum) => {
  return (dispatch, getstate) => {
    const { user } = getstate().userForum;

    socketInstance.emit('create-forums', { forum, uid: user.uid }, (data) => {
      if (data.forum === null) {
        Swal.fire({
          title: 'Error',
          text: data.msg,
          icon: 'error',
        });
      } else {
        Swal.fire({
          title: 'Crear foro',
          text: data.msg,
          icon: 'success',
        });

        dispatch(updateForums(data.forum));
        dispatch(clearForum());
        dispatch(startLoadingMyForums());
        dispatch(uiCloseModal());
      }
    });
  };
};
const clearForum = () => ({
  type: types.ClearActiveForum,
});
const updateForums = (forumData) => ({
  type: types.activeForumAddNew,
  payload: forumData,
});
export const setActiveForum = () => ({
  type: types.setActiveForum,
  payload: { theme: '', content: '' },
});

export const startLoadingForums = ({ page = 1 }) => {
  return (dispatch) => {
    socketInstance.emit('loading-forums', page);
    socketInstance.on('loaded-forums', (data) => {
      dispatch(setForums(data));
    });
  };
};

const setForums = (forums) => ({
  type: types.LoadForums,
  payload: forums,
});
export const startLoadingMyForums = () => {
  return (dispatch, getState) => {
    const { user } = getState().userForum;
    socketInstance.emit('load-my-forums', user.uid);

    socketInstance.on('loaded-my-forums', (data) => {
      dispatch(setMyForums(data.forums));
    });
  };
};

const setMyForums = (forums) => ({
  type: types.getMyForums,
  payload: forums,
});

export const startDeleteForum = (forumId) => {
  return (dispatch) => {
    Swal.fire({
      title: 'Esta seguro de Eliminarlo?',
      text: 'No podra revertir esto!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#8f77f2',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        socketInstance.emit('delete-my-forum', { forumId }, (data) => {
          if (!data.msg.includes('Foro Eliminado')) {
            Swal.fire({
              title: 'Borrar Foro',
              text: data.msg,
              icon: 'error',
            });
          }
          dispatch(deletedForum(forumId));
          Swal.fire({
            title: 'Eliminado!',
            text: 'Foro eliminado',
            icon: 'success',
          });
          dispatch(startLoadingForums({}));
        });
      }
    });
  };
};

const deletedForum = (id) => ({
  type: types.deleteForum,
  payload: id,
});

export const startLoadingActiveForum = (forum) => {
  return (dispatch) => {
    dispatch(loadedActiveForum(forum));
  };
};

const loadedActiveForum = (forum) => ({
  type: types.setActiveForum,
  payload: forum,
});

export const startLoadingCommentsForum = (comments) => ({
  type: types.loadingComments,
  payload: [...comments],
});

export const startReplyOneComment = (data) => {
  return async (dispatch) => {
    dispatch(replyOneComment(data));
  };
};

const replyOneComment = (comment) => ({
  type: types.replyOneComment,
  payload: comment,
});

export const startNewComment = (comment, foroId) => {
  return (dispatch) => {
    dispatch(addNewComment(comment, foroId));
  };
};
const addNewComment = (comment, foroId) => ({
  type: types.addNewComment,
  payload: comment,
});
