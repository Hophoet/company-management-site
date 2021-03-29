import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {isAdmin } from '../api/authentication'

const Loading = () => {
    const user = useSelector(state => {
       return  state.auth.user;
    });
    const history = useHistory();
	useEffect(() => {
        _handleRoute();
    }, [])	

    const _handleRoute = () => {
        if(user.authToken){
            _isAdmin(user.authToken)
        }
        else{
            history.push('/login')
        }
    }
    
    const _isAdmin = (authToken) =>{
        isAdmin(authToken)
        .then(response =>{
            if(response.is_admin){
                history.push('/admin')
            }
            else{
                history.push('/employee')
            }
        })
        .catch(error => {
            console.log('is admin error')
            console.log(error)
        })
    }

    return (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
    )

}


export default Loading;