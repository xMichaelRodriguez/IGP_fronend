import { types } from '../types/types';

const initialState = {
  storyForCarousel: [],
  stories: {
    storyArr: [],
    total_docs: null,
    total_page: null,
  },
  activeStory: null,
};

export const storiesReducer = (
  state = initialState,
  action
) => {
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
        stories: {
          storyArr: state.stories.storyArr.map((e) =>
            e.id === action.payload.id ? action.payload : e
          ),
        },
      };
    case types.storyForCarouselLoaded:
      return {
        ...state,
        storyForCarousel: [...action.payload.stories],
      };

    case types.storyDeleted:
      return {
        ...state,
        stories: {
          storyArr: state.stories.storyArr.map(
            (e) => e.id !== action.payload
          ),
        },
        activeStory: null,
      };

    case types.storyLoaded:
      return {
        ...state,
        stories: {
          storyArr: [...action.payload.stories],
          total_docs: action.payload.total_docs,
          total_page: action.payload.total_page,
        },
      };

    default:
      return state;
  }
};
