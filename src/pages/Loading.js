import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

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
            history.push('/admin')
        }
        else{
            history.push('/login')
        }
    }

    return (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
    )

}


export default Loading;