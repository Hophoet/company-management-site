export const SET_USER = 'SET_USER';
export const SET_IS_ADMIN = 'SET_IS_ADMIN'
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN'
export function setUser(user){
    return {
        type:SET_USER,
        user
    }
}

export function setAuthToken(authToken){
    return {
        type:SET_AUTH_TOKEN,
        authToken
    }
}

export function setIsAdmin(isAdmin){
    return {
        type:SET_IS_ADMIN,
        isAdmin
    }
}