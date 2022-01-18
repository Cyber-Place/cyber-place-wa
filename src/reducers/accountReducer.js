import { CHECKJWT, LOGIN, LOGOUT } from "../types";


const initialState = {
    jwt:null,
    isLogged:false
};
export default function accountReducer(state = initialState, action){
    switch (action.type) {
        case LOGIN:{
            return {
                ...state,
                jwt:action.payload,
                isLogged: true,
            };
        }
            
        case LOGOUT:{
            const userToken = window.localStorage.getItem("userToken");
            if(userToken)window.localStorage.removeItem("userToken");
            return initialState;
        }
        case CHECKJWT:{
            const userToken = window.localStorage.getItem("userToken");
            if(userToken){
                return {
                    jwt:userToken,
                    isLogged: true,
                }
            }
            return initialState;
        }
        default:
            return state;
    }
}