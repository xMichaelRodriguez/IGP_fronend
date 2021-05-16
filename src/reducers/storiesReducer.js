import { types } from "../types/types";

const initialState = {
  stories: [],
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
        stories: state.stories.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case types.storyDeleted:
      return {
        ...state,
        stories: state.stories.filter((e) => e.id !== state.activeStory.id),
        activeStory: null,
      };

    case types.storyLoaded:
      return {
        ...state,
        stories: [...action.payload],
      };

    // case types.StoryactiveStoryLogout:
    //   return {
    //     ...initialState,
    //   };
    default:
      return state;
  }
};
