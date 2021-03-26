import React, {useState}  from 'react'
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


const employees_table_fields = ['name', 'delete'];
const tasks_table_fields = ['title', 'description', 'deadline', 'employee', 'update', 'delete'];
const employees_data = [
  {id: 18, name: 'Micheal Mercurius'},
  {id: 19, name: 'Ganesha Dubhghall'},
  {id: 20, name: 'Hiroto Šimun'},
  {id: 21, name: 'Vishnu Serghei'}
];

const tasks_data = [
  {id: 18, title: 'Micheal Mercurius', description:'the reald value of the task is to test your knownledge in node', deadline:'12-03-2021', employee:'lay'},
  {id: 13, title: 'Micheal Mercurius', description:'the reald value of the task is to test your knownledge in node', deadline:'12-03-2021', employee:'rose'},
  {id: 1, title: 'Micheal Mercurius', description:'the reald value of the task is to test your knownledge in node', deadline:'12-03-2021', employee:'rhed'}
];

const TheContent = () => {
  const [employeeModalIsShow, toggleEmployeeModal] = useState(false)
  const [taskModalIsShow, toggleTaskModal] = useState(false)
  const [taskToUpdate, setTaskToUpdate] = useState(null)

  //EMPLOYEE
  const _addNewEmployee = () => {
      _toggleEmployeeModal()
  }
  const _deleteEmploye = (employee) => {
      alert('ready to delete '+employee.name)
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
      alert('ready to delete '+task.title)
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
                              items={employees_data}
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
                              items={tasks_data}
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
                    <EmployeeModal toggleEmployeeModal={_toggleEmployeeModal}/>
                )}
                { taskModalIsShow &&(
                    <TaskModal taskToUpdate={taskToUpdate} toggleTaskModal={_toggleTaskModal}/>
                )}
                </main>
            </div>
            <Footer/>
      </div>
    </div>
  )
}

export default React.memo(TheContent)

