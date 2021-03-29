import React, {useState, useEffect} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {Link, useHistory} from 'react-router-dom'
import {login} from '../api/authentication';
import { useStateValue } from '../redux/StateProvider';
import { useSelector, useDispatch } from 'react-redux';
import  { setUser } from '../redux/actions'

const Login = () => {
    const user = useSelector(state => {
       return  state.auth.user;
    });
    const dispatch = useDispatch();
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log(user)

    }, [])

    const _login = () => {
        console.log(user)
        if(_form_is_valid()){
            login(username, password)
            .then(response => {
                if(response.key){
                    console.log(response) 
                    dispatch(setUser({authToken:response.key}))
                    history.push('/')
                }
            })
            .catch(error => {
                console.log(error)
            })
            //history.push('/admin')
        }

    }

    const _form_is_valid = () => {
        if(username && password){
            return true;
        }
        else if(!username){
            alert('Enter your username')
            return false;
        }
        else if(!password){
            alert('Enter your password')
            return false;
        }
    }



  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    {user.name}
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput 
                        onChange={ e=> setUsername(e.target.value)} 
                        type="text" placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput 
                        onChange={ e=> setPassword(e.target.value)} 
                        type="password" placeholder="Password" autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton onClick={_login} color="primary" className="px-4">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
