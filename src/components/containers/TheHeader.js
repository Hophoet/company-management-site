import React,{useEffect} from 'react'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'
import  {setUser, setAuthToken } from '../../redux/actions'

const TheHeader = ({user}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const _logout = () => {
        if(window.confirm('Do you want to logout ?')){
            dispatch(setUser({}));
            dispatch(setUser(null));
            history.push('/login');
        }
    }

    

  return (
    <CHeader withSubheader>
          {/* <CToggler
            inHeader
            className="ml-md-3 d-lg-none"
            onClick={() => {}}
          />
          <CToggler
            inHeader
            className="ml-3 d-md-down-none"
            onClick={() => {}}
          /> */}
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo"/>
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
      </CHeaderNav>

      <CHeaderNav className="px-3">

        <CHeaderNavItem  className="px-3">
          <span>{user && user.is_staff?'Administrator':'Employee'}  {user && user.username?user.username:''} </span>
          <button onClick={_logout} className='btn btn-danger' >logout</button>
        </CHeaderNavItem>
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
        />
          <div className="d-md-down-none mfe-2 c-subheader-nav">
          </div>
      </CSubheader>
    </CHeader>
  )
}

export default TheHeader
