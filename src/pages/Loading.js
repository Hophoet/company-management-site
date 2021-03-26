import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'


const Loading = () => {
    const history = useHistory();
	useEffect(() => {
        _handleRoute();
    }, [])	

    const _handleRoute = () => {
        history.push('/login')
    }

    return (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
    )

}


export default Loading;