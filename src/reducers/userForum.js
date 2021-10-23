import { types } from "../types/types"

const initialState = {
    user: {
        name: '', uid: ''
    },

    activeForum: null,
    forums: [],
    myForums: []
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


        case types.getMyForums:
            return {
                ...state,
                myForums: [...action.payload]
            }
        case types.deleteForum:

            return {
                ...state,
                myForums: state.myForums.filter(forum => forum._id !== action.payload)
            }
        default:
            return state
    }
}