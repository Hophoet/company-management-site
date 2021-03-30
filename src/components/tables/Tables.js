import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton
} from '@coreui/react'


const fields = ['name', 'update', 'delete'];
const usersData = [
  {id: 18, name: 'Micheal Mercurius'},
  {id: 19, name: 'Ganesha Dubhghall'},
  {id: 20, name: 'Hiroto Šimun'},
  {id: 21, name: 'Vishnu Serghei'}
];



const Tables = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <CButton color="success" className="">
                add new employee
               </CButton>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
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
                        <CButton color="primary" className="">update</CButton>
                    </td>
                  ),
                'delete':
                  (item)=>(
                    <td>
                        <CButton color="danger" className="">delete</CButton>
                    </td>
                  )
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Tables
