import { types } from "../types/types"

const initialState = {
    user: '',
    uid: ''
}
export const userForumReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case types.userLoginForum:
            return {
                ...action.payload
            }
        case types.defaultForumUser:
            return {
                ...state
            }
        default:
            return state
    }
}