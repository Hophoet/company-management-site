import React from 'react';
import PropTypes from "prop-types";
import { motion } from 'framer-motion';
import '../styles/EmployeeModal.css';

import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
            selectedEmployee:'',
            taskTitle:(this.props.taskToUpdate && this.props.taskToUpdate.title)?this.props.taskToUpdate.title:'',
            taskDeadline:( this.props.taskToUpdate && this.props.taskToUpdate.deadline)?this.props.taskToUpdate.deadline:'',
            taskDescription:( this.props.taskToUpdate && this.props.taskToUpdate.description)?this.props.taskToUpdate.description:'',
            taskEmployee:( this.props.taskToUpdate && this.props.taskToUpdate.employee)?this.props.taskToUpdate.employee:''
       }
        this.taskToUpdate = this.props.taskToUpdate
    }

    _save = () => {
        if(this._formIsValid()){
            //check if it the update
            if(this.taskToUpdate){
                this._updateTask()
            }
            else{
                this._addNewTask()
            }
        }

    }
    
    _addNewTask = () => {
        alert('ready to add the new employee')
    }

    _updateTask = () => {
        alert('ready to update the task')
    }

    


    _formIsValid = () => {
        if(this.state.taskTitle && this.state.taskDeadline && this.state.taskDescription && this.state.taskEmployee){
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
        else if(!this.state.taskDealine){
            alert('select the task dealine');
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
    selectedEmployeeChange = (event) => {
        console.log(event.target.value);
        this.setState({selectedEmployee:event.target.value});
    }

    render(){
        const employees = [{id:'kdj34', name:'ali'}, {id:"lsdfj43", name:"gray"}]
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
                                value={this.state.taskTitle}
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
                                value={this.state.taskDescription}
                                onChange={ e=> {this.setState({taskDescription:e.target.value})}} 
                                type="text" placeholder="Description"/>
                        </CInputGroup>
                        <CInputGroup className="mb-3">
                            <CInputGroupPrepend>
                            <CInputGroupText>
                                {/* <CIcon name="cil-lock-locked" /> */}
                            </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput 
                                value={this.state.taskDeadline}
                                onChange={ e=> {this.setState({taskDeadline:e.target.value})}} 
                                type="text" placeholder="Deadline" />
                        </CInputGroup>
                        <CInputGroup className="mb-3">
                            <CInputGroupPrepend>
                            <CInputGroupText>
                                {/* <CIcon name="cil-lock-locked" /> */}
                            </CInputGroupText>
                            </CInputGroupPrepend>
                            <CInput 
                                value={this.state.taskEmployee}
                                onChange={ e=> {this.setState({taskEmployee:e.target.value})}} 
                                type="text" placeholder="Employee" autoComplete="new-password" />
                        </CInputGroup>

                    <FormControl className="employeeSelectForm">
                        <InputLabel id="demo-simple-select-label">employee</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.selectedEmployee}
                        onChange={this.selectedEmployeeChange}
                        >
                        {employees && employees.map(employee => (
                            <MenuItem name={employee.name} value={employee.id}>{employee.name}</MenuItem>
                        ))
                        }
                        </Select>
                    </FormControl>

                        <CButton 
                            onClick={this._save} 
                            color="primary" block>{(this.taskToUpdate)?'UPDATE':'ADD'}</CButton>
                        </CForm>

                    </div>
                </motion.div>
            </motion.div>
        )
    }
}