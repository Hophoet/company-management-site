import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {isAdmin, getAuthenticatedUser  } from '../api/authentication'
import  {setUser } from '../redux/actions'

const Loading = () => {
    const authToken = useSelector(state => {
       return  state.auth.authToken;
    });
    const user = useSelector(state => {
       return  state.auth.user;
    });

    const dispatch = useDispatch();
    const history = useHistory();
	useEffect(() => {
        _handleRoute();
    }, [])	

    const _handleRoute = () => {
        if(authToken){
            _getAuthenticatedUser(authToken);
        }
        else{
            history.push('/login');
        }
    }
    

    const _isAdmin = (authToken) =>{
        isAdmin(authToken)
        .then(response =>{
            if(response.is_admin){
                //history.push('/admin');
            }
            else{
                //history.push('/employee');
            }
        })
        .catch(error => {
            //console.log(error);
        })
    }

    const _getAuthenticatedUser = (authToken) => {
        getAuthenticatedUser(authToken)
        .then(response => {
            dispatch(setUser(response))
            if(response.is_staff){
                history.push('/admin');
            }
            else{
                history.push('/employee');
            }
        })
        .catch(error => {
            //console.log(error);
        })
    }


    return (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
    )

}


export default Loading;