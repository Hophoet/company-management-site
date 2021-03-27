
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

import Header from '../../components/containers/TheHeader';
import Footer from '../../components/containers/TheFooter';



const tasks_table_fields = ['title', 'description', 'deadline', 'employee'];

const tasks_data = [
  {id: 18, title: 'Micheal Mercurius', description:'the reald value of the task is to test your knownledge in node', deadline:'12-03-2021', employee:'lay'},
  {id: 13, title: 'Micheal Mercurius', description:'the reald value of the task is to test your knownledge in node', deadline:'12-03-2021', employee:'rose'},
  {id: 1, title: 'Micheal Mercurius', description:'the reald value of the task is to test your knownledge in node', deadline:'12-03-2021', employee:'rhed'}
];

const TheContent = () => {


  //TASK

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
                                tasks
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

