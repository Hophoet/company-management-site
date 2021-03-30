
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

import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import Header from '../../components/containers/TheHeader';
import Footer from '../../components/containers/TheFooter';

import { getEmployeeTasks } from '../../api/task';



const tasks_table_fields = ['title', 'description', 'deadline'];


const TheContent = () => {

    const [tasks, setTasks] = useState([]);
    const history = useHistory();
    const user = useSelector(state => {
       return  state.auth.user;
    });
    const authToken = useSelector(state => {
       return  state.auth.authToken;
    });
	useEffect(() => {
      _getEmployeeTasks();
  }, [])	

    const _getEmployeeTasks = () => {
        if(authToken){
            getEmployeeTasks(authToken)
            .then(response => {
                setTasks(response);
            })
            .catch(error => {
                console.log(error);
            })
        }
        else{
            history.push('/login');
        }
    }

  return (
    <div className="c-app c-default-layout">
        <div className="c-wrapper">
            <Header user={user}/>
            <div className="c-body">
                <main className="c-main">
                    <CContainer fluid>
                       {/* employees tables */}
                      <CRow>
                        <CCol>
                          <CCard>
                            <CCardHeader>
                                tasks
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
                                'deadline':
                                  (item)=>(
                                    <td>
                                        <p>{new Date(item.deadline).toDateString()}</p>
                                    </td>
                                  )
                              }}
                            />
                            </CCardBody>
                          </CCard>
                        </CCol>
                      </CRow>      
                    </CContainer>
                </main>
            </div>
            <Footer/>
      </div>
    </div>
  )
}

export default React.memo(TheContent)

