import { types } from "../types/types";

const initialState = {
  stories: {
    storyArr: [],
    total_docs: null,
    total_page: null,
  },
  activeStory: null,
};

export const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.storySetActive:
      return {
        ...state,
        activeStory: action.payload,
      };

    // case types.StoryactiveStoryAddNew:
    //   return {
    //     ...state,
    //     StoryactiveStorys: [...state.StoryactiveStorys, action.payload],
    //   };

    case types.storyClearActive:
      return {
        ...state,
        activeStory: null,
      };

    case types.storyUpdated:
      return {
        ...state,
        story: {
          stories: state.stories.storyArr.map((e) =>
            e.id === action.payload.id ? action.payload : e
          ),
        },
      };

    case types.storyDeleted:
      return {
        ...state,
        stories: state.stories.storyArr.filter(
          (e) => e.id !== state.activeStory.id
        ),
        activeStory:null
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

    // case types.StoryactiveStoryLogout:
    //   return {
    //     ...initialState,
    //   };
    default:
      return state;
  }
};
