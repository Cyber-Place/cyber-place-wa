import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { checkJwtAction, loginAction, logoutAction } from '../../actions/accountActions';
import { ALL_PRODUCTS } from './graphqlQM';


export const accountService = ()=>{
    
    const useLogin = ({setErrorMessage, data, setData}) =>{
        const dispatch = useDispatch();

        return useMutation(ALL_PRODUCTS,{
            onError: (error) => {
                setErrorMessage(error.graphQLErrors[0].message);
                setData({
                    ...data,
                    password : ""
                });
            },
            onCompleted: (info) => {
                if(info.login.data.accessToken){
                    window.localStorage.setItem(
                        'userToken', info.login.data.accessToken
                    )
                    dispatch(loginAction(info.login.data.accessToken));
                }
                setData({
                    username : "",
                    password : "",
                });
            }
        });;
    };

    const useLogout = () =>{
        const dispatch = useDispatch();
        return () => dispatch(logoutAction());
    }

    const useCheckJWT = () =>{
        const dispatch = useDispatch();
        return () => dispatch(checkJwtAction());
    }

    return{
        useLogin,
        useLogout,
        useCheckJWT,
    }
}