import { CHECKJWT, LOGIN, LOGOUT } from "../types"

export const loginAction = (jwt) => ({type: LOGIN, payload:jwt});

export const logoutAction = () => ({type: LOGOUT});

export const checkJwtAction = () => ({type: CHECKJWT});