import React, {useState, useEffect}  from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CContainer
} from '@coreui/react'
import EmployeeModal from '../../components/EmployeeModal';
import TaskModal from '../../components/TaskModal';

import Header from '../../components/containers/TheHeader';
import Footer from '../../components/containers/TheFooter';

import Table from '../../components/tables/Tables' 
import { getEmployees, deleteEmployee } from '../../api/employee'
import { getTasks, deleteTask } from '../../api/task'
const authToken = '75266956b2815dc42530a3d1b3964aa2bf474432'

const employees_table_fields = ['username', 'delete'];
const tasks_table_fields = ['title', 'description', 'deadline', 'employee', 'update', 'delete'];


const TheContent = () => {
  const [employeeModalIsShow, toggleEmployeeModal] = useState(false)
  const [taskModalIsShow, toggleTaskModal] = useState(false)
  const [taskToUpdate, setTaskToUpdate] = useState(null)
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);

  
	useEffect(() => {
    _getEmployees();
    _getTasks();
    }, [])	
   

  const _getEmployees = () => {
      getEmployees(authToken)
      .then(response => {
        setEmployees(response);
      })
      .catch(error => {
        console.log(error)
      })
  }


  const _getTasks = () => {
      getTasks(authToken)
      .then(response => {
        setTasks(response);
      })
      .catch(error => {
        console.log(error)
      })
  }
  //EMPLOYEE
  const _addNewEmployee = () => {
      _toggleEmployeeModal()
  }
  const _deleteEmploye = (employee) => {
    if(window.confirm('Do you want to delete '+employee.username)){
        deleteEmployee(authToken, employee.id)
        .then((response) => {
            _getEmployees();
            _getTasks();
        })
        .catch((error) => {
            console.log(error)
        })
      }
  } 
  const _toggleEmployeeModal = () =>{
    toggleEmployeeModal(!employeeModalIsShow)
  }

  //TASK
  const _addNewTask = () => {
      _toggleTaskModal()
  }
  const _updateTask = (task) => {
      setTaskToUpdate(task)
      _toggleTaskModal()
  }
  const _deleteTask = (task) => {
    if(window.confirm('Do you want to delete '+task.title)){
      deleteTask(authToken, task.id)
      .then(response =>  {
          _getTasks()
      })
      .catch(error=>{
          console.log('task delete request failed');
          console.log(error);
      })
    }
  } 
  const _toggleTaskModal = () =>{
    if(taskModalIsShow){
        setTaskToUpdate(null);
    }
    toggleTaskModal(!taskModalIsShow)
  }


  return (
    <div className="c-app c-default-layout">
        <div className="c-wrapper">
            <Header/>
            <div className="c-body">
                <main className="c-main">
                    <CContainer fluid>
                      {/* employees tables */}
                      <CRow>
                        <CCol>
                          <CCard>
                            <CCardHeader>
                              <CButton onClick={_addNewEmployee} color="success" className="">
                                add new employee
                              </CButton>
                            </CCardHeader>
                            <CCardBody>
                            <CDataTable
                              items={employees}
                              fields={employees_table_fields}
                              hover
                              striped
                              bordered
                              size="sm"
                              itemsPerPage={2}
                              pagination
                              scopedSlots = {{
                                'delete':
                                  (item)=>(
                                    <td>
                                        <CButton onClick={() =>_deleteEmploye(item)} color="danger" className="">delete</CButton>
                                    </td>
                                  )
                              }}
                            />
                            </CCardBody>
                          </CCard>
                        </CCol>
                      </CRow>
                       {/* employees tables */}
                      <CRow>
                        <CCol>
                          <CCard>
                            <CCardHeader>
                              <CButton onClick={_addNewTask} color="success" className="">
                                add new task
                              </CButton>
                            </CCardHeader>
                            <CCardBody>
                            <CDataTable
                              items={tasks}
                              fields={tasks_table_fields}
                              hover
                              striped
                              bordered
                              size="sm"
                              itemsPerPage={2}
                              pagination
                              scopedSlots = {{
                                'update':
                                  (item)=>(
                                    <td>
                                        <CButton onClick={() => _updateTask(item)} color="primary" className="">update</CButton>
                                    </td>
                                  ),
                                'delete':
                                  (item)=>(
                                    <td>
                                        <CButton onClick={() => _deleteTask(item)} color="danger" className="">delete</CButton>
                                    </td>
                                  )
                              }}
                            />
                            </CCardBody>
                          </CCard>
                        </CCol>
                      </CRow>      
                    </CContainer>
                { employeeModalIsShow &&(
                    <EmployeeModal 
                        toggleEmployeeModal={_toggleEmployeeModal}
                        authToken={authToken} 
                        getEmployees={_getEmployees}
                    />
                )}
                { taskModalIsShow &&(
                    <TaskModal 
                        employees={employees} 
                        authToken={authToken} 
                        taskToUpdate={taskToUpdate} 
                        getTasks={_getTasks}
                        toggleTaskModal={_toggleTaskModal}/>
                )}
                </main>
            </div>
            <Footer/>
      </div>
    </div>
  )
}

export default React.memo(TheContent)

