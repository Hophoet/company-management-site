import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
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
        console.log('loadind auth token')
        console.log(authToken)
        console.log('loading user')
        console.log(user);
        _handleRoute();
    }, [])	

    const _handleRoute = () => {
        if(authToken){
            _getAuthenticatedUser(authToken);
        }
        else{
            history.push('/login');
            console.log('not auth token')
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
            console.log('is admin error');
            console.log(error);
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
            console.log(error);
        })
    }


    return (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
    )

}


export default Loading;