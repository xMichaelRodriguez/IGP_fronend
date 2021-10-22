import { types } from "../types/types";


export const startLoginForum = (data) => {
    return (dispatch) => {
        const { name, _id: uid } = data.user

        sessionStorage.setItem('user', JSON.stringify({ name, uid }))
        dispatch(forumAddUser({ name, uid }))
    };
};



export const startLoadingForumUser = () => {
    return (dispatch) => {
        const user = sessionStorage.getItem('user') || ''
        const userParsed = JSON.parse(user)
        if (user !== '') {
            const { name, uid } = userParsed
            dispatch(forumAddUser({ name, uid }))
        } else {
            dispatch(defaultForumUser())
        }
    }
}

const forumAddUser = (user, uid) => ({
    type: types.userLoginForum,
    payload: { user, uid }
})
const defaultForumUser = () => ({
    type: types.defaultForumUser
})
