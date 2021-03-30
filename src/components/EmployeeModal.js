import React from 'react';
import { motion } from 'framer-motion';
import '../styles/EmployeeModal.css';

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
  CRow,
  CIcon
} from '@coreui/react'

import AddAPhotoOutlined from '@material-ui/icons/AddAPhotoOutlined'
import { addEmployee } from '../api/employee';

export default class AddPictureModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            file:null,
            fileError:null,
            fileURL:'',
            employeeUsername:'',
            employeePassword:'',
            employeeSalary:0
       }
        this.employeeToUpdate = this.props.employeeToUpdate
        this.fileTypes = ['image/png', 'image/jpeg'];
        this.authToken = this.props.authToken;

    }

    _save = () => {
        if(this._formIsValid()){
            //check if it the update
            this._addNewEmployee()
        }

    }
    
    _addNewEmployee = () => {

        addEmployee(
            this.authToken, 
            this.state.employeeUsername,
            this.state.employeePassword,
            this.state.employeeSalary,
            this.state.file
        )
        .then(response =>  {
            if(response.username){
                this.props.getEmployees();
                this.props.toggleEmployeeModal();
            }
        })
        .catch(error => {
            //console.log(error);
        })


    }


    _formIsValid = () => {
        if( this.state.employeeSalary && this.state.employeePassword && this.state.employeePassword && this.state.file){
            return true
        }
        else if(!this.state.employeeUsername){
            alert('Enter the employee name');
        }
        else if(!this.state.employeePassword){
            alert('Enter the employee password');
        }
        else if(!this.state.employeeSalary){
            alert('Enter the employee salary');
        }
        else if(!this.state.file){
            alert('select the employee picture');
        }

    }

  handleClick = (e) => {
    if(e.target.classList){
        if (e.target.classList.contains('backdrop')) {
        this.props.toggleEmployeeModal();
        }
    }
  }

  handleUploadFileChange = (e) => {
     let fileSelected = e.target.files[0];
     if(fileSelected && this.fileTypes.includes(fileSelected.type)){
         this.setState({
             fileURL:URL.createObjectURL(e.target.files[0])
         })
         
         
         this.setState({file:fileSelected});
         this.setState({fileError:''});
     } 
     else{
        this.setState({file:null})
        this.setState({error:'Please select an image file(png or jpg)'})
     }
  }



  componentDidMount() {
  }

    render(){
        return (
            <motion.div onClick={this.handleClick} className="backdrop" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            >
                <motion.div  
                    initial={{ y: "-100vh" }}
                    animate={{ y: 0 }}
                    className="modalcontainer"
                >
            
                    <div className="imagecontainer">
                        <div className="employee_image_container">
                            { this.state.fileError && <div className="error">{ this.state.error }</div>}
                            { this.state.file && 
                                <img className='selectedImage' src={this.state.fileURL} />
                                }
                        </div>
                        {!this.state.file &&  
                            <form>
                                <label>
                                    <input className="fileuploadinput" type="file" onChange={this.handleUploadFileChange} />
                                    <AddAPhotoOutlined/>
                                </label>
                            </form>
                        }
                        <CForm>
                        <h1>Employee</h1>
                        <p className="text-muted">Add new employee</p>
                        <CInputGroup className="mb-3">
                            <CInputGroupPrepend>
                            <CInputGroupText>
                                {/* <CIcon name="cil-user" /> */}
                            </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput 
                                onChange={ e=> {this.setState({employeeUsername:e.target.value})}} 
                                type="text" placeholder="Username" autoComplete="username" />
                        </CInputGroup>
                        <CInputGroup className="mb-3">
                            <CInputGroupPrepend>
                            <CInputGroupText>
                                {/* <CIcon name="cil-lock-locked" /> */}
                            </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput 
                                onChange={ e=> {this.setState({employeePassword:e.target.value})}} 
                                type="password" placeholder="Password" autoComplete="new-password" />
                        </CInputGroup>
                        <CInputGroup className="mb-3">
                            <CInputGroupPrepend>
                            <CInputGroupText>
                                {/* <CIcon name="cil-lock-locked" /> */}
                            </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput 
                                onChange={ e=> {this.setState({employeeSalary:e.target.value})}} 
                                type="number" placeholder="Salart"  />
                        </CInputGroup>
                        <CButton 
                            onClick={this._save} 
                            color="primary" block>ADD</CButton>
                        </CForm>

                    </div>
                </motion.div>
            </motion.div>
        )
    }
}