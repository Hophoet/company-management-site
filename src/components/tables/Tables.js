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


const fields = ['name', 'actions'];
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
              Employees
            </CCardHeader>
            <CButton color="success" className="">add new employee</CButton>
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
                'actions':
                  (item)=>(
                    <td>
                        <CButton color="primary" className="">update</CButton>
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
