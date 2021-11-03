import types from '../types/types';

const initialState = {
  storyForCarousel: [],
  stories: [],
  totalDocs: null,
  totalPages: null,
  prevPage: null,
  nextPage: null,
  activeStory: null,
};

const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.storySetActive:
      return {
        ...state,
        activeStory: action.payload,
      };

    case types.storyClearActive:
      return {
        ...state,
        activeStory: null,
      };

    case types.storyUpdated:
      return {
        ...state,

        stories: state.stories.map((e) =>
          e.id === action.payload.id ? action.payload : e,
        ),
      };
    case types.storyForCarouselLoaded:
      return {
        ...state,
        storyForCarousel: [...action.payload.stories],
      };

    case types.storyDeleted:
      return {
        ...state,

        stories: state.stories.map((e) => e.id !== action.payload),

        activeStory: null,
      };

    case types.storyLoaded:
      return {
        ...state,
        stories: [...action.payload.stories],
        totalDocs: action.payload.totalDocs,
        totalPages: action.payload.totalPages,
        prevPage: action.payload.prevPage,
        nextPage: action.payload.nextPage,
      };

    default:
      return state;
  }
};

export default storiesReducer;
