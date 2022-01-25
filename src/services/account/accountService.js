import { useQuery, useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { checkJwtAction, loginAction, logoutAction } from '../../actions/accountActions';
import { GETUSERNAMEJWT, LOGIN, REGISTER } from './graphqlQM';


export const accountService = () => {

    const useLogin = ({ setErrorMessage, data, setData }) => {
        const dispatch = useDispatch();
        return useMutation(LOGIN, {
            onError: (error) => {
                if (error.graphQLErrors) {
                    if (error.graphQLErrors.length > 0) setErrorMessage(error.graphQLErrors[0].message);
                }
                else setErrorMessage("Error con el servidor");
                setData({
                    ...data,
                    password: ""
                });
            },
            onCompleted: (info) => {
                if (info.login.data.accessToken) {
                    window.localStorage.setItem(
                        'userToken', info.login.data.accessToken
                    );
                    dispatch(loginAction(info.login.data.accessToken, data.username));
                }
                setData({
                    username: "",
                    password: "",
                });
            }
        });;
    };

    const useLogout = () => {
        const dispatch = useDispatch();
        return () => dispatch(logoutAction());
    };

    const useCheckJWT = () => {
        const dispatch = useDispatch();
        const jwt = window.localStorage.getItem("userToken");
        const { data: usernameData } = useQuery(GETUSERNAMEJWT, {variables: { jwt }, skip: !jwt, onError:(error)=>console.log("Error CheckJWT - "+error)});
        const username = usernameData?.getusername?.data;
        return () => dispatch(checkJwtAction(jwt, username));
    };

    const useRegister = ({ setErrorMessage, setSuccessMessage, setData }) => {
        return useMutation(REGISTER, {
            onError: (error) => {
                if (error.graphQLErrors) {
                    if (error.graphQLErrors.length > 0) setErrorMessage(error.graphQLErrors[0].message);
                }
                else setErrorMessage("Error con el servidor");
                setData({
                    username: "",
                    full_name: "",
                    email: "",
                    password: "",
                    r_password: "",
                });
            },
            onCompleted: (info) => {
                setSuccessMessage(info.register.message);
                setData({
                    username: "",
                    full_name: "",
                    email: "",
                    password: "",
                    r_password: "",
                });
            }
        });;
    };

    const useGetUsername = ({ variables }) => {
        return useQuery(GETUSERNAMEJWT, {
            variables,
            onError: (error) => {
                console.log("Error GetUsername - "+error)
            }
        })
    };

    const isLoggedStorage = () =>{
        return !!window.localStorage.getItem("userToken");
    }

    return {
        useLogin,
        useLogout,
        useCheckJWT,
        useRegister,
        useGetUsername,
        isLoggedStorage,
    }
}