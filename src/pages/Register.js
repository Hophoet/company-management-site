import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
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

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const _signup = () => {
    if(_form_is_valid()){
      alert('ready to signup');
    }
  }
  const _form_is_valid = () => {
    if(username && password && passwordConfirmation){
        if(password == passwordConfirmation){
          return true;
        }
        else{
          alert("password don't match")
          return false;
        }
    }
    else if(!username){
      alert('Enter your username');
      return false;
    }
    else if(!password){
      alert('Enter your password');
      return false;
    }
    else if(!passwordConfirmation){
      alert('Enter your password confirmation');
      return false;
    }
  }


  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
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
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                      onChange={ e=> setPassword(e.target.value)} 
                      type="password" placeholder="Password" autoComplete="new-password" />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                      onChange={ e=> setPasswordConfirmation(e.target.value)} 
                      type="password" placeholder="Repeat password" autoComplete="new-password" />
                  </CInputGroup>
                  <CButton 
                    onClick={_signup} 
                    color="primary" block>Create Account</CButton>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <Link to="/login">
                      <CButton color='default' block><span>login</span></CButton>
                    </Link>
                  </CCol>
                  <CCol xs="12" sm="6">
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
