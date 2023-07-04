import { AvTimerTwoTone } from "@mui/icons-material"
import { LOGIN_FAILED, LOGIN_INITIATE, LOGIN_SUCCESS } from "./action"

export const initialState = {
    isLoggedIn: false,
    loginLoader: false,
    userInfo: {},
    successMsg:'',
    errorMsg:'',
}

export const loginReducer = (initialState, action)=>{
    switch(action.type){
        case LOGIN_INITIATE:
        return{
            ...initialState,
            isLoggedIn: false,
            loginLoader:true,
        };
        case LOGIN_SUCCESS:
            return{
                ...initialState,
                isLoggedIn: true,
                loginLoader: false,
                successMsg: "Succeccfully Logged In"
        };
        case LOGIN_FAILED:
            return{
                ...initialState,
                isLoggedIn:false,
                loginLoader:false,
                errorMsg: "Failed to Log in, Try again!!"
        };
        default:
            return{
                ...initialState,
            }
    }
}