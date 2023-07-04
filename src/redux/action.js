export const LOGIN_INITIATE = "LOGIN_INITIATE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export function loginSuccess(user){
    return{
        type: LOGIN_SUCCESS,
        payload: user
    }
};
export function loginFailed(user){
    return{
        type: LOGIN_FAILED,
        payload: user
    }
};
export function requestLogin(user){
    return{
        type: LOGIN_INITIATE,
        payload: user
    }
};
