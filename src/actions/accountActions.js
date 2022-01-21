import { CHECKJWT, LOGIN, LOGOUT } from "../types"

export const loginAction = (jwt,username) => ({type: LOGIN, payload:{jwt,username}});

export const logoutAction = () => ({type: LOGOUT});

export const checkJwtAction = (jwt,username) => ({type: CHECKJWT, payload:{jwt,username}});