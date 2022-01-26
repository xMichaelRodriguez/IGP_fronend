import types from '../types/types';

const initialState = {
  user: {
    name: '',
    uid: '',
  },

  activeForum: null,
  forums: [],
  totalDocs: null,
  totalPages: null,
  prevPage: null,
  nextPage: null,
  myForums: [],
  commentsForum: [
    {
      commentFather: [],
      replyComments: [],
    },
  ],
};
const userForumReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.userLoginForum:
      return {
        ...state,
        ...action.payload,
      };
    case types.defaultForumUser:
      return {
        ...state,
        user: {},
      };

    case types.setActiveForum:
      return {
        ...state,
        activeForum: { ...action.payload },
      };
    case types.ClearActiveForum:
      return {
        ...state,
        activeForum: null,
      };

    case types.activeForumAddNew:
      return {
        ...state,
        forums: [...state.forums, action.payload],
      };

    case types.LoadForums:
      return {
        ...state,
        forums: [...action.payload.forums],
        totalDocs: action.payload.totalDocs,
        prevPage: action.payload.prevPage,
        nextPage: action.payload.nextPage,
        totalPages: action.payload.totalPages,
      };

    case types.getMyForums:
      return {
        ...state,
        myForums: [...action.payload],
      };
    case types.deleteForum:
      return {
        ...state,
        myForums: state.myForums.filter((forum) => forum.id !== action.payload),
      };
    case types.loadingComments:
      return {
        ...state,
        commentsForum: [...action.payload],
      };
    case types.replyOneComment:
      return {
        ...state,
        commentsForum: state.commentsForum.map(
          ({ commentFather, replyComments }) => ({
            commentFather: { ...commentFather },
            replyComments: [...replyComments, action.payload.replies],
          }),
        ),
      };
    case types.addNewComment:
      return {
        ...state,
        commentsForum: [
          ...state.commentsForum,
          { commentFather: action.payload, replyComments: [] },
        ],
      };
    default:
      return state;
  }
};
export default userForumReducer;
