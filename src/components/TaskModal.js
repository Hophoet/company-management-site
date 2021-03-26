import React from 'react';
import PropTypes from "prop-types";
import { motion } from 'framer-motion';
import '../styles/EmployeeModal.css';

import {
  CButton,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
} from '@coreui/react'


export default class AddPictureModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            taskTitle:'',
            taskDescription:''
       }
        this.taskToUpdate = this.props.taskToUpdate
    }

    _save = () => {
        if(this._formIsValid()){
            //check if it the update
            this._addNewTask()
        }

    }
    
    _addNewTask = () => {
        alert('ready to add the new employee')
    }

    


    _formIsValid = () => {
        if(this.state.taskTitle && this.state.taskDescription && this.state.taskEmployee){
            return true
        }
        else if(!this.state.taskTitle){
            alert('Enter the task title');
        }
        else if(!this.state.taskDescription){
            alert('Enter the task description');
        }
        else if(!this.state.taskEmployee){
            alert('select the task employee');
        }

    }

  handleClick = (e) => {
    if(e.target.classList){
        if (e.target.classList.contains('backdrop')) {
        this.props.toggleTaskModal();
        }
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
                        <CForm>
                        <h1>Task</h1>
                        <p className="text-muted">{(this.taskToUpdate)?'Update task':'Add new task'}</p>
                        <CInputGroup className="mb-3">
                            <CInputGroupPrepend>
                            <CInputGroupText>
                                {/* <CIcon name="cil-user" /> */}
                            </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput 
                                value={(this.taskToUpdate && this.taskToUpdate.name)?this.taskToUpdate.name:''}
                                onChange={ e=> {this.setState({taskTitle:e.target.value})}} 
                                type="text" placeholder="Title" autoComplete="username" />
                        </CInputGroup>
                        <CInputGroup className="mb-3">
                            <CInputGroupPrepend>
                            <CInputGroupText>
                                {/* <CIcon name="cil-lock-locked" /> */}
                            </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput 
                                value={(this.taskToUpdate && this.taskToUpdate.description)?this.taskToUpdate.description:''}
                                onChange={ e=> {this.setState({taskDescription:e.target.value})}} 
                                type="text" placeholder="Description" autoComplete="new-password" />
                        </CInputGroup>
                        <CInputGroup className="mb-3">
                            <CInputGroupPrepend>
                            <CInputGroupText>
                                {/* <CIcon name="cil-lock-locked" /> */}
                            </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput 
                                value={(this.taskToUpdate && this.taskToUpdate.employee)?this.taskToUpdate.employee:''}
                                onChange={ e=> {this.setState({taskEmployee:e.target.value})}} 
                                type="text" placeholder="Employee" autoComplete="new-password" />
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