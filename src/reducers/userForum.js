import { types } from "../types/types"

const initialState = {
    user: {
        name: '', uid: ''
    },

    activeForum: null,
    forums: []
}
export const userForumReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case types.userLoginForum:
            return {
                ...state,
                ...action.payload
            }
        case types.defaultForumUser:
            return {
                ...state,
                user: {}
            }


        case types.setActiveForum:
            return {
                ...state,
                activeForum: { ...action.payload }
            }
        case types.ClearActiveForum:
            return {
                ...state,
                activeForum: null
            }

        case types.activeForumAddNew:
            return {
                ...state,
                forums: [...state.forums, action.payload]
            }

        case types.LoadForums:
            return {
                ...state,
                forums: [...action.payload]
            }

        default:
            return state
    }
}