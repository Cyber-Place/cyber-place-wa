import { CHECKJWT, LOGIN, LOGOUT } from "../types";


const initialState = {
    jwt: null,
    isLogged: false,
    username: null
};
export default function accountReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN: {
            return {
                jwt: action.payload.jwt,
                username: action.payload.username,
                isLogged: true,
            };
        }

        case LOGOUT: {
            const userToken = window.localStorage.getItem("userToken");
            if (userToken) window.localStorage.removeItem("userToken");
            return initialState;
        }
        case CHECKJWT: {
            if (action.payload.username && action.payload.username) {
                return {
                    jwt: action.payload.jwt,
                    username: action.payload.username,
                    isLogged: true,
                };
            }
            return initialState;
        }
        default:
            return state;
    }
}