export const SET_USER = 'SET_USER';
export const SET_IS_ADMIN = 'SET_IS_ADMIN'
export function setUser(user){
    return {
        type:SET_USER,
        user
    }
}
